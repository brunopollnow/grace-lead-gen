import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import BonusesSection from "@/components/BonusesSection";
import ResultsSection from "@/components/ResultsSection";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <ProblemSection />
      <MethodSection />
      <BonusesSection />
      <ResultsSection />
      <PricingSection />
      <AboutSection />
      <GuaranteeSection />
      <FloatingCTA />
      <Footer />
    </main>
  );
};

export default Index;
