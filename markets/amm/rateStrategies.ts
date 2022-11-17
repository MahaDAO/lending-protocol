import BigNumber from 'bignumber.js';
import { oneRay } from '../../helpers/constants';
import { IInterestRateStrategyParams } from '../../helpers/types';

// LP Tokens
export const rateStrategyAmmBase: IInterestRateStrategyParams = {
  name: 'rateStrategyAmmBase',
  optimalUtilizationRate: new BigNumber(0.45).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0.03).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(3.0).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.1).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(3).multipliedBy(oneRay).toFixed(),
};

// DAI USDC USDT ARTH
export const rateStrategyStable: IInterestRateStrategyParams = {
  name: 'rateStrategyStable',
  optimalUtilizationRate: new BigNumber(0.9).multipliedBy(oneRay).toFixed(),
  baseVariableBorrowRate: new BigNumber(0).multipliedBy(oneRay).toFixed(),
  variableRateSlope1: new BigNumber(0.04).multipliedBy(oneRay).toFixed(),
  variableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
  stableRateSlope1: new BigNumber(0.02).multipliedBy(oneRay).toFixed(),
  stableRateSlope2: new BigNumber(0.6).multipliedBy(oneRay).toFixed(),
};
