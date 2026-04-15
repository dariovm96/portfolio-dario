import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import content from "../data/content";

describe("documentation and setup-scope contracts", () => {
  it("documents deploy-readiness and EmailJS runtime prerequisites in README", () => {
    const readmePath = resolve(process.cwd(), "README.md");
    const readme = readFileSync(readmePath, "utf8");

    expect(readme).toContain("Deploy-readiness (Vercel)");
    expect(readme).toContain("Importar proyecto en Vercel");
    expect(readme).toContain("Framework preset: **Vite**");
    expect(readme).toContain("Build command: `npm run build`");
    expect(readme).toContain("Output directory: `dist`");
    expect(readme).toContain("VITE_EMAILJS_");
    expect(readme).toContain("flujo de envío del formulario de contacto");
  });

  it("keeps Contact wired through client-side EmailJS path with no backend relay dependency", () => {
    const contactPath = resolve(process.cwd(), "src/components/Contact.jsx");
    const wrapperPath = resolve(process.cwd(), "src/lib/contactEmail.js");
    const source = readFileSync(contactPath, "utf8");
    const wrapperSource = readFileSync(wrapperPath, "utf8");

    expect(source).toMatch(/onSubmit=/i);
    expect(source).toMatch(/type="submit"/);
    expect(source).toMatch(/sendContactEmail/);
    expect(source).not.toMatch(/fetch\(/i);
    expect(source).not.toMatch(/axios/i);

    expect(wrapperSource).toMatch(/@emailjs\/browser/);
    expect(wrapperSource).toMatch(/emailjs\.send/);
    expect(wrapperSource).toMatch(/VITE_EMAILJS_SERVICE_ID/);
    expect(wrapperSource).toMatch(/VITE_EMAILJS_TEMPLATE_ID/);
    expect(wrapperSource).toMatch(/VITE_EMAILJS_PUBLIC_KEY/);
    expect(wrapperSource).toMatch(/from_name/);
    expect(wrapperSource).toMatch(/from_email/);
    expect(wrapperSource).toMatch(/message/);
    expect(wrapperSource).toMatch(/sent_at/);
    expect(wrapperSource).not.toMatch(/reply_to/);
    expect(wrapperSource).not.toMatch(/fetch\(/i);
    expect(wrapperSource).not.toMatch(/axios/i);
  });

  it("renders Contact structure unchanged plus deterministic submit feedback states", () => {
    render(<Contact data={content.contact} />);

    expect(screen.getByRole("heading", { name: content.contact.heading })).toBeInTheDocument();
    expect(screen.getByRole("form", { name: "Formulario de contacto" })).toBeInTheDocument();

    const button = screen.getByRole("button", { name: content.contact.form.submitLabel });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).not.toBeDisabled();

    expect(screen.queryByRole("status", { name: /enviando/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("status", { name: /mensaje enviado/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
