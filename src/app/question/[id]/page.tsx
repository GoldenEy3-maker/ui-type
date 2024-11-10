import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function QuestionPage() {
  return (
    <div className="grid auto-rows-max items-baseline grid-cols-subgrid col-[main] place-content-center py-20">
      <span className="font-flow text-h2 text-primary col-span-1">01</span>
      <h2 className="text-h2 col-[span_19]">
        Вы&nbsp;наконец-то вырвались в&nbsp;свободный вечер, без рабочих задач,
        дедлайнов и&nbsp;нужды быть крутым боссом. Чем займётесь?
      </h2>
      <RadioGroup className="col-[2/span_19] mt-10 [counter-reset:question_0]">
        <RadioGroupItem
          value="1"
          className="[counter-increment:question_1] aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
          withoutIndicator>
          <p className="text-[1.375rem] leading-snug">
            Дочитаю книгу или разберусь в&nbsp;правилах той дорогущей настолки
          </p>
        </RadioGroupItem>
        <RadioGroupItem
          value="2"
          className="[counter-increment:question_1] aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
          withoutIndicator>
          <p className="text-[1.375rem] leading-snug">
            Вернусь к&nbsp;работе над проектом
          </p>
        </RadioGroupItem>
        <RadioGroupItem
          value="3"
          className="[counter-increment:question_1] aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
          withoutIndicator>
          <p className="text-[1.375rem] leading-snug">
            Буду слушать музыку и&nbsp;обдумывать как прошёл день, что
            получилось, а&nbsp;что нет
          </p>
        </RadioGroupItem>
        <RadioGroupItem
          value="4"
          className="[counter-increment:question_1] aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
          withoutIndicator>
          <p className="text-[1.375rem] leading-snug">
            В&nbsp;зависимости от&nbsp;настроения: либо пойду к&nbsp;друзьям,
            либо посмотрю сериал
          </p>
        </RadioGroupItem>
        <RadioGroupItem
          value="5"
          className="[counter-increment:question_1] aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
          withoutIndicator>
          <p className="text-[1.375rem] leading-snug">
            Сначала к&nbsp;друзьям, потом на&nbsp;набережную слушать уличных
            музыкантов
          </p>
        </RadioGroupItem>
      </RadioGroup>
    </div>
  );
}
