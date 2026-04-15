import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function readGlobalsCss() {
  const globalsPath = resolve(process.cwd(), "src/styles/globals.css");
  return readFileSync(globalsPath, "utf8");
}

describe("global styles foundation contract", () => {
  it("defines tokenized dark surfaces without 1px solid separators as primary strategy", () => {
    const css = readGlobalsCss();

    expect(css).toContain("--surface:");
    expect(css).toContain("--surface-container-low:");
    expect(css).toContain("--surface-container:");
    expect(css).toContain(".surface-base");
    expect(css).toContain(".surface-section");
    expect(css).toContain(".surface-card");

    expect(css).not.toMatch(/border\s*:\s*1px\s+solid/i);
  });

  it("defines typography foundation for headline, body and metadata labels", () => {
    const css = readGlobalsCss();

    expect(css).toContain("family=Space+Grotesk");
    expect(css).toContain("family=Inter");
    expect(css).toContain("family=JetBrains+Mono");
    expect(css).toContain("family=Fira+Code");

    expect(css).toContain(".font-headline");
    expect(css).toContain(".font-body");
    expect(css).toContain(".font-label");
  });
});
