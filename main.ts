import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Rejected Olympic Sports — one funny single-line sport the Olympics turned down.
// The entry line ships in the repo as entry.txt; main.ts only copies that
// committed artifact to /output/entry.txt (no network, no build-time tools).
const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
