import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

describe(".env.example contract", () => {
  it("contains required EmailJS placeholders without real secrets", () => {
    const envPath = resolve(process.cwd(), ".env.example");
    const raw = readFileSync(envPath, "utf8");

    expect(raw).toContain("VITE_EMAILJS_SERVICE_ID=your_service_id");
    expect(raw).toContain("VITE_EMAILJS_TEMPLATE_ID=your_template_id");
    expect(raw).toContain("VITE_EMAILJS_PUBLIC_KEY=your_public_key");

    const suspiciousValues = /(VITE_EMAILJS_(SERVICE_ID|TEMPLATE_ID|PUBLIC_KEY)=)(?!your_)[^\s]+/g;
    expect(raw.match(suspiciousValues)).toBeNull();
  });
});
