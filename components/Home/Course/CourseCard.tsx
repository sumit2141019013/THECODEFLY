'use client'
import React from 'react'
import Tilt from "react-parallax-tilt"
import Image from "next/image"
import { FaFile, FaStar, FaUser } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

type props = {
    course: {
        id: number;
        image: string;
        title: string;
        price: number;
        author: string;
        reviewNumber: number;
        lessons: number;
        students: number;
        category: string;
    };
};

const CourseCard = ({ course }: props) => {
    return (
        <Tilt>
            <div className="bg-white rounded-lg overflow-hidden cursor-pointer">
                <Image src={course.image} alt={course.title} width={400} height={400} className="w-full h-full" />
                <div className='p-4'>
                    <h1 className='ml-auto relative z-[10] h-20 w-20 flex items-center text-lg font-bold justify-center flex-col mt-[-4rem] rounded-full bg-rose-700 text-white'>
                        ${course.price}
                    </h1>
                    <div className='flex items-center mt-6 space-x-4'>
                        <span className='text-lg text-black/70 font-bold'>{course.category}</span>
                        <span className='text-gray-600 text-base'>
                            {course.author}
                        </span>
                    </div>
                    <h1 className='text-xl text-black font-bold mt-2'>{course.title}</h1>
                    <div className='flex mt-2 items-center space-x-2'>
                        <div className='flex items-center'>
                            <FaStar className='w-4 h-4 text-yellow-600' />
                            <FaStar className='w-4 h-4 text-yellow-600' />
                            <FaStar className='w-4 h-4 text-yellow-600' />
                            <FaStar className='w-4 h-4 text-yellow-600' />
                            <FaStar className='w-4 h-4 text-yellow-600' />
                            <FaStar className='w-4 h-4 text-yellow-600' />
                        </div>
                        <span className="text-base text-orange-400 font-semibold">({course.reviewNumber} Reviews)</span>
                    </div>
                    <div className='mt-3 mb-3 w-full h-[2px] bg-gray-500 opacity-20'></div>
                    <div className='mb-2 flex items-center justify-between'>
                        <div className='flex items-center space-x-2'>
                            <FaFile className="w-3 h-3 text-orange-600" />
                            <p className="text-base font-semibold text-gray-800">{course.lessons} Lessons</p>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <FaUserGroup className="w-3 h-3 text-orange-600" />
                            <p className="text-base font-semibold text-gray-800">{course.students} Students</p>
                        </div>
                    </div>
                </div>
            </div>
        </Tilt>
    )
}

export default CourseCard
