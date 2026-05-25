import { describe, expect, it, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import App from "../App";

describe("phase 2 accessibility baseline", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("exposes landmarks and coherent heading hierarchy", () => {
    const { container } = renderWithProviders(<App />);

    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo", { name: /pie de página/i })).toBeInTheDocument();

    const headings = Array.from(container.querySelectorAll("h1, h2, h3"));
    expect(headings[0].tagName).toBe("H1");
    expect(headings.some((node) => node.textContent === "Sobre mí")).toBe(true);
    expect(headings.some((node) => node.textContent === "Habilidades")).toBe(true);
  });

  it("keeps explicit labels and unambiguous accessible names on controls", () => {
    renderWithProviders(<App />);

    expect(screen.getByRole("textbox", { name: /nombre/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /mensaje/i })).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /enviar mensaje/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github de sistema de gestión erp/i })).toBeInTheDocument();

    const heroVisualSlot = screen.getByTestId("hero-visual-slot");
    expect(heroVisualSlot).toHaveAttribute("aria-hidden", "true");
    const decorativeIcon = screen.getByTestId("hero-visual-icon");
    expect(decorativeIcon).toHaveAttribute("aria-hidden", "true");

    const nav = screen.getByRole("navigation", { name: /navegación principal/i });
    const sectionLinks = Array.from(nav.querySelectorAll('a[href^="#"]')).filter(
      (link) => link.getAttribute("href") !== "#hero",
    );
    expect(sectionLinks.length).toBeGreaterThan(0);
  });

  it("supports deterministic keyboard traversal evidence without trap", () => {
    const { container } = renderWithProviders(<App />);

    const focusables = Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    expect(focusables.length).toBeGreaterThan(0);

    const hasAtLeastOneReverseCandidate = focusables.length > 1;
    expect(hasAtLeastOneReverseCandidate).toBe(true);

    focusables.forEach((element, index) => {
      element.focus();
      expect(document.activeElement).toBe(element);

      if (index > 0) {
        focusables[index - 1].focus();
        expect(document.activeElement).toBe(focusables[index - 1]);
      }
    });

    focusables[focusables.length - 1].focus();
    expect(document.activeElement).toBe(focusables[focusables.length - 1]);

    focusables[0].focus();
    expect(document.activeElement).toBe(focusables[0]);

    const hasFocusableWithoutTrap = focusables.every((element) => element.getAttribute("tabindex") !== "-1");
    expect(hasFocusableWithoutTrap).toBe(true);
  });
});
