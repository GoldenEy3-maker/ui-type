import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PsychoTypeMap } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDominantPsychoType(
  progress: PsychoTypeMap[]
): [PsychoTypeMap, number] {
  const progressCounter = progress.reduce<Record<string, number>>(
    (acc, curr) => {
      if (acc[curr] !== undefined) acc[curr] += 1;
      else acc[curr] = 1;

      return acc;
    },
    {}
  );

  let dominantPsychoType = Object.keys(progressCounter)[0] as PsychoTypeMap;
  let dominantPsychoTypeValue = progressCounter[dominantPsychoType];

  Object.entries(progressCounter).forEach(([key, value]) => {
    if (dominantPsychoTypeValue < value) {
      dominantPsychoType = key as PsychoTypeMap;
      dominantPsychoTypeValue = value;
    }
  });

  return [
    dominantPsychoType,
    (dominantPsychoTypeValue / progress.length) * 100,
  ];
}
