import { IAmmConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from '../commons';
import { strategyStable, strategyUSDC, strategyARTH } from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AmmConfig: IAmmConfiguration = {
  ...CommonsConfig,
  MarketId: 'MahaLend AMM Market',
  ATokenNamePrefix: 'MahaLend AMM Market',
  StableDebtTokenNamePrefix: 'MahaLend  AMM stable debt',
  VariableDebtTokenNamePrefix: 'MahaLend AMM variable debt',
  ProviderId: 1,
  ReservesConfig: {
    USDC: strategyUSDC,
    DAI: strategyStable,
    ARTH: strategyARTH,
  },
  ReserveAssets: {
    [eEthereumNetwork.goerli]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {
      DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
      ARTH: '0x8cc0f052fff7ead7f2edcccac895502e884a8a71',
      USDC: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    [eEthereumNetwork.tenderly]: {},
    [eEthereumNetwork.polygon]: {},
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.goerli]: {
      USDC: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
      DAI: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
      ARTH: '0x533dd0bd795d1fa0b7ed13479e498a55e32238c1',
    },
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
    [eEthereumNetwork.polygon]: {},
  },
  StakingContracts: {
    [eEthereumNetwork.goerli]: {
      UniARTHWETH: '0xe22de439a79a3edbd5924e6009449ccb86548a83',
    },
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
    [eEthereumNetwork.polygon]: {},
  },
};

export default AmmConfig;
