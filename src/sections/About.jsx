import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Flutter to Django, pixel to endpoint — I own the entire stack.",
  },
  {
    icon: Rocket,
    title: "Ships Fast",
    description: "Award-winning apps in telehealth, fintech, and agritech. Working demos aren't enough.",
  },
  {
    icon: Users,
    title: "Executive Leader",
    description: "VP of 6,000+ students. The hardest bugs to fix are people problems.",
  },
  {
    icon: Lightbulb,
    title: "Systems Thinker",
    description: "I don't just write features — I architect for scale from day one.",
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
                About Vanessa.
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              The code is mine.
              <span className="font-serif italic font-normal text-white">
                {" "}So is the vision.
              </span>
            </h2>
            
         {/* small description */}
<div className="space-y-6 text-muted-foreground animate-fade-in animation-delay-200">
  <p>
    I'm a full-stack and mobile developer with upto 2 years  building things that actually get used —
    a <strong className="text-secondary-foreground">telehealth platform</strong> connecting students to mental health professionals,
    an <strong className="text-secondary-foreground">AI stylist app</strong> powered by Gemini Vision,
    and an <strong className="text-secondary-foreground">agritech ecosystem</strong> putting procurement tools in farmers' hands.
  </p>
  <p>
    My stack is Flutter, Django, React, and Python. My instinct is to
    ship fast, think in systems, and never mistake a working demo for a finished product.
  </p>
  <p>
    Outside the codebase, I served as <strong className="text-secondary-foreground">Vice President</strong> of my
    university's entire student body and <strong className="text-secondary-foreground">School Representative</strong> for
    Computing & Informatics — which taught me that the hardest bugs to fix are people problems.
  </p>
</div>

            {/* Mission Statement */}
            <div className="p-6 glass-strong glow-border rounded-2xl border-l-4 border-primary animate-fade-in animation-delay-300">
              <p className="text-white italic leading-relaxed">
                "Build it."
              </p>
            </div>
          </div>
          
          {/* right column highlights*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden">
  {/* subtle card number */}
  <span className="absolute top-4 right-4 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-all">
    0{idx + 1}
  </span>
  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
    <item.icon className="w-6 h-6 text-primary" />
  </div>
  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
  <p className="text-sm text-muted-foreground">{item.description}</p>
</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};