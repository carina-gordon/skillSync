import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export const runtime = 'edge';
 
export default async function POST(req: Request) {
  const { messages } = await req.json();
  // Create a chat completion using OpenAI
  const response = await openai.chat.completions.create({
    // TODO: WRITE THE PROMPT ENGINEERING
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
 
  // Transform the response into a readable stream
  const stream = OpenAIStream(response);
 
  // Return a StreamingTextResponse, which can be consumed by the client
  return new StreamingTextResponse(stream);
}