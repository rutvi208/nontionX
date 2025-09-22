
import Image from 'next/image';
import TesstimonialBg from '@/../public/images/CaseStudy/Testimonial-Bg.png';

const CaseStudy = () => {
    return (
        <div>
            <div className="mx-auto container pt-16 sm:pt-20 lg:pt-28 px-5 lg:px-8 2xl:px-0">
                <div>
                    <h1 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Real Results</h1>
                    <p className="text-lg lg:text-xl content-font mt-3">Proven impact of GEO across industries.</p>
                </div>

                {/* case study cards */}
                <div className="mt-10 sm:mt-12 lg:mt-20 border-[0.0625rem] border-[#9B715C] rounded-2xl lg:rounded-[1.25rem] px-5 py-8 sm:py-10 sm:px-8 lg:py-14 lg:px-10">
                    <h1 className="text-[var(--mudbrown)] text-xl xl:text-2xl tracking-tighter sm:mb-2">Architecture</h1>
                
                    <h1 className="font-normal tracking-tighter text-2xl sm:text-3xl lg:text-[2.5rem] text-left">Extension Architecture</h1>
                    
                    <div className="mt-6 lg:mt-8 xl:mt-16 items-center flex flex-col xl:grid xl:grid-cols-2 space-y-10 xl:space-y-0 space-x-0 lg:space-x-6 2xl:space-x-10">
                        {/* left section */}
                        <div className="flex flex-col space-y-6 lg:space-y-10">
                            <div className='flex flex-col space-y-6 sm:space-y-0 sm:flex-row space-x-6 sm:space-x-8 2xl:space-x-12 2xl:justify-around'>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5 flex flex-row items-baseline space-x-3 sm:flex-col sm:space-x-0'>
                                    <p className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+33%</p>
                                    <p className='content-font text-lg lg:text-xl mt-1'>AI Mentions</p>
                                </div>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5 flex flex-row items-baseline space-x-3 sm:flex-col sm:space-x-0'>
                                    <p className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>110</p>
                                    <p className='content-font text-lg lg:text-xl mt-1'>AI Overview</p>
                                </div>
                                <div className='border-l-2 border-[#D4BAAE] px-3 lg:px-5 flex flex-row items-baseline space-x-3 sm:flex-col sm:space-x-0'>
                                    <p className='font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]'>+51</p>
                                    <p className='content-font text-lg lg:text-xl mt-1'>ChatGPT Mentions</p>
                                </div>
                            </div>
                            <div className='relative overflow-hidden 2xl:mt-6 border-[0.0625rem] border-[var(--stroke)] rounded-lg lg:rounded-xl p-4 sm:p-5'>
                                <Image
                                    src={TesstimonialBg}
                                    alt="Tesstimonial Background"
                                    loading="lazy"
                                    className='absolute inset-0 object-cover h-full w-full' 
                                    // z index not added
                                />
                                <div className="relative inset-0 z-auto space-y-7">
                                    <p className='text-2xl lg:text-3xl xl:text-4xl tracking-tighter'>AI Growth Unlocked in Just 3.5 Months</p>
                                    <p className="content-font text-xl lg:text-2xl">London-based architectural design firm helping homeowners plan and build extensions, loft conversions, and renovations with expert planning approval support.</p>
                                    {/* <p className="text-[var(--mudbrown)] text-base lg:text-lg content-font">- Dr. Sarah M., Austin Dental Care</p> */}
                                </div>
                            </div>
                        </div>

                        {/* right section */}
                        <div className='flex flex-col space-y-6 sm:space-y-8 lg:space-y-10'>
                            <div>
                                <p className='text-xl lg:text-2xl font-medium'>The Challenge</p>
                                <div className='mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]'>
                                    <p className='content-font text-xl'>Despite a solid SEO foundation and strong brand presence, their content wasn't breaking through into Google AI Overviews and other AI search engines — limiting next-level visibility.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p className='text-xl lg:text-2xl font-medium'>The GEO Solution</p>
                                    {/* className='flex flex-row justify-between items-center' <p className='content-font text-sm lg:text-lg'>Results in 3.5 months</p> */}
                                </div>
                                <div className='mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]'>
                                    <p className='content-font text-xl'>We optimized AI-focused content clusters, enhanced internal linking, and expanded schema markup to boost AI Overview indexing and drive ChatGPT mentions.</p>
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