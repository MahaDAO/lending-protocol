import { IMainConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from '../commons';
import {
  strategyVolatileLP,
  strategyStableLP,
  strategyStable,
  strategyWETH,
  strategyARTH,
} from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const MainConfig: IMainConfiguration = {
  ...CommonsConfig,
  MarketId: 'MahaLend Market',
  ATokenNamePrefix: 'MahaLend Market',
  StableDebtTokenNamePrefix: 'MahaLend stable debt',
  VariableDebtTokenNamePrefix: 'MahaLend variable debt',
  ProviderId: 0,
  OracleQuoteCurrency: 'USD',
  ReservesConfig: {
    WETH: strategyWETH,
    WMATIC: strategyWETH,
    ARTH: strategyARTH,
    DAI: strategyStable,
    USDC: strategyStable,
    UniARTHWETH: strategyVolatileLP,
    SushiUSDCUSDT: strategyStableLP,
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
    [eEthereumNetwork.polygon]: {
      DAI: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      WMATIC: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      ARTH: '0xe52509181feb30eb4979e29ec70d50fd5c44d590',
      SushiUSDCUSDT: '0xD5e01372533145997c395e27BBb4160FBBCa0518',
    },
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
    [eEthereumNetwork.polygon]: {
      DAI: '0x4746dec9e833a82ec7c2c1356372ccf2cfcd2f3d',
      WETH: '0xf9680d99d6c9589e2a93a78a04a279e509205945',
      WMATIC: '0xab594600376ec9fd91f8e885dadf0ce036862de0',
      ARTH: '0x4746dec9e833a82ec7c2c1356372ccf2cfcd2f3d',
      SushiUSDCUSDT: '0x4746dec9e833a82ec7c2c1356372ccf2cfcd2f3d',
    },
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

export default MainConfig;
