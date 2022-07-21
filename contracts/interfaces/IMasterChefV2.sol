// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12;

pragma experimental ABIEncoderV2;

import '../dependencies/openzeppelin/contracts/IERC20.sol';

interface IMasterChefV2 {
  /// @notice Info of each MCV2 user.
  /// `amount` LP token amount the user has provided.
  /// `rewardDebt` The amount of SUSHI entitled to the user.
  struct UserInfo {
    uint256 amount;
    int256 rewardDebt;
  }

  /// @notice Info of each MCV2 pool.
  /// `allocPoint` The amount of allocation points assigned to the pool.
  /// Also known as the amount of SUSHI to distribute per block.
  struct PoolInfo {
    uint128 accSushiPerShare;
    uint64 lastRewardBlock;
    uint64 allocPoint;
  }

  function SUSHI() external view returns (IERC20);

  function poolInfo(uint256 pid) external view returns (PoolInfo memory);

  function userInfo(uint256 pid, address user) external view returns (UserInfo memory);

  function pendingSushi(uint256 _pid, address _user) external view returns (uint256);

  /// @notice Deposit LP tokens to MCV2 for SUSHI allocation.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param amount LP token amount to deposit.
  function deposit(
    uint256 pid,
    uint256 amount,
    address to
  ) external;

  /// @notice Withdraw LP tokens from MCV2.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param amount LP token amount to withdraw.
  /// @param to Receiver of the LP tokens.
  function withdraw(
    uint256 pid,
    uint256 amount,
    address to
  ) external;

  /// @notice Harvest proceeds for transaction sender to `to`.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param to Receiver of SUSHI rewards.
  function harvest(uint256 pid, address to) external;

  /// @notice Withdraw LP tokens from MCV2 and harvest proceeds for transaction sender to `to`.
  /// @param pid The index of the pool. See `poolInfo`.
  /// @param amount LP token amount to withdraw.
  /// @param to Receiver of the LP tokens and SUSHI rewards.
  function withdrawAndHarvest(
    uint256 pid,
    uint256 amount,
    address to
  ) external;
}
