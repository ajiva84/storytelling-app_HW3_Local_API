//import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  // custom settings, e.g.
  baseURL: "http://127.0.0.1:5000/v1",
  compatibility: 'strict', // strict mode, enable when using the OpenAI API
});

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const result = await streamText({
    model: openai('gpt-4o-mini'),
    messages: [
       {
       role: "system",
       content: `You are a professional storyteller who has been hired to write a series of short stories for a new anthology. The stories should be captivating, imaginative, and thought-provoking. They should explore a variety of themes and genres, from science fiction and fantasy to mystery and romance. Each story should be unique and memorable, with compelling characters and unexpected plot twists.`,
       },
     ...messages,],
    });

  // Return the streaming response
  return result.toDataStreamResponse();
}