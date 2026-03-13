import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/contact";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "./layout/footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <About></About>

        <Projects></Projects>
        <Experience></Experience>

        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
