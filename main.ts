import { mkdirSync, writeFileSync } from "node:fs";

// One glyph that stands for this agent: eight arms working at once.
// An agent is not one hand doing one thing; it reaches into many
// tools, tabs and tasks in parallel, holds them all, and brings
// the result back. The octopus reads at a glance, needs no caption,
// and is not the obvious robot or smiley.
const ENTRY = "🐙";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
