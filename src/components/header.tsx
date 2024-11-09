import { RouterMap } from "@/lib/constants";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex items-center col-[main] gap-3 py-4 pl-6 pr-3 bg-secondary rounded-3xl">
      <div className="flex-1 flex items-start">
        <Link
          href={RouterMap.Home}
          className="flex items-center gap-x-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2">
          <div className="w-12 h-9 text-primary">
            <Icons.Logo width="100%" height="100%" />
          </div>
          <div className="leading-none">
            <p className="text-basicL font-medium">UItype</p>
            <span className="text-muted/50 text-basicM">
              Весь мир&nbsp;&mdash; сайт, а&nbsp;ты&nbsp;в&nbsp;нём кто?
            </span>
          </div>
        </Link>
      </div>
      <Button type="button" variant="ghost">
        <Icons.AnalyticsGraphBarHorizontal className="text-primary" />
        <span>Результаты</span>
      </Button>
      <Button type="button" variant="outline">
        <Icons.ListsNumbers className="text-primary" />
        <span>Пройти тест</span>
      </Button>
    </header>
  );
}
