import { Button } from "@/components/Button";
// 1. ADD Linkedin to your imports here:
import {
  ArrowRight,
  Download,
  ChevronDown,
  Github,
  Linkedin,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
const skills = [
  "Flutter",
  "Django",
  "React",
  "JavaScript",
  "PostgreSQL",
  "Java",
  "Github Actions",
  "Docker",
  "Vercel",
  "Tailwind CSS",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/image.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green dots */}
      {/* 2. Fixed typo: abosule -> absolute */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i} // 3. Added missing key prop
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column: text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer
              </span>
            </div>

            {/* headline*/}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">Digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I am Vanessa Paul - a full-stack developer specializing both
                in mobile development and web development. Proficient in Python,
                Django, Flutter, React. Strong problem solving skills and highly
                performant applications.
              </p>
            </div>

            {/* CTA */}
            {/* 4. Added flex layout so buttons are side-by-side */}

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton href="https://drive.google.com/file/d/1YsWlG2RmYbfpd6zhUU2H8mTI2ktQWQ1P/view?usp=sharing">
                <Download className="w-5 h-5" />
                View Resume
              </AnimatedBorderButton>
            </div>

            {/* social links */}
            {/* 5. Added flex layout here too */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 ">
              <span className="text-sm text-muted-foreground ">Follow Me:</span>
              {[
                { icon: Github, href: "https://github.com/Vanessa3456/" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/vanessa-paul-857066232/",
                }, // Fixed spelling
              ].map((social, idx) => (
                // 6. Added proper href and a key prop
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 "
                  rel="noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* right column :image */}
          <div className="relative mx-auto max-w-md animate-fade-in animation-delay-300">
            {/* The Glass Container */}
            <div className="relative glass max-w-md mx-auto rounded-3xl p-2">
              <div className="relative glass roudned-3xl p-2 glow-border">
                <img
                  src="/088A0176.jpg"
                  alt="Vanessa"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* floating badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* stats badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float  animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    {" "}
                    Years experience
                  </div>
                </div>
              </div>
              {/* Lighting adjustment overlay - helps it match the dark theme */}
              <div className="absolute inset-0 rounded-2xl bg-black/10"></div>
            </div>

            {/* The glowing ring behind the card */}
            <div className="absolute -inset-2 rounded-3xl bg-primary/20 blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>
        {/* SKILLS  */}
        <div className="mt-20 animate-fade-in animation-delay-600 ">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skills, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skills}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
