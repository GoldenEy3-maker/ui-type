"use server";

import { PsychoTypeMap } from "@/lib/constants";
import { QuestionModel } from "@/lib/models";
import { z } from "zod";

type QuestionData = z.infer<typeof QuestionModel>;

const DATA: QuestionData[] = [
  {
    id: "1",
    question:
      "Вы наконец-то вырвались в свободный вечер, без рабочих задач, дедлайнов и нужды быть крутым боссом. Чем займётесь?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Дочитаю книгу или разберусь в правилах той дорогущей настолки.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Вернусь к работе над проектом.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Буду слушать музыку и обдумывать как прошёл день, что получилось, а что нет.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "В зависимости от настроения: либо пойду к друзьям, либо посмотрю сериал.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Сначала к друзьям, потом на набережную слушать уличных музыкантов.",
      },
    ],
  },
  {
    id: "2",
    question: "Что для вас важнее всего в работе?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Возможность глубокого анализа и поиска оптимального решения.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Достижение конкретных результатов и успешное завершение.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Логика, последовательность и четкость и ясность задач.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "Гибкость и разнообразие задач, позволяющих проявлять креативность.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Общение с коллегами, командная работа и динамичная атмосфера.",
      },
    ],
  },
  {
    id: "3",
    question:
      "Рабочая задача вырвалась за рамки стандартных решений и стала проблемой. Как будете решать этот вопрос?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Потрачу чуть больше времени, чтобы спокойно и методично исследовать все варианты.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Положусь на свой опыт и навыки, чтобы на практике найти решение.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Сформирую план действий, найду похожие решения.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "В зависимости от ситуации, погружусь в вопрос сам или спрошу у коллег.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Спрошу у старших коллег и товарищей.",
      },
    ],
  },
  {
    id: "4",
    question:
      "Пришла пора дополнять коллектив новым сотрудником. Какие личные качества станут решающими в выборе?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Ум, рассудительность и спокойствие.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Целеустремленность, практичность и результативность.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Разум, логику и последовательность.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "Универсальность, адаптивность и творческий подход.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Энергичность, открытость и коммуникабельность.",
      },
    ],
  },
  {
    id: "5",
    question:
      "Вам предложили сменить город и сферу деятельности. Ваше отношение к таким переменам?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Осторожное и взвешенное, сначала проанализирую все аспекты.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Положительное, если они приносят пользу и улучшают результаты.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Рассмотрю с точки зрения целесообразности и логичности.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "Зависит от деталей: иногда я за перемены, иногда предпочитаю стабильность.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Очень позитивное, люблю новизну и динамику.",
      },
    ],
  },
  {
    id: "6",
    question:
      "Представьте, что удалось вернуть 2007 год, а потом ещё и стену. Какую цитату запостите?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: '"Лучше меньше, да лучше."',
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: '"Результат оправдывает средства."',
      },
      {
        value: PsychoTypeMap.Logician,
        text: '"Всё должно быть последовательно, целесообразно и взаимосвязано."',
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: '"Главное — найти баланс и гармонию."',
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: '"Жизнь — это движение, нельзя стоять на месте!"',
      },
    ],
  },
  {
    id: "7",
    question: "Когда вы сталкиваетесь с трудностями, как вы реагируете?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Сохраняю спокойствие и ищу рациональное решение.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Могу ненадолго поддаться эмоциям, но потом концентрируюсь на поиске решения.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Строю логическую схему и действую согласно ей.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "Подстраиваюсь под обстоятельства и ищу нестандартные подходы.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Мобилизуюсь, привлекаю помощь и стремлюсь преодолеть трудности вместе с другими.",
      },
    ],
  },
  {
    id: "8",
    question:
      "Метро наконец продлили до Лас-Вегаса и ваши друзья уже на пол пути к кушу. А какое у вас отношение к подобным рискам?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Предпочитаю избегать неблагоприятных исходов, тщательно просчитываю последствия.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Готов рисковать, если это приведет к значимой выгоде.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Оцениваю риск с точки зрения вероятности и последствий.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "Иногда иду ва-банк, иногда стараюсь играть наверняка.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Люблю рисковать и пробовать новое!",
      },
    ],
  },
  {
    id: "9",
    question: "Что для вас важнее в общении с живыми людьми?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Глубокий обмен мнениями и обсуждение интересных тем.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Эффективное сотрудничество и достижение общих целей.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Ясность, честность и последовательность в разговоре.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "Разнообразие общения: иногда хочу поговорить, иногда остаться в тишине.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Дружелюбие, открытость и активное участие в жизни других.",
      },
    ],
  },
  {
    id: "10",
    question:
      "Долгожданный отпуск наступил и вас удалил из всех рабочих чатов. Какой отдых предпочтёте?",
    options: [
      {
        value: PsychoTypeMap.CalmAnalyst,
        text: "Тихий и уединенный, позволяющий подумать и расслабиться.",
      },
      {
        value: PsychoTypeMap.Pragmatist,
        text: "Активный и продуктивный, связанный с хобби или полезными делами.",
      },
      {
        value: PsychoTypeMap.Logician,
        text: "Организованный и спланированный, с четкой программой.",
      },
      {
        value: PsychoTypeMap.Ambivert,
        text: "В зависимости от настроения: можно сходить в клуб или поспать под пальмой.",
      },
      {
        value: PsychoTypeMap.Extrovert,
        text: "Веселый и насыщенный событиями, с большим количеством людей.",
      },
    ],
  },
];

export async function getQuestionByIndex(index: string) {
  return {
    data: DATA[+index],
    questionsLength: DATA.length,
  };
}
