import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DiferencialSection from "@/components/sections/DiferencialSection";
import PortfolioSection from "@/components/sections/portfolio/PortfolioSection";
import MethodSection from "@/components/sections/MethodSection";
import ProcessSection from "@/components/sections/ProcessSection";
import VisionSection from "@/components/sections/VisionSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <DiferencialSection />
        <PortfolioSection />
        <MethodSection />
        <ProcessSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
