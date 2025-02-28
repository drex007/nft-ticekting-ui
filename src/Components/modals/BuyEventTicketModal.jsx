import React from 'react'
import { AppContext } from '../../context'
import { useState, useEffect, useContext } from 'react'
import rocket from '../../assets/images/rocketNft.png'

const BuyEventTicketModal = () => {
    const { modal, setModal } = useContext(AppContext)
    return (
        <div className='fixed grid h-screen z-20 bg-[#11111190] place-items-center w-full backdrop-blur-sm'>
            <div className='bg-white mx-auto my-auto w-1/2 h-[500px] px-8 py-4 font-Montserrat'>
                <div className='flex justify-between my-3'>
                    <p></p>
                    <p className='text-[20px]'>Purchase Ticket</p>

                    <p onClick={() => setModal({ ...modal, buyTicketModal: false })} className='rounded-md bg-red-600 text-white w-[50px] flex justify-center px-4 py-1 text-[10px] items-center cursor-pointer'>Close</p>
                </div>
                <div>
                    <img src={rocket} alt="" className='h-[250px] w-full' />
                </div>


                <div className='text-[12px]'>
                    <div className='flex flex-1 justify-between space-x-4 my-2'>
                        <div className='flex-[0.5]'>
                            <p>Event Name</p>
                            <input type="text" name="" id="" className='w-full border py-2 px-2 outline-none' disabled />
                        </div>
                        <div className='flex-[0.5]'>
                            <p>Event Description</p>
                            <input type="text" name="" id="" className='w-full border py-2 px-2 outline-none' disabled />
                        </div>

                    </div>
                    <div className='flex flex-1 justify-between space-x-4 my-2'>
                        <div className='flex-[0.5]'>
                            <p>Event Date </p>
                            <input type="date" name="" id="" className='w-full border py-2 px-2 outline-none' disabled />
                        </div>
                        <div className='flex-[0.5]'>
                            <p>Ticket Price (ETH)</p>
                            <input type="number" name="" id="" className='w-full border py-2 px-2 outline-none' disabled />
                        </div>

                    </div>

                </div>

                <button className='bg-primary-button text-white px-4 py-2 w-2/3 flex mx-auto justify-center'>Purchase Ticket</button>

            </div>

        </div>
    )
}

export default BuyEventTicketModal