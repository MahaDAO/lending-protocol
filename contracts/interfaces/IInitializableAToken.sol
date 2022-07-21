// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import {ILendingPool} from './ILendingPool.sol';
import {IAaveIncentivesController} from './IAaveIncentivesController.sol';

/**
 * @title IInitializableAToken
 * @notice Interface for the initialize function on AToken
 * @author Aave
 **/
interface IInitializableAToken {
  /**
   * @dev Emitted when an aToken is initialized
   * @param aTokenParams  A set of encoded parameters for aToken initialization
   * @param poolParams A set of encoded parameters for pool mapping and initialization
   * @param params A set of encoded parameters for additional initialization
   * @param stakingParams A set of encoded parameters for staking initialization
   **/
  event Initialized(bytes aTokenParams, bytes poolParams, bytes params, bytes stakingParams);

  /**
   * @dev Initializes the aToken
   * @param aTokenParams  A set of encoded parameters for aToken initialization
   * @param poolParams A set of encoded parameters for pool mapping and initialization
   * @param params A set of encoded parameters for additional initialization
   * @param stakingParams A set of encoded parameters for staking initialization
   */
  function initialize(
    bytes calldata aTokenParams,
    bytes calldata poolParams,
    bytes calldata params,
    bytes calldata stakingParams
  ) external;
}
