"use client";

import {useState, useEffect} from 'react';
import { HiOutlineChevronUp } from "react-icons/hi2";

const ScrollButton = () => {
    //scrolltotop
    const [isVisible, setIsVisible] = useState(false);

    // Toggle button visibility on scroll
    useEffect(() => {
    const toggleVisibility = () => {
        if (window.scrollY > 900) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    };
    //scrolltotopends

  return (
    <div>
        {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-black text-white border border-[#EDEDED] p-3 rounded-full shadow-lg hover:text-black transition-all"
        >
          <HiOutlineChevronUp size={20} />
        </button>
        )}
    </div>
  )
}

export default ScrollButton