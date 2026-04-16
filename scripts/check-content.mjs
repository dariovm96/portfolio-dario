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
if (!content.education || typeof content.education !== "object") {
  failures.push("education must be an object");
}

if (!Array.isArray(content.education?.degrees)) {
  failures.push("education.degrees must be an array");
}

if (!Array.isArray(content.education?.certifications)) {
  failures.push("education.certifications must be an array");
}

if (!Array.isArray(content.education?.courses)) {
  failures.push("education.courses must be an array");
}

for (const [index, entry] of (content.education?.degrees || []).entries()) {
  for (const field of ["icon", "typeBadge", "title", "institution", "period", "location", "status"]) {
    if (!entry[field]) failures.push(`education.degrees[${index}] missing field: ${field}`);
  }
}

for (const [index, entry] of (content.education?.certifications || []).entries()) {
  for (const field of ["icon", "typeBadge", "title", "entity", "period"]) {
    if (!entry[field]) failures.push(`education.certifications[${index}] missing field: ${field}`);
  }
}

for (const [index, entry] of (content.education?.courses || []).entries()) {
  for (const field of ["icon", "typeBadge", "title", "entity", "period"]) {
    if (!entry[field]) failures.push(`education.courses[${index}] missing field: ${field}`);
  }
}
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
