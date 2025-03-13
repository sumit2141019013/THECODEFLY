import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

type props = {
    name: string;
    image: string;
    role: string;
};

const SliderCart = ({ image, name, role }: props) => {
    return (
        <div className='flex flex-wrap sm:flex-nowrap items-center justify-center text-center sm:text-left space-x-0 sm:space-x-10'>
            <div className='w-full sm:w-[350px] sm:h-[350px] flex-shrink-0'>
                <Image 
                    src={image} 
                    alt="load" 
                    width={350} 
                    height={350} 
                    className="w-full h-full object-cover rounded-lg" 
                />
            </div>
            <div className='mt-6 mb-7'>
                <div className='flex justify-center sm:justify-start items-center'>
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600' />
                </div>
                <p className='mt-6 text-gray-800 w-[95%] md:w-[80%] mx-auto text-xs md:text-sm lg:text-base font-semibold text-black/65 text-justify'>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, magnam quam vero, voluptatibus cumque fuga quaerat facilis officiis corporis sed perferendis! Vero veniam quo minus est? Sint rerum debitis illo?
</p>

                <div className='mt-7'>
                    <h1 className='text-xl text-black font-semibold'>{name}</h1>
                    <p className='text-lg text-black/60'>{role}</p>
                </div>
            </div>
        </div>
    )
}

export default SliderCart
