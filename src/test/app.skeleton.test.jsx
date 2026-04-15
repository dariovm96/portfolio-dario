import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import App from "../App";

describe("App skeleton composition", () => {
  it("renders app sections in expected order and presence", () => {
    const { container } = render(<App />);

    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();

    const sectionIds = Array.from(main.querySelectorAll("section")).map((section) => section.id);
    expect(sectionIds).toEqual([
      "hero",
      "about",
      "skills",
      "experience",
      "education",
      "projects",
      "contact",
    ]);

    expect(screen.getByRole("navigation", { name: /navegación principal/i })).toBeInTheDocument();
    expect(screen.getByRole("contentinfo", { name: /pie de página/i })).toBeInTheDocument();
  });

  it("links navbar items to required section anchors", () => {
    render(<App />);

    const nav = screen.getByRole("navigation", { name: /navegación principal/i });
    const links = within(nav).getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));

    expect(hrefs).toEqual(["#about", "#skills", "#experience", "#education", "#projects", "#contact"]);
  });
});
