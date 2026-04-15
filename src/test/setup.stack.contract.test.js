import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { getSetupDeps } from "../lib/setupDeps";

function readPackageJson() {
  const packageJsonPath = resolve(process.cwd(), "package.json");
  return JSON.parse(readFileSync(packageJsonPath, "utf8"));
}

describe("setup stack contract", () => {
  it("declares baseline and setup dependencies in package.json", () => {
    const pkg = readPackageJson();

    expect(pkg.dependencies).toMatchObject({
      react: expect.any(String),
      "react-dom": expect.any(String),
      "framer-motion": expect.any(String),
      "@emailjs/browser": expect.any(String),
    });

    expect(pkg.devDependencies).toMatchObject({
      vite: expect.any(String),
      tailwindcss: expect.any(String),
      vitest: expect.any(String),
    });
  });

  it("keeps setup scripts needed for dev and verification", () => {
    const pkg = readPackageJson();

    expect(pkg.scripts).toMatchObject({
      dev: expect.any(String),
      build: expect.any(String),
      test: expect.any(String),
      "test:coverage": expect.any(String),
      "check:content": expect.any(String),
    });
  });

  it("boots setup dependency bridge without missing module resolution", () => {
    const deps = getSetupDeps();

    expect(deps).toEqual({
      motion: "function",
      emailjs: "object",
    });
  });
});
