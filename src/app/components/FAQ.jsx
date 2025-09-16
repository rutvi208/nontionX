"use client";

import {useState, useRef } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";

const Faq = () => {

    //Dropdown content FAQ
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = (section) => {
    setIsOpen((prev) => ({
        ...prev,
        [section]: !prev[section],
    }));
    };
    const contentRef = useRef(null);

    return (
        <div>
            <div className="container mx-auto place-items-center py-20 px-5 lg:px-8 2xl:px-0">
                <h1 className="heading-font text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Quick Answers</h1>
                <p className="text-lg lg:text-xl text-center content-font mt-3">Everything you need to know about GEO and AI search optimization</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-16 lg:mt-20">
                    {/* <div className="rounded-lg border-[0.0625rem] border-[var(--stroke)] text-lg lg:text-xl px-6"
                        onClick={() => toggleSection('technologyStrategy')}
                        aria-expanded={isOpen['technologyStrategy']}
                        aria-controls="technologyStrategy-content"
                        role="button"
                        aria-label="Toggle Technology Strategy Section"
                    >
                        <div className="flex justify-between items-center cursor-pointer py-4">
                            <p className="content-font">What is GEO and how is it different from traditional SEO?</p>
                            <span>{isOpen['technologyStrategy'] ? <HiOutlineChevronUp size={20} color='#AD8775' style={{ strokeWidth: 3 }} /> : <HiOutlineChevronDown size={20} color='#AD8775' style={{ strokeWidth: 3 }} />}</span>
                        </div>
                        <div id="technologyStrategy-content" ref={contentRef}
                            style={{
                                maxHeight: isOpen['technologyStrategy']
                                ? `${contentRef.current?.scrollHeight}px`
                                : "0px",
                            }}
                            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                                            isOpen["technologyStrategy"] ? "max-h-max" : "max-h-0"}`}>
                            <p className="pb-2 text-lg xl:text-xl">
                                Align technology initiatives with business objectives through comprehensive roadmaps and practical implementation plans.
                            </p>
                        </div>
                    </div> */}
                    <div className="rounded-lg border-[0.0625rem] border-[var(--stroke)] text-lg lg:text-xl py-4 px-6 flex flex-row items-center justify-between">
                        <p className="content-font">What is GEO and how is it different from traditional SEO?</p>
                        <p className="text-[#AD8775] text-3xl">+</p>
                    </div>
                    <div className="rounded-lg border-[0.0625rem] border-[var(--stroke)] text-lg lg:text-xl py-4 px-6 flex flex-row items-center justify-between">
                        <p className="content-font">What's included in the AI Visibility Audit?</p>
                        <p className="text-[#AD8775] text-3xl">+</p>
                    </div>
                    <div className="rounded-lg border-[0.0625rem] border-[var(--stroke)] text-lg lg:text-xl py-4 px-6 flex flex-row items-center justify-between">
                        <p className="content-font">How quickly will I see results from GEO services?</p>
                        <p className="text-[#AD8775] text-3xl">+</p>
                    </div>
                    <div className="rounded-lg border-[0.0625rem] border-[var(--stroke)] text-lg lg:text-xl py-4 px-6 flex flex-row items-center justify-between">
                        <p className="content-font">Can I cancel my GEO service anytime?</p>
                        <p className="text-[#AD8775] text-3xl">+</p>
                    </div>
                    <div className="rounded-lg border-[0.0625rem] border-[var(--stroke)] text-lg lg:text-xl py-4 px-6 flex flex-row items-center justify-between">
                        <p className="content-font">Which AI platforms do you optimize for?</p>
                        <p className="text-[#AD8775] text-3xl">+</p>
                    </div>
                    <div className="rounded-lg border-[0.0625rem] border-[var(--stroke)] text-lg lg:text-xl py-4 px-6 flex flex-row items-center justify-between">
                        <p className="content-font">How do you measure GEO success?</p>
                        <p className="text-[#AD8775] text-3xl">+</p>
                    </div>
                </div>

                <div className="mt-8 sm:mt-12 lg:mt-16 items-center text-center hover:underline">
                    <a href="mailto:info@notionx.com" className="text-[#8E6754] text-base text-center">Have further questions? Email us on info@notionx.com</a>
                </div>
            </div>
        </div>
    )
}

export default Faq;