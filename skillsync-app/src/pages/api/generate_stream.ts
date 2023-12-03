import OpenAI from "openai";
import axios from 'axios';

export const config = {
  runtime: "edge",
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: 'org-nvZm2dJgBrAvAVx0ca1pxycE',
});

// Next.js API route support: skillsync-serverside.vercel.app/api/generate
export default async function generateRoles(req: { method: string; body: { currentRole: any; desiredRole: any; }; }, res: any) {
  const headers = new Headers();
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), { status: 405, headers });
  }

  // Extract data from the request body
  const {currentRole, desiredRole} = req.body;

  try {
    const payload = {
      messages: [
        { 
          role: "system", 
          content: "You are a professional recommender for job retraining. Your task is to suggest alternative job roles for a client who is currently employed and seeking a career transition. Provide a list of 10 suitable job roles, each accompanied by a brief one-line description. Present this information in a JSON format with the structure: { roles: [{ role_number: 'role name', description: 'short description' }] }. Respond only with the JSON file content and refrain from additional commentary." 
        },
        {
          role: "user",
          content: `I am a ${currentRole} and I am interested in transitioning to ${desiredRole}.`
        }    
      ],
      model: "gpt-3.5-turbo",
    };

    // const stream = await OpenAIStream(payload);

    // const roles = stream.choices[0].message.content; 

    // Send the response back to our dynamic site
    // return new Response(JSON.stringify({ roles }), { status: 200, headers });
  }
  catch (err) {
    return new Response(JSON.stringify({ message: 'An error occurred' }), { status: 500, headers });
  }
}
