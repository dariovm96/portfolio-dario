import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import { LanguageProvider, useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "../components/ui/LanguageToggle";
import App from "../App";
import content from "../data/content";

// Helper: render a component that exposes useLanguage internals
function LanguageReader() {
  const { lang, setLang, content: c } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="hero-name">{c?.hero?.fullName ?? ""}</span>
      <button onClick={() => setLang("en")}>switch-en</button>
      <button onClick={() => setLang("es")}>switch-es</button>
    </div>
  );
}

describe("useLanguage hook", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("defaults to 'es' when localStorage is empty", () => {
    render(
      <LanguageProvider>
        <LanguageReader />
      </LanguageProvider>,
    );

    expect(screen.getByTestId("lang")).toHaveTextContent("es");
  });

  it("reads saved language from localStorage on mount", () => {
    localStorage.setItem("portfolio_lang", "en");

    render(
      <LanguageProvider>
        <LanguageReader />
      </LanguageProvider>,
    );

    expect(screen.getByTestId("lang")).toHaveTextContent("en");
  });

  it("setLang updates context and persists to localStorage", () => {
    render(
      <LanguageProvider>
        <LanguageReader />
      </LanguageProvider>,
    );

    expect(screen.getByTestId("lang")).toHaveTextContent("es");

    fireEvent.click(screen.getByText("switch-en"));

    expect(screen.getByTestId("lang")).toHaveTextContent("en");
    expect(localStorage.getItem("portfolio_lang")).toBe("en");
  });

  it("content slice switches between es and en on setLang", () => {
    render(
      <LanguageProvider>
        <LanguageReader />
      </LanguageProvider>,
    );

    expect(screen.getByTestId("hero-name")).toHaveTextContent(content.es.hero.fullName);

    fireEvent.click(screen.getByText("switch-en"));

    expect(screen.getByTestId("hero-name")).toHaveTextContent(content.en.hero.fullName);

    fireEvent.click(screen.getByText("switch-es"));

    expect(screen.getByTestId("hero-name")).toHaveTextContent(content.es.hero.fullName);
  });
});

describe("LanguageToggle component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("renders ES and EN buttons", () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    );

    expect(screen.getByRole("button", { name: /switch to es/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /switch to en/i })).toBeInTheDocument();
  });

  it("marks ES as active (aria-pressed=true) by default", () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    );

    const esBtn = screen.getByRole("button", { name: /switch to es/i });
    const enBtn = screen.getByRole("button", { name: /switch to en/i });

    expect(esBtn).toHaveAttribute("aria-pressed", "true");
    expect(enBtn).toHaveAttribute("aria-pressed", "false");
  });

  it("clicking EN sets aria-pressed correctly and persists to localStorage", () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    );

    const enBtn = screen.getByRole("button", { name: /switch to en/i });
    fireEvent.click(enBtn);

    expect(enBtn).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: /switch to es/i })).toHaveAttribute("aria-pressed", "false");
    expect(localStorage.getItem("portfolio_lang")).toBe("en");
  });

  it("active button has tonal-layer-1 class; inactive button does not", () => {
    render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>,
    );

    const esBtn = screen.getByRole("button", { name: /switch to es/i });
    const enBtn = screen.getByRole("button", { name: /switch to en/i });

    expect(esBtn.className).toMatch(/\btonal-layer-1\b/);
    expect(esBtn.className).toMatch(/\btext-primary\b/);
    expect(enBtn.className).not.toMatch(/\btext-primary\b/);
  });
});

describe("Language toggle integration", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it("switching to EN changes visible nav labels", () => {
    renderWithProviders(<App />);

    const nav = screen.getByRole("navigation", { name: /navegación principal/i });

    // Default ES — appears in both desktop + mobile menus
    expect(within(nav).getAllByText(content.es.nav[0].label).length).toBeGreaterThan(0);

    // Click EN (desktop toggle)
    const enBtn = within(nav).getAllByRole("button", { name: /switch to en/i })[0];
    fireEvent.click(enBtn);

    // EN labels present, ES labels gone
    expect(within(nav).getAllByText(content.en.nav[0].label).length).toBeGreaterThan(0);
    expect(within(nav).queryAllByText(content.es.nav[0].label)).toHaveLength(0);
  });

  it("switching back to ES restores Spanish labels", () => {
    renderWithProviders(<App />);

    const nav = screen.getByRole("navigation", { name: /navegación principal/i });
    const enBtn = within(nav).getAllByRole("button", { name: /switch to en/i })[0];
    const esBtn = within(nav).getAllByRole("button", { name: /switch to es/i })[0];

    fireEvent.click(enBtn);
    expect(within(nav).getAllByText(content.en.nav[0].label).length).toBeGreaterThan(0);

    fireEvent.click(esBtn);
    expect(within(nav).getAllByText(content.es.nav[0].label).length).toBeGreaterThan(0);
  });
});
