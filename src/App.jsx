
import LandingPage from './Components/screens/LandingPage'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'
import { mainnet, morphSepolia } from './walletServices/constants'




const projectId = import.meta.env.VITE_APP_WALLET_CONNECT_ID


const metadata = {
  name: 'DigiPass Wallet Connect',
  description: 'Your favourite nft ticketing platform',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default 
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

createWeb3Modal({
  ethersConfig,
  chains: [morphSepolia, mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})
function App() {



  return (
    <>

      <LandingPage />



    </>
  )
}

export default App
