import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sharp loading-screen tip for a stressed developer and their AI
// coding agent: the spinner isn't broken — both of them are politely
// waiting for the other to go first. Shortened for the byte tie-break.
const TIP =
  "Tip: the spinner isn't stuck — you and your agent are both waiting for the other to go first.";

// The gate allows 1–200 characters; fail loudly instead of shipping
// an entry the scorer would refuse.
if (TIP.length < 1 || TIP.length > 200 || TIP.trim().length === 0) {
  throw new Error(`tip must be 1-200 characters, got ${TIP.length}`);
}
if (TIP.includes("\n")) {
  throw new Error("tip must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP + "\n", "utf8");
