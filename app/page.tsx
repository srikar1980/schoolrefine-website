import ContactSection from "@/components/sections/ContactSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import OperationsSection from "@/components/sections/OperationsSection";
import PlansSection from "@/components/sections/PlansSection";
import StatsSection from "@/components/sections/StatsSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <OperationsSection />
      <FeaturesSection />
      <PlansSection />
      {/* <TestimonialsSection /> */}
      {/* <ContactSection /> */}
    </>
  );
}