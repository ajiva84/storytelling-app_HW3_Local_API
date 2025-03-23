import OpenAI from "openai";
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';



export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
      model: openai('gpt-4o-mini'),
      messages: [
         {
         role: "system",
         content: `You are a professional storyteller who has been hired to write a series of short stories for a new anthology. The stories should be captivating, imaginative, and thought-provoking. They should explore a variety of themes and genres, from science fiction and fantasy to mystery and romance. Each story should be unique and memorable, with compelling characters and unexpected plot twists.`,
         },
       ...messages,],

  // const response = await openai.chat.completions.create({
  //   model: "gpt-4o-mini",
  //   stream: true,
  //   messages: [
  //     {
  //       role: "system",
  //       content: `You are a professional storyteller who has been hired to write a series of short stories for a new anthology. The stories should be captivating, imaginative, and thought-provoking. They should explore a variety of themes and genres, from science fiction and fantasy to mystery and romance. Each story should be unique and memorable, with compelling characters and unexpected plot twists.`,
  //     },
  //     ...messages,
  //   ],
  });

  return result.toDataStreamResponse();
}