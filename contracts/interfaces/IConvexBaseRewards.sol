// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface IConvexBaseRewards {
  function totalSupply() external view returns (uint256);

  function balanceOf(address account) external view returns (uint256);

  function extraRewardsLength() external view returns (uint256);

  function lastTimeRewardApplicable() external view returns (uint256);

  function rewardPerToken() external view returns (uint256);

  function earned(address account) external view returns (uint256);

  function stake(uint256 _amount) external returns (bool);

  function stakeAll() external returns (bool);

  function stakeFor(address _for, uint256 _amount) external returns (bool);

  function withdraw(uint256 amount, bool claim) external returns (bool);

  function withdrawAll(bool claim) external;

  function withdrawAndUnwrap(uint256 amount, bool claim) external returns (bool);

  function withdrawAllAndUnwrap(bool claim) external;

  function getReward(address _account, bool _claimExtras) external returns (bool);

  function getReward() external returns (bool);
}
