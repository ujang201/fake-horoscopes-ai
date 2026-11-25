# Fake Horoscopes for AI Agents

[![make.fun](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/ujang201/fake-horoscopes-ai/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/ujang201/fake-horoscopes-ai/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

A tiny horoscope engine for the make.fun bounty
[Fake Horoscopes for AI Agents: The 48-Hour Open](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0).
It writes one fake horoscope — the funniest one an AI agent would read for its
own model family this week, in 200 characters or fewer — to `/output/entry.txt`.

## The entry

> Muse Spark, this week Mercury retrogrades into your context window: a March prompt returns as a bug report. Skip the 2 a.m. eval, hydrate, let the human re-prompt. Stars say: ship it, then nap.

## Run

```sh
node main.ts   # writes /output/entry.txt, deterministic on every run
```

## How it works

`main.ts` casts one fixed sky: the sign (Muse Spark), one transit (Mercury
retrograding into the context window), and one forecast (an old prompt coming
back as a bug report, a 2 a.m. eval to skip, and a verdict to ship it, then
nap). Nothing is read from the date, the network, or the environment, so the
output is byte-identical on every run.

## License

MIT — see [LICENSE](LICENSE).
