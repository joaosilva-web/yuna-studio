import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DiferencialSection from "@/components/sections/DiferencialSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/portfolio/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import MethodSection from "@/components/sections/MethodSection";
import ProcessSection from "@/components/sections/ProcessSection";
import VisionSection from "@/components/sections/VisionSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <DiferencialSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <MethodSection />
        <ProcessSection />
        <VisionSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
