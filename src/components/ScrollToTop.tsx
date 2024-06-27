// ScrollToTop.js
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="w-full m-0 p-0 sticky">
      {isVisible && (
        <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-primary hover:bg-[#0eb665] hover:text-gray-200 text-gray-300 p-3 rounded-full">
<FaArrowUp />
</button>
      )}
    </div>
  );
};

export default ScrollToTop;
