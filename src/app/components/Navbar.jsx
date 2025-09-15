"use client";

import {useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TbMenu } from "react-icons/tb";
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
                            <TbMenu size={20} color={onTap ? '#4D4D4D' : '#222222'} />
                        </div>
                            <div
                                onClick={handleNav}
                                className={nav ? 'overflow-hidden z-10 lg:hidden ease-in duration-300 fixed text-[var(--foreground)] left-0 top-0 w-full h-screen bg-[#F7F7F7] px-4 py-8 flex flex-col translate-x-0' : 'fixed top-0 h-screen -left-[100%] ease-in duration-500'}
                            >

                            <div className='justify-between flex'>
                                <Link href={"/"}><Image fetchPriority='high' src={Navlogo} alt="ResoNex logo" width={160} height={40}
                                loading="lazy" /></Link>
                            </div>

                            <ul className='h-max w-full text-center py-8'>
                                <li className='px-4 text-2xl py-4'><Link href="#howitworks">How it works</Link></li>
                                <li className='px-4 text-2xl py-4'><Link href='#pricing'>Pricing</Link></li>
                                <button className='mt-4 py-2.5 px-6 bg-[var(--cta)] text-[var(--pastelbrown)] rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] transition duration-300'>
                                    Book Strategy Call
                                </button>
                            </ul>
                        </div>
                        </header>
                        </div>
                    </section>
            </nav>
        </div>
    )
}

export default Navbar;