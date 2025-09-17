"use client";

import {useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenu, TbX } from "react-icons/tb";
import Navlogo from '@/assets/logo/navbar-logo.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Navbar = () => {
    const [onTap, setOnTap] = useState(false);
    
      const [nav, setNav] = useState(false)
      const handleNav = () => {
          setNav(!nav)
          setOnTap((prev) => !prev); // Toggle color
        // Your existing logic for handling navigation
        }

    return (
        <div>
            <nav>
                <section className="w-full flex flex-col items-center justify-center text-center">
                    <div className="container mx-auto w-full p-6">
                        <header className="flex justify-between items-center">
                        <div>
                            <Link href={"/"}><Image fetchPriority='high' src={Navlogo} alt="notionx Logo" width={180} height={60}
                            loading="lazy" className='w-40 h-16' /></Link>
                        </div>
                        <nav className="hidden md:flex gap-8 text-sm text-[var(--foreground)] font-medium items-center">
                            <a href="#howitworks" className="text-base lg:text-xl hover:text-[var(--cta)]">How it works</a>
                            <a href="#pricing" className="text-base lg:text-xl hover:text-[var(--cta)]">Pricing</a>
                            <button className='group py-2.5 px-6 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] border-[0.0625rem] border-[var(--cta)] flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'>
                                Book Strategy Call <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span>
                            </button>
                        </nav>
                        <div onClick={handleNav} className='md:hidden z-20'>
                            
                            {nav ? (
                            <TbX size={24} color="#222222" />  
                                ) : (
                                    <TbMenu size={24} color={onTap ? "#4D4D4D" : "#222222"} /> 
                                )}
                        </div>
                            <div
                                onClick={handleNav}
                                className={`fixed top-0 left-0 h-screen w-full bg-[#F7F7F7] px-4 py-8 flex flex-col text-[var(--foreground)] z-10 transform transition-transform duration-300 ease-in-out lg:hidden ${
                                    nav ? "translate-x-0" : "-translate-x-full"}`}                            >

                                <div className='justify-center flex'>
                                    <Link href={"/"}><Image fetchPriority='high' src={Navlogo} alt="ResoNex logo" width={160} height={40}
                                    loading="lazy" /></Link>
                                </div>

                                <ul className='h-max w-full pt-12'>
                                    <li className='text-2xl py-4 flex items-start'><Link href="#howitworks">How it works</Link></li>
                                    <li className='text-2xl py-4 flex items-start'><Link href='#pricing'>Pricing</Link></li>
                                    <Link  
                                        href="https://ai-seo-geo-auditor.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group text-2xl py-4 flex items-center gap-2">
                                        Claim Your AI Visibility Audit <span className="transition-transform duration-300 ease-out group-hover:translate-x-1"><HiMiniArrowSmallRight/> </span>
                                    </Link>
                                    
                                </ul>
                                <div>
                                    <button className='group mt-4 py-2.5 px-20 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] flex items-center rounded-full text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'>
                                        Book Strategy Call <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span>
                                    </button>
                                </div>
                            </div>
                        </header>
                        </div>
                    </section>
            </nav>
        </div>
    )
}

export default Navbar;