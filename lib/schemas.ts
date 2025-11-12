import { z } from "zod";

export const questionSchema = z.object({
  question: z.string(),
  options: z
    .array(z.string())
    .length(4)
    .describe(
      "Four possible answers to the question. Only one should be correct. They should all be of equal lengths.",
    ),
  answer: z
    .enum(["ก", "ข", "ค", "ง"])
    .describe(
      "The correct answer, where ก is the first option, ข is the second, and so on.",
    ),
});

export type Question = z.infer<typeof questionSchema>;

export const questionsSchema = z.array(questionSchema).length(4);
