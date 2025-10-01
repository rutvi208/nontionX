import Image from "next/image";
import { LuRocket } from "react-icons/lu";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import HeroMobile from "@/../public/images/HeroSection/Hero-visualBg.png"
import HeroVisual from "@/../public/images/HeroSection/Hero-Visual-Bg.svg";
import HeroBg from '@/../public/images/backgrounds/HeroBg.svg';
import Navbar from '@/app/components/Navbar';
import Link from "next/link";
import ChatGPT from '@/../public/images/HeroSection/ChatGPT.svg';
import Perplexity from '@/../public/images/HeroSection/Perplexity.svg';
import Gemini from '@/../public/images/HeroSection/Gemini.png';

const HeroSection = () => {
    return (
        <div>
            <div className='relative w-full h-[740px] md:h-[640px] xl:h-[700px] overflow-hidden'>
                <Image
                    src={HeroBg}
                    alt="Hero Background"
                    fill
                    loading="lazy"
                    className='absolute inset-0 object-cover h-full w-full'
                />
                <div className='absolute inset-0 z-10'>
                    <Navbar />

                    {/* Hero Section */}
                    <section className="py-10 lg:pt-16 lg:pb-12 xl:py-20">
                        <div className="container mx-auto px-4 sm:px-0 lg:px-6 flex flex-col lg:flex-row items-center gap-4 lg:gap-8 xl:gap-10">
                            {/* Left Text Section */}
                            <div className="flex-1 space-y-7 lg:space-y-7">
                            
                                <div className="inline-flex items-center gap-2 border border-[#8E6754] px-4 py-1 rounded-full">
                                    <span><LuRocket /></span>
                                    <span className="text-sm heading-font">AI Search Dominates.</span>
                                </div>

                                {/* <h1 className="text-[2rem] md:text-[2.5rem] lg:text-5xl xl:text-[3.5rem] 2xl:text-[4.375rem] leading-[2.4rem] lg:leading-[3rem] xl:leading-[4.8rem] tracking-[-0.115rem] xl:tracking-[-0.15rem] 2xl:tracking-tight font-light text-[var(--foreground)] heading-font">
                                    Win AI <span className="font-semibold">Search Results </span>
                                    & Capture More Customers Before Your Competitors Even Show Up
                                </h1> */}

                                <h1 className="text-[2.5rem] md:text-[2.625rem] lg:text-6xl xl:text-[5.375rem] 2xl:w-10/12 leading-[2.6rem] lg:leading-[4rem] xl:leading-[5.25rem] tracking-[-0.115rem] lg:tracking-[-0.16rem] font-light text-[var(--foreground)] heading-font">
                                    Own the Top Spot in <span className="font-semibold">AI Search </span>
                                    Before Anyone Else Can
                                </h1>

                                {/* <h1 className="text-[2.5rem] md:text-5xl lg:text-6xl xl:text-[5.375rem] leading-[2.6rem] lg:leading-[4rem] xl:leading-[5.25rem] tracking-[-0.115rem] font-light text-[var(--foreground)] heading-font">
                                    Dominate AI <span className="font-semibold">Search Results </span>
                                    Before Your Competitors Do
                                </h1> */}

                                <div>
                                    <Link  
                                        href="https://geo.notionx.ai/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group text-[var(--cta)] text-lg lg:text-xl font-bold hover:underline flex items-center gap-2">
                                        Audit My AI Visibility Now <span className="transition-transform duration-300 ease-out group-hover:translate-x-1"><HiMiniArrowSmallRight/> </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Image Section */}
                            <div>
                                {/* <div className="sm:hidden">
                                    <Image
                                         src={HeroImage}
                                        alt="Hero Image"
                                        priority
                                        fetchPriority="high"
                                        className="w-[380px] h-auto"
                                    />
                                </div> */}
                                <div className="relative w-[380px] h-[320px] lg:w-[500px] xl:w-[600px] lg:h-[360px]">
                                    <Image
                                         src={HeroMobile}
                                        alt="Hero Image"
                                        priority
                                        fetchPriority="high"
                                        loading="eager"
                                        fill
                                        className="object-contain sm:hidden"
                                    />
                                    <Image
                                         src={HeroVisual}
                                        alt="Hero Image"
                                        priority
                                        fetchPriority="high"
                                        loading="eager"
                                        fill
                                        className="object-contain hidden sm:block"
                                    />
                                    <div className="absolute inset-0 z-auto px-10 lg:px-12 xl:px-9 py-16 xl:py-5 place-content-center">
                                        <div className="flex flex-col space-y-1 lg:space-y-2 xl:px-12">
                                            <div className="bg-white rounded-t-2xl rounded-b-md p-4 lg:p-5 container mx-auto justify-center place-items-center text-center">
                                                <h1 className="content-font lg:text-lg xl:text-xl text-center font-semibold text-[#5D3E35]">Powered by GEO</h1>
                                                <h1 className="content-font lg:text-lg xl:text-xl text-center font-semibold text-[#5D3E35]">(Generative Engine Optimization)</h1>
                                                <p className="content-font lg:text-lg xl:text-xl text-center text-[#5D3E35] mt-1">The new way to optimize for AI search engines like Google AI Overviews, ChatGPT, and Perplexity.</p>
                                            </div>
                                            <div className="bg-white rounded-b-2xl rounded-t-md py-1 lg:py-3 xl:py-4">
                                                <div className="flex justify-center items-center gap-6 sm:gap-10">
                                                    <Image src={ChatGPT} alt="ChatGPT Logo" className="h-8 w-8 lg:h-10 lg:w-10" />
                                                    <Image src={Perplexity} alt="Perplexity Logo" className="h-8 w-8 lg:h-10 lg:w-10" />
                                                    <Image src={Gemini} alt="Gemini Logo" className="h-8 w-8 lg:h-11 lg:w-11" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;