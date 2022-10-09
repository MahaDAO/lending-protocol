import { oneRay, ZERO_ADDRESS } from '../../helpers/constants';
import { IAmmConfiguration, eEthereumNetwork } from '../../helpers/types';

import { CommonsConfig } from './commons';
import { strategyARTHWETH, strategyWETH, strategyARTH } from './reservesConfigs';

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AmmConfig: IAmmConfiguration = {
  ...CommonsConfig,
  MarketId: 'MahaLend Goerli market',
  ProviderId: 2,
  ReservesConfig: {
    WETH: strategyWETH,
    ARTH: strategyARTH,
    UniARTHWETH: strategyARTHWETH,
  },
  ReserveAssets: {
    [eEthereumNetwork.goerli]: {
      WETH: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      ARTH: '0xC48C3FC2d59f33F4c1af79f956AB10f96b2f12c5',
      UniARTHWETH: '0xe22de439a79a3edbd5924e6009449ccb86548a83',
    },
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.main]: {
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      UniARTHWETH: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
    },
    [eEthereumNetwork.tenderly]: {
      DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      UniARTHWETH: '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11',
    },
  },
  StakingContracts: {
    [eEthereumNetwork.goerli]: {
      UniARTHWETH: '0xe22de439a79a3edbd5924e6009449ccb86548a83',
    },
    [eEthereumNetwork.buidlerevm]: {},
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.coverage]: {},
    [eEthereumNetwork.kovan]: {},
    [eEthereumNetwork.ropsten]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
  },
};

export default AmmConfig;
