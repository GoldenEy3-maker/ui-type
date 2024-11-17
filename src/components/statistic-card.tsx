import { cn } from "@/lib/utils";
import { Icons } from "./ui/icons";
import { Progress } from "./ui/progress";

type StatisticCardProps = {} & React.ComponentProps<"div">;

export function StatisticCard({ className, ...props }: StatisticCardProps) {
  return (
    <div className={cn("bg-card rounded-[1.25rem] p-9", className)} {...props}>
      <h3 className="text-h3">2 152 результата</h3>
      <ul className="mt-[4.1875rem] space-y-10">
        <li>
          <div className="flex items-center gap-x-3">
            <Icons.InputHeroIllustration />
            <h4 className="text-h4 font-flow flex-1">Инпут</h4>
            <span className="text-muted/50 text-sm">50%</span>
            <span className="text-muted/50 text-sm">1 199 чел.</span>
          </div>
          <Progress value={50} className="mt-3" />
        </li>
        <li>
          <div className="flex items-center gap-x-3">
            <Icons.RadioHeroIllustration />
            <h4 className="text-h4 font-flow flex-1">Радио</h4>
            <span className="text-muted/50 text-sm">12,5%</span>
            <span className="text-muted/50 text-sm">356 чел.</span>
          </div>
          <Progress value={12.5} className="mt-3" />
        </li>
        <li>
          <div className="flex items-center gap-x-3">
            <Icons.CheckboxHeroIllustration />
            <h4 className="text-h4 font-flow flex-1">Чекбокс</h4>
            <span className="text-muted/50 text-sm">12,5%</span>
            <span className="text-muted/50 text-sm">356 чел.</span>
          </div>
          <Progress value={12.5} className="mt-3" />
        </li>
        <li>
          <div className="flex items-center gap-x-3">
            <Icons.ButtonHeroIllustration />
            <h4 className="text-h4 font-flow flex-1">Кнопка</h4>
            <span className="text-muted/50 text-sm">12,5%</span>
            <span className="text-muted/50 text-sm">356 чел.</span>
          </div>
          <Progress value={12.5} className="mt-3" />
        </li>
        <li>
          <div className="flex items-center gap-x-3">
            <Icons.ProgressbarHeroIllustration />
            <h4 className="text-h4 font-flow flex-1">Прогресс-бар</h4>
            <span className="text-muted/50 text-sm">12,5%</span>
            <span className="text-muted/50 text-sm">356 чел.</span>
          </div>
          <Progress value={12.5} className="mt-3" />
        </li>
      </ul>
    </div>
  );
}
