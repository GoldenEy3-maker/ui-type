import Link from "next/link";
import { Icons } from "./ui/icons";

export function Footer() {
  return (
    <footer className="col-[main] flex items-center gap-x-8">
      <div className="flex-1">
        <span className="text-basicL font-medium text-muted/50">©2024</span>
      </div>
      <Link href="#" target="_blank">
        <div className="flex items-center gap-1 leading-none font-medium">
          <p>Влад Кленов</p>
          <Icons.ArrowLink className="text-primary -mt-1" />
        </div>
        <span className="text-muted/50 text-basicM">
          Дизайн и&nbsp;содержание
        </span>
      </Link>
      <Link href="#" target="_blank">
        <div className="flex items-center gap-1 leading-none font-medium">
          <p>Данил Королев</p>
          <Icons.ArrowLink className="text-primary -mt-1" />
        </div>
        <span className="text-muted/50 text-basicM">
          Разработка и&nbsp;магия
        </span>
      </Link>
    </footer>
  );
}
