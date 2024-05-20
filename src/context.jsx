import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { ethers } from "ethers";
import { NftContractABI } from "./walletServices/constants";
import { NftContractAddress } from "./walletServices/constants";
import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
import { morphSepolia } from "./walletServices/constants"







export const AppContext = React.createContext();


export const AppContextProvider = ({ children }) => {

  const [modal, setModal] = useState({
    createEventModal: false,
    buyTicketModal: false
  });

  const [events, setEvents] = useState([])
  const [connectedWallet, setconnectedWallet] = useState(null)
  const [currentEvent, setCurrentEvent] = useState({})
  const [createEventLoadingState, setCreateEventLoadingState] = useState(false)
  const [purchaseTicketLoadingState, setPurchaseTicketLoadingState] = useState(false)
  const [ticketEvents, setTicketEvents] = useState(null)
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()




  const initializeNftContract = (signerOrProvider) => new ethers.Contract(
    NftContractAddress,
    NftContractABI,
    signerOrProvider
  )


  useEffect(() => {


  }, [])

  const getSigner = async () => {
    if (!isConnected) return toast.error('Wallet not connected')
    console.log(walletProvider, 'PROVIDER');
    const ethersProvider = new ethers.BrowserProvider(walletProvider)
    const signer = await ethersProvider.getSigner()
    console.log(signer);

    return signer
  }

  const getProvider = async () => {
    const ethersProvider = new ethers.JsonRpcProvider(morphSepolia?.rpcUrl)
    return ethersProvider
  }


  const getEvents = async () => {
    try {
      const provider = await getProvider()
      const contract = initializeNftContract(provider)
      const events = await contract.getAllEvents()
      const data = events?.map((e,i)=> (
        {
          eventTitle: e?.eventTitle,
          eventDescription: e?.eventDescription,
          ipfsUrl: e?.ipfsUrl,
          eventPrice: e?.eventPrice,
          ticketQuantity:e?.ticketQuantity,
          eventImageUrl: e?.eventImageUrl,
          dateOfEvent:e?.dateOfEvent,
          ticketCloseDate: e?.ticketCloseDate
        }
      ))
      
      setTicketEvents(data)


    } catch (error) {
      console.log(error, 'TICKETS ERROR');

    }
  }


  return (
    <>
      <AppContext.Provider value={{

        modal,
        setModal,
        connectedWallet,
        initializeNftContract,
        isConnected,
        getSigner,
        getEvents,
        getProvider,
        events


      }} >
        {children}
      </AppContext.Provider>
    </>
  )




}   