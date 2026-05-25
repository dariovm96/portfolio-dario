import { describe, expect, it } from "vitest";
import content from "../data/content";

// content is now { es: {...}, en: {...} }
// All contract assertions apply to the ES (default) locale
const c = content.es;

describe("content model contract", () => {
  it("exposes all required top-level keys", () => {
    const keys = Object.keys(c);

    expect(keys).toEqual([
      "nav",
      "hero",
      "about",
      "skills",
      "experience",
      "education",
      "projects",
      "contact",
      "footer",
      "ui",
    ]);
  });

  it("matches recommended source precedence assumptions", () => {
    expect(c.hero.fullName).toBe("Darío Vera Muñoz");
    expect(c.hero.title).toBe("Ingeniero Informático · Desarrollador Fullstack");
    expect(c.contact.heading).toBe("¿Trabajamos juntos?");
    expect(c.footer.copyright).toContain("Darío Vera Muñoz");
    expect(c.projects.some((project) => project.isCurrentSite === true)).toBe(true);
  });

  it("sets Git/GitHub level to Avanzado without schema changes", () => {
    const devopsCategory = c.skills.categories.find((category) => category.name === "DevOps/Tools");
    const gitSkill = devopsCategory?.items?.find((item) => item.name === "Git/GitHub");

    expect(gitSkill).toBeTruthy();
    expect(gitSkill?.level).toBe("Avanzado");
  });

  it("keeps grouped education model for scalable rendering", () => {
    expect(Array.isArray(c.education?.degrees)).toBe(true);
    expect(Array.isArray(c.education?.certifications)).toBe(true);
    expect(Array.isArray(c.education?.courses)).toBe(true);

    c.education.degrees.forEach((entry) => {
      expect(entry.icon).toBeTruthy();
      expect(entry.typeBadge).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.institution).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(entry.location).toBeTruthy();
      expect(entry.status).toBeTruthy();
    });

    c.education.certifications.forEach((entry) => {
      expect(entry.icon).toBeTruthy();
      expect(entry.typeBadge).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.entity).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(Object.hasOwn(entry, "credentialUrl")).toBe(true);
    });

    c.education.courses.forEach((entry) => {
      expect(entry.icon).toBeTruthy();
      expect(entry.typeBadge).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.entity).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(Object.hasOwn(entry, "credentialUrl")).toBe(true);
    });
  });
});
