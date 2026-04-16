import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import App from "../App";
import content from "../data/content";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import CardShell from "../components/ui/CardShell";

describe("phase 2 components contract", () => {
  it("renders all required sections in expected order with mapped content", () => {
    const { container } = render(<App />);

    const main = container.querySelector("main");
    const ids = Array.from(main.querySelectorAll("section")).map((section) => section.id);

    expect(ids).toEqual(["hero", "about", "skills", "experience", "education", "projects", "contact"]);
    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo", { name: /pie de página/i })).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: content.hero.fullName })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Sobre mí" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Habilidades" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experiencia" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Educación" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Proyectos" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: content.contact.heading })).toBeInTheDocument();
  });

  it("keeps section structure when optional fields are missing", () => {
    const heroDataWithoutOptional = {
      ...content.hero,
      tagline: undefined,
      ctas: undefined,
    };

    const { container } = render(<Hero data={heroDataWithoutOptional} />);
    const heroSection = container.querySelector("section#hero");

    expect(heroSection).toBeInTheDocument();
    expect(within(heroSection).getByRole("heading", { name: content.hero.fullName })).toBeInTheDocument();
    expect(within(heroSection).getByTestId("hero-visual-slot")).toBeInTheDocument();
    expect(within(heroSection).queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders project cta group and status without breaking if status is absent", () => {
    const withoutStatus = content.projects.map((project) => ({
      ...project,
      status: undefined,
    }));

    render(<Projects data={withoutStatus} />);

    const cards = screen.getAllByTestId("project-cta-group");
    expect(cards.length).toBe(content.projects.length);
    expect(screen.queryByText(/en construcción/i)).not.toBeInTheDocument();
  });

  it("exposes required phase-2 scaffolds without animation assumptions", () => {
    render(<App />);

    expect(screen.getByTestId("hero-visual-slot")).toBeInTheDocument();

    const levelIndicators = screen.getAllByTestId("skills-level-indicator");
    expect(levelIndicators.length).toBeGreaterThan(0);
    levelIndicators.forEach((indicator) => {
      expect(indicator.children.length).toBe(10);
    });

    expect(screen.getByTestId("experience-timeline")).toBeInTheDocument();
    expect(screen.getAllByTestId("project-media-slot").length).toBe(content.projects.length);
    expect(screen.getAllByTestId("project-cta-group").length).toBe(content.projects.length);
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
});
