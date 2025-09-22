
import Image from "next/image";
import logo from './../../assets/logo/footer-logo.svg';
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-[#340404] to-[#161300]">
            <div className='flex flex-col space-y-4 sm:space-y-10 xl:space-y-16 px-3 lg:px-6 container mx-auto'>
                
                {/* left */}
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between mt-8">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white font-semibold sm:items-center">
                        <a href="#howitworks" className="text-xl hover:text-[var(--cta)]">How it works</a>
                        <a href="#pricing" className="text-xl hover:text-[var(--cta)]">Pricing</a>
                        <Link 
                            href="https://ai-seo-geo-auditor.netlify.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='cursor-pointer group text-white flex items-center text-xl font-semibold hover:text-[var(--cta)] transition duration-300'>
                            Claim My AI Visibility Audit <span className='text-white ps-2 text-2xl group-hover:text-[var(--cta)] transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span>
                        </Link>
                    </div>
                    <div className="justify-end-safe">
                        <button
                            className='group py-2.5 px-10 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] border-[0.0625rem] border-[var(--cta)] flex items-center rounded-full text-base lg:text-lg font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[0.0625rem] hover:border-[var(--cta)] transition duration-300'>
                            Book a GEO Strategy Call <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'><HiMiniArrowSmallRight /></span>
                        </button>
                    </div>
                    
                </div>

                {/* right */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 mt-8 sm:justify-between sm:items-end">
                    <div>
                        <Link href={"/"}><Image
                            src={logo}
                            alt="notionx Logo"
                            loading="lazy"
                            className='w-fit h-fit'
                        /></Link>
                    </div>
                    <div>
                        <div className="text-white flex flex-col space-y-4 sm:space-y-0 sm:flex-row mb-6 lg:mb-8 content-font text-sm">
                            <div className="sm:border-r-[0.0625rem] border-r-white/40 px-2 2xl:px-4">
                                <p>© 2025 notionX. All rights reserved. </p>
                            </div>
                            <div className="flex flex-row">
                                <div className="border-r-[0.0625rem] border-r-white/40 px-2 2xl:px-4 cursor-pointer hover:text-[var(--cta)]">
                                    <p><Link href="https://www.notionmind.com/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link></p>
                                </div>
                                <div className="px-2 2xl:px-4 cursor-pointer hover:text-[var(--cta)]">
                                    <p><Link href="https://www.notionmind.com/terms-of-use" target="_blank" rel="noopener noreferrer">Terms of Services</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;