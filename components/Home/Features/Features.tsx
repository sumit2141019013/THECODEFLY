'use client'
import React from 'react'
import Tilt from "react-parallax-tilt"
import Image from "next/image";
import { FaBriefcase } from 'react-icons/fa';
const Features = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto'>
            <Tilt>
            <div data-aos="zoom-in" data-aos-achor-placement="top-center">
                <Image src="/images/f.png" alt="loading" width={1000} height={1000}/>
            </div>
            </Tilt>
            <div>
                <div className='flex items-center space-x-4'>
                        <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                            <FaBriefcase className='h-6 w-6 text-white'/>
                        </div>
                        <h1 className='text-xl text-black font-semibold'>Premium learning experience!</h1>
                    </div>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold 
                    md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800 mt-4'>Empowering Learning, Anytime, Anywhere.</h1>
                    <div className='mt-8 mb-6'>
                        <h1 className='text-lg md:text-2xl text-black/70  font-semibold'>
                        Your Path to Knowledge Starts Here
                        </h1>
                        <p className='text-sm md:text-base text-black/70  mt-4'>This emphasizes the platform as the starting point for personal or professional growth,
                             guiding users through a structured learning journey.
                        </p>
                    </div>
                    <div className='mt-8 mb-6'>
                        <h1 className='text-lg md:text-2xl text-black/70  font-semibold'>
                        Transforming Curiosity into Capability                        </h1>
                        <p className='text-sm md:text-base text-black/70 mt-4'>This focuses on turning learners' interest into real skills, showcasing the platform as a bridge between curiosity and practical knowledge.
                        </p>
                    </div>
            </div>
            </div> 
    </div>
  )
}

export default Features