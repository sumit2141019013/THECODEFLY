'use client';
import React, { useEffect } from 'react'
import Hero from "./Hero/Hero";
import About from './About/About';
import Course from './Course/Course'
import Features  from './Features/Features';
import Review from "./Review/Review";
import Article from "./Article/Article";

import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    const initAos = async () => {
      const Aos = await import('aos');
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);
  
  return (
    <div>
        <Hero />
        <About />
        <Course />
        <Features />
        <Review />
        <Article />
-    </div>
  )
}

export default HomePage;