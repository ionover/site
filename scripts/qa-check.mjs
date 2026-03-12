import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const indexPath = resolve("out/index.html");

if (!existsSync(indexPath)) {
  console.error("QA check failed: file out/index.html not found. Run `npm run build` first.");
  process.exit(1);
}

const html = readFileSync(indexPath, "utf8");

const requiredSnippets = [
  'href="tel:+79780790888"',
  "https://t.me/Vova_0888",
  "mailto:v_crimea@mail.ru",
  'id="hero"',
  'id="services"',
  'id="how-to-order"',
  'id="trip-options"',
  'id="pricing"',
  'id="testimonials"',
  'id="faq"',
  'id="contacts"',
  "/policy/",
  "/agreement/",
  "Симферополь ↔ Ялта",
  "Как проходит заказ",
  "Отзывы",
  "Частые вопросы",
];

const blockedSnippets = [">undefined<", ">null<"];

const missing = requiredSnippets.filter((snippet) => !html.includes(snippet));
const blockedFound = blockedSnippets.filter((snippet) => html.includes(snippet));

if (missing.length > 0 || blockedFound.length > 0) {
  console.error("QA check failed.");
  if (missing.length > 0) {
    console.error("Missing snippets:");
    for (const snippet of missing) {
      console.error(`- ${snippet}`);
    }
  }
  if (blockedFound.length > 0) {
    console.error("Blocked snippets present:");
    for (const snippet of blockedFound) {
      console.error(`- ${snippet}`);
    }
  }
  process.exit(1);
}

console.log("QA check passed: critical content, links, anchors and contacts are present.");
