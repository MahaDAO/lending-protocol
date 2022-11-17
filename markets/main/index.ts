import { IMainConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from '../commons';
import { strategyARTHWETH, strategyWETH, strategyARTH } from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AmmConfig: IMainConfiguration = {
  ...CommonsConfig,
  MarketId: 'MahaLend Market',
  ATokenNamePrefix: 'MahaLend Market',
  StableDebtTokenNamePrefix: 'MahaLend stable debt',
  VariableDebtTokenNamePrefix: 'MahaLend variable debt',
  ProviderId: 0,
  ReservesConfig: {
    WETH: strategyWETH,
    ARTH: strategyARTH,
    UniARTHWETH: strategyARTHWETH,
  },
  ReserveAssets: {
    [eEthereumNetwork.goerli]: {
      WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      ARTH: '0x85a79d4aef51bED57DB20C989085E4BF4733e5B2',
      UniARTHWETH: '0x7c66d8e749b2c0ad71d2c57a7b53ffc330874f48',
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
      WETH: '0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e',
      ARTH: '0x533dd0bd795d1fa0b7ed13479e498a55e32238c1',
      UniARTHWETH: '0x533dd0bd795d1fa0b7ed13479e498a55e32238c1',
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
