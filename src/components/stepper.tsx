import { RouterMap } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type StepperProps = {
  step: string;
};

export function Stepper({ step }: StepperProps) {
  return (
    <div className="col-span-full flex items-center gap-2 mt-6">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <Link
            key={index}
            href={RouterMap.Question + (index + 1)}
            className={cn(
              "h-3 w-full rounded-[1.25rem] grow-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background bg-primary border border-transparent",
              { "bg-transparent border-muted/50": +step <= index }
            )}
          />
        ))}
    </div>
  );
}
