import React from 'react'
import chameloen from '../assets/images/chameleonNft.png'
import { AppContext } from '../context'
import { useState, useEffect, useContext } from 'react'
import CreateEventModal from './modals/CreateEventModal'

const Tickets = () => {
  const events = [1, 2, 3, 4]
  const { modal, setModal } = useContext(AppContext)
  return (
    <div className='my-8 mb-8 bg-primary/20'>
      <div className='flex justify-center text-white font-semibold text-[30px] font-spacegrotesk'>Events</div>
      <div className='mx-10 grid grid-cols-4 my-4 space-x-4 py-8'>
        {events?.map((e, index) => (
          <div className='rounded py-4 px-2 border-2' key={index}>
            <img src={chameloen} alt="" srcset="" className='rounded-2xl' />
            <div className='flex justify-between text-white font-spacegrotesk font-semibold my-2'>
              <p>Event Tag</p>
              <p><span className='text-green-500'>Minted</span>: 4 of 100</p>
            </div>
            <p className=' text-white font-spacegrotesk text-[13px] font-semibold'><span className='text-green-400'>Event Host</span>: 0x9cde....1fe4</p>
            <div className='flex justify-between my-3 items-center'>
              <p className='text-white font-spacegrotesk font-semibold  text-[10px]'>Event Date: 30TH-04-2024</p>

              <p className='text-white font-spacegrotesk font-semibold  text-[10px]'>Ticket Closure: 30TH-04-2024</p>



            </div>
            <div className='flex justify-between my-3 items-center'>
              <p className='text-white font-spacegrotesk font-semibold  text-[12px]'>Price: 0.4 ETH</p>

              <button

                onClick={() => {
                  setModal({ ...modal, buyTicketModal: true })

                }}
                className='flex text-[10px] text-white border-2 bg-primary-button py-2 px-8'>Buy Ticket</button>


            </div>
          </div>
        ))}




      </div>

    </div>
  )
}

export default Tickets

