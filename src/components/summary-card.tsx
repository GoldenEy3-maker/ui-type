"use client";

import { PsychoTypeMap, RouterMap } from "@/lib/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./ui/icons";
import { cn, getDominantPsychoType } from "@/lib/utils";
import { useStore } from "zustand";
import { useTestStorage } from "@/store/test";

type SummaryCardProps = {} & React.ComponentProps<"div">;

const DATA: Record<
  PsychoTypeMap,
  {
    uiElement: string;
    title: React.ReactNode;
    description: React.ReactNode;
    icon: React.ReactNode;
    features: { title: React.ReactNode; description: React.ReactNode }[];
  }
> = {
  [PsychoTypeMap.CalmAnalyst]: {
    uiElement: "инпут",
    title: "Спокойный аналитик",
    description: (
      <>
        Поля ввода обычно молчаливы и&nbsp;ожидают, пока пользователь введёт
        информацию. Они похожи на&nbsp;людей, которые любят анализировать данные
        перед тем, как принять решение
      </>
    ),
    icon: <Icons.InputIllustration />,
    features: [
      {
        title: "Открытость",
        description: (
          <>
            Поле ввода всегда готово принять любую информацию, будь&nbsp;то
            текст, числа или другие данные. Это символизирует готовность
            к&nbsp;новым знаниям и&nbsp;идеям без прежубеждений
          </>
        ),
      },
      {
        title: "Готовность к изменениям",
        description: (
          <>
            В&nbsp;любой момент поле ввода может быть очищено и&nbsp;заполнено
            заново. Такой человек не&nbsp;боится изменений и&nbsp;готов начать
            всё сначала при необходимости.
          </>
        ),
      },
    ],
  },
  [PsychoTypeMap.Logician]: {
    uiElement: "чекбокс",
    title: "Логик",
    description: (
      <>
        Чекбоксы опираются на&nbsp;разум и&nbsp;аналитическое мышление. Они
        принимают решения, основываясь на&nbsp;фактах и&nbsp;логических выводах,
        чётко определяют варианты выбора, чаще всего критичны
      </>
    ),
    icon: <Icons.CheckboxIllustration />,
    features: [
      {
        title: "Объективность",
        description: (
          <>
            Чекбоксы способны рассматривать проблемы беспристрастно, опираясь
            на&nbsp;факты и&nbsp;логику. Это помогает им&nbsp;принимать
            взвешенные и&nbsp;обоснованные решения
          </>
        ),
      },
      {
        title: <>Анализ и&nbsp;систематизация</>,
        description: (
          <>
            Чекбоксы умеют разбирать сложные вопросы на&nbsp;составляющие
            и&nbsp;находить оптимальные решения, используя системный подход.
          </>
        ),
      },
    ],
  },
  [PsychoTypeMap.Ambivert]: {
    uiElement: "юай-слайдер",
    title: "Амбиверт",
    description: (
      <>
        Слайдер легко адаптируется к&nbsp;разным ситуациям, сохраняя баланс
        между активностью и&nbsp;уединением, предлагает плавную регулировку
        между крайними состояниями, оставаясь гибким и&nbsp;универсальным
      </>
    ),
    icon: <Icons.SliderIllustration />,
    features: [
      {
        title: "Социальная гибкость",
        description: (
          <>
            Юай-слайдеры легко приспосабливаются к&nbsp;разным людям
            и&nbsp;ситуациям, находят общий язык как с&nbsp;кнопками, так
            и&nbsp;с&nbsp;инпутами. Им&nbsp;комфортно в&nbsp;любых компаниях
          </>
        ),
      },
      {
        title: "Баланс энергии",
        description: (
          <>
            Юай-слайдеры чётко знают, когда им&nbsp;нужно отдохнуть
            и&nbsp;восстановить силы, чтобы затем снова активно
            и&nbsp;эффективно включиться в&nbsp;работу или общение
          </>
        ),
      },
    ],
  },
  [PsychoTypeMap.Extrovert]: {
    uiElement: "кнопка",
    title: "Экстраверт",
    description: (
      <>
        Кнопки стремятся к&nbsp;быстрым действиям и&nbsp;немедленным
        результатам, всегда находясь в&nbsp;центре событий. Активные
        и&nbsp;энергичные, любят брать инициативу и&nbsp;действовать решительно
      </>
    ),
    icon: <Icons.ButtonIllustration />,
    features: [
      {
        title: "Энергичность",
        description: (
          <>
            Кнопкам свойственна скорость и&nbsp;динамика&nbsp;&mdash; они
            мгновенно меняют состояния и&nbsp;реагируют на&nbsp;нажатие,
            позволяя быстро переходить к&nbsp;следующим действиям
          </>
        ),
      },
      {
        title: "Инициативность",
        description: (
          <>
            Кнопки активно действуют и&nbsp;инициируют события, при этом,
            забирая на&nbsp;себя всё внимание пользователя
          </>
        ),
      },
    ],
  },
  [PsychoTypeMap.Pragmatist]: {
    uiElement: "прогресс-бар",
    title: "Прагматик",
    description: (
      <>
        Прогресс-бары ставят чёткие цели и&nbsp;последовательно движутся
        к&nbsp;ним, оценивая свой прогресс на&nbsp;каждом этапе. Это
        рациональные и&nbsp;целеустремлённые люди, ориентированные на&nbsp;успех
      </>
    ),
    icon: <Icons.ProgressbarIllustration />,
    features: [
      {
        title: "Реалистичное мышление",
        description: (
          <>
            Прогресс-бару свойственно трезво оценивать текущую ситуацию
            и&nbsp;возможные препятствия. Они учитывают риски и&nbsp;строят
            планы исходя из&nbsp;реальных возможностей,
          </>
        ),
      },
      {
        title: "Рациональность",
        description: (
          <>
            Прогресс-бары подходят ко&nbsp;всему с&nbsp;точки зрения логики
            и&nbsp;эффективности. Прогресс-бару важен рациональный подход,
            позволяющий объективно оценивать, сколько ещё осталось
            до&nbsp;конечной точки
          </>
        ),
      },
    ],
  },
};

export function SummaryCard({ className, ...props }: SummaryCardProps) {
  const testStore = useStore(useTestStorage);

  const [dominantPsychoType, percents] = getDominantPsychoType(
    testStore.progress
  );

  return (
    <div
      className={cn(
        "bg-card rounded-[1.25rem] auto-rows-max grid p-9",
        { "place-content-center place-items-center": !testStore.isComplete },
        className
      )}
      {...props}>
      {testStore.isComplete ? (
        <div>
          <div className="flex flex-col items-center">
            <h4 className="text-h4 font-flow text-center">
              Вы на <span className="text-primary font-bold">{percents}%</span>{" "}
              {DATA[dominantPsychoType].uiElement}
            </h4>
            <span className="text-primary mt-3">
              {DATA[dominantPsychoType].icon}
            </span>
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between gap-x-4">
              <p className="font-medium">{DATA[dominantPsychoType].title}</p>
              <span className="text-xs text-muted/50">ваш юайпсихотип</span>
            </div>
            <p className="text-sm mt-2">
              {DATA[dominantPsychoType].description}
            </p>
          </div>
          <div className="mt-6">
            <p className="font-medium">Сильные стороны</p>
            <ul className="mt-2 space-y-2">
              {DATA[dominantPsychoType].features.map((feature, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-x-2 grid-rows-[auto_auto]">
                  <Icons.Bullet className="text-primary row-span-2" />
                  <p className="text-sm text-primary">{feature.title}</p>
                  <p className="text-xs mt-1">{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <Icons.IllustrationAnatoly className="text-primary/30" />
          <div className="grid place-items-center mt-[5rem]">
            <h3 className="text-h3 text-primary">Самое время узнать себя</h3>
            <p className="mt-1 text-sm">
              Вы&nbsp;ещё не&nbsp;прошли тест, это займет около 5&nbsp;минут
            </p>
            <Button asChild className="mt-6">
              <Link href={RouterMap.Question + 1}>Пройти тест</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
