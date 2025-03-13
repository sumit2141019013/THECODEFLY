import React from 'react'
import Image from "next/image"
import { FaFacebookF, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
    <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white/20'>
    <div>
        <Image src="/images/cfly.png" alt="load" width={100} height={100}/>
        <p className='text-white/50'>Thank You!! For choosing our website.Please share your reviews.</p>
        <div className='flex items-center space-x-4 mt-6'>
            <FaFacebookF className='w-6 h-6 text-blue-600'/>
            <FaYoutube className='w-6 h-6 text-sky-500'/>
            <FaInstagram className='w-6 h-6 text-red-700'/>
            <FaGithub className='w-6 h-6 text-pink-600'/>
        </div>
        </div>
<div >
    <h1 className='footer_heading'>Popular</h1>
    <p className='footer_link'>JAVA</p>
    <p className='footer_link'>DSA</p>
    <p className='footer_link'>WEB DEVELOPMENT</p>
    <p className='footer_link'>MERN STACK</p>
    <p className='footer_link'>APP DEVELOPMENT</p>
</div>
<div >
    <h1 className='footer_heading'>Quick Links</h1>
    <p className='footer_link'>HOME</p>
    <p className='footer_link'>ABOUT</p>
    <p className='footer_link'>COURSES</p>
    <p className='footer_link'>INSTRUCTOR</p>
    <p className='footer_link'>PROFILE</p>
    <p className='footer_link'>PRIVACY POLICY</p>
</div>
<div>
    <h1 className='footer_heading'>Subscribe To Our Newsletter.</h1>
    <input type="text" placeholder='Enter Your Email' className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white'/>

    <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white hover:bg-rose-900 hover:text-white'>Subscribe</button>
</div>
        </div>
        <p className='text-center mt-4 text-base text-white/70'>©copyright 2025 by THECODEFLY</p>
    </div>
  )
}

export default Footer