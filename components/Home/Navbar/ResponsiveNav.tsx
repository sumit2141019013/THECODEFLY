'use client';
import React, { useState } from 'react';
import Nav from "./Nav";
import Mobilenav from './Mobilenav';

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  return (
    <>
      <Nav openNav={showNavHandler} />
      <Mobilenav showNav={showNav} closeNav={hideNavHandler} /> 
    </>
  );
};

export default ResponsiveNav;

