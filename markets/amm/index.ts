import { IAmmConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from '../commons';
import { strategyStable, strategyARTH } from './reservesConfigs';

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
    USDC: strategyStable,
    DAI: strategyStable,
    ARTH: strategyARTH,
  },
  ReserveAssets: {
    [eEthereumNetwork.goerli]: {
      ARTH: '0x85a79d4aef51bED57DB20C989085E4BF4733e5B2',
      USDC: '0xEe96053c808A869E37Ac049bE94b20DA2405Eebe',
      DAI: '0x9634761b6C9559849000d037E18cEa3665CDa1AB',
    },
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      UniARTHWETH: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
    },
    [eEthereumNetwork.tenderly]: {},
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.goerli]: {
      USDC: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
      ARTH: '0x533dd0bd795d1fa0b7ed13479e498a55e32238c1',
      USDT: '0x533dd0bd795d1fa0b7ed13479e498a55e32238c1',
    },
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
  },
  StakingContracts: {
    [eEthereumNetwork.goerli]: {
      UniARTHWETH: '0xe22de439a79a3edbd5924e6009449ccb86548a83',
    },
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
  },
};

export default AmmConfig;
