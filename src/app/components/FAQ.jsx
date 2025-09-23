"use client";

import {useState } from 'react';

const faqs = [
  {
    question: "What is GEO and how is it different from traditional SEO?",
    answer:
      "GEO focuses on ranking in AI generated answers across platforms like Google AI Overviews, ChatGPT, and Perplexity, whereas traditional SEO targets search engines. With our GEO services, your brand becomes part of the direct AI answer.",
  },
  {
    question: "What's included in the AI Visibility Audit?",
    answer:
      "Our AI Visibility Audit reviews how your business appears across AI platforms, identifies gaps in visibility, analyzes competitor presence, and delivers a prioritized action plan. You'll see where you stand today and what's required to secure top placement in AI-generated results.",
  },
  {
    question: "How quickly will I see results from GEO services?",
    answer:
      "Most clients begin noticing visibility improvements within 60-90 days, depending on competition and industry. Full impact — where your brand consistently appears in AI-generated answers — typically takes 3-4 months of optimization.",
  },
  {
    question: "Can I cancel my GEO service anytime?",
    answer:
      "Yes. Our services are flexible, and you can cancel at any time. However, since GEO requires consistent optimization, we recommend committing to at least 3 months to see lasting results.",
  },
  {
    question: "Which AI platforms do you optimize for?",
    answer:
      "We optimize for Google AI Overviews, ChatGPT, and other leading AI-driven platforms.",
  },
  {
    question: "How do you measure GEO success?",
    answer:
      "Yes. AI platforms are rapidly expanding, and our strategies evolve with them. We continuously test and adapt to new algorithms, ensuring your brand stays ahead of competitors in emerging AI search environments.",
  },
  {
    question: "Is GEO future proof as AI evolves?",
    answer:
      "Yes. AI platforms are rapidly expanding, and our strategies evolve with them. We continuously test and adapt to new algorithms, ensuring your brand stays ahead of competitors in emerging AI search environments.",
  },
  {
    question: "What industries benefit the most from GEO?",
    answer:
      "GEO is highly effective for finance, healthcare, legal, real estate, e-commerce, SaaS, and local service businesses — any industry where being the trusted AI answer wins customer trust and conversions.",
  },
  {
    question: "Do I still need traditional SEO if I invest in GEO?",
    answer:
      " Yes, but their roles are different. Traditional SEO helps with long-term organic traffic from search engines, while GEO ensures your brand is visible inside AI generated answers. Together, they create a complete search strategy for today and the future.",
  },
  {
    question: "Do you know if GEO will work with my existing marketing strategy?",
    answer:
      "Absolutely. GEO is designed to complement SEO, paid ads, and content marketing. It integrates seamlessly with your current efforts to boost overall ROI.",
  }
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
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 my-16 lg:my-20">
                    {faqs.map((faq, index) => (
                        <div key={index} className="self-start">
                        <div className="rounded-lg border border-[var(--stroke)] text-lg lg:text-xl px-6">
                            {/* Question */}
                            <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex flex-row items-center justify-between py-4 text-left"
                            >
                            <p className="content-font">{faq.question}</p>
                            <span className="text-[#AD8775] text-2xl 2xl:text-3xl">
                                {openIndex === index ? "-" : "+"}
                            </span>
                            </button>

                            {/* Answer */}
                            <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                openIndex === index ? "max-h-max" : "max-h-0"
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

                {/* <div className="mt-8 sm:mt-12 lg:mt-16 items-center text-center hover:underline">
                    <a href="mailto:info@notionx.com" className="text-[#8E6754] text-base text-center">Have further questions? Email us on info@notionx.com</a>
                </div> */}
            </div>
        </div>
    )
}

export default Faq;