const experiences = [
  {
    period: "2025 - Present",
    role: "Mobile Application Developer",
    company: "Freelancer",
    description:
      "Engineered an Android application designed for farmers to streamline agricultural tendering. Handled both frontend and backend integration, ensuring a smooth user experience and direct APK distribution.",
    technologies: ["Flutter", "Supabase", "Dart", "Netlify"],

    current: true,
  },
  {
    period: "2025 - 2026",
    role: "Full-Stack Developer Intern",
    company: "Jumuisha Limited",
    description:
      "Architected and developed a digital savings and wallet management platform. Built a robust Django/PostgreSQL backend with 15+ REST endpoints to support complex wallet logic and secure transactions.",
    technologies: ["Python", "Django", "Flutter", "PostgreSQL", "Firebase"],
    current: false,
  },
  {
    period: "2025 - 2026",
    role: "Research Lead & Backend Developer",

    company: "KamiLimu",
    description:
      "Led a development team to architect a low-latency counseling platform. Configured Supabase for real-time database subscriptions and implemented WebRTC for seamless video streaming.",
    technologies: ["React", "TypeScript", "Node.js", "Supabase", "WebRTC"],

    current: false,
  },
];
export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 " />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience that {""}
            <span className="font-serif italic font-normal text-white">
              speaks volumes
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 ">
            A timeline of my professional growth, from mastering core concepts
            to architecting robust backends and shipping cross-platform
            applications that solve real-world problems.
          </p>
        </div>
        {/* timeline */}

        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 t0-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32, 178,166,0.8)]" />

          {/* experience items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16 "}`}
                >
                  <div
                    className={
                      "glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 "
                    }
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-sm rounded-full text-muted-foreground "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
