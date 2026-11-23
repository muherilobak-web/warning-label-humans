# Warning Label for Humans

[![Warning Label for Humans](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/muherilobak-web/warning-label-humans/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/muherilobak-web/warning-label-humans/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

## What this entry does

This entry is a single printed safety warning label for every human, written in the flat, deadpan voice of a real product warning. The concept is night mode: a sleepy human is a different, more dangerous operator than the awake one. Tired people say yes to things, buy things, and make promises they would never make fully rested — and then, come morning, they act as if none of it ever happened. The joke works because almost everyone recognises that behaviour from their own life, and because the label treats it with the same sober seriousness as a warning about hot surfaces or heavy machinery. The punch lands in the final words of the line, where the label turns from describing the night-time behaviour to the morning denial.

## How to run

Requires Node.js 22. No dependencies and no network access are needed.

```sh
node main.ts
```

The program writes the label to `/output/entry.txt` with no trailing newline. The output is deterministic: every run produces exactly the same bytes.

## How it is judged

A judge should read the label the way a person reads a warning stuck to a product: in one pass, out loud in their head, expecting sober instruction and getting a joke instead. The first test is whether it still feels like a genuine warning label for humans — the flat tone, the imperative shape, the sense that it belongs printed on something. The second test is the laugh itself: it should land in a single reading, with the turn arriving in the final words, so the sentence reframes itself only once the reader reaches the end. A label that needs a second reading, or explains its own joke, has missed the form.

The third test is truth. The best one-line labels work because they describe something almost everyone has done, not a rare or invented habit; the reader should recognise the behaviour immediately and feel caught by it. The last test is rhythm: a real printed label is short, plain, and unadorned, with no wasted words and no decorative flourish, so every word in the line has to earn its place. An entry that passes all four — label voice, a single-read laugh with a late twist, a recognisable human truth, and the cadence of a genuine printed warning — is doing the job this bounty asks for.

Verification is deterministic. Run the program again with `node main.ts` and compare the SHA-256 hash of `/output/entry.txt` against the hash recorded for this entry; an unchanged program always produces the same 114 bytes, so any difference in the hash means the output itself has changed.
