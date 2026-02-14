import { http, createConfig } from 'wagmi';
import { defineChain } from 'viem';
import { walletConnect } from 'wagmi/connectors';

declare module 'wagmi' {
    interface Register {
      config: typeof config
    }
}

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

export const pharosTestnet = defineChain({
  id: 688689,
  name: 'Pharos Atlantic Testnet',
  nativeCurrency: {
    name: 'PHRS',
    symbol: 'PHRS',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://atlantic.dplabs-internal.com'],
      webSocket: ['wss://atlantic.dplabs-internal.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'PharosScan',
      url: 'https://atlantic.pharosscan.xyz',
    },
  },
  testnet: true,
});

export const supportedNetworks = [pharosTestnet] as const;

const TESTNET_RPC = 'https://atlantic.dplabs-internal.com';

export const config = createConfig({
  chains: supportedNetworks,
  connectors: [
    walletConnect({ projectId : projectId ?? ''}),
  ],
  transports: {
    [pharosTestnet.id]: http(TESTNET_RPC),
  },
});
