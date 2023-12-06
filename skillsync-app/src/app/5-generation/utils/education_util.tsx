import React from 'react';
import ExperienceStore from '../../provider/experiences/experiences';
import { useState } from 'react';
import { useEffect } from 'react';


const useEducationData = () => {
  const localExperiences = ExperienceStore((state) => state.experiences);
  const [formatted, setFormatted] = useState("");
  
  // console.log('In sendProfileData');
  console.log(localExperiences);
  const content = {
    College: localExperiences?.[0]?.points?.[0],
    Major: localExperiences?.[0]?.points?.[1],
    TimePeriod: localExperiences?.[0]?.points?.[2],
    GPA: localExperiences?.[0]?.points[3],
    RelevantCourses: localExperiences?.[0]?.points?.[4],
  };

  
  const bodyContent = JSON.stringify({
    content: `
    \\resumeSubHeadingListStart
    \\resumeSubheading
    {${content.College}}{${content.TimePeriod}}
    {${content.Major}}{GPA: ${content.GPA}}
    \\resumeItemListStart
    \\resumeItem{Relevant Courses: ${content.RelevantCourses}}
    \\resumeItemListEnd
    \\resumeSubHeadingListEnd
    `,
  });
    
  useEffect(() => {
    // for local testing: http://localhost:3000/api/headers
    // for production: https://skillsync-app.vercel.app/api/headers
    fetch('/api/education', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: bodyContent,
    })
    .then((res) => res.text())
    .then((data) => {
      console.log('Got /api/education', data);
      setFormatted(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, []);

  return formatted;
};

export default useEducationData;
  
    