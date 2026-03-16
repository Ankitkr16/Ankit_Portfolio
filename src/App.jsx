import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import TechStackMarquee from "./components/sections/TechStackMarquee";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certificates from "./components/sections/Certificates";
import Resume from "./components/sections/Resume";
import Journey from "./components/sections/Journey";
import Profiles from "./components/sections/Profiles";
import Contact from "./components/sections/Contact";
import CursorGlow from "./components/ui/CursorGlow";
import ScrollProgress from "./components/ui/ScrollProgress";
import { useActiveSection } from "./hooks/useActiveSection";
import {
  hero,
  about,
  skillGroups,
  projects,
  certificates,
  resumeTimeline,
  journey,
  profiles,
  contactLinks
} from "./data/portfolioData";

function App() {
  const activeSection = useActiveSection();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#e8edf5] text-slate-900 transition-colors dark:bg-ink dark:text-white">
      <ScrollProgress />
      <CursorGlow />
      <div className="fixed inset-0 -z-10 bg-noise opacity-90" />
      <Navbar active={activeSection} theme={theme} onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))} />

      <main className="relative">
        <Hero data={hero} />
        <About data={about} />
        <TechStackMarquee groups={skillGroups} />
        <Skills groups={skillGroups} />
        <Projects items={projects} />
        <Certificates items={certificates} />
        <Resume timeline={resumeTimeline} />
        <Journey items={journey} />
        <Profiles items={profiles} />
        <Contact links={contactLinks} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
