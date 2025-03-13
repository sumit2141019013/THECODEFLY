import React from 'react'
import { BsQuote } from 'react-icons/bs'
import Slider from "../../Helper/Slider"

const Review = () => {
  return (
    <div className='pt-20 pb-20 bg-black'>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20'>
            <div className='xl:col-span-1 mt-6 '>
            <div className='flex items-center space-x-4'>
         <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
           <BsQuote className='h-6 w-6 text-white'/>
        </div>
           <h1 className='text-xl text-black font-semibold'>Students Feedback</h1>
         </div>
         <h1 className='text-2xl md:text-3xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.3rem] xl:leading-[3.6rem] text-white'>Trusted by genius people.</h1>
           <p className='text-base text-white/50 mt-6'>This highlights the platform flexibility, allowing learners to access courses whenever and wherever they want, making education more accessible</p>
           <div className='items-center flex space-x-10 mt-8'>
            <p className='text-white font-bold text-5xl'> 99%</p>
            <p className='text-white'>Students Completed <br/> Course Successfully.</p>
           </div>
            </div>
            <div className='xl:col-span-2 bg-white rounded-xl overflow-hidden '>
                <Slider />
    </div>
    </div>
    </div>
  )
}   

export default Review