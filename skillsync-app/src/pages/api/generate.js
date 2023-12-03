import OpenAI from "openai";
import axios from 'axios';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: 'org-nvZm2dJgBrAvAVx0ca1pxycE',
});


// Next.js API route support: skillsync-serverside.vercel.app/api/generate
// THIS RETURNS A JSON FILE OF THE FORM {roles: [{ role_number: role name}]} for page 2
export default async function generateRoles(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allows any domain to access your API
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization');

  // Respond to preflight requests for CORS
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
   // Only allow GET requests
   if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  
    // Extract data from the request body
  const {currentRole, desiredRole,} = req.body;

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { 
          role: "system", 
          content: "You are a professional recommender for job retraining. Your task is to suggest alternative job roles for a client who is currently employed and seeking a career transition. Provide a list of 7 suitable job roles. Present this information in a JSON format with the structure: { roles: [{ role_number: 'role name' }] }. Respond only with the JSON file content and refrain from additional commentary." 
        },
        {
          role: "user",
          content: `I am a ${currentRole} and I am interested in transitioning to ${desiredRole}.`
        }    
      ],
      model: "gpt-3.5-turbo",
    });
    // ADD THIS LATER, IDK WHY IT ISNT WORKING RN i think api down  response_format: { "type": "json_object" }    model: "gpt-3.5-turbo-1106",,
    // messages: [{ role: "system", content: "You are a helpful assistant." }],
    // model: "gpt-3.5-turbo",

    const roles = completion.choices[0].message.content; 

    // Send the response back our dynamic site
    res.status(200).json({ roles });
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
}