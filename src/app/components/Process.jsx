
import Image from 'next/image';
import Arrow from './../../assets/OurProcess/Arrow.svg';
// import ProcessBg from './../../assets/backgrounds/ProcessBg.svg';
import LightStar from './../../assets/OurProcess/light-star.png';
import MediumStar from './../../assets/OurProcess/medium-star.png';
import DarkStar from './../../assets/OurProcess/dark-star.png'; 

const Process = () => {

    // Number of stars per row (enough to cover full screen width)
  const starCount = 30;

  // Utility to generate one zig-zag row
  const renderRow = (StarImage, rowKey) =>
    Array.from({ length: starCount }, (_, i) => (
      <div
        key={`${rowKey}-${i}`}
        className={`w-20 h-20 flex items-center justify-center ${
          i % 2 === 0 ? "translate-y-0" : "translate-y-6"
        }`}
      >
        <Image src={StarImage} alt="star" width={60} height={60} />
      </div>
    ));

    return (
        <div className='relative bg-white'>
            {/* <Image
                    src={ProcessBg}
                    alt="Process Background"
                    loading="lazy"
                    className='hidden sm:block absolute bottom-0 inset-x-0 h-fit w-fit'
                /> */}
            {/* <div className='absolute top-52 inset-x-0'>
                <div className="relative w-full h-[240px] overflow-hidden">
                    <div
                    className="absolute inset-x-0 top-0 h-[80px]"
                    style={{
                        backgroundImage: `url(${LightStar.src})`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "80px 80px",
                    }}
                    />

                    <div
                    className="absolute inset-x-0 top-[80px] h-[80px]"
                    style={{
                        backgroundImage: `url(${MediumStar.src})`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "80px 80px",
                        backgroundPosition: "40px 0", 
                    }}
                    />

                    <div
                    className="absolute inset-x-0 top-[160px] h-[80px]"
                    style={{
                        backgroundImage: `url(${DarkStar.src})`,
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "80px 80px",
                    }}
                    />
                </div>
            </div> */}

            <div className="absolute inset-x-0 bottom-0 w-full flex flex-col items-center -space-y-2 overflow-x-hidden">
                
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
            <div className="relative z-10 px-12 py-12 sm:py-20 lg:py-28 2xl:px-20">
                <div>
                    <h1 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Our GEO Process</h1>
                    <p className="text-lg lg:text-xl content-font mt-3">How we get your business featured in AI responses</p>
                </div>

                <div className="mt-12 lg:mt-20">
                    <div className="grid gap-4 sm:gap-2 2xl:gap-3 md:grid-cols-2 xl:grid-cols-4">
                        <div className="p-3 lg:p-5 border-[0.0625rem] border-[var(--stroke)] rounded-2xl h-full flex flex-col justify-between bg-gradient-to-bl from-white via-30% via-[var(--pastelbrown)] to-60% to-white">
                            <div className=''>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">AI Visibility Audit</h3>
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
                        <div className="p-3 lg:p-5 border-[0.0625rem] border-[var(--stroke)] rounded-2xl h-full flex flex-col justify-between bg-gradient-to-tl from-white via-40% via-[var(--pastelbrown)] to-70% to-white">
                            <div className=''>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">AI Schema Development</h3>
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
                        <div className="p-3 lg:p-5 border-[0.0625rem] border-[var(--stroke)] rounded-2xl h-full flex flex-col justify-between bg-gradient-to-br from-white via-20% via-[var(--pastelbrown)] to-60% to-white">
                            <div className=''>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">Citation Building</h3>
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
                        <div className="p-3 lg:p-5 border-[0.0625rem] border-[var(--stroke)] rounded-2xl h-full flex flex-col justify-between bg-gradient-to-tr from-white via-32% via-[var(--pastelbrown)] to-60% to-white">
                            <div className=''>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2">AI Monitoring & Optimization</h3>
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
    )
}

export default Process;