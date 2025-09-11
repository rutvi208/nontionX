import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import BeTheAnswer from '@/assets/WhyUs/BeTheAnswer.svg';
import FasterResults from '@/assets/WhyUs/FasterResults.svg';
import FutureProofStrategy from '@/assets/WhyUs/FutureProofStrategy.svg';
import MeasurableROI from '@/assets/WhyUs/MeasurableROI.svg';

const Whyus = () => {
    return (
        <div className="mb-20 px-3">
            <section className="py-12 sm:py-20 bg-[var(--pastelbrown)] container mx-auto rounded-3xl border border-[var(--stroke)]">
                <div className="flex flex-col px-10 xl:px-20">
                    <div className="relative sm:w-6/12 p-[1px] rounded-full bg-[conic-gradient(at_center,_#FFB900,_#F4364C,_#FFB900)] mb-6">
                        <div className="flex flex-row gap-2.5 items-center bg-white rounded-full py-[0.44rem] px-3 text-[var(--foreground)] text-base font-normal content-font">
                            <div className="p-2 rounded-full text-white bg-[conic-gradient(at_center,_#FFB900,_#F4364C,_#FFB900)]"><BiSearch /></div>
                            Search has changed...
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium tracking-tight text-[var(--foreground)] heading-font xl:w-6/12">
                        Here's why our clients win in AI answers.
                    </h1>
                    <div className="mt-[3.75rem] grid gap-8 sm:gap-10 xl:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="text-[var(--foreground)] rounded-2xl">
                            <Image
                                src={BeTheAnswer}
                                alt="Be The Answer"
                                loading="lazy"
                                className="sm:mb-6 w-24 h-24 md:w-fit md:h-fit"
                                />
                            <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">Be THE Answer</h3>
                            <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                Don't compete for clicks. Be the definitive AI recommendation when customers ask.                            
                            </p>
                        </div>
                        <div className="text-[var(--foreground)] rounded-2xl">
                            <Image
                                src={FasterResults}
                                alt="Faster Results"
                                loading="lazy"
                                className="sm:mb-6 w-24 h-24 md:w-fit md:h-fit"
                                />
                            <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">Faster Results</h3>
                            <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                Achieve AI visibility in 4-6 weeks vs. 6-12 months for traditional SEO.                        
                            </p>
                        </div>
                        <div className="text-[var(--foreground)] rounded-2xl">
                            <Image
                                src={FutureProofStrategy}
                                alt="Future Proof Strategy"
                                loading="lazy"
                                className="sm:mb-6 w-24 h-24 md:w-fit md:h-fit"
                                />
                            <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">Future Proof Strategy</h3>
                            <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                Align with how customers actually search today: asking AI tools direct questions.                            
                            </p>
                        </div>
                        <div className="text-[var(--foreground)] rounded-2xl">
                            <Image
                                src={MeasurableROI}
                                alt="Measurable ROI"
                                loading="lazy"
                                className="sm:mb-6 w-24 h-24 md:w-fit md:h-fit"
                                />
                            <h3 className="heading-font text-left text-lg lg:text-2xl tracking-[-0.06rem] mb-2 lg:mb-3">Measurable ROI</h3>
                            <p className="text-base lg:text-lg text-left text-[#0f0a08c1] content-font">
                                Track AI mentions, branded searches, and qualified leads from AI-powered discovery.                           
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )}

export default Whyus;