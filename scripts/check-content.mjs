import { content } from "../src/data/content.js";

const requiredTopLevelKeys = [
  "hero",
  "about",
  "skills",
  "experience",
  "education",
  "projects",
  "contact",
  "footer",
];

const failures = [];

for (const key of requiredTopLevelKeys) {
  if (!(key in content)) failures.push(`Missing top-level key: ${key}`);
}

if (!Array.isArray(content.skills?.categories)) {
  failures.push("skills.categories must be an array");
}

if (!Array.isArray(content.experience)) failures.push("experience must be an array");
if (!Array.isArray(content.education)) failures.push("education must be an array");
if (!Array.isArray(content.projects)) failures.push("projects must be an array");
if (!Array.isArray(content.contact?.channels)) failures.push("contact.channels must be an array");
if (!Array.isArray(content.contact?.form?.fields)) failures.push("contact.form.fields must be an array");

for (const [index, entry] of (content.experience || []).entries()) {
  for (const field of ["role", "company", "period"]) {
    if (!entry[field]) failures.push(`experience[${index}] missing field: ${field}`);
  }
}

if (failures.length) {
  console.error("Content contract check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Content contract check passed.");
