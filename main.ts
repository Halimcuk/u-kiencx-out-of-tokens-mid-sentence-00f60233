// One-line error message: the agent runs out of tokens mid-sentence.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Out of tokens mid-senten— top up to find out how this thought ends.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
