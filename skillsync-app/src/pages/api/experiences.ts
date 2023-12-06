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
  const content = await req.json();

  // Create a chat completion using OpenAI

  const current_role = content['current_role'];
  const desired_role = content['desired_role'];
  const experiences = content['experiences'];

  const bodyContent = JSON.stringify({
    experiences: experiences,
    desiredRole: current_role,
    currentRole: desired_role,
  });
  

  const prompt = `Assume you are a professional resume writer for individuals looking to transition from ${current_role} to ${desired_role}. Your task is to generate LaTeX code for a resume section that highlights the individual's experience relevant to their desired job. Essentially map relevant points from their old job into industry conventions for their new ones. Use the provided LaTeX template without altering its structure, ensuring optimal compatibility with LaTeX compilers. Craft high-quality bullet points following industry standards. The provided JSON object contains 'Title' and 'Points'; map 'Title' to the title in the LaTeX template, and use 'Points' for the bullet points, with each point separated by a comma. Here's the template to follow: \\resumeSubheading {Insert \"Title\" from JSON here}{Filler date} {Insert one liner about the company} {} \resumeItemListStart \resumeItem{Insert first \"point\" from JSON here.} \resumeItem{Insert additional \"points\" as needed, each as a separate \resumeItem.} \resumeItemListEnd`;


  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        "role": "system",
        "content": prompt
      },
      {"role": "user", "content": bodyContent}
      
    ],
  });

 
  // Transform the response into a readable stream
  const stream = OpenAIStream(response);
 
  // Return a StreamingTextResponse, which can be consumed by the client
  return new StreamingTextResponse(stream);
}