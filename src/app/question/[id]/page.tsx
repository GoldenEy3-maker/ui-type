import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { getQuestionById } from "./actions";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { data, error } = await getQuestionById(id);

  // !TODO: add error handler
  if (!data || error) return null;

  return (
    <div className="grid auto-rows-max items-baseline grid-cols-subgrid col-[main] place-content-center py-20">
      <span className="font-flow text-h2 text-primary col-span-1">
        {new Intl.NumberFormat(undefined, {
          minimumIntegerDigits: 2,
        }).format(+data.id)}
      </span>
      <h2 className="text-h2 col-[span_19]">{data.question}</h2>
      <RadioGroup className="col-[2/span_19] mt-10 [counter-reset:question_0]">
        {data.options.map((option) => (
          <RadioGroupItem
            key={option.value}
            value={option.value}
            className="[counter-increment:question_1] aria-checked:bg-primary/30 aria-checked:before:bg-primary before:content-[counter(question)] before:w-6 before:h-6 before:rounded-sm before:text-primary-foreground before:border-muted/50 before:border before:bg-primary/30 gap-x-4 w-auto h-auto aspect-auto flex items-center border-muted/50 border rounded-xl px-4 py-3"
            withoutIndicator>
            <p className="text-[1.375rem] leading-snug">{option.text}</p>
          </RadioGroupItem>
        ))}
      </RadioGroup>
    </div>
  );
}
