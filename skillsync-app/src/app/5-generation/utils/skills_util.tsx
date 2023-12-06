import React from 'react';
import ResumeStore from '../../provider/resume/resume_data';
import { useEffect } from 'react';

const useSkillData = () => {
  const localResume = ResumeStore();
  const localSkills = localResume.skills;

  const [formatted, setFormatted] = React.useState("");
  
  useEffect(() => {
    console.log('In sendProfileData');
    const content = {
      localSkills
    };

    const bodyContent = JSON.stringify({
        content: `content`,
    });
      
    // for local testing: http://localhost:3000/api/headers
    // for production: https://skillsync-app.vercel.app/api/headers
    fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyContent,
    })
    .then((res) => res.text())
    .then((data) => {
      console.log('Got /api/skills', data);
      setFormatted(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);
  
  return formatted;

};
  
export default useSkillData;
    