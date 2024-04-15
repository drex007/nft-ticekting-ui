import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';


export const AppContext = React.createContext();


const backendUrl = import.meta.env.VITE_BACKEND_URL
const frontendUrl = import.meta.env.VITE_FRONTEND_URL
const TelegramBotLink = import.meta.env.VITE_TELEGRAM_BOT_LINK

export const AppContextProvider = ({ children }) => {
  const [modal, setModal] = useState({
    createEventModal: false,
    buyTicketModal: false
  });

  return (
    <>
      <AppContext.Provider value={{

        modal,
        setModal


      }} >
        {children}
      </AppContext.Provider>
    </>
  )




}   