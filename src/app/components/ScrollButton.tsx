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
    <div className='z-40 relative'>
        {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer right-4 bottom-4 sm:bottom-5 sm:right-5 bg-[var(--pastelbrown)] text-[var(--foreground)] border border-[var(--stroke)] p-3 rounded-full shadow-lg hover:text-black transition-all"
        >
          <HiOutlineChevronUp size={20} />
        </button>
        )}
    </div>
  )
}

export default ScrollButton