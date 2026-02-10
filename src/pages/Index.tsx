import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PreviewBox from "@/components/landing/PreviewBox";
import PainSection from "@/components/landing/PainSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ValueSection from "@/components/landing/ValueSection";
import WhatYouGetSection from "@/components/landing/WhatYouGetSection";
import FaqSection from "@/components/landing/FaqSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PreviewBox />
      <PainSection />
      <SolutionSection />
      <ComparisonSection />
      <HowItWorksSection />
      <AudienceSection />
      <ValueSection />
      <WhatYouGetSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
