// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {Ownable} from '../../../dependencies/openzeppelin/contracts/Ownable.sol';
import {IERC20} from '../../../dependencies/openzeppelin/contracts/IERC20.sol';
import {SafeMath} from '@openzeppelin/contracts/math/SafeMath.sol';

contract FeeBase is Ownable {
  using SafeMath for uint256;

  uint256 public pct100 = 100000000000;
  uint256 public rewardFeeRate = 10000000000; // 10% in 10^9

  mapping(address => address) public referralMapping;

  event RewardFeeChanged(uint256 _old, uint256 _new);
  event RewardFeeCharged(uint256 initialAmount, uint256 feeAmount, address dest);

  function setRewardFeeRate(uint256 _new) external onlyOwner {
    _setRewardFeeRate(_new);
  }

  function _setRewardFeeRate(uint256 _new) internal {
    require(_new >= 0, 'fee is not >= 0%');
    require(_new <= pct100, 'fee is not <= 100%');

    emit RewardFeeChanged(rewardFeeRate, _new);
    rewardFeeRate = _new;
  }

  function _chargeFeeAndTransfer(
    IERC20 token,
    uint256 earnings,
    address who,
    address treasury
  ) internal {
    if (earnings == 0) return;

    uint256 feeToCharge = earnings.mul(rewardFeeRate).div(pct100);
    uint256 remainderToSend = earnings.sub(feeToCharge);

    // send the remainder back to the user
    token.transfer(who, remainderToSend);

    // pay out fees to treasury
    if (feeToCharge > 0) {
      token.transfer(treasury, feeToCharge);
      emit RewardFeeCharged(earnings, feeToCharge, treasury);
    }
  }
}
