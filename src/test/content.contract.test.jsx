import { describe, expect, it } from "vitest";
import content from "../data/content";

describe("content model contract", () => {
  it("exposes all required top-level keys", () => {
    const keys = Object.keys(content);

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
    ]);
  });

  it("matches recommended source precedence assumptions", () => {
    expect(content.hero.fullName).toBe("Darío Vera Muñoz");
    expect(content.hero.title).toBe("Ingeniero Informático · Desarrollador Fullstack");
    expect(content.contact.heading).toBe("¿Trabajamos juntos?");
    expect(content.footer.copyright).toContain("Darío Vera Muñoz");
    expect(content.projects.some((project) => project.status === "En construcción")).toBe(true);
  });

  it("keeps grouped education model for scalable rendering", () => {
    expect(Array.isArray(content.education?.degrees)).toBe(true);
    expect(Array.isArray(content.education?.certifications)).toBe(true);
    expect(Array.isArray(content.education?.courses)).toBe(true);

    content.education.degrees.forEach((entry) => {
      expect(entry.icon).toBeTruthy();
      expect(entry.typeBadge).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.institution).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(entry.location).toBeTruthy();
      expect(entry.status).toBeTruthy();
    });

    content.education.certifications.forEach((entry) => {
      expect(entry.icon).toBeTruthy();
      expect(entry.typeBadge).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.entity).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(Object.hasOwn(entry, "credentialUrl")).toBe(true);
    });

    content.education.courses.forEach((entry) => {
      expect(entry.icon).toBeTruthy();
      expect(entry.typeBadge).toBeTruthy();
      expect(entry.title).toBeTruthy();
      expect(entry.entity).toBeTruthy();
      expect(entry.period).toBeTruthy();
      expect(Object.hasOwn(entry, "credentialUrl")).toBe(true);
    });
  });
});
