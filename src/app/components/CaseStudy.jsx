"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import TesstimonialBg from "@/../public/images/CaseStudy/Testimonial-Bg.png";

const caseStudies = [
  {
    title: "Extension Architecture",
    stats: [
      { value: "+33%", label: "AI Mentions" },
      { value: "110", label: "AI Overview" },
      { value: "+51", label: "ChatGPT Mentions" },
    ],
    heading: "AI Growth Unlocked in Just 3.5 Months",
    desc: "London-based architectural design firm helping homeowners plan and build extensions, loft conversions, and renovations with expert planning approval support.",
    challenge:
      "Despite a solid SEO foundation and strong brand presence, their content wasn't breaking through into Google AI Overviews and other AI search engines — limiting next-level visibility.",
    solution:
      "We optimized AI-focused content clusters, enhanced internal linking, and expanded schema markup to boost AI Overview indexing and drive ChatGPT mentions.",
  },
  {
    title: "EC Council",
    stats: [
      { value: "+26%", label: "AI Mentions" },
      { value: "+579", label: "AI Overview" },
      { value: "+51", label: "Gemini Mentions" },
    ],
    heading: "From Strong to Unstoppable in 6 Months",
    desc: "Global cybersecurity certification body providing training programs like CEH and CND to upskill professionals in ethical hacking and cyber defense.",
    challenge:
      "A globally recognized cybersecurity brand, well established in SEO, but with a limited presence in AI search engines. Huge potential traffic was being missed because content wasn't surfacing in AI results.",
    solution:
      "We restructured technical pages, implemented AI-optimized FAQ schema, and strategically expanded content for Gemini and Google AI Overviews — unlocking rapid visibility across AI search.",
  },
  {
    title: "Ken Ganley Mentor CDJR",
    stats: [
      { value: "+87%", label: "AI Mentions" },
      { value: "+7", label: "AI Overview" },
      { value: "+12", label: "Gemini Mentions" },
    ],
    heading: "Explosive AI Visibility in 2 Months ",
    desc: "Car dealership in Ohio offering new and pre-owned Chrysler, Dodge, Jeep, and Ram vehicles with financing, trade-in, and service options.",
    challenge:
      "Highly competitive automotive market with limited page citations in AI Overviews. The dealership's inventory pages weren't gaining traction in AI search results.",
    solution:
      "We applied local + optimized high-value inventory keywords, and expanded coverage in Gemini to drive fast AI mentions and higher page indexing growth.",
  },
  {
    title: "Ken Ganley Kia",
    stats: [
      { value: "+15%", label: "AI Mentions" },
      { value: "+27", label: "AI Overview" },
      { value: "+207", label: "ChatGPT Mentions" },
    ],
    heading: "Fast-Track to AI Domination",
    desc: "Authorized Kia dealership in Ohio selling new and used Kia vehicles while providing financing, servicing, and customer support for buyers.",
    challenge:
      "Strong brand authority offline, but minimal AI presence online. Pages weren't converting into AI citations and ChatGPT.",
    solution:
      "We scaled targeted content refreshes and focused on conversational search queries — generating a surge of ChatGPT mentions and AI visibility.",
  },
  {
    title: "Tradesman Saver",
    stats: [
      { value: "+43%", label: "AI Mentions Growth" },
      { value: "+78", label: "AI Overview" },
      { value: "+45", label: "Copilot Mentions" },
    ],
    heading: "Accelerating AI Visibility in 2.5 Months",
    desc: "UK-based insurance provider specializing in affordable public liability and business insurance tailored for tradespeople, contractors, and small business owners.",
    challenge:
      "Already established in SEO, but AI search visibility lagged behind competitors. Their authority wasn't translating into AI Overview mentions or Copilot results.",
    solution:
      "We accelerated AI-ready content optimization, enhanced topical clustering, and built schema depth — driving rapid growth in AI Overviews, Copilot, and indexed pages.",
  },
];

const CaseStudy = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Title Section */}
      <div className="mx-auto container pt-16 sm:pt-20 lg:pt-28 px-5 lg:px-8 2xl:px-0">
        <div>
          <h1 className="heading-font font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.06rem]">
            Real Results
          </h1>
          <p className="text-lg lg:text-xl content-font mt-3">
            Proven impact of GEO across industries.
          </p>
        </div>
      </div>

      {/* Slider Wrapper */}
      <div className="relative container mx-auto mt-10 sm:mt-12 lg:mt-20">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {caseStudies.map((caseItem, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 px-5 lg:px-8 2xl:px-0"
              >
                <div className="border-[0.0625rem] border-[#9B715C] rounded-2xl lg:rounded-[1.25rem] px-5 py-8 sm:py-10 sm:px-8 lg:py-14 lg:px-10 bg-white">
                  <h1 className="font-normal tracking-tighter text-2xl sm:text-3xl lg:text-[2.5rem] text-left">
                    {caseItem.title}
                  </h1>

                  <div className="mt-6 lg:mt-8 xl:mt-16 flex flex-col xl:grid xl:grid-cols-2 gap-10">
                    {/* Left */}
                    <div className="flex flex-col space-y-6 lg:space-y-10">
                      {/* Stats */}
                      <div className="flex flex-col sm:flex-row sm:space-x-8 2xl:space-x-12">
                        {caseItem.stats.map((s, i) => (
                          <div
                            key={i}
                            className="border-l-2 border-[#D4BAAE] px-3 lg:px-5 flex flex-col"
                          >
                            <p className="font-semibold text-4xl lg:text-[2.5rem] text-[var(--mudbrown)]">
                              {s.value}
                            </p>
                            <p className="content-font text-lg lg:text-xl mt-1">
                              {s.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Image & Description */}
                      <div className="relative 2xl:mt-12 overflow-hidden border-[0.0625rem] border-[var(--stroke)] rounded-lg lg:rounded-xl p-4 sm:p-5">
                        <Image
                          src={TesstimonialBg}
                          alt="Testimonial Background"
                          loading="lazy"
                          className="absolute inset-0 object-cover h-full w-full"
                        />
                        <div className="relative z-10 space-y-7">
                          <p className="text-2xl lg:text-3xl xl:text-4xl tracking-tighter">
                            {caseItem.heading}
                          </p>
                          <p className="content-font text-xl lg:text-2xl">
                            {caseItem.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-10">
                      <div>
                        <p className="text-xl lg:text-2xl font-medium">
                          The Challenge
                        </p>
                        <div className="mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]">
                          <p className="content-font text-xl">
                            {caseItem.challenge}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-xl lg:text-2xl font-medium">
                          The GEO Solution
                        </p>
                        <div className="mt-2 lg:mt-3.5 p-4 lg:p-5 bg-[var(--pastelbrown)] lg:rounded-lg border-[0.0625rem] border-[#FAEEE6]">
                          <p className="content-font text-xl">
                            {caseItem.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chevron Buttons Below */}
        <div className="flex justify-center space-x-6 mt-3 sm:mt-8">
          <button
            onClick={prevSlide}
            className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md mb-2"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md mb-2"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;