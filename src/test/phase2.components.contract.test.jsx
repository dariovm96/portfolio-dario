import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import App from "../App";
import content from "../data/content";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import CardShell from "../components/ui/CardShell";
import CTAButton from "../components/ui/CTAButton";

describe("phase 2 components contract", () => {
  it("renders all required sections in expected order with mapped content", () => {
    const { container } = renderWithProviders(<App />);

    const main = container.querySelector("main");
    const ids = Array.from(main.querySelectorAll("section")).map((section) => section.id);

    expect(ids).toEqual(["hero", "about", "projects", "skills", "experience", "education", "contact"]);
    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo", { name: /pie de página/i })).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: content.es.hero.fullName })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Sobre mí" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Habilidades" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experiencia" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Formación Académica" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Proyectos" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: content.es.contact.heading })).toBeInTheDocument();
  });

  it("keeps section structure when optional fields are missing", () => {
    const heroDataWithoutOptional = {
      ...content.es.hero,
      tagline: undefined,
      ctas: undefined,
    };

    const { container } = render(<Hero data={heroDataWithoutOptional} />);
    const heroSection = container.querySelector("section#hero");

    expect(heroSection).toBeInTheDocument();
    expect(within(heroSection).getByRole("heading", { name: content.es.hero.fullName })).toBeInTheDocument();
    expect(within(heroSection).getByTestId("hero-visual-slot")).toBeInTheDocument();
    expect(within(heroSection).queryByRole("link")).not.toBeInTheDocument();
  });

  it("binds navbar labels in Spanish while preserving expected anchors", () => {
    renderWithProviders(<App />);

    const nav = screen.getByRole("navigation", { name: /navegación principal/i });
    const navLinks = within(nav).getAllByRole("link");
    const brandLink = within(nav).getByTestId("navbar-brand-link");
    const sectionLinks = navLinks.filter((link) => link !== brandLink);

    expect(brandLink).toHaveAttribute("href", "#hero");
    expect(brandLink).toHaveTextContent(content.es.hero.fullName);
    expect(sectionLinks.length).toBe(content.es.nav.length);
    expect(sectionLinks.map((link) => link.textContent)).toEqual(content.es.nav.map((item) => item.label));
    expect(sectionLinks.map((link) => link.getAttribute("href"))).toEqual(content.es.nav.map((item) => item.href));
  });

  it("keeps hero with explicit two-zone composition and dedicated visual slot", () => {
    const { container } = renderWithProviders(<App />);
    const heroSection = container.querySelector("section#hero");

    expect(heroSection).toBeInTheDocument();
    expect(within(heroSection).getByRole("heading", { name: content.es.hero.fullName })).toBeInTheDocument();

    const visualZone = within(heroSection).getByRole("complementary", { name: /zona visual del hero/i });
    const slot = within(visualZone).getByTestId("hero-visual-slot");
    expect(slot).toBeInTheDocument();
    expect(slot.className).toMatch(/\bhero-visual-depth\b/);
    expect(slot.className).toMatch(/\brounded-full\b/);
    expect(slot.className).toContain("h-[280px]");
    expect(slot.className).toContain("w-[280px]");
    expect(within(slot).getByTestId("hero-visual-icon")).toBeInTheDocument();

    const visualHeading = within(visualZone).queryByRole("heading", { name: content.es.hero.fullName });
    expect(visualHeading).not.toBeInTheDocument();

    const heading = within(heroSection).getByRole("heading", { name: content.es.hero.fullName });
    const surname = content.es.hero.fullName.split(/\s+/).at(-1);
    const highlightedSurname = within(heading).getByText(surname);
    expect(highlightedSurname.className).toMatch(/\btext-gradient-surname\b/);
  });

  it("enforces CTA hierarchy semantics where primary dominates secondary and ghost", () => {
    render(
      <div>
        <CTAButton href="#primary" label="Principal" variant="primary" />
        <CTAButton href="#secondary" label="Secundario" variant="secondary" />
        <CTAButton href="#ghost" label="Ghost" variant="ghost" />
      </div>,
    );

    const primary = screen.getByRole("link", { name: /principal/i });
    const secondary = screen.getByRole("link", { name: /secundario/i });
    const ghost = screen.getByRole("link", { name: /ghost/i });

    expect(primary).toHaveAttribute("data-cta-variant", "primary");
    expect(secondary).toHaveAttribute("data-cta-variant", "secondary");
    expect(ghost).toHaveAttribute("data-cta-variant", "ghost");

    expect(primary.className).toMatch(/\bbg-primary\b/);
    expect(primary.className).toMatch(/\bshadow-ambient-primary\b/);

    expect(secondary.className).toMatch(/\bbg-surface-container-high\b/);
    expect(secondary.className).toMatch(/\bring-1\b/);
    expect(secondary.className).not.toMatch(/\bbg-primary\b/);

    expect(ghost.className).toMatch(/\bcard-ghost-edge\b/);
    expect(ghost.className).not.toMatch(/\bborder\b/i);
    expect(ghost.className).not.toMatch(/\bbg-primary\b/);
  });

  it("keeps contact submit as semantic submit button aligned with primary CTA language", () => {
    renderWithProviders(<App />);

    const submit = screen.getByRole("button", { name: content.es.contact.form.submitLabel });
    expect(submit).toHaveAttribute("type", "submit");
    expect(submit.className).toMatch(/\bbg-primary\b/);
    expect(submit.className).toMatch(/\bshadow-ambient-primary\b/);
    expect(submit.className).toContain("tracking-[0.05em]");
  });

  it("renders project cta group and status without breaking if status is absent", () => {
    const withoutStatus = content.es.projects.map((project) => ({
      ...project,
      status: undefined,
    }));

    renderWithProviders(<Projects data={withoutStatus} />);

    const cards = screen.getAllByTestId("project-cta-group");
    expect(cards.length).toBe(content.es.projects.length);
    expect(screen.queryByText(/en construcción/i)).not.toBeInTheDocument();
  });

  it("exposes required phase-2 scaffolds without animation assumptions", () => {
    renderWithProviders(<App />);

    expect(screen.getByTestId("hero-visual-slot")).toBeInTheDocument();

    expect(screen.getByTestId("experience-timeline")).toBeInTheDocument();
    expect(screen.getAllByTestId("project-media-slot").length).toBe(content.es.projects.length);
    expect(screen.getAllByTestId("project-cta-group").length).toBe(content.es.projects.length);

    const contactFields = [
      screen.getByRole("textbox", { name: /nombre/i }),
      screen.getByRole("textbox", { name: /email/i }),
      screen.getByRole("textbox", { name: /mensaje/i }),
    ];

    contactFields.forEach((field) => {
      expect(field.className).toMatch(/\bform-field-resting\b/);
    });
  });

  it("keeps ghost-outline boundary as optional low-emphasis fallback", () => {
    const { rerender } = render(<CardShell>Base card</CardShell>);

    const baseCard = screen.getByText("Base card").closest("article");
    expect(baseCard).toBeInTheDocument();
    expect(baseCard.className).toMatch(/\bsurface-card\b/);
    expect(baseCard.className).toMatch(/\boutline-none\b/);
    expect(baseCard.className).not.toMatch(/\bborder\b/i);

    rerender(<CardShell ghostOutline>Fallback card</CardShell>);

    const fallbackCard = screen.getByText("Fallback card").closest("article");
    expect(fallbackCard).toBeInTheDocument();
    expect(fallbackCard.className).toMatch(/\bsurface-card\b/);
    expect(fallbackCard.className).toMatch(/\boutline\b/);
    expect(fallbackCard.className).toMatch(/\boutline-1\b/);
    expect(fallbackCard.className).toMatch(/\boutline-outline-variant\/20\b/);
    expect(fallbackCard.className).not.toMatch(/\bborder\b/i);
  });

  it("applies ghost-border hierarchy selectively across card sections", () => {
    const { container } = renderWithProviders(<App />);

    const projectsCard = container.querySelector("#projects article");
    const educationCard = container.querySelector("#education article");
    const contactCard = screen.getByTestId("contact-card-shell");

    expect(projectsCard).toBeInTheDocument();
    expect(projectsCard.className).toMatch(/\bcard-ghost-edge-strong\b/);

    expect(educationCard).toBeInTheDocument();
    expect(educationCard.className).toMatch(/\bcard-ghost-edge\b/);

    expect(contactCard).toBeInTheDocument();
    expect(contactCard.className).toMatch(/\bcard-ghost-edge-accent\b/);
  });

  it("renders redesigned education section with grouped data-driven cards", () => {
    const { container } = renderWithProviders(<App />);

    const educationSection = container.querySelector("section#education");
    expect(educationSection).toBeInTheDocument();

    expect(within(educationSection).getByRole("heading", { name: /formación académica/i })).toBeInTheDocument();
    expect(within(educationSection).getByText("TÍTULOS Y GRADOS")).toBeInTheDocument();
    expect(within(educationSection).getByText("CERTIFICACIONES & CURSOS")).toBeInTheDocument();
    expect(within(educationSection).getByText("CERTIFICACIONES")).toBeInTheDocument();
    expect(within(educationSection).getByText("CURSOS")).toBeInTheDocument();

    const subsectionDivider = within(educationSection).getByTestId("education-subsection-divider");
    expect(subsectionDivider).toBeInTheDocument();

    expect(content.es.education.degrees.length).toBeGreaterThan(0);
    expect(content.es.education.certifications.length).toBeGreaterThan(0);
    expect(content.es.education.courses.length).toBeGreaterThan(0);

    const degreeCards = within(educationSection).getAllByTestId("education-degree-card");
    expect(degreeCards.length).toBe(content.es.education.degrees.length);

    content.es.education.degrees.forEach((degree, index) => {
      const degreeCard = degreeCards[index];
      expect(within(degreeCard).getByRole("heading", { name: degree.title })).toBeInTheDocument();
      expect(within(degreeCard).getByText(degree.typeBadge)).toBeInTheDocument();
      expect(within(degreeCard).getByText(degree.institution)).toBeInTheDocument();
      expect(within(degreeCard).getByText(degree.period)).toBeInTheDocument();
      expect(within(degreeCard).getByText(degree.location)).toBeInTheDocument();
      expect(within(degreeCard).getByText(degree.status)).toBeInTheDocument();
    });

    content.es.education.certifications.forEach((certification) => {
      expect(within(educationSection).getByRole("heading", { name: certification.title })).toBeInTheDocument();
      expect(within(educationSection).getByText(certification.entity)).toBeInTheDocument();
      expect(within(educationSection).getByText(certification.period)).toBeInTheDocument();
      expect(within(educationSection).getByText(certification.typeBadge)).toBeInTheDocument();
      expect(within(educationSection).getAllByRole("button", { name: /próximamente/i }).length).toBeGreaterThan(0);
    });

    content.es.education.courses.forEach((course) => {
      expect(within(educationSection).getByRole("heading", { name: course.title })).toBeInTheDocument();
      expect(within(educationSection).getByText(course.entity)).toBeInTheDocument();
      expect(within(educationSection).getByText(course.period)).toBeInTheDocument();
      expect(within(educationSection).getByText(course.typeBadge)).toBeInTheDocument();
    });

    expect(within(educationSection).getAllByTestId("education-certification-card").length).toBe(
      content.es.education.certifications.length,
    );
    expect(within(educationSection).getAllByTestId("education-course-card").length).toBe(
      content.es.education.courses.length,
    );

    const responsiveGrids = educationSection.querySelectorAll(".grid");
    const boundedGrids = Array.from(responsiveGrids).filter((grid) =>
      ["grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "xl:grid-cols-4", "justify-items-start"].every(
        (classToken) => grid.className.includes(classToken),
      ),
    );
    expect(boundedGrids.length).toBeGreaterThanOrEqual(3);

    const cappedCards = within(educationSection).getAllByTestId(/education-(degree|certification|course)-card/);
    cappedCards.forEach((card) => {
      expect(card.className).toContain("max-w-[420px]");
    });
  });

  it("renders project media conditionally with fallback model when imageUrl is empty", () => {
    const projectData = [
      {
        name: "Con imagen",
        description: "Proyecto con imagen",
        tech: ["React"],
        githubUrl: "#",
        demoUrl: "#",
        imageUrl: "https://example.com/preview.png",
      },
      {
        name: "Sin imagen",
        description: "Proyecto sin imagen",
        tech: ["Node"],
        githubUrl: "#",
        demoUrl: "#",
        imageUrl: "   ",
      },
    ];

    renderWithProviders(<Projects data={projectData} />);

    expect(screen.getByRole("img", { name: /vista previa de con imagen/i })).toBeInTheDocument();
    const fallbackMedia = screen.getByLabelText(/fallback visual sin imagen/i);
    expect(fallbackMedia).toBeInTheDocument();
    expect(within(fallbackMedia).getByText("Sin imagen")).toBeInTheDocument();
    expect(within(fallbackMedia).getByText("Node")).toBeInTheDocument();
  });

  it("renders contact location label centered below form", () => {
    renderWithProviders(<App />);

    const locationLabel = screen.getByTestId("contact-location-label");
    expect(locationLabel).toBeInTheDocument();
    expect(locationLabel).toHaveTextContent("📍 Valparaíso, Chile");
    expect(locationLabel.className).toMatch(/\btext-center\b/);
  });

  it("renders contact channel icons according to channel type", () => {
    renderWithProviders(<App />);

    const email = screen.getByRole("link", { name: /canal email/i });
    const linkedin = screen.getByRole("link", { name: /canal linkedin/i });
    const github = screen.getByRole("link", { name: /canal github/i });

    [email, linkedin, github].forEach((link) => {
      const icon = link.querySelector("svg");
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute("viewBox")).toBe("0 0 24 24");
    });
  });
});
