"use client";

import Image from 'next/image';
import CtaBg from '@/../public/images/backgrounds/CTAbg.png';
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

const Cta = () => {
    return (
        <div className='px-3 lg:px-8 2xl:px-0'>
            <div className="relative w-full container mx-auto border-b-[0.0625rem] border-[#FAEEE6] rounded-3xl sm:rounded-4xl lg:rounded-[2.5rem] my-12 sm:my-20 xl:my-28">
                <Image
                    src={CtaBg}
                    alt="CTA Background"
                    loading="lazy"
                    fill
                    className='absolute inset-0 object-fill sm:object-cover rounded-3xl sm:rounded-4xl lg:rounded-[2.5rem]' 
                    // z index not added
                />
                <div className='relative z-10 rounded-3xl sm:rounded-4xl lg:rounded-[2.5rem] bg-gradient-l from-yellow-200 from-5% via-20% via-white to-90% to-yellow-100 sm:bg-[#ffffff02]'>
                    <div className="container mx-auto place-items-center py-8 sm:py-20 px-4">
                        <p className="text-base sm:text-lg lg:text-xl text-center content-font mb-2 sm:mb-6 lg:mb-8 w-11/12 lg:w-7/12 xl:w-5/12 mx-auto">Professional GEO services that make your business the #1 AI recommendation in your market.</p>
                        <h1 className="heading-font text-center font-semibold text-3xl sm:text-6xl lg:text-[4.375rem] tracking-[-0.088rem] lg:w-7/12 mx-auto">Ready to Own AI Search in Market?</h1>
                    
                        <div className='mt-8 sm:mt-10 lg:mt-12 items-center space-y-3 sm:space-y-0 flex flex-col sm:flex-row justify-center sm:space-x-7 lg:space-x-9'>
                            <div>
                                <button onClick={() => window.open('https://cal.com/notionx/20min', '_blank')} className='group py-2.5 px-10 bg-[var(--cta)] cursor-pointer text-white flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'>
                                    Book a GEO Strategy Call <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span>
                                </button>
                            </div>
                            <Link  
                                href="https://ai-seo-geo-auditor.netlify.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group text-[var(--cta)] text-lg lg:text-xl font-bold hover:underline flex items-center gap-2">
                                Claim My AI Visibility Audit <span className="transition-transform duration-300 ease-out group-hover:translate-x-1"><HiMiniArrowSmallRight/> </span>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta;