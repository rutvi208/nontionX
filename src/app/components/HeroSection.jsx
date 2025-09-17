import Image from "next/image";
import { LuRocket } from "react-icons/lu";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import HeroVisual from "./../../assets/HeroSection/Hero-visual.png";
import HeroBg from './../../assets/backgrounds/HeroBg.svg';
import Navbar from '@/app/components/Navbar';
import Link from "next/link";

const HeroSection = () => {
    return (
        <div>
            <div className='relative w-full h-[780px] md:h-[640px] xl:h-[800px] overflow-hidden'>
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
                    <section className="py-10 lg:pt-16 xl:py-20">
                        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 xl:gap-12">
                            {/* Left Text Section */}
                            <div className="flex-1 space-y-7 lg:space-y-7">
                            
                                <div className="inline-flex items-center gap-2 border border-[#8E6754] px-4 py-1 rounded-full">
                                    <span><LuRocket /></span>
                                    <span className="text-sm heading-font">AI Search Dominates.</span>
                                </div>

                                <h1 className="text-[2.5rem] md:text-5xl lg:text-6xl xl:text-[5.375rem] leading-[2.6rem] lg:leading-[4rem] xl:leading-[5.25rem] tracking-[-0.115rem] font-light text-[var(--foreground)] heading-font">
                                    Dominate AI <span className="font-semibold">Search Results </span>
                                    Before Your Competitors Do
                                </h1>

                                <div>
                                    <Link  
                                        href="https://ai-seo-geo-auditor.netlify.app/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="group text-[var(--cta)] text-lg lg:text-xl font-bold hover:underline flex items-center gap-2">
                                        Audit Your AI Visibility Now <span className="transition-transform duration-300 ease-out group-hover:translate-x-1"><HiMiniArrowSmallRight/> </span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Image Section */}
                            <div>
                                {/* <div>
                                    <Image
                                         src={Hero}
                                        alt="Hero Image"
                                        priority
                                        className="object-cover w-full h-full sm:w-fit sm:h-[14rem] xl:w-fit xl:h-fit"
                                    />
                                </div> */}
                                <div className="relative w-[380px] h-[300px] lg:w-[500px] xl:w-[600px] lg:h-[360px]">
                                    <Image
                                         src={HeroVisual}
                                        alt="Hero Image"
                                        priority
                                        fetchPriority="high"
                                        loading="eager"
                                        fill
                                        className="object-contain"
                                    />
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