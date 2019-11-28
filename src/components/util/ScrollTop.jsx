import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  // scroll to top of screen on new path
  const { pathname } = useLocation();
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
     window.scrollTo(0, 0); 
    }
  }, [pathname])  
  
  return null;
}

export default ScrollTop;

