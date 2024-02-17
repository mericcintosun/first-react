import React from 'react'
import logo from './items/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 border-black border-2'>
            {/* Left Side */}
            <div className='flex items-center justify-start'>
            <div className='cursor-pointer w-11'>
               <img src={logo}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2 font-bold cursor-pointer'>
                BeeNFT
            </h1>
            <div className='flex justify-between gap-10 ml-10 text-xl font-semibold'>
                <div className='cursor-pointer'>Home Page</div>
                <div className='cursor-pointer'>Collections</div>
                <div className='cursor-pointer'>Mint</div>
            </div>
            </div>
            <div className='flex items-right bg-amber-500 rounded-2xl'>
                <button className='border-3 border-black flex gap-5 items-center'>
                <svg className= 'w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.0049 6.99979H21.0049C21.5572 6.99979 22.0049 7.4475 22.0049 7.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979H18.0049V6.99979ZM4.00488 8.99979V18.9998H20.0049V8.99979H4.00488ZM4.00488 4.99979V6.99979H16.0049V4.99979H4.00488ZM15.0049 12.9998H18.0049V14.9998H15.0049V12.9998Z"></path>
                </svg> 
                <span className='text-xl font-bold'>Connect Wallet</span>
                </button>
            </div>
            
        </div>

        // Navbar
    )
}
export default Navbar