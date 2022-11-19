// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {IERC20} from '../../dependencies/openzeppelin/contracts/IERC20.sol';
import {SafeERC20} from '../../dependencies/openzeppelin/contracts/SafeERC20.sol';
import {ILendingPool} from '../../interfaces/ILendingPool.sol';
import {WadRayMath} from '../libraries/math/WadRayMath.sol';
import {IAToken} from '../../interfaces/IAToken.sol';
import {Errors} from '../libraries/helpers/Errors.sol';
import {AToken} from './AToken.sol';
import {FeeBase} from './base/FeeBase.sol';

import {ICurveGauge, ICurveGaugeMinter} from '../../interfaces/ICurveGauge.sol';
import {IAaveIncentivesController} from '../../interfaces/IAaveIncentivesController.sol';

/**
 * @title Aave ERC20 AToken
 * @dev Implementation of the interest bearing token for the Aave protocol
 * @author Aave
 */
contract ATokenCurve is AToken, FeeBase {
  using SafeERC20 for IERC20;
  using WadRayMath for uint256;

  ICurveGauge public gauge;
  ICurveGaugeMinter public minter;
  IERC20 public curve;

  uint256 private MAX_INT = 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff;

  /**
   * @dev Initializes the aToken
   * @param pool The address of the lending pool where this aToken will be used
   * @param treasury The address of the Aave treasury, receiving the fees on this aToken
   * @param underlyingAsset The address of the underlying asset of this aToken (E.g. WETH for aWETH)
   * @param incentivesController The smart contract managing potential incentives distribution
   * @param aTokenDecimals The decimals of the aToken, same as the underlying asset's
   * @param aTokenName The name of the aToken
   * @param aTokenSymbol The symbol of the aToken
   */
  function initialize(
    ILendingPool pool,
    address treasury,
    address underlyingAsset,
    IAaveIncentivesController incentivesController,
    uint8 aTokenDecimals,
    string calldata aTokenName,
    string calldata aTokenSymbol,
    bytes calldata params
  ) external virtual override initializer {
    uint256 chainId;

    //solium-disable-next-line
    assembly {
      chainId := chainid()
    }

    DOMAIN_SEPARATOR = keccak256(
      abi.encode(
        EIP712_DOMAIN,
        keccak256(bytes(aTokenName)),
        keccak256(EIP712_REVISION),
        chainId,
        address(this)
      )
    );

    _setName(aTokenName);
    _setSymbol(aTokenSymbol);
    _setDecimals(aTokenDecimals);

    _pool = pool;
    _treasury = treasury;
    _underlyingAsset = underlyingAsset;
    _incentivesController = incentivesController;

    (address _gauge, address _minter, address _curve) = abi.decode(
      params,
      (address, address, address)
    );

    gauge = ICurveGauge(_gauge);
    minter = ICurveGaugeMinter(_minter);
    curve = IERC20(_curve);

    IERC20(_underlyingAsset).approve(_gauge, MAX_INT);
  }

  /**
   * @dev Burns aTokens from `user` and sends the equivalent amount of underlying to `receiverOfUnderlying`
   * - Only callable by the LendingPool, as extra state updates there need to be managed
   * @param user The owner of the aTokens, getting them burned
   * @param receiverOfUnderlying The address that will receive the underlying
   * @param amount The amount being burned
   * @param index The new liquidity index of the reserve
   **/
  function burn(
    address user,
    address receiverOfUnderlying,
    uint256 amount,
    uint256 index
  ) external virtual override onlyLendingPool {
    uint256 amountScaled = amount.rayDiv(index);
    require(amountScaled != 0, Errors.CT_INVALID_BURN_AMOUNT);

    getRewards();
    gauge.withdraw(amount);
    IERC20(_underlyingAsset).safeTransfer(receiverOfUnderlying, amount);

    // tax and send the earnings
    uint256 earnings = _accumulatedRewardsForAmount(curve, amountScaled);
    _chargeFeeAndTransfer(curve, earnings, user, _treasury);

    _burn(user, amountScaled);

    emit Transfer(user, address(0), amount);
    emit Burn(user, receiverOfUnderlying, amount, index);
  }

  /**
   * @dev Mints `amount` aTokens to `user`
   * - Only callable by the LendingPool, as extra state updates there need to be managed
   * @param user The address receiving the minted tokens
   * @param amount The amount of tokens getting minted
   * @param index The new liquidity index of the reserve
   * @return `true` if the the previous balance of the user was 0
   */
  function mint(
    address user,
    uint256 amount,
    uint256 index
  ) external override onlyLendingPool returns (bool) {
    uint256 previousBalance = super.balanceOf(user);

    uint256 amountScaled = amount.rayDiv(index);
    require(amountScaled != 0, Errors.CT_INVALID_MINT_AMOUNT);
    _mint(user, amountScaled);
    gauge.deposit(amount);

    emit Transfer(address(0), user, amount);
    emit Mint(user, amount, index);

    return previousBalance == 0;
  }

  /**
   * @dev Mints aTokens to the reserve treasury
   * - Only callable by the LendingPool
   * @param amount The amount of tokens getting minted
   * @param index The new liquidity index of the reserve
   */
  function mintToTreasury(uint256 amount, uint256 index) external override onlyLendingPool {
    if (amount == 0) {
      return;
    }

    address treasury = _treasury;

    // Compared to the normal mint, we don't check for rounding errors.
    // The amount to mint can easily be very small since it is a fraction of the interest ccrued.
    // In that case, the treasury will experience a (very small) loss, but it
    // wont cause potentially valid transactions to fail.
    _mint(treasury, amount.rayDiv(index));

    emit Transfer(address(0), treasury, amount);
    emit Mint(treasury, amount, index);
  }

  function getRewards() public virtual {
    minter.mint(address(gauge));
  }

  function accumulatedRewards() external view virtual returns (uint256[2] memory) {
    return [_accumulatedRewards(curve), 0];
  }

  function accumulatedRewardsFor(address _user) external view virtual returns (uint256[2] memory) {
    return _accumulatedRewardsFor(_user);
  }

  function _accumulatedRewardsFor(address _user) internal view returns (uint256[2] memory) {
    uint256 bal = balanceOf(_user);
    return [_accumulatedRewardsForAmount(curve, bal), 0];
  }

  function _accumulatedRewardsForAmount(IERC20 token, uint256 bal) internal view returns (uint256) {
    uint256 accRewards = _accumulatedRewards(token);
    uint256 total = totalSupply();
    uint256 perc = (bal * 1e18) / total;
    return (accRewards * perc) / 1e18;
  }

  function _accumulatedRewards(IERC20 token) internal view virtual returns (uint256) {
    return token.balanceOf(address(this));
  }
}
