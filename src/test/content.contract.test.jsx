import { describe, expect, it } from "vitest";
import content from "../data/content";

describe("content model contract", () => {
  it("exposes all required top-level keys", () => {
    const keys = Object.keys(content);

    expect(keys).toEqual([
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
});
