// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface ICurveGauge {
  // function totalSupply() external view returns (uint256);

  // function balanceOf(address account) external view returns (uint256);

  // function extraRewardsLength() external view returns (uint256);

  // function lastTimeRewardApplicable() external view returns (uint256);
  function withdraw(uint256 _amount) external;

  function deposit(uint256 _amount) external;
}

interface ICurveGaugeMinter {
  function mint(address gauge) external;
}
