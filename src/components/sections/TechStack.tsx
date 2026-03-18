import TechStackIcon from "../TechtStackIcon";

const TechStackSection = () => {
  return (
    <section
      id="techstack"
      className="static min-h-screen flex items-center justify-center bg-background"
    >
      <div className="text-center max-w-4xl flex flex-col mx-auto px-4 sm:px-6 gap-6 py-16 md:py-0">
        <h2 className="text-3xl md:text-5xl font-light text-foreground font-montserrat tracking-tight">
          My Tech Stack
        </h2>
        <p className="text-lg text-muted-foreground mb-8 font-poppins font-light leading-relaxed">
          Here are some of the technologies I work with.
        </p>
        <div className="flex flex-wrap justify-center gap-7">
          <TechStackIcon />
        </div>
        <p className="text-lg text-muted-foreground mt-8 font-poppins font-light">
          I am always eager to learn new technologies and improve my skills.
        </p>
      </div>
    </section>
  );
};

export default TechStackSection;
