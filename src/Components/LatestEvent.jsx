import React from 'react'
import chameloen from '../assets/images/chameleonNft.png'
import rocket from '../assets/images/rocketNft.png'
import boxCat from '../assets/images/boxCatNft.png'
import { AppContext } from '../context'
import { useContext } from 'react'


const LatestEvent = () => {
    const {getSigner, getProvider} = useContext(AppContext)
    return (

        <div className='px-2 py-5 flex flex-1 justify-between rounded-xl shadow-lg border bg-primary/20 w-2/3 mx-auto'>

            <div className='flex-[0.4]'>
                <p className='ml-4 text-white font-poppins text-[13px]'><span className='text-green-400'>Event Host</span>: 0x9cde...0x9cde.....1fe4</p>
                <p className='text-white font-poppins ml-4 text-[11px] my-2'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
                <div className='flex justify-between ml-4 w-full'>
                    <div className="text-[15px] font-spacegrotesk font-semibold text-white w-full">
                        <div className='flex justify-between'>
                            <div>
                                <p className='my-2'>Event Date</p>
                                <p className='my-2'>26th: 04 : 24</p>

                            </div>
                            <div>
                                <p className='my-2'>Ticket Closure Date</p>
                                <p className='my-2'>26th: 04 : 24</p>
                                <p className='my-2'>Price: 0.04 ETH</p>

                            </div>
                        </div>

                        <div>
                            <button 
                            onClick={()=> getSigner()}
                            className='flex text-[10px] text-white border-2 bg-primary-button py-2 px-8'>Buy Ticket</button>
                        </div>

                    </div>

                </div>

            </div>
            <div className='flex-[0.6] flex justify-end'>
                <img src={boxCat} alt="" className='w-2/5 h-4/3 rounded-lg border-4' />

            </div>

        </div>

    )
}

export default LatestEvent