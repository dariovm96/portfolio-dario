import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import content from "./data/content";
import { getSetupDeps } from "./lib/setupDeps";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function App() {
  getSetupDeps();

  return (
    <>
      <Navbar data={navItems} />
      <main>
        <Hero data={content.hero} />
        <About data={content.about} />
        <Skills data={content.skills} />
        <Experience data={content.experience} />
        <Education data={content.education} />
        <Projects data={content.projects} />
        <Contact data={content.contact} />
      </main>
      <Footer data={content.footer} />
    </>
  );
}

export default App;
