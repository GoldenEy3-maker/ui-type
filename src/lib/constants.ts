import { ValueOf } from "./types";

export const RouterMap = {
  Home: "/",
  Summary: "/summary",
  Question: "/question/",
} as const;

export const PsychoTypeMap = {
  CalmAnalyst: "calm-analyst",
  Pragmatist: "pragmatist",
  Logician: "logician",
  Ambivert: "ambivert",
  Extrovert: "extrovert",
} as const;

export type PsychoTypeMap = ValueOf<typeof PsychoTypeMap>;
