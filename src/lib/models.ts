import { z } from "zod";
import { PsychoTypeMap } from "./constants";

export const OptionModel = z.object({
  value: z.nativeEnum(PsychoTypeMap),
  text: z.string(),
});

export const QuestionModel = z.object({
  id: z.string(),
  question: z.string(),
  options: z.array(z.custom<z.infer<typeof OptionModel>>()),
});

export const GetQuestionByIdResponse = z.object({
  length: z.number(),
  question: z.custom<typeof QuestionModel>(),
});
