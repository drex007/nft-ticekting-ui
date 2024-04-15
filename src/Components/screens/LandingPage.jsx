import React from 'react'
import Header from '../Header'
import Hero from '../Hero'
import LatestEvent from '../LatestEvent'
import Tickets from '../Tickets'
import Footer from '../Footer'
import { AppContext } from '../../context'
import { useState, useEffect, useContext } from 'react'
import CreateEventModal from '../modals/CreateEventModal'
import BuyEventTicketModal from '../modals/BuyEventTicketModal'
const LandingPage = () => {
  const { modal, setModal } = useContext(AppContext)


  useEffect(() => {

  }, [modal])
  return (
    <div className='w-full bg-gradient-to-bl from-blue-500/20 to-primary-button/20 bg-primary p-0 m-0'>
      {modal?.createEventModal && (<CreateEventModal />)}
      {modal?.buyTicketModal && (<BuyEventTicketModal />)}

      <Header />
      <Hero />
      <p className='flex justify-center my-3 text-white font-spacegrotesk font-semibold text-[25px]'>Latest Event</p>

      <LatestEvent />
      <Tickets />
      <Footer />




    </div>
  )
}

export default LandingPage