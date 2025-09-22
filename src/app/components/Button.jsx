// components/StrategyCallButton.jsx
"use client";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

export default function StrategyCallButton() {
  return (
    <button
      onClick={() => window.open('https://cal.com/notionx/20min', '_blank')}
      className='group py-2.5 px-6 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] border-[0.0625rem] border-[var(--cta)] flex items-center rounded-full text-base font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[var(--cta)] transition duration-300'
    >
      Book a GEO Strategy Call 
      <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'>
        <HiMiniArrowSmallRight />
      </span>
    </button>
  );
}