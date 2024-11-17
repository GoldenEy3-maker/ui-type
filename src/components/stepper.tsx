import { RouterMap } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type StepperProps = {
  currentIndex: number;
  length: number;
} & React.ComponentProps<"div">;

export function Stepper({
  currentIndex,
  length,
  className,
  ...props
}: StepperProps) {
  return (
    <div
      className={cn("col-span-full flex items-center gap-2", className)}
      {...props}>
      {Array(length)
        .fill(null)
        .map((_, i) => {
          const isLink = currentIndex > i;

          return (
            <Link
              key={i}
              href={RouterMap.Question + (i + 1)}
              className={cn(
                "h-3 w-full rounded-[1.25rem] grow-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background bg-primary border border-transparent",
                {
                  "bg-transparent border-muted/50 pointer-events-none": !isLink,
                }
              )}
              aria-disabled={!isLink}
              tabIndex={isLink ? 0 : -1}
            />
          );
        })}
    </div>
  );
}
