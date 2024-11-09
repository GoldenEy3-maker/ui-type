import { RouterMap } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <main className="grid auto-rows-max grid-cols-subgrid col-[main] pb-20">
      <div className="col-span-full flex items-center gap-2 mt-6">
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <Link
              key={index}
              href={RouterMap.Question + (index + 1)}
              className={cn(
                "h-3 w-full rounded-[1.25rem] grow-1 bg-primary border border-transparent",
                { "bg-transparent border-muted/50": +id <= index }
              )}
            />
          ))}
      </div>
    </main>
  );
}
