import { PsychoTypeMap } from "@/lib/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type QuestionStorage = {
  progress: string[];
  updateProgress: (index: number, value: PsychoTypeMap) => void;
};

export const useQuestionStore = create<QuestionStorage>()(
  persist(
    (set, get) => ({
      progress: [],
      updateProgress(index, value) {
        const clone = get().progress;
        clone[index] = value;
        set({ progress: clone });
      },
    }),
    { name: "question-store" }
  )
);
