import React from 'react'
import { AppContext } from '../context'
import { useState, useEffect, useContext } from 'react'



const Header = () => {
  const { modal, setModal, connectedWallet, isConnected } = useContext(AppContext)
  return (
    <div className='px-10 py-4'>
      <div className='flex justify-between'>
        <p className='text-white text-[30px] font-spacegrotesk font-semibold'>DigiPass</p>
        <div className='flex space-x-5 items-center'>
          <p className='text-white text-[15px] font-poppins hover:text-purple-500 cursor-pointer'>Home</p>
          <p className='text-white text-[15px] font-poppins hover:text-purple-500 cursor-pointer'>About</p>
          {isConnected && <p className='text-white text-[15px] font-poppins hover:text-purple-500 cursor-pointer'>My Events</p>}
          {isConnected && <p className='text-white text-[15px] font-poppins hover:text-purple-500 cursor-pointer' onClick={() => setModal({ ...modal, createEventModal: true })}>Create Event</p>}
          <w3m-button />


        </div>

      </div>

    </div>
  )
}

export default Header