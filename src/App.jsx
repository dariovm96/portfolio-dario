import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useLanguage } from "./contexts/LanguageContext";
import { getSetupDeps } from "./lib/setupDeps";

function App() {
  getSetupDeps();
  const { content } = useLanguage();

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

  const navData = Array.isArray(content?.nav) ? content.nav : [];

  const brandLabel = heroData.fullName.trim();
  const brandData = brandLabel
    ? {
        label: brandLabel,
        href: "#hero",
      }
    : null;

  return (
    <>
      <Navbar data={navData} brand={brandData} />
      <main>
        <Hero data={heroData} />
        <About data={aboutData} />
        <Projects data={projectsData} />
        <Skills data={skillsData} />
        <Experience data={experienceData} />
        <Education data={educationData} />
        <Contact data={contactData} />
      </main>
      <Footer data={footerData} />
    </>
  );
}

export default App;
