import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DiferencialSection from "@/components/sections/DiferencialSection";
import WorkSection from "@/components/sections/WorkSection";
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
        <WorkSection />
        <MethodSection />
        <ProcessSection />
        <VisionSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
