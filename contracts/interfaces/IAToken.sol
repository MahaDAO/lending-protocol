// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {IERC20} from '../dependencies/openzeppelin/contracts/IERC20.sol';
import {IScaledBalanceToken} from './IScaledBalanceToken.sol';
import {IInitializableAToken} from './IInitializableAToken.sol';
import {IAaveIncentivesController} from './IAaveIncentivesController.sol';

interface IAToken is IERC20, IScaledBalanceToken, IInitializableAToken {
  /**
   * @dev Emitted after the updateRewardFeeRate action
   * @param _old The old reward fee rate
   * @param _new The new reward fee rate
   **/
  event RewardFeeChanged(uint256 _old, uint256 _new);

  /**
   * @dev Emitted after the setRewardFeeDestination action
   * @param _old The old reward fee rate
   * @param _new The new reward fee rate
   **/
  event RewardFeeDestinationChanged(address _old, address _new);

  /**
   * @dev Emitted after the chargeFee action
   * @param initialAmount The amount of rewards including fee
   * @param feeAmount The rewards amount excluding fee
   * @param feeDestination The reward fee receiver
   **/
  event RewardFeeCharged(uint256 initialAmount, uint256 feeAmount, address feeDestination);

  /**
   * @dev Emitted after the chargeFee action
   * @param initialAmount The amount of rewards claimed including fee
   * @param finalAmount The rewards claimed amount excluding fee
   * @param destination The reward receiver
   **/
  event RewardClaimed(uint256 initialAmount, uint256 finalAmount, address destination);

  /**
   * @dev Emitted after the burn action
   * @param amount The amount of rewards harvested
   * @param destination The reward receiver
   **/
  event MasterChefWithdrawnAndHarvested(uint256 amount, address destination);

  /**
   * @dev Emitted after the mint action
   * @param amount The amount of rewards harvested
   * @param destination The reward receiver
   **/
  event MasterChefDeposit(uint256 amount, address destination);

  /**
   * @dev Emitted after the distributeMasterChefHarvest action
   * @param amount The amount of rewards harvested
   * @param destination The reward receiver
   **/
  event DistributedMasterChefHarvest(uint256 amount, address destination);

  /**
   * @dev Emitted after the mint action
   * @param from The address performing the mint
   * @param value The amount being
   * @param index The new liquidity index of the reserve
   **/
  event Mint(address indexed from, uint256 value, uint256 index);

  /**
   * @dev Mints `amount` aTokens to `user`
   * @param user The address receiving the minted tokens
   * @param amount The amount of tokens getting minted
   * @param index The new liquidity index of the reserve
   * @return `true` if the the previous balance of the user was 0
   */
  function mint(
    address user,
    uint256 amount,
    uint256 index
  ) external returns (bool);

  /**
   * @dev Emitted after aTokens are burned
   * @param from The owner of the aTokens, getting them burned
   * @param target The address that will receive the underlying
   * @param value The amount being burned
   * @param index The new liquidity index of the reserve
   **/
  event Burn(address indexed from, address indexed target, uint256 value, uint256 index);

  /**
   * @dev Emitted during the transfer action
   * @param from The user whose tokens are being transferred
   * @param to The recipient
   * @param value The amount being transferred
   * @param index The new liquidity index of the reserve
   **/
  event BalanceTransfer(address indexed from, address indexed to, uint256 value, uint256 index);

  /**
   * @dev Modifies the rewardFeeRate for charging fee on rewards harvested.
   * @param _rewardFeeRate The new rewardFeeRate to charge.
   **/
  function setRewardFeeRate(uint256 _rewardFeeRate) external;

  /**
   * @dev Modifies the _rewardFeeDestination for accumulatin fee on rewards harvested.
   * @param _destination The new destination to route the fee to.
   **/
  function setRewardFeeDestination(address _destination) external;

  /**
   * @dev Burns aTokens from `user` and sends the equivalent amount of underlying to `receiverOfUnderlying`
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
  ) external;

  /**
   * @dev Mints aTokens to the reserve treasury
   * @param amount The amount of tokens getting minted
   * @param index The new liquidity index of the reserve
   */
  function mintToTreasury(uint256 amount, uint256 index) external;

  /**
   * @dev Transfers aTokens in the event of a borrow being liquidated, in case the liquidators reclaims the aToken
   * @param from The address getting liquidated, current owner of the aTokens
   * @param to The recipient
   * @param value The amount of tokens getting transferred
   **/
  function transferOnLiquidation(
    address from,
    address to,
    uint256 value
  ) external;

  /**
   * @dev Transfers the underlying asset to `target`. Used by the LendingPool to transfer
   * assets in borrow(), withdraw() and flashLoan()
   * @param user The recipient of the underlying
   * @param amount The amount getting transferred
   * @return The amount transferred
   **/
  function transferUnderlyingTo(address user, uint256 amount) external returns (uint256);

  /**
   * @dev Invoked to execute actions on the aToken side after a repayment.
   * @param user The user executing the repayment
   * @param amount The amount getting repaid
   **/
  function handleRepayment(address user, uint256 amount) external;

  /**
   * @dev Returns the address of the incentives controller contract
   **/
  function getIncentivesController() external view returns (IAaveIncentivesController);

  /**
   * @dev Returns the address of the underlying asset of this aToken (E.g. WETH for aWETH)
   **/
  function UNDERLYING_ASSET_ADDRESS() external view returns (address);

  /**
   * @dev Returns the total accumulated rewards across all users.
   */
  function accumulatedRewards() external view returns (uint256);

  /**
   * @dev Returns the total accumulated rewards for a user.
   */
  function earned(address user) external view returns (uint256);
}
