"use client";

import { z } from "zod";
import { OptionModel } from "@/lib/models";
import { PsychoTypeMap, RouterMap } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Button } from "./ui/button";
import { useTestStore } from "@/store/test";

type OptionsListProps = {
  options: z.infer<typeof OptionModel>[];
  currentIndex: number;
  questionsLength: number;
};

export function OptionsList({
  options,
  currentIndex,
  questionsLength,
}: OptionsListProps) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const router = useRouter();
  const { progress, setProgress, setComplete } = useTestStore();

  const isLastQuestion = currentIndex === questionsLength;

  function optionChangeHandler(value: PsychoTypeMap) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }

    timeoutRef.current = setTimeout(() => {
      router.push(
        isLastQuestion
          ? RouterMap.Summary
          : RouterMap.Question + (currentIndex + 1)
      );
    }, 500);

    setProgress(currentIndex - 1, value);

    if (isLastQuestion) setComplete(true);
  }

  return (
    <div className="col-[2/span_19] grid gap-2 mt-10 [counter-reset:question_0]">
      {options.map((option, index) => (
        <Button
          variant="ghost"
          autoFocus={index === 0}
          key={option.value}
          value={option.value}
          className="[counter-increment:question_1] justify-start aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:inline-flex before:items-center before:justify-center before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
          onClick={() => optionChangeHandler(option.value)}
          aria-checked={progress[currentIndex - 1] === option.value}>
          <p className="text-[1.375rem] leading-snug">{option.text}</p>
        </Button>
      ))}
    </div>
  );
}
