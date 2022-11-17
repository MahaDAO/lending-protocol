import { eContractid, IReserveParams } from '../../helpers/types';
import { rateStrategyAmmBase, rateStrategyStable, rateStrategyBaseOne } from './rateStrategies';

export const strategyWETH: IReserveParams = {
  strategy: rateStrategyBaseOne,
  baseLTVAsCollateral: '8000',
  liquidationThreshold: '8250',
  liquidationBonus: '10500',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

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

export const strategyStable: IReserveParams = {
  strategy: rateStrategyStable,
  baseLTVAsCollateral: '7500',
  liquidationThreshold: '8000',
  liquidationBonus: '10500',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};

export const strategyARTHWETH: IReserveParams = {
  strategy: rateStrategyAmmBase,
  baseLTVAsCollateral: '6000',
  liquidationThreshold: '7000',
  liquidationBonus: '11500',
  borrowingEnabled: false,
  stableBorrowRateEnabled: false,
  reserveDecimals: '18',
  aTokenImpl: eContractid.AToken,
  reserveFactor: '1000',
};
