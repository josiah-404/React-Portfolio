import { Button } from "@/components/ui/button";
import { Introduction } from "../Introduction";
import HeroBackground from "../HeroBackground";
import SocialLinksSection from "../SocialLinks";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="static min-h-screen flex items-center justify-center bg-background"
    >
      <HeroBackground>
        <div className="text-center max-w-4xl flex flex-col mx-auto px-4 sm:px-6 gap-6 z-10">
          <h1 className="text-3xl md:text-5xl font-light text-foreground font-montserrat tracking-tight">
            Hello, I'm <span className="font-semibold">Josiah</span>
          </h1>
          <SocialLinksSection />

          <Introduction
            words={["UI/UX Designer", "Front-end Developer", "System Analyst"]}
          />

          <div className="flex flex-col  sm:flex-row gap-6 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/80 transition-colors"
              onClick={() => (window.location.href = "#experience")}
            >
              View my Experiences
            </Button>
            <Button
              variant="default"
              size="lg"
              onClick={() => (window.location.href = "#contact")}
              className="bg-background text-foreground hover:bg-zinc-500/20 transition-colors border-foreground border"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </HeroBackground>
    </section>
  );
}
