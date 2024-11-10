"use server";

import { GetQuestionByIdResponse, QuestionModel } from "@/lib/models";
import { getBaseUrl } from "@/lib/utils";

export async function getQuestionByIndex(index: string) {
  try {
    const res = await fetch(`${getBaseUrl()}/api/questions?index=${index}`);
    const data = GetQuestionByIdResponse.parse(await res.json());
    return {
      data: {
        question: QuestionModel.parse(data.question),
        length: data.length,
      },
    };
  } catch (error) {
    return {
      error,
    };
  }
}
