
import Image from 'next/image';
import Arrow from './../../assets/OurProcess/Arrow.svg';

const Process = () => {
    return (
        <div>
            <div className="p-12 sm:py-20 lg:py-28 lg:px-20">
                <div>
                    <h1 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Our GEO Process</h1>
                    <p className="text-lg lg:text-xl content-font mt-3">How we get your business featured in AI responses</p>
                </div>
                <div className="mt-12 lg:mt-20">
                    <div className="grid gap-8 sm:gap-10 xl:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="text-[var(--foreground)] rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">AI Visibility Audit</h3>
                                <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                    We analyze your current AI presence and identify critical citation opportunities.                          
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2 items-start">
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
                        <div className="text-[var(--foreground)] rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">AI Schema Development</h3>
                                <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                We create structured data that AI engines prioritize for citation.                       
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2 items-start">
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
                        <div className="text-[var(--foreground)] rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">Citation Building</h3>
                                <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                    We establish your business as the authoritative source across the web.                           
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2 items-start">
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
                        <div className="text-[var(--foreground)] rounded-2xl flex flex-col justify-between">
                            <div>
                                <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">AI Monitoring & Optimization</h3>
                                <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                    We continuously track and improve your AI visibility.                        
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2 items-start">
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