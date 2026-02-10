import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import PreviewBox from "@/components/landing/PreviewBox";
import ComparisonSection from "@/components/landing/ComparisonSection";
import ValueSection from "@/components/landing/ValueSection";
import TutorialSection from "@/components/landing/TutorialSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <PreviewBox />
      <ComparisonSection />
      <ValueSection />
      <TutorialSection />
      <WhatYouGetSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
