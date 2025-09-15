
import Image from 'next/image';
import TesstimonialBg from './../../assets/CaseStudy/Testimonial-Bg.png';

const CaseStudy = () => {
    return (
        <div>
            <div className="mx-auto container pt-16 sm:pt-20 lg:pt-28 px-5 lg:px-8 2xl:px-0">
                <div>
                    <h1 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Real Results</h1>
                    <p className="text-lg lg:text-xl content-font mt-3">Proven impact of GEO across industries.</p>
                </div>

                {/* content */}
                <div className="mt-10 sm:mt-12 lg:mt-20 border-[0.0625rem] border-[#9B715C] rounded-2xl lg:rounded-[1.25rem] px-5 py-8 sm:py-10 sm:px-8 lg:py-14 lg:px-10">
                    <h1 className="font-normal tracking-tighter text-2xl sm:text-3xl lg:text-[2.5rem] text-left">Local Dental Practice</h1>
                    
                    <div className="mt-6 lg:mt-8 flex flex-col xl:flex-row space-y-10 xl:space-y-0 space-x-0 lg:space-x-10">
                        {/* left section */}
                        <div className="flex flex-col space-y-6 lg:space-y-10">
                            <div className='grid grid-cols-2 gap-6 sm:flex sm:flex-row space-x-6 sm:space-x-8 xl:space-x-12 mt-6 sm:mt-10 lg:mt-12'>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5'>
                                    <p className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+340%</p>
                                    <p className='content-font text-lg lg:text-xl mt-1'>AI Mentions</p>
                                </div>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5'>
                                    <p className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+180%</p>
                                    <p className='content-font text-lg lg:text-xl mt-1'>New Patient Calls</p>
                                </div>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5'>
                                    <p className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+250%</p>
                                    <p className='content-font text-lg lg:text-xl mt-1'>Local Pack Visibility</p>
                                </div>
                            </div>
                            <div className='relative overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-lg lg:rounded-xl p-4 sm:p-5'>
                                <Image
                                    src={TesstimonialBg}
                                    alt="Tesstimonial Background"
                                    loading="lazy"
                                    className='absolute inset-0 object-cover h-full w-full' 
                                    // z index not added
                                />
                                <div className="relative inset-0 z-10 space-y-7">
                                    <p className="content-font text-xl lg:text-2xl">"We're now the first recommendation when people ask ChatGPT about dentists in Austin. Our phone hasn't stopped ringing."</p>
                                    <p className="text-[var(--mudbrown)] text-base lg:text-lg content-font">- Dr. Sarah M., Austin Dental Care</p>
                                </div>
                            </div>
                        </div>

                        {/* right section */}
                        <div className='flex flex-col space-y-6 sm:space-y-8 lg:space-y-10'>
                            <div>
                                <p className='text-xl lg:text-2xl font-medium'>The Challenge</p>
                                <div className='mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]'>
                                    <p className='content-font text-xl'>Austin dental practice struggling to compete with established competitors in local search. Traditional SEO wasn't delivering qualified leads fast enough.</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-row justify-between'>
                                    <p className='text-xl lg:text-2xl font-medium'>The GEO Solution</p>
                                    <p className='content-font text-sm lg:text-lg'>Results in 6 weeks</p>
                                </div>
                                <div className='mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]'>
                                    <p className='content-font text-xl'>Implemented structured content optimization and local schema markup targeting AI-powered search queries about dental services in Austin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CaseStudy;