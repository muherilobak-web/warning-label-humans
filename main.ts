// Warning Label for Humans: writes the one-line safety warning label to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "WARNING: After midnight this human will agree to anything, order everything, and deny every word of it by morning.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
