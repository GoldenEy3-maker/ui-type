import { RouterMap } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type StepperProps = {
  currentIndex: number;
  length: number;
};

export function Stepper({ currentIndex, length }: StepperProps) {
  return (
    <div className="col-span-full flex items-center gap-2 mt-6">
      {Array(length)
        .fill(null)
        .map((_, i) => (
          <Link
            key={i}
            href={RouterMap.Question + (i + 1)}
            className={cn(
              "h-3 w-full rounded-[1.25rem] grow-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background bg-primary border border-transparent",
              { "bg-transparent border-muted/50": currentIndex <= i }
            )}
          />
        ))}
    </div>
  );
}
