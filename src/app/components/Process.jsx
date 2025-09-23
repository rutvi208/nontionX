
import Image from 'next/image';
import Arrow from '@/../public/images/OurProcess/Arrow.svg';
// import ProcessBg from './../../assets/backgrounds/ProcessBg.svg';
import LightStar from '@/../public/images/OurProcess/light-star.svg';
import MediumStar from '@/../public/images/OurProcess/medium-star.svg';
import DarkStar from '@/../public/images/OurProcess/dark-star.svg'; 
import ProcessBg1 from '@/../public/images/OurProcess/Process-bg1.png';
import ProcessBg2 from '@/../public/images/OurProcess/Process-bg2.png';
import ProcessBg3 from '@/../public/images/OurProcess/Process-bg3.png';
import ProcessBg4 from '@/../public/images/OurProcess/Process-bg4.png';

const Process = () => {

    // Number of stars per row (enough to cover full screen width)
  const starCount = 30;

  // Utility to generate one zig-zag row
  const renderRow = (StarImage, rowKey) =>
    Array.from({ length: starCount }, (_, i) => (
      <div
        key={`${rowKey}-${i}`}
        className={`w-20 h-20 flex items-center justify-center ${
          i % 2 === 0 ? "translate-y-0" : "translate-y-8"
        }`}
      >
        <Image src={StarImage} alt="star" width={60} height={60} />
      </div>
    ));

    return (
        <div className='relative bg-white'>
            

            <div className="absolute inset-x-0 bottom-0 w-full flex flex-col items-center -space-y-2 overflow-hidden">
                
                <div className="flex flex-row justify-center flex-nowrap overflow-visible opacity-50">
                    {renderRow(LightStar, "light")}
                </div>

                <div className="flex flex-row justify-center flex-nowrap overflow-visible">
                    {renderRow(LightStar, "light")}
                </div>

                <div className="flex flex-row justify-center flex-nowrap overflow-visible">
                    {renderRow(MediumStar, "medium")}
                </div>

                <div className="flex flex-row justify-center flex-nowrap overflow-visible">
                    {renderRow(DarkStar, "dark")}
                </div>
            </div>

            {/* content */}
            <div className="relative z-auto mx-auto container py-12 sm:py-20 lg:py-28 px-5 lg:px-8 2xl:px-0">
                <div>
                    <h1 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Our GEO Process</h1>
                    <p className="text-lg lg:text-xl content-font mt-3">How we get your business featured in AI responses.</p>
                </div>

                <div className="mt-12 lg:mt-20">
                    <div className="grid gap-4 sm:gap-3 md:grid-cols-2 xl:grid-cols-4">
                        <div className='relative overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-2xl'>
                            <Image
                                src={ProcessBg1}
                                alt="Process1 Background"
                                loading="lazy"
                                className='absolute inset-0 object-cover h-full w-full' 
                                // z index not added
                            />
                            <div className="relative inset-0 z-auto p-3 lg:p-5 h-full flex flex-col justify-between">
                                <div>
                                    <h2 className="heading-font font-semibold text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">AI Visibility Audit</h2>
                                    <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                        We analyze your current AI presence and identify critical citation opportunities.                          
                                    </p>
                                </div>
                                <div className="mt-10 sm:mt-12 lg:mt-18 flex flex-col space-y-2 items-start">
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            AI mention tracking</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Competitor citation analysis</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            AI answer gap identification</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-2xl'>
                            <Image
                                src={ProcessBg2}
                                alt="Process2 Background"
                                loading="lazy"
                                className='absolute inset-0 object-cover h-full w-full ' 
                                // z index not added
                            />
                            <div className="relative inset-0 z-auto p-3 lg:p-5 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="heading-font font-semibold text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">AI Schema Development</h3>
                                    <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                    We create structured data that AI engines prioritize for citation.                       
                                    </p>
                                </div>
                                <div className="mt-10 sm:mt-12 lg:mt-18 flex flex-col space-y-2 items-start">
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            LLM-optimized content creation</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Entity relationship mapping</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Prompt-aligned website updates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-2xl'>
                            <Image
                                src={ProcessBg3}
                                alt="Process3 Background"
                                loading="lazy"
                                className='absolute inset-0 object-cover h-full w-full ' 
                                // z index not added
                            />
                            <div className="relative inset-0 z-auto p-3 lg:p-5 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="heading-font font-semibold text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">Citation Building</h3>
                                    <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                        We establish your business as the authoritative source across the web.                           
                                    </p>
                                </div>
                                <div className="mt-10 sm:mt-12 lg:mt-18 flex flex-col space-y-2 items-start">
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            AI training dataset inclusion</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Strategic content partnerships</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Authority signal amplification</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-2xl'>
                            <Image
                                src={ProcessBg4}
                                alt="Process4 Background"
                                loading="lazy"
                                className='absolute inset-0 object-cover h-full w-full ' 
                                // z index not added
                            />
                            <div className="relative inset-0 z-auto p-3 lg:p-5 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="heading-font font-semibold text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">AI Monitoring & Optimization</h3>
                                    <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                        We continuously track and improve your AI visibility.                        
                                    </p>
                                </div>
                                <div className="mt-10 sm:mt-12 lg:mt-18 flex flex-col space-y-2 items-start">
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Weekly AI mention reports</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Prompt engineering updates</p>
                                    </div>
                                    <div className='flex flex-row space-x-3'>
                                        <Image src={Arrow} alt="Arrow icon"/>
                                        <p className="content-font text-base">
                                            Competitive position defense</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process;