import BigNumber from 'bignumber.js';

// ----------------
// MATH
// ----------------

export const PERCENTAGE_FACTOR = '10000';
export const HALF_PERCENTAGE = '5000';
export const WAD = Math.pow(10, 18).toString();
export const HALF_WAD = new BigNumber(WAD).multipliedBy(0.5).toString();
export const RAY = new BigNumber(10).exponentiatedBy(27).toFixed();
export const HALF_RAY = new BigNumber(RAY).multipliedBy(0.5).toFixed();
export const WAD_RAY_RATIO = Math.pow(10, 9).toString();
export const oneEther = new BigNumber(Math.pow(10, 18));
export const oneUsd = new BigNumber(Math.pow(10, 8));
export const oneRay = new BigNumber(Math.pow(10, 27));
export const MAX_UINT_AMOUNT =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';
export const ONE_YEAR = '31536000';
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ONE_ADDRESS = '0x0000000000000000000000000000000000000001';
// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------
export const OPTIMAL_UTILIZATION_RATE = new BigNumber(0.8).times(RAY);
export const EXCESS_UTILIZATION_RATE = new BigNumber(0.2).times(RAY);
export const APPROVAL_AMOUNT_LENDING_POOL = '1000000000000000000000000000';
export const TOKEN_DISTRIBUTOR_PERCENTAGE_BASE = '10000';
export const MOCK_USD_PRICE_IN_WEI = '5848466240000000';
export const USD_ADDRESS = '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96';
export const AAVE_REFERRAL = '0';

export const MOCK_CHAINLINK_AGGREGATORS_PRICES = {
  // Update to USD-based price feeds
  WETH: oneEther.toFixed(),
  ARTH: oneEther.multipliedBy('0.00736484').toFixed(),
  USDC: oneEther.multipliedBy('0.00736484').toFixed(),
  DAI: oneEther.multipliedBy('0.00736484').toFixed(),
  UniARTHWETH: oneEther.multipliedBy('0.00369068412860').toFixed(),
};

export const chainlinkAggregatorProxy = {
  main: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  tenderly: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  goerli: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
  polygon: '0xAB594600376Ec9fD91F8e885dADF0CE036862dE0',
};

export const chainlinkEthUsdAggregatorProxy = {
  main: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
  goerli: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
  polygon: '0xF9680D99D6C9589e2a93a78A04A279e509205945',
};
