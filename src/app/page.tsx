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
// import Button from '@/app/components/Button';

export const metadata = {
  title: "AI SEO & Generative Engine Optimization for Brands - NotionX",
  description: "NotionX helps brands get discovered in AI search results. We specialize in AI SEO, GEO and improving visibility across AI-powered platforms.",
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
      {/* <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50 sm:hidden">
        <Button/>
      </div> */}

    </div>
  );
}
