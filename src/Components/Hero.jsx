import React from 'react'
import chameloen from '../assets/images/chameleonNft.png'
import rocket from '../assets/images/rocketNft.png'
import boxCat from '../assets/images/boxCatNft.png'


const Hero = () => {
    return (
        <div className='my-20'>


            <div className=''>
                <p className='text-white font-poppins font-semibold text-[45px] flex justify-center'>Your Favourite NFT Ticketing Platform For Your Events.</p>
                <p className='text-white text-[15px] flex justify-center font-poppins'>Move your event ticketing to blockchain technologies with DigiPass</p>


            </div>
            <div className='flex space-x-4 justify-center my-3'>
                <button className='p-3 px-10 bg-gradient-to-l bg-primary-radiant border-2 text-white'>Get Started</button>

                <button className='px-10 py-1 bg-gradient-to-l bg-primary-bu border-2 text-white'>Explore</button>

            </div>

        </div>
    )
}

export default Hero