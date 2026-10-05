import { AboutSection } from "@/components/landing/AboutSection";
import { BackToTopButton } from "@/components/landing/BackToTopButton";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { TechStackSection } from "@/components/landing/TechStackSection";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";
import { WhyUsSection } from "@/components/landing/WhyUsSection";
import { YoutubeSection } from "@/components/landing/YoutubeSection";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TechStackSection />
        <YoutubeSection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTopButton />
    </>
  );
}
