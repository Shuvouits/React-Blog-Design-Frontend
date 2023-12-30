import React, { useState, useEffect } from 'react';
import './style.css';

export default function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  const scrollToTop = () => {
    const scrollStep = window.pageYOffset / 20;
    
    const scrollAnimation = () => {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
         {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className='fa fa-angle-up'></i>
        </button>
      )}
    </div>
  )
}
