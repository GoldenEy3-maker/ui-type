"use server";

import { GetQuestionByIdResponse, QuestionModel } from "@/lib/models";
import { getBaseUrl } from "@/lib/utils";

export async function getQuestionById(id: string) {
  try {
    const res = await fetch(`${getBaseUrl()}/api/questions?id=${id}`);
    const data = GetQuestionByIdResponse.parse(await res.json());
    return { data: QuestionModel.parse(data.question) };
  } catch (error) {
    return {
      error,
    };
  }
}
