'use client';

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCart from "../Helper/SliderCart";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Slider = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass='item'
    >
      <SliderCart image="/images/r1.jpg" name="Sumit Saha" role="Web Developer" />
      <SliderCart image="/images/r2.jpg" name="Sayan Sen" role="MERN Developer" />
      <SliderCart image="/images/r3.jpg" name="Rafi Khan" role="Full Stack Developer" />
    </Carousel>
  );
};

export default Slider;
