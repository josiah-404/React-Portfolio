import type { experienceType } from "@/types";

export default function ExperienceSection() {
  const experiences: experienceType[] = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "OnDemand Innovation, LLC",
      period: "Oct. 2025 – Present",
      description:
        "Developed and maintained front-end interfaces using React.js, Next.js, TypeScript, and Tailwind CSS. Collaborated with cross-functional teams to translate UI/UX designs into responsive, production-ready code. Implemented reusable component libraries to improve development efficiency and code consistency.",
      location: "Remote",
    },
    {
      id: 2,
      title: "Business Analyst",
      company: "OnDemand Innovation, LLC",
      period: "Jan. 2025 – Present",
      description:
        "Gathered and documented business requirements through stakeholder interviews and workflow analysis. Created detailed functional specifications, user stories, and process flow diagrams. Bridged communication between technical teams and business stakeholders to ensure alignment on deliverables.",
      location: "Remote",
    },
    {
      id: 3,
      title: "Quality Assurance Tester (Part-time)",
      company: "OnDemand Innovation, LLC",
      period: "2024",
      description:
        "Performed manual and regression testing to identify defects and ensure software quality standards. Documented test cases, bug reports, and testing procedures for the QA team. Collaborated with developers to verify bug fixes and validate feature implementations.",
      location: "Remote",
    },
    {
      id: 4,
      title: "Student Intern – Front End Development",
      company: "OnDemand Innovation, LLC",
      period: "2024",
      description:
        "Assisted in building front-end components and UI features under the guidance of senior developers. Gained hands-on experience with modern JavaScript frameworks and version control workflows.",
      location: "Remote",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20 w-full ">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 font-montserrat tracking-tight">
            My Experience
          </h2>
          <div className="w-16 h-px bg-foreground mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground font-poppins font-light">
            My professional journey and work experience
          </p>
        </div>

        <div className="relative w-full">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border"></div>

          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="relative flex items-start mb-12 md:mb-16 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[10px] sm:left-6 w-4 h-4 bg-foreground rounded-full border-4 border-background z-10"></div>

              {/* Content */}
              <div className="ml-12 sm:ml-20 flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-foreground mb-1 font-montserrat">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg sm:text-xl text-muted-foreground font-montserrat font-light">
                      {experience.company}
                    </h4>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-foreground font-medium font-poppins">
                      {experience.period}
                    </p>
                    <p className="text-muted-foreground font-poppins font-light">
                      {experience.location}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 font-poppins font-extralight leading-relaxed text-md">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-5">
                  {/* <TechStackIcon items={experience.technologies} /> */}
                  {/* <TechStackIcon items={experience.technologies.map} /> */}
                  {/* {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-foreground text-sm font-light rounded-sm"
                    >
                     
                    </span>
                  ))} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
