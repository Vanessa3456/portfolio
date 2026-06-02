import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
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
    title: "Executive Leadership", 
    description: "Former Student Body VP. Experienced in stakeholder management and leading technical teams.", 
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
              Engineering robust systems,
              <span className="font-serif italic font-normal text-white">
                {" "}designed for impact
              </span>
            </h2>
            
            {/* small description */}
            <div className="space-y-6 text-muted-foreground  animate-fade-in animation-delay-200">
              <p>
                For the past three years, my focus has been writing code that solves real-world problems, with expertise spanning both frontend and backend development. A proud highlight of this journey is <strong className="text-secondary-foreground">Pendo</strong>—a digital counseling platform I helped build to connect students with licensed mental health professionals.
              </p>
              <p>
                Whether through collaborative group projects or volunteer roles, I thrive in high-pressure environments, turning complex challenges into seamless digital solutions. These experiences have solidified my passion for building technology that makes a genuine impact.
              </p>
              <p>
                Beyond the screen, I have served in two major executive roles: <strong className="text-secondary-foreground">Vice President</strong> of the entire university student body, and <strong className="text-secondary-foreground">Female Representative</strong> for the Faculty of Computing and Informatics. As I await my graduation with a degree in Information Technology, I am eager to bring my blend of technical architecture and executive leadership to a forward-thinking engineering team.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-6 glass-strong glow-border rounded-2xl border-l-4 border-primary animate-fade-in animation-delay-300">
              <p className="text-white italic leading-relaxed">
                "Merging technical precision with executive leadership to architect software that scales, empowers, and delivers real-world value."
              </p>
            </div>
          </div>
          
          {/* right column highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
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