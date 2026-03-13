import { ArrowUpRight, Github, Globe, Smartphone } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Pendo - Digital Counseling",
    description:
      "An award-winning counseling platform featuring low-latency WebRTC video streaming and real-time Supabase state management. Led a team of 4 to ship a pilot validated by 50 users.",
    image: "/pendo.png",
    tags: ["React", "TypeScript", "WebRTC", "Supabase", "Node.js"],
    link: "https://pendo-care-five.vercel.app/",
    github: "https://github.com/DANIELLITUNYA-CODER/pendo-care-for-kenya",
  },
  {
    title: "Soko Tender",
    description:
      "A comprehensive agricultural tendering ecosystem. Developed a web platform for tender management and a Flutter mobile app for farmers with direct APK distribution.",
    image: "/soko.png",
    tags: ["Flutter", "React", "Supabase", "Netlify"],
    links: {
      // Changed 'link' to 'links' object
      web: "https://soko-tender.netlify.app/",
      mobile: "https://soko-tender.netlify.app/get-app.html",
    },
    github: "https://github.com/Vanessa3456/SokoTender",
  },
  {
    title: "Harvest Goals",
    description:
      "A digital savings and wallet management platform. Architected a robust Django & PostgreSQL backend with 15+ REST endpoints, JWT authentication, and a cross-platform Flutter frontend.",
    image: "/group.png",
    tags: ["Django", "Python", "Flutter", "PostgreSQL", "Firebase"],
    link: "#",
    github: "#",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* background  glow*/}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-6  relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animation-delay-100 text-secondary-foreground">
            Projects that {/* Moved this span INSIDE the h2! */}
            <span className="font-serif italic font-normal text-white">
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in animation-delay-200">
            From award-winning telehealth platforms to cross-platform financial
            and agricultural tools, here is a selection of my recent work. I
            specialize in leveraging modern tech stacks like React, Flutter, and
            Django to architect scalable applications that solve real-world
            problems.
          </p>
        </div>
        {/* projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* If it's the old single link style */}
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}

                  {/* If it has the NEW multiple links style (Soko Tender) */}
                  {project.links?.web && (
                    <a
                      href={project.links.web}
                      target="_blank"
                      title="View Web App"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  )}

                  {project.links?.mobile && (
                    <a
                      href={project.links.mobile}
                      target="_blank"
                      title="Get Mobile App"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Smartphone className="w-5 h-5" />
                    </a>
                  )}

                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                {/* CHANGED: div to a tag, added conditional href, and fixed arrow animation */}
                <a
                  href={project.links?.web || project.link || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start justify-between ${project.link !== "#" || project.links ? "cursor-pointer" : "cursor-default"}`}
                >
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                {/* ... rest of your tags code remains the same ... */}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagId) => (
                    <span
                      key={tagId} /* <-- Don't forget the key prop! */
                      className="px-3 py-1 text-xs font-medium rounded-full bg-surface text-muted-foreground border border-border/50 hover:bg-primary/20 transition-colors hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="https://github.com/Vanessa3456/">
            View All Projects
            <ArrowUpRight className="w-5 h-5"></ArrowUpRight>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
