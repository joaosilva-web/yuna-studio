import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";

const DiferencialSection = dynamic(() => import("@/components/sections/DiferencialSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const PortfolioSection = dynamic(() => import("@/components/sections/portfolio/PortfolioSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const MethodSection = dynamic(() => import("@/components/sections/MethodSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const VisionSection = dynamic(() => import("@/components/sections/VisionSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const CTASection = dynamic(() => import("@/components/sections/CTASection"));

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
