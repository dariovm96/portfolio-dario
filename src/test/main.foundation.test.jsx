import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe("global foundation import", () => {
  it("keeps globals.css imported from main entrypoint", () => {
    const mainPath = resolve(process.cwd(), "src/main.jsx");
    const source = readFileSync(mainPath, "utf8");

    expect(source).toMatch(/import\s+["']\.\/styles\/globals\.css["'];/);
  });
});
