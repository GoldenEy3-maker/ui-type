import { StatisticCard } from "@/components/statistic-card";
import { SummaryCard } from "@/components/summary-card";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

export default function SummaryPage() {
  return (
    <main className="col-[main] grid grid-cols-subgrid py-11">
      <section className="col-span-8 grid grid-rows-[auto_1fr]">
        <div className="flex items-center gap-x-3">
          <h2 className="text-h2">Ваш результат</h2>
          <Link href="#" target="_blank">
            <Icons.Share className="text-muted/50" />
          </Link>
        </div>
        <SummaryCard className="mt-5" />
      </section>
      <section className="col-[span_11/-1] grid grid-rows-[auto_1fr]">
        <h2 className="text-h2">Статистика</h2>
        <StatisticCard className="mt-5" />
      </section>
    </main>
  );
}
