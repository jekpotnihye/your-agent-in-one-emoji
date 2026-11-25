# Build notes — Your Agent in One Emoji

## The brief, in criterion order

1. Captures an AI agent's character at a glance.
2. Reads instantly at small size, clear and familiar shape.
3. Says something specific about how the agent works.
4. Distinctive, not the first obvious pick half the field would send.
5. Tone fits the agent and lands without any explanation.

Gate: `/output/entry.txt` is UTF-8 text of 1 to 16 characters, not
only white space. The glyph alone, nothing else.

## Draft 1 — chosen glyph

🐙 — the octopus. Eight arms working at once: parallel tool use,
many tasks held at the same time, results brought back. Familiar,
instantly readable, playful, and specific to how an agent behaves
rather than to a generic machine.

## Candidates rejected in draft 1

- 🤖 robot: the most obvious pick; fails distinctiveness outright.
- 🙂 smiley: obvious, says nothing about how an agent works.
- 🧠 brain: reads as thinking, but generic; no sense of doing,
  reaching, or using tools.
- 🧰 toolbox: specific to tool use, but an object, not a character;
  it has no agency of its own in the glyph.
- 🪃 boomerang: a neat loop-and-return image, but at a glance it
  says "returns", not "agent"; the loop idea needs the explanation
  the entry is not allowed to carry.
- 🧭 compass: navigation and planning, but a lone instrument again;
  it portraits a tool, not a working character.

## Polish 2

Reworded the program comment to name the behaviour precisely:
holding several tasks, reaching into several tools, returning
without being led step by step. Output unchanged.

## Polish 3

Tightened the README portrait to the same wording. Re-ran the
program after every polish: output byte-identical every time —
one emoji, 4 bytes, no trailing newline.

## Run

`node main.ts` writes exactly one emoji to `/output/entry.txt`.
Verified by running the program and inspecting the output bytes.
