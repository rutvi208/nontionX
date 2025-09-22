import HeroSection from '@/app/components/HeroSection';
import Whyus from "@/app/components/Whyus";
import Howitworks from '@/app/components/Howitworks';
import Plans from '@/app/components/Plans';
import Process from '@/app/components/Process';
import GeoSeo from '@/app/components/GeoSeo';
import CaseStudy from '@/app/components/CaseStudy';
import Cta from '@/app/components/CTA';
import Faq from '@/app/components/FAQ';
import Footer from '@/app/components/Footer';
import ScrollToTop from '@/app/components/ScrollToTop'; 
import ScrollButton from '@/app/components/ScrollButton'; 
import { HiMiniArrowSmallRight } from "react-icons/hi2";

export const metadata = {
  title: "notionX | GEO",
  description: "Dominate AI Search Results Before Your Competitors Do.",
  keywords: "seo, optimization, ai, marketing, digital marketing"
};

export default function Home() {
  return (
    <div>
      <ScrollToTop />
      <ScrollButton/>
      
      {/* Navbar + Hero Section */}
      <div id="/"><HeroSection/></div>

      <div><Whyus/></div>

      <div id='howitworks'><Howitworks/></div>

      <div id='pricing'><Plans/></div>

      <div><Process/></div>

      <div><GeoSeo/></div>

      <div><CaseStudy/></div>

      <div><Cta/></div>

      <div><Faq/></div>

      <div><Footer/></div>

      {/* ✅ Sticky CTA (visible only on mobile) */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 sm:hidden">
        <button className='group py-2.5 px-6 bg-[var(--cta)] cursor-pointer text-[var(--pastelbrown)] border-[0.0625rem] border-[var(--cta)] flex items-center rounded-full text-base font-bold hover:bg-white hover:text-[var(--cta)] hover:border-[var(--cta)] transition duration-300'>
          Book a GEO Strategy Call 
          <span className='text-white group-hover:text-[var(--cta)] ps-2 text-2xl transition-transform duration-300 ease-out group-hover:translate-x-1'>
            <HiMiniArrowSmallRight />
          </span>
        </button>
      </div>

    </div>
  );
}
