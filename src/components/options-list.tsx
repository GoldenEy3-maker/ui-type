"use client";

import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { OptionModel } from "@/lib/models";
import { PsychoTypeMap, RouterMap } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type OptionsListProps = {
  options: z.infer<typeof OptionModel>[];
  nextIndex: string | undefined;
};

export function OptionsList({ options, nextIndex }: OptionsListProps) {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const router = useRouter();

  function optionChangeHandler(value: PsychoTypeMap) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = undefined;
    }

    timeoutRef.current = setTimeout(() => {
      router.push(
        nextIndex ? RouterMap.Question + nextIndex : RouterMap.Summary
      );
    }, 1000);
  }

  return (
    <RadioGroup
      onValueChange={optionChangeHandler}
      className="col-[2/span_19] mt-10 [counter-reset:question_0]">
      {options.map((option, index) => (
        <RadioGroupItem
          autoFocus={index === 0}
          key={option.value}
          value={option.value}
          className="[counter-increment:question_1] aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
          withoutIndicator>
          <p className="text-[1.375rem] leading-snug">{option.text}</p>
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
}
