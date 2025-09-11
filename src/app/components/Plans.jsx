
import Image from 'next/image';
import PlansBg from './../../assets/backgrounds/PlansBg.svg';
import Star from './../../assets/Plans/Star.png';
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiShield } from "react-icons/fi";
import Knowtion from './../../assets/Plans/Knowtion.svg';
import FirefliesAI from './../../assets/Plans/FirefliesAI.svg';
import CimconSoftwares from './../../assets/Plans/Cimcon-software.svg';
import KenGanley from './../../assets/Plans/Kenganley.svg';
import Malish from './../../assets/Plans/Malish.svg';

const Plans = () => {
    return (
        <div className="bg-black relative overflow-hidden">
            <Image
                    src={PlansBg}
                    alt="Plans Background"
                    loading="lazy"
                    className='absolute inset-0 object-cover h-full w-full ' 
                    // z index not added
                />
                <div className='relative inset-0 z-10'>
                    <div className="container mx-auto place-items-center py-20 px-4">
                        <h1 className="heading-font text-white text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">GEO Service Plans</h1>
                        <p className="text-lg lg:text-xl text-center text-white content-font mt-3">Choose the plan that fits your business goals and budget</p>

                        <div className='flex flex-col md:flex-row space-y-4 sm:space-y-0 md:space-x-8 lg:space-x-10 mt-24'>
                            <div className='bg-[#151515] rounded-xl p-10 flex flex-col'>

                                {/* professional */}
                                <div className='bg-[var(--pastelbrown)] border-[0.0625rem] border-[var(--stroke)] rounded-full px-7 py-3.5 flex flex-row space-x-3 items-center justify-center'>
                                   <Image 
                                      src={Star}
                                      alt='Star'
                                      className='w-fit h-fit'
                                   />
                                   <h1 className='text-xl lg:text-2xl uppercase'>professional</h1>
                                </div>

                                <h1 className='text-white font-medium text-4xl lg:text-[4rem] tracking-[-0.08rem] mt-6 lg:mt-10'>$1,997</h1>
                                <p className='text-white text-lg lg:text-xl content-font'>per month</p>

                                <div>
                                    {/* <div className='flex flex-row space-x-3 items-center lg:mt-[3.75rem]'>
                                        <FiCheckCircle className='text-[#FAEEE6]'/>
                                        <p className='text-white content-font text-lg lg:text-xl'>Competitive position defense</p>
                                    </div> */}
                                    <div className="space-y-3 my-10 lg:my-[3.75rem]">
                                        {[
                                            "Competitive position defense",
                                            "Advanced schema development",
                                            "Weekly AI monitoring",
                                            "6 AI platforms optimization",
                                        ].map((feature, index) => (
                                            <div
                                            key={index}
                                            className="flex flex-row space-x-3 items-center"
                                            >
                                            <FiCheckCircle className="text-[#FAEEE6]" />
                                            <p className="text-white content-font text-lg lg:text-xl">
                                                {feature}
                                            </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className='mt-auto py-2.5 px-6 justify-center w-full place-content-center bg-[var(--cta)] text-[var(--pastelbrown)] flex items-center rounded-full text-base lg:text-lg font-medium hover:bg-white hover:text-[var(--cta)] transition duration-300'>
                                    Get Started
                                </button>

                            </div>

                            {/* enterprise */}
                            <div className='bg-[conic-gradient(at_left,_#EFE3DD,_#FDF8F5)] rounded-xl p-10 flex flex-col '>

                                <div className='bg-[var(--pastelbrown)] border-[0.0625rem] border-[var(--stroke)] rounded-full px-8 py-4 flex flex-row space-x-3 items-center justify-center'>
                                   <Image 
                                      src={Star}
                                      alt='Star'
                                      className='w-fit h-fit'
                                   />
                                   <h1 className='text-xl lg:text-2xl uppercase'>enterprise</h1>
                                </div>

                                <h1 className='font-medium text-4xl lg:text-[4rem] tracking-[-0.08rem] mt-6 lg:mt-10'>$3,997</h1>
                                <p className='text-lg lg:text-xl content-font'>per month</p>

                                <div>
                                    <div className="space-y-3 my-10 lg:my-[3.75rem]">
                                        {[
                                            "Everything in Professional",
                                            "Custom AI training datasets",
                                            "Daily AI monitoring",
                                            "All AI platforms optimization",
                                            "Dedicated account manager",
                                        ].map((feature, index) => (
                                            <div
                                            key={index}
                                            className="flex flex-row space-x-3 items-center"
                                            >
                                            <FiCheckCircle className="text-[#9B715C]" />
                                            <p className="content-font text-lg lg:text-xl">
                                                {feature}
                                            </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <button className='mt-auto py-2.5 px-6 w-full justify-center place-content-center bg-[var(--cta)] text-[var(--pastelbrown)] flex items-center rounded-full text-base lg:text-lg font-medium hover:bg-white hover:text-[var(--cta)] transition duration-300'>
                                    Get Started
                                </button>

                            </div>
                        </div>

                        {/* USP */}
                        <div className='mt-6 lg:mt-10 flex flex-col sm:flex-row space-x-4 lg:space-x-8'>
                            <div className='text-[#FAEEE6] flex items-center space-x-3 pe-8 border-e-[0.0625rem] border-[#D4BAAE]'>
                                <FiCheckCircle/>
                                <p className='content-font text-base lg:text-xl '>Results in 6 weeks</p>
                            </div>
                            <div className='text-[#FAEEE6] flex items-center space-x-3 pe-8 border-e-[0.0625rem] border-[#D4BAAE]'>
                                <AiOutlineUsergroupAdd/>
                                <p className='content-font text-base lg:text-xl '>200+ businesses served</p>
                            </div>
                            <div className='text-[#FAEEE6] flex items-center space-x-3'>
                                <FiShield/>
                                <p className='content-font text-base lg:text-xl '>No long-term contracts</p>
                            </div>
                        </div>

                        {/* Testimonial section */}
                        <div className='bg-[#191919] rounded-xl mt-16 lg:mt-28 p-6 sm:p-8 lg:p-10 xl:px-16 max-w-5xl'>
                            <div className='mb-12 lg:mb-16 container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center'>
                                <div className='justify-center flex'><Image
                                    src={Knowtion}
                                    alt='Knowtion logo'
                                /></div>
                                <div className='justify-center flex'><Image
                                    src={FirefliesAI}
                                    alt='FirefliesAI logo'
                                /></div>
                                <div className='justify-center flex'><Image
                                    src={CimconSoftwares}
                                    alt='CimconSoftwares logo'
                                /></div>
                                <div className='justify-center flex'><Image
                                    src={KenGanley}
                                    alt='KenGanley logo'
                                /></div>
                                <div className='justify-center flex'><Image
                                    src={Malish}
                                    alt='Malish logo'
                                /></div>
                            </div>
                            <div className='text-center container mx-auto place-content-center flex flex-col justify-center'>
                                <p className='text-white content-font text-xl lg:text-2xl '>"SmartAI SEO transformed our visibility. We're now the top recommendationm for HVAC services in our region across all major AI platforms."</p>
                                <p className='text-white content-font text-sm lg:text-base mt-4 lg:mt-6'>Mike R., Regional HVAC Company</p>
                            </div>

                        </div>

                    </div>
                </div>
        </div>
    )
}

export default Plans;