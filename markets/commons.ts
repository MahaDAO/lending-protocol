import {
  oneRay,
  ZERO_ADDRESS,
  MOCK_CHAINLINK_AGGREGATORS_PRICES,
  oneEther,
} from '../helpers/constants';
import { ICommonConfiguration, eEthereumNetwork } from '../helpers/types';

// ----------------
// PROTOCOL GLOBAL PARAMS
// ----------------

export const CommonsConfig: ICommonConfiguration = {
  MarketId: 'MahaLend Market',
  ATokenNamePrefix: 'MahaLend Market',
  StableDebtTokenNamePrefix: 'MahaLend  Market stable debt',
  VariableDebtTokenNamePrefix: 'MahaLend Market variable debt',
  SymbolPrefix: 'm',
  ProviderId: 0, // Overriden in index.ts
  OracleQuoteCurrency: 'ETH',
  OracleQuoteUnit: oneEther.toString(),
  ProtocolGlobalParams: {
    TokenDistributorPercentageBase: '10000',
    MockUsdPriceInWei: '5848466240000000',
    UsdAddress: '0x10F7Fc1F91Ba351f9C629c5947AD69bD03C05b96',
    NilAddress: '0x0000000000000000000000000000000000000000',
    OneAddress: '0x0000000000000000000000000000000000000001',
    AaveReferral: '0',
  },

  // ----------------
  // COMMON PROTOCOL PARAMS ACROSS POOLS AND NETWORKS
  // ----------------

  Mocks: {
    AllAssetsInitialPrices: {
      ...MOCK_CHAINLINK_AGGREGATORS_PRICES,
    },
  },

  // TODO: reorg alphabetically, checking the reason of tests failing
  LendingRateOracleRatesCommon: {
    WETH: {
      borrowRate: oneRay.multipliedBy(0.03).toFixed(),
    },
    ARTH: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
    USDC: {
      borrowRate: oneRay.multipliedBy(0.039).toFixed(),
    },
  },

  // ----------------
  // COMMON PROTOCOL ADDRESSES ACROSS POOLS
  // ----------------

  // If PoolAdmin/emergencyAdmin is set, will take priority over PoolAdminIndex/emergencyAdminIndex
  PoolAdmin: {
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderly]: undefined,
    [eEthereumNetwork.goerli]: undefined,
  },
  ChainlinkAggregator: {
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
    [eEthereumNetwork.goerli]: {},
  },
  PoolAdminIndex: 0,
  EmergencyAdmin: {
    [eEthereumNetwork.hardhat]: undefined,
    [eEthereumNetwork.main]: undefined,
    [eEthereumNetwork.tenderly]: undefined,
    [eEthereumNetwork.goerli]: undefined,
  },
  EmergencyAdminIndex: 0,
  ProviderRegistry: {
    [eEthereumNetwork.main]: '0x52D306e36E3B6B02c153d0266ff0f85d18BCD413',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.tenderly]: '0x52D306e36E3B6B02c153d0266ff0f85d18BCD413',
    [eEthereumNetwork.goerli]: '',
  },
  ProviderRegistryOwner: {
    [eEthereumNetwork.main]: '0xB9062896ec3A615a4e4444DF183F0531a77218AE',
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.tenderly]: '0xB9062896ec3A615a4e4444DF183F0531a77218AE',
    [eEthereumNetwork.goerli]: '',
  },
  LendingRateOracle: {
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '0x8A32f49FFbA88aba6EFF96F45D8BD1D4b3f35c7D',
    [eEthereumNetwork.goerli]: '',
  },
  LendingPoolCollateralManager: {
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.main]: '0xbd4765210d4167CE2A5b87280D9E8Ee316D5EC7C',
    [eEthereumNetwork.tenderly]: '0xbd4765210d4167CE2A5b87280D9E8Ee316D5EC7C',
    [eEthereumNetwork.goerli]: '',
  },
  LendingPoolConfigurator: {
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  LendingPool: {
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  WethGateway: {
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  TokenDistributor: {
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.main]: '0xe3d9988f676457123c5fd01297605efdd0cba1ae',
    [eEthereumNetwork.tenderly]: '0xe3d9988f676457123c5fd01297605efdd0cba1ae',
    [eEthereumNetwork.goerli]: '',
  },
  AaveOracle: {
    [eEthereumNetwork.hardhat]: '',
    [eEthereumNetwork.main]: '', //'0xA50ba011c48153De246E5192C8f9258A2ba79Ca9',
    [eEthereumNetwork.tenderly]: '0xA50ba011c48153De246E5192C8f9258A2ba79Ca9',
    [eEthereumNetwork.goerli]: '',
  },
  FallbackOracle: {
    [eEthereumNetwork.hardhat]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderly]: ZERO_ADDRESS,
    [eEthereumNetwork.goerli]: ZERO_ADDRESS,
  },
  ReserveAssets: {
    [eEthereumNetwork.hardhat]: {},
    [eEthereumNetwork.main]: {},
    [eEthereumNetwork.tenderly]: {},
    [eEthereumNetwork.goerli]: {},
  },
  ReservesConfig: {},
  ATokenDomainSeparator: {
    [eEthereumNetwork.hardhat]:
      '0xbae024d959c6a022dc5ed37294cd39c141034b2ae5f02a955cce75c930a81bf5',
    [eEthereumNetwork.main]: '',
    [eEthereumNetwork.tenderly]: '',
    [eEthereumNetwork.goerli]: '',
  },
  WETH: {
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.main]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.tenderly]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.goerli]: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  },
  WrappedNativeToken: {
    [eEthereumNetwork.hardhat]: '', // deployed in local evm
    [eEthereumNetwork.main]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.tenderly]: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    [eEthereumNetwork.goerli]: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  },
  ReserveFactorTreasuryAddress: {
    [eEthereumNetwork.hardhat]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.main]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.tenderly]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
    [eEthereumNetwork.goerli]: '0x464c71f6c2f760dda6093dcb91c24c39e5d6e18c',
  },
  IncentivesController: {
    [eEthereumNetwork.hardhat]: ZERO_ADDRESS,
    [eEthereumNetwork.main]: ZERO_ADDRESS,
    [eEthereumNetwork.tenderly]: ZERO_ADDRESS,
    [eEthereumNetwork.goerli]: ZERO_ADDRESS,
  },
};
