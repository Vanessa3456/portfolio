import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", text: "About" },
  { href: "#projects", text: "Projects" },
  { href: "#experience", text: "Experience" },
  // Removed Testimonials!
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          Vanessa Paul<span className="text-primary">.</span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.text}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button size="sm" onClick={() => (window.location.href = "#contact")}>
            Contact Me
          </Button>
        </div>

        {/* mobile menu toggle */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuopen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size="24" />}
        </button>
      </nav>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.text}
                onClick={() => setIsMobileMenuopen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.text}
              </a>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuopen(false);
                window.location.href = "#contact";
              }}
              size="sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
