import HeroSection from '@/app/components/HeroSection';
import Whyus from "@/app/components/Whyus";
import Howitworks from '@/app/components/Howitworks';

export const metadata = {
  title: "notionX | GEO",
  description: "Dominate AI Search Results Before Your Competitors Do.",
  keywords: "seo, optimization, ai, marketing, digital marketing"
};

export default function Home() {
  return (
    <div>
      {/* Navbar + Hero Section */}
      <div id="/"><HeroSection/></div>

      <div><Whyus/></div>

      <div><Howitworks/></div>

    </div>
  );
}
