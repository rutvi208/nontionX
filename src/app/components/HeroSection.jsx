import Image from "next/image";
import { LuRocket } from "react-icons/lu";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import Hero from "./../../assets/HeroSection/HeroVisual.svg";
import HeroBg from './../../assets/backgrounds/HeroBg.svg';
import Navbar from '@/app/components/Navbar';
// import ChatGPT from './../../assets/HeroSection/ChatGPT.svg';
// import Perplexity from './../../assets/HeroSection/Perplexity.svg';
// import Gemini from './../../assets/HeroSection/Gemini.png';

const HeroSection = () => {
    return (
        <div>
            <div className='relative w-full h-[780px] md:h-[640px] lg:h-[800px] overflow-hidden '>
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
                    <section className="py-10 lg:py-20">
                        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 xl:gap-12">
                            {/* Left Text Section */}
                            <div className="flex-1 space-y-7 lg:space-y-7">
                            
                                <div className="inline-flex items-center gap-2 border border-[#8E6754] px-4 py-1 rounded-full">
                                    <span><LuRocket /></span>
                                    <span className="text-sm heading-font">AI Search Dominates.</span>
                                </div>

                                <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-[5.375rem] lg:leading-[4.6rem] xl:leading-[5.25rem] tracking-[-0.115rem] font-light text-[var(--foreground)] heading-font">
                                    Dominate AI <span className="font-semibold">Search Results </span>
                                    Before Your Competitors Do
                                </h1>

                                <div>
                                    <a href="#" className="text-[var(--cta)] lg:text-lg font-semibold hover:underline flex items-center gap-2">
                                        Audit Your AI Visibility Now <span><HiMiniArrowSmallRight/> </span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Image Section */}
                            <div>
                                <div>
                                    <Image
                                         src={Hero}
                                        alt="Hero Image"
                                        className="rounded-lg object-cover w-full h-full sm:w-fit sm:h-[14rem] xl:w-fit xl:h-fit"
                                    />
                                </div>
                                {/* <div className="relative w-full h-full overflow-hidden">
                                    <Image
                                    src={Hero}
                                    alt="Hero Image"
                                    className="rounded-lg object-cover w-full h-full lg:w-[25rem] xl:w-fit sm:h-fit"
                                    />
                                    <div className="absolute inset-2 sm:inset-3.5 lg:inset-3 xl:inset-8 z-[5] drop-shadow-lg">
                                        <div className="space-y-1 xl:space-y-2 p-7">
                                            <div className="bg-gradient-to-b from-white to-white/70 backdrop-blur-md rounded-t-xl lg:rounded-t-2xl p-3 sm:p-5 lg:p-4 xl:p-7">
                                                <h2 className="text-center content-font text-[#5D3E35] sm:text-lg lg:text-base xl:text-[1.375rem]">We make your business the #1 recommendation when customers ask AI for
                                                   <span className="font-semibold"> Local services, Products, or Solutions in your Industry.</span>
                                                </h2>
                                            </div>
                                            <div className="bg-gradient-to-t from-white to-white/70 backdrop-blur-md rounded-b-xl lg:rounded-b-2xl justify-items-center py-2 xl:px-5 xl:py-4">
                                                <div className="flex flex-row space-x-6 xl:space-x-8">
                                                    <Image
                                                       src={ChatGPT} 
                                                       alt="ChatGPT Logo"
                                                       loading="lazy"
                                                       className="w-8 h-8 xl:w-full xl:h-full"
                                                     />
                                                     <Image
                                                       src={Perplexity} 
                                                       alt="Perplexity Logo"
                                                       loading="lazy"
                                                       className="w-8 h-8 xl:w-full xl:h-full"
                                                     />
                                                    <Image
                                                       src={Gemini} 
                                                       alt="Gemini Logo"
                                                       loading="lazy"
                                                       className="w-8 h-8 xl:w-full xl:h-full"
                                                     />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;