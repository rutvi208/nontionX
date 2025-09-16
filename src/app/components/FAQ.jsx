"use client";

import {useState } from 'react';

const faqs = [
  {
    question: "What is GEO and how is it different from traditional SEO?",
    answer:
      "Dominate AI Search Results Before Your Competitors Do. The AI search revolution requires a completely different approach to getting found online.",
  },
  {
    question: "What's included in the AI Visibility Audit?",
    answer:
      "Dominate AI Search Results Before Your Competitors Do. The AI search revolution requires a completely different approach to getting found online.",
  },
  {
    question: "How quickly will I see results from GEO services?",
    answer:
      "Dominate AI Search Results Before Your Competitors Do. The AI search revolution requires a completely different approach to getting found online.",
  },
  {
    question: "Can I cancel my GEO service anytime?",
    answer:
      "Dominate AI Search Results Before Your Competitors Do. The AI search revolution requires a completely different approach to getting found online.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "Dominate AI Search Results Before Your Competitors Do. The AI search revolution requires a completely different approach to getting found online.",
  },
  {
    question: "How do you measure GEO success?",
    answer:
      "Dominate AI Search Results Before Your Competitors Do. The AI search revolution requires a completely different approach to getting found online.",
  },
];


const Faq = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="container mx-auto place-items-center py-20 px-5 lg:px-8 2xl:px-0">
                <h1 className="heading-font text-center font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">Quick Answers</h1>
                <p className="text-lg lg:text-xl text-center content-font mt-3">Everything you need to know about GEO and AI search optimization</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-16 lg:mt-20">
                    {faqs.map((faq, index) => (
                        <div key={index} className="self-start">
                        <div className="rounded-lg border border-[var(--stroke)] text-lg lg:text-xl px-6">
                            {/* Question */}
                            <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex flex-row items-center justify-between py-4 text-left"
                            >
                            <p className="content-font">{faq.question}</p>
                            <span className="text-[#AD8775] text-3xl">
                                {openIndex === index ? "−" : "+"}
                            </span>
                            </button>

                            {/* Answer */}
                            <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === index ? "max-h-40" : "max-h-0"
                            }`}
                            >
                            <div className="pb-4">
                                <p className="text-base lg:text-lg xl:text-xl text-[#333]">
                                {faq.answer}
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-16 lg:mt-20">
                    
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
                </div> */}

                <div className="mt-8 sm:mt-12 lg:mt-16 items-center text-center hover:underline">
                    <a href="mailto:info@notionx.com" className="text-[#8E6754] text-base text-center">Have further questions? Email us on info@notionx.com</a>
                </div>
            </div>
        </div>
    )
}

export default Faq;