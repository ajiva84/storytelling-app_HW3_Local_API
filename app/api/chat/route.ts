import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText } from 'ai';

const prompt = `You are a professional storyteller who has been hired to write a series of short stories for a new anthology. The stories should be captivating, imaginative, and thought-provoking. They should explore a variety of themes and genres, from science fiction and fantasy to mystery and romance. Each story should be unique and memorable, with compelling characters and unexpected plot twists.`;
const baseUrl = "http://127.0.0.1:5000/v1";

const provider = createOpenAICompatible({
  name: "provider-name",
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: baseUrl,
});
export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const result = await streamText({
    model: provider('gpt-4o-mini'),
    messages: [
       {
       role: "system",
       content: prompt,
       },
     ...messages
    ],
    });

  // Return the streaming response
  return result.toDataStreamResponse();
}