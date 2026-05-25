import { describe, expect, it } from "vitest";
import { screen, within } from "@testing-library/react";
import { renderWithProviders } from "./test-utils";
import App from "../App";

describe("App skeleton composition", () => {
  it("renders app sections in expected order and presence", () => {
    const { container } = renderWithProviders(<App />);

    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();

    const sectionIds = Array.from(main.querySelectorAll("section")).map((section) => section.id);
    expect(sectionIds).toEqual([
      "hero",
      "about",
      "projects",
      "skills",
      "experience",
      "education",
      "contact",
    ]);

    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo", { name: /pie de página/i })).toBeInTheDocument();
  });

  it("links navbar items to required section anchors", () => {
    renderWithProviders(<App />);

    const nav = screen.getByRole("navigation", { name: /navegación principal/i });
    const links = within(nav).getAllByRole("link");
    const brandLink = within(nav).queryByTestId("navbar-brand-link");

    if (brandLink) {
      expect(brandLink).toHaveAttribute("href", "#hero");
    }

    const sectionHrefs = links
      .map((link) => link.getAttribute("href"))
      .filter((href) => href !== "#hero");

    expect(sectionHrefs).toEqual([
      "#about",
      "#projects",
      "#skills",
      "#experience",
      "#education",
      "#contact",
    ]);
  });
});
