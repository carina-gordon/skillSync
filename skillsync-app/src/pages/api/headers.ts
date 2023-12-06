import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
export const runtime = 'edge';
 
export default async function POST(req: Request) {
  const headers = new Headers();
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }
  // return the body of the request
  const { content } = await req.json();
  
  // Create a chat completion using OpenAI
  
  const response = await openai.chat.completions.create({
    // TODO: WRITE THE PROMPT ENGINEERING
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [{"role": "user", "content": content}],
  });
 
  // Transform the response into a readable stream
  const stream = OpenAIStream(response);
 
  // Return a StreamingTextResponse, which can be consumed by the client
  return new StreamingTextResponse(stream);
}