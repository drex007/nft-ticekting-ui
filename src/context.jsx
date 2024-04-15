import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';


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
  return (
    <>
      <AppContext.Provider value={{

        modal,
        setModal,
        connectedWallet


      }} >
        {children}
      </AppContext.Provider>
    </>
  )




}   