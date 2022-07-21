// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

interface IRewarder {
  function onSushiReward(
    uint256 pid,
    address user,
    address recipient,
    uint256 sushiAmount,
    uint256 newLpAmount
  ) external;

  function pendingToken(uint256 _pid, address _user) external view returns (uint256 pending);

  function pendingTokens(
    uint256 pid,
    address user,
    uint256 sushiAmount
  ) external view returns (IERC20[] memory, uint256[] memory);
}
