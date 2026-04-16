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

const defaultNavItems = [
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Educación", href: "#education" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" },
];

function App() {
  getSetupDeps();

  const heroData = {
    fullName: content?.hero?.fullName ?? "",
    title: content?.hero?.title ?? "",
    tagline: content?.hero?.tagline ?? "",
    location: content?.hero?.location ?? "",
    ctas: Array.isArray(content?.hero?.ctas) ? content.hero.ctas : [],
  };

  const aboutData = {
    professionalSummary: content?.about?.professionalSummary ?? "",
    personalSummary: content?.about?.personalSummary ?? "",
    interests: Array.isArray(content?.about?.interests) ? content.about.interests : [],
  };

  const skillsData = {
    categories: Array.isArray(content?.skills?.categories) ? content.skills.categories : [],
  };

  const experienceData = Array.isArray(content?.experience) ? content.experience : [];
  const educationData = {
    degrees: Array.isArray(content?.education?.degrees) ? content.education.degrees : [],
    certifications: Array.isArray(content?.education?.certifications)
      ? content.education.certifications
      : [],
    courses: Array.isArray(content?.education?.courses) ? content.education.courses : [],
  };
  const projectsData = Array.isArray(content?.projects) ? content.projects : [];

  const contactData = {
    heading: content?.contact?.heading ?? "Contacto",
    channels: Array.isArray(content?.contact?.channels) ? content.contact.channels : [],
    form: {
      fields: Array.isArray(content?.contact?.form?.fields) ? content.contact.form.fields : [],
      submitLabel: content?.contact?.form?.submitLabel ?? "Enviar",
    },
    location: content?.contact?.location ?? "",
  };

  const footerData = {
    copyright: content?.footer?.copyright ?? "",
  };

  const navDataSource = Array.isArray(content?.nav) ? content.nav : [];
  const navData = defaultNavItems.map((fallbackItem) => {
    const matched = navDataSource.find((item) => item?.href === fallbackItem.href);

    return {
      href: fallbackItem.href,
      label: matched?.label || fallbackItem.label,
    };
  });

  return (
    <>
      <Navbar data={navData} />
      <main>
        <Hero data={heroData} />
        <About data={aboutData} />
        <Skills data={skillsData} />
        <Experience data={experienceData} />
        <Education data={educationData} />
        <Projects data={projectsData} />
        <Contact data={contactData} />
      </main>
      <Footer data={footerData} />
    </>
  );
}

export default App;
