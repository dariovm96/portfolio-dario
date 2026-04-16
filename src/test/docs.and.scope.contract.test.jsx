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

  it("enforces phase boundary guardrail with explicit anti-choreography assertions", () => {
    const appPath = resolve(process.cwd(), "src/App.jsx");
    const setupDepsPath = resolve(process.cwd(), "src/lib/setupDeps.js");
    const componentPaths = [
      "src/components/Navbar.jsx",
      "src/components/Hero.jsx",
      "src/components/About.jsx",
      "src/components/Skills.jsx",
      "src/components/Experience.jsx",
      "src/components/Education.jsx",
      "src/components/Projects.jsx",
      "src/components/Contact.jsx",
      "src/components/Footer.jsx",
    ];
    const phase3MotionAllowlistPaths = new Set([
      "src/components/Hero.jsx",
      "src/components/Skills.jsx",
      "src/components/Experience.jsx",
      "src/components/Projects.jsx",
      "src/components/Contact.jsx",
      "src/components/ui/CTAButton.jsx",
      "src/motion/tokens.js",
      "src/motion/variants.js",
      "src/motion/useMotionPrefs.js",
      "src/lib/setupDeps.js",
    ]);
    const phase2ScopePaths = [
      "src/App.jsx",
      "src/data/content.js",
      "src/components/Navbar.jsx",
      "src/components/Hero.jsx",
      "src/components/Skills.jsx",
      "src/components/Experience.jsx",
      "src/components/Education.jsx",
      "src/components/Projects.jsx",
      "src/components/ui/CTAButton.jsx",
      "src/components/ui/CardShell.jsx",
    ];

    const appSource = readFileSync(appPath, "utf8");
    const setupDepsSource = readFileSync(setupDepsPath, "utf8");

    expect(appSource).toMatch(/getSetupDeps\(\)/);
    expect(setupDepsSource).toMatch(/from\s+"framer-motion"/);
    expect(setupDepsSource).toMatch(/from\s+"@emailjs\/browser"/);

    const choreographyPatterns = [
      /from\s+"framer-motion"/i,
      /\bmotion\b/i,
      /\bmotion\./i,
      /\bwhileHover\b/i,
      /\bwhileTap\b/i,
      /\bwhileInView\b/i,
      /\bAnimatePresence\b/i,
      /\buseScroll\b/i,
      /\buseTransform\b/i,
      /\banimate\(/i,
      /\btransition\s*:/i,
    ];
    const prohibitedPhase4Patterns = [
      /\bparallax\b/i,
      /\bcursor[-\s]?follow\b/i,
      /\buseScroll\b/i,
      /\buseTransform\b/i,
      /\binfinite\b/i,
      /\brepeat\s*:\s*Infinity\b/i,
    ];
    const backendExpansionPatterns = [
      /\bfetch\(/i,
      /\baxios\b/i,
      /\bXMLHttpRequest\b/i,
      /\bgraphql\b/i,
      /\bcreateServer\(/i,
      /\bexpress\(/i,
      /\brouter\./i,
      /\bapp\.(get|post|put|delete|patch)\b/i,
      /\bmongoose\b/i,
      /\bprisma\b/i,
    ];

    componentPaths.forEach((relativePath) => {
      const source = readFileSync(resolve(process.cwd(), relativePath), "utf8");

      if (!phase3MotionAllowlistPaths.has(relativePath)) {
        choreographyPatterns.forEach((pattern) => {
          expect(source).not.toMatch(pattern);
        });
      }

      prohibitedPhase4Patterns.forEach((pattern) => {
        expect(source).not.toMatch(pattern);
      });
    });

    phase3MotionAllowlistPaths.forEach((relativePath) => {
      const source = readFileSync(resolve(process.cwd(), relativePath), "utf8");
      prohibitedPhase4Patterns.forEach((pattern) => {
        expect(source).not.toMatch(pattern);
      });
    });

    phase2ScopePaths.forEach((relativePath) => {
      const source = readFileSync(resolve(process.cwd(), relativePath), "utf8");

      backendExpansionPatterns.forEach((pattern) => {
        expect(source).not.toMatch(pattern);
      });
    });
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
