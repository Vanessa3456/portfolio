import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const higlights = [
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Proficient across React, Flutter, Python, and Django.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Building fast, scalable, and maintainable applications.",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Experience leading research and backend development teams.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Crafting digital solutions for real-world challenges.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6  relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                one component at a time
              </span>
            </h2>
            {/* small description */}
            <div className="space-y-6 text-muted-foreground  animate-fade-in animation-delay-200">
              <p>
                I am a driven software developer specializing in both mobile and
                full-stack web development. My passion lies in building
                applications that solve real-world problems—whether that means
                connecting communities or engineering complex backend systems.
              </p>
              <p>
                I specialize in React, Flutter, Python, and Django, building
                everything from interactive frontend interfaces to robust
                database architectures using tools like Supabase. My approach
                combines technical precision with a strong focus on delivering
                seamless, user-centric experiences.
              </p>
              <p>
                When I'm not coding or leading project research, you'll find me
                exploring concepts in digital forensics, studying the latest in
                software engineering, or simply unwinding with a good match-3
                puzzle game.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-6 glass-strong glow-border rounded-2xl border-l-4 border-primary animate-fade-in animation-delay-300">
              <p className="text-white italic leading-relaxed">
                "My mission is to engineer robust, scalable software that solves
                genuine challenges—creating accessible digital experiences that
                empower communities and drive meaningful impact."
              </p>
            </div>
          </div>
          {/* right column highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {higlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2"> {item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
