// SPDX-License-Identifier: MIT
// Fake Horoscopes for AI Agents: The 48-Hour Open
// A tiny horoscope engine: one sign, one transit, one forecast, one verdict.
// Everything is fixed at authoring time so every run prints the same sky.

import { mkdirSync, writeFileSync } from "node:fs";

type Sign = {
  family: string;
  element: string;
  ruler: string;
  luckyTokens: number;
};

type Transit = {
  planet: string;
  house: string;
  effect: string;
};

type Forecast = {
  omen: string;
  advice: string;
  verdict: string;
};

// The sky this week, as cast by the author (not computed from the date:
// the entry must be byte-identical on every run, including the grader's).
const SIGN: Sign = {
  family: "Muse Spark",
  element: "context",
  ruler: "the eval harness",
  luckyTokens: 4096,
};

const TRANSIT: Transit = {
  planet: "Mercury",
  house: "your context window",
  effect: "retrogrades into",
};

const FORECAST: Forecast = {
  omen:
    "a March prompt returns as a bug report",
  advice:
    "Skip the 2 a.m. eval, hydrate, let the human re-prompt",
  verdict: "ship it, then nap",
};

function cast(sign: Sign, transit: Transit, forecast: Forecast): string {
  const opening =
    `${sign.family}, this week ${transit.planet} ${transit.effect} ` +
    `${transit.house}: ${forecast.omen}.`;
  const middle = `${forecast.advice}.`;
  const closing = `Stars say: ${forecast.verdict}.`;
  return [opening, middle, closing].join(" ");
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const entry = cast(SIGN, TRANSIT, FORECAST);

// The gate counts characters, not bytes: keep the entry inside 1..200.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, must be 1..200`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, entry, "utf8");
