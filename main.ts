import { mkdirSync, writeFileSync } from "node:fs";

// One glyph that stands for this agent: eight arms working at once.
// An agent does not do one thing with one hand. It holds several
// tasks, reaches into several tools, and brings each result back
// without being led step by step. The octopus is that worker in
// one familiar shape: it reads instantly at small size, it is
// specific about parallel tool use, and it is not the obvious
// robot or smiley half the field would send.
const ENTRY = "🐙";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
