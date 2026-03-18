import { ContactCard } from "../ContactCards";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-4 sm:px-8 py-16 bg-background min-h-screen"
    >
      <div className="flex flex-col items-center max-w-4xl mx-auto px-0 sm:px-6 text-center w-full">
        <h2 className="text-3xl md:text-5xl font-light text-foreground font-montserrat tracking-tight mb-6 ">
          Get in Touch
        </h2>
        <p className="text-lg text-muted-foreground text-wrap mb-8 font-poppins font-light leading-relaxed">
          I would love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to reach out.
        </p>
        <ContactCard />
      </div>
    </section>
  );
};

export default ContactSection;
