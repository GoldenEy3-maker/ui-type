import { getQuestionByIndex } from "./actions";
import { OptionsList } from "@/components/options-list";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ index: string }>;
}) {
  const index = +(await params).index;

  // URL index starts from 1 but route fetches data by default index from 0
  const { data, error } = await getQuestionByIndex((index - 1).toString());

  // !TODO: add error handler
  if (!data || error) return null;

  const { length: questionsLength, question: questionData } = data;

  return (
    <div className="grid auto-rows-max items-baseline grid-cols-subgrid col-[main] place-content-center py-20">
      <span className="font-flow text-h2 text-primary col-span-1">
        {new Intl.NumberFormat(undefined, {
          minimumIntegerDigits: 2,
        }).format(index)}
      </span>
      <h2 className="text-h2 col-[span_19]">{questionData.question}</h2>
      <OptionsList
        options={questionData.options}
        nextIndex={index < questionsLength ? (index + 1).toString() : undefined}
      />
    </div>
  );
}
