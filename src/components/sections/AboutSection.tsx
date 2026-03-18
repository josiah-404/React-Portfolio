import ProfileImageComponent from "@/components/ProfileImage";
import { Button } from "../ui/button";
import { GoDownload } from "react-icons/go";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 font-montserrat tracking-tight">
              About Me
            </h2>
            <div className="w-16 h-px bg-foreground mb-8"></div>
            <p className="text-lg text-muted-foreground mb-8 font-poppins font-light leading-relaxed">
              Hi! I’m into data, design, and front-end stuff—basically making
              things look good and make sense.
            </p>
            <Button size="lg" asChild className="mx-auto md:mx-0">
              <a
                href="/Josiah_CV.pdf"
                download="Josiah_Viernes_CV.pdf"
              >
                <GoDownload /> Download CV
              </a>
            </Button>
          </div>
          <ProfileImageComponent />
        </div>
      </div>
    </section>
  );
}
