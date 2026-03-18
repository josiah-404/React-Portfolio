import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import { ThemeProvider } from "./components/theme-provider";
import ExperienceSection from "@/components/sections/ExperienceSection";
import TechStackSection from "./components/sections/TechStack";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
export const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gray-50">
        <Navigation />

        <main className="pt-14 pb-20 lg:pt-0 lg:pb-0">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <TechStackSection />
          <ContactSection />
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
};
