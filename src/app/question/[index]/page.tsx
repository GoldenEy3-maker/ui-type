import { Stepper } from "@/components/stepper";
import { getQuestionByIndex } from "./actions";
import { OptionsList } from "@/components/options-list";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ index: string }>;
}) {
  const index = +(await params).index;

  // URL index starts from 1
  const { length: questionsLength, data } = await getQuestionByIndex(
    (index - 1).toString()
  );

  return (
    <main className="grid grid-rows-[auto_1fr] auto-rows-max grid-cols-subgrid col-[main]">
      <Stepper currentIndex={index} length={questionsLength} className="mt-6" />
      <div className="grid auto-rows-max items-baseline grid-cols-subgrid col-[main] place-content-center py-20">
        <span className="font-flow text-h2 text-primary col-span-1">
          {new Intl.NumberFormat(undefined, {
            minimumIntegerDigits: 2,
          }).format(index)}
        </span>
        <h2 className="text-h2 col-[span_19]">{data.question}</h2>
        <OptionsList
          options={data.options}
          currentIndex={index}
          isLastQuestion={index === questionsLength}
        />
      </div>
    </main>
  );
}
