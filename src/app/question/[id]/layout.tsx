import { Stepper } from "@/components/stepper";

type QuestionLayoutProps = {
  params: Promise<{ id: string }>;
} & React.PropsWithChildren;

export default async function QuestionLayout({
  children,
  params,
}: QuestionLayoutProps) {
  const id = (await params).id;

  return (
    <main className="grid grid-rows-[auto_1fr] auto-rows-max grid-cols-subgrid col-[main]">
      <Stepper step={id} />
      {children}
    </main>
  );
}
