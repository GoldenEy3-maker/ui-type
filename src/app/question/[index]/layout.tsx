import { Stepper } from "@/components/stepper";

type QuestionLayoutProps = {
  params: Promise<{ index: string }>;
} & React.PropsWithChildren;

export default async function QuestionLayout({
  children,
  params,
}: QuestionLayoutProps) {
  const index = (await params).index;

  return (
    <main className="grid grid-rows-[auto_1fr] auto-rows-max grid-cols-subgrid col-[main]">
      <Stepper step={index} />
      {children}
    </main>
  );
}
