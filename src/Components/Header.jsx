import React from 'react'

const Header = () => {
  return (
    <div className='px-10 py-4'>
      <div className='flex justify-between'>
        <p className='text-white text-[30px] font-spacegrotesk font-semibold'>DigiPass</p>
        <div className='flex space-x-5 items-center'>
          <p className='text-white text-[15px] font-poppins hover:text-purple-500 cursor-pointer'>Home</p>
          <p className='text-white text-[15px] font-poppins hover:text-purple-500 cursor-pointer'>About</p>
          <p className='text-white text-[15px] font-poppins hover:text-purple-500 cursor-pointer'>My Events</p>

          <button className='text-white font-poppins font-[10px] w-[150px] bg-primary-button py-2 border border-white'>
            Connect Wallet
          </button>

        </div>

      </div>

    </div>
  )
}

export default Header