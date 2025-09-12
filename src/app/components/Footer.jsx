
import Image from "next/image";
import logo from './../../assets/logo/footer-logo.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-[#340404] to-[#161300]">
            <div className='flex flex-col md:flex-row space-y-4 sm:space-y-0 md:space-x-8 lg:space-x-16 xl:space-x-24 2xl:space-x-32 px-3 sm:px-6 lg:px-10 container mx-auto'>
                
                {/* left */}
                <div className="flex flex-col space-y-4 lg:space-y-24 mt-8">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-sm text-white font-medium sm:items-center">
                        <a href="#howitworks" className="text-base xl:text-xl">How it works</a>
                        <a href="#pricing" className="text-base xl:text-xl">Pricing</a>
                        <button className='cursor-pointer text-white flex items-center text-base xl:text-lg font-bold hover:underline transition duration-300'>
                            Claim Your AI Visibility Audit <span className='text-white ps-2 text-2xl'><HiMiniArrowSmallRight /></span>
                        </button>
                    </div>
                    <div className="sm:hidden flex">
                        <button className='group py-2.5 px-6 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'>
                            Book Strategy Call <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl'><HiMiniArrowSmallRight /></span>
                        </button>
                    </div>
                    <div className="hidden sm:flex">
                        <Image
                            src={logo}
                            alt="notionx Logo"
                            loading="lazy"
                            className='w-full h-fit mt-8 lg:mt-12 xl:mt-16'
                        />
                    </div>
                    
                </div>

                {/* right */}
                <div className="flex flex-col space-y-4 lg:space-y-24 my-6 justify-between">
                    <div className="hidden sm:flex justify-end">
                        <button className='group py-2.5 px-6 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'>
                            Book Strategy Call <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl'><HiMiniArrowSmallRight /></span>
                        </button>
                        
                    </div>
                    <div className="block sm:hidden">
                        <Image
                            src={logo}
                            alt="notionx Logo"
                            loading="lazy"
                            className='w-full h-fit mt-8 lg:mt-12 xl:mt-16'
                        />
                    </div>
                    <div>
                        <div className="text-white flex flex-row">
                            <div className="border-r-[0.0625rem] border-r-white/40 px-2 2xl:px-4 content-font text-sm">
                                <p>© 2025 notionX. All rights reserved. </p>
                            </div>
                            <div className="border-r-[0.0625rem] border-r-white/40 px-2 2xl:px-4 content-font text-sm">
                                <p>Privacy Policy</p>
                            </div>
                            <div className="px-2 2xl:px-4 content-font text-sm">
                                <p>Terms of Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;