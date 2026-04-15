import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import content from "../data/content";

describe("documentation and setup-scope contracts", () => {
  it("documents Vercel deploy-readiness path in README", () => {
    const readmePath = resolve(process.cwd(), "README.md");
    const readme = readFileSync(readmePath, "utf8");

    expect(readme).toContain("Deploy-readiness (Vercel)");
    expect(readme).toContain("Importar proyecto en Vercel");
    expect(readme).toContain("Framework preset: **Vite**");
    expect(readme).toContain("Build command: `npm run build`");
    expect(readme).toContain("Output directory: `dist`");
    expect(readme).toContain("VITE_EMAILJS_");
  });

  it("keeps contact setup scope without production EmailJS flow wiring", () => {
    const contactPath = resolve(process.cwd(), "src/components/Contact.jsx");
    const source = readFileSync(contactPath, "utf8");

    expect(source).not.toMatch(/emailjs\./i);
    expect(source).not.toMatch(/onSubmit=/i);
    expect(source).toMatch(/type="button"/);
  });

  it("renders setup-scope contact form with static button and no submit behavior", () => {
    render(<Contact data={content.contact} />);

    const button = screen.getByRole("button", { name: content.contact.form.submitLabel });
    expect(button).toHaveAttribute("type", "button");
  });
});
