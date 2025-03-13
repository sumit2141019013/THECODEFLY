import React from 'react'

const HeroContent = () => {
  return (
    <div>
        <h1  data-aos="fade-right" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem]
        lg:leading-[3.5rem] xl:leading-[4rem] text-white'>No.1 e-learning courses for placement.</h1>
        <p data-aos="fade-left" data-aos-delay="150" className='mt-6 text-sm md:text-base text-white/60'
        >Provide you the best Developmental Courses , prepatory guide to grab your dream job at your dream company. GOOD LUCK!!</p>
        <div className='mt-8 flex items-center space-x-4'>
            <button data-aos="zoom-in" data-aos-delay="300" className='btn_cls bg-green-700 hover:bg-green-900'> Get Started</button>
            <button data-aos="zoom-in" data-aos-delay="450" className='btn_cls bg-gray-500 hover:bg-gray-700'> Learn More</button>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-4 items-center mt-8'>
  <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col items-center">
    <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>290+</p>
    <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
    <p className='md:text-lg text-sm text-white/70'>Mentors</p>
  </div>
  
  <div data-aos="fade-up" data-aos-delay="700"className="flex flex-col items-center">
    <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>20+</p>
    <p className='w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg'></p>
    <p className='md:text-lg text-sm text-white/70'>Courses</p>
  </div>
  
  <div data-aos="fade-up" data-aos-delay="900" className="col-span-2 md:col-span-1 flex flex-col items-center">
    <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>333+</p>
    <p className='w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg'></p>
    <p className='md:text-lg text-sm text-white/70'>Students</p>
  </div>
</div>

    </div>
    
  )
}

export default HeroContent