import NftContractAbi from './nftContractABI.json'

export const NftContractAddress = import.meta.env.VITE_APP_CONTRACT_ADDRESS
export const NftContractABI = NftContractAbi


export const mainnet = {

    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'

}

export const morphSepolia = {
    chainId: 2710,
    name: 'Morph Testnet',
    currency: 'ETH',
    explorerUrl: 'https://explorer-testnet.morphl2.io',
    rpcUrl: 'https://rpc-testnet.morphl2.io'

}


