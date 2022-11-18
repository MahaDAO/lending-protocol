import { eContractid, IReserveParams } from '../../helpers/types';
import { rateStrategyStable } from './rateStrategies';

export const strategyARTH: IReserveParams = {
  strategy: rateStrategyStable,
  baseLTVAsCollateral: '7500',
  liquidationThreshold: '8000',
  liquidationBonus: '10500',
  borrowingEnabled: true,
  stableBorrowRateEnabled: true,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

// DAI
export const strategyStable: IReserveParams = {
  strategy: rateStrategyStable,
  baseLTVAsCollateral: '9800', // 98%
  liquidationThreshold: '9900', // 99%
  liquidationBonus: '10500',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

// USDC
export const strategyUSDC: IReserveParams = {
  strategy: rateStrategyStable,
  baseLTVAsCollateral: '9800', // 99%
  liquidationThreshold: '9900', // 99.9%
  liquidationBonus: '10500',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '6',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};
