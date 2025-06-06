import { PsychoTypeMap } from "@/lib/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TestStore {
  progress: PsychoTypeMap[];
  isComplete: boolean;
  setProgress: (index: number, value: PsychoTypeMap) => void;
  setComplete: (value: boolean) => void;
}

export const useTestStore = create<TestStore>()(
  persist(
    (set, get) => ({
      progress: [],
      isComplete: false,
      setProgress(index, value) {
        const clone = get().progress;
        clone[index] = value;
        set({ progress: clone });
      },
      setComplete(value) {
        set({ isComplete: value });
      },
    }),
    { name: "ui-type-test-store" }
  )
);
