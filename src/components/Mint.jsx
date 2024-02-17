import React from 'react'
const Mint = () => {
    return (
        <div className=''>
            <h1 className='text-5xl font-bold text-center mt-3'>MINT</h1>
            <h2 className='text-4xl font-bold text-center mt-3'>Add Image or GIF</h2>
            <h4 className='text-21xl font-bold text-center mt-3'>Max Size: 100 MB</h4>
            <div className='w-3/12 h-60 border-2 border-black mx-auto mt-5 flex justify-center items-center rounded-2xl'>
            <svg className='h-10 cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 8V4H5V20H19V8H15ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5ZM17.5 17L13.5 10L8 17H17.5Z"></path></svg>
            </div>
            <h2 className='text-4xl font-bold text-center mt-3'>Add Name and Description</h2> <br />
           <div className='m-auto text-center items-center flex justify-center flex-col'>
                <input type="text" className='bg-transparent border-black border-2 rounded-2xl mb-3 w-96 active:border-none p-2' placeholder='Name'/>
                <textarea type="text" className='bg-transparent border-black border-2 rounded-2xl w-96 active:border-none p-2 h-60' placeholder='Desc.'/>
           </div>
           <h2 className='text-4xl font-bold text-center mt-3 mb-3'>Add Price</h2>
          <div className='flex justify-center'>
          <input type="text" className='bg-transparent border-black border-2 rounded-2xl mb-3 w-60 mt-2 active:border-none p-2 mx-auto text-center items-center relative' placeholder=''/>
          <span className='absolute pl-40 mt-4 font-bold'>ETH</span>
          </div>
          <div className='flex justify-center mt-2 mb-5'>
            <button className='bg-amber-500 w-48'>
                <p className='font-semibold'>MINT</p>
            </button>
          </div>
        </div>
    )
}
export default Mint