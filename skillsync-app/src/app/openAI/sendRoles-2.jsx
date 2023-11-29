// import OpenAI from "openai";

// // TODO: Make this a server side function to hide the API key (if we want to have ppl genuinely use this)

// const openai = new OpenAI({
//   dangerouslyAllowBrowser: true,
//   apiKey: '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',
//   organization: 'org-nvZm2dJgBrAvAVx0ca1pxycE',
// });

// async function GenerateRoles(currentRole, desiredRole) {
  
//   const completion = await openai.chat.completions.create({
//     messages: [
//       { 
//         role: "system", 
//         content: "Act as a professional recommender for job retraining. Your client is currently has a job and seeking another one. Give me 10 roles he should transition to, only give me the role, and give it to me in the format of a JSON file of the form. Do not say anything else except the json file. {roles: [{ role_number: role name}]}", 
//       },
//       {
//         role: "user",
//         content: "I am currently a ${currentRole} and I want to be a ${desiredRole}.",
//       }    
//     ],
//     model: "gpt-3.5-turbo",
//   });
//   // ADD THIS LATER, IDK WHY IT ISNT WORKING RN i think api down  response_format: { "type": "json_object" }    model: "gpt-3.5-turbo-1106",,
//   // messages: [{ role: "system", content: "You are a helpful assistant." }],
//   // model: "gpt-3.5-turbo",
//   console.log(completion.choices[0]);
// }

// export default GenerateRoles;
