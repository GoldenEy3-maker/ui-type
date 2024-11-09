import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { RouterMap } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid auto-rows-max grid-cols-subgrid col-[main] place-content-center py-20">
      <div className="col-[5/span_12] grid place-items-center text-primary/30 mb-7">
        <Icons.IllustrationArcady />
      </div>
      <h2 className="text-h2 col-[5/span_12] mb-2 text-center text-primary">
        Мы не верим в гороскопы, но верим в интерфейс
      </h2>
      <p className="col-[7/span_8] text-center font-medium">
        Уникальная система определения личности, поможет сделать акцент
        на&nbsp;сильных сторонах, разобраться в&nbsp;себе и&nbsp;добиться
        результатов
      </p>
      <div className="col-[5/span_12] mt-9 grid auto-rows-max place-items-center">
        <Button type="button" asChild>
          <Link href={RouterMap.Question + "1"}>Пройти тест</Link>
        </Button>
        <span className="text-basicM text-muted/50 mt-1">
          это займет около 5 минут
        </span>
      </div>
    </main>
  );
}
