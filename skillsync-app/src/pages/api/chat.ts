import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: 'org-nvZm2dJgBrAvAVx0ca1pxycE',
});
 
export const runtime = 'edge';
 
export default async function POST(req: Request) {
  const { prompt } = await req.json();

  // Create a completion using OpenAI
  const response = await openai.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    prompt,
  });
 
  // Transform the response into a readable stream
  const stream = OpenAIStream(response);
 
  // Return a StreamingTextResponse, which can be consumed by the client
  return new StreamingTextResponse(stream);
}