import React from 'react';
import ExperienceStore from '../../provider/experiences/experiences';
import { useEffect } from 'react';
import { useState } from 'react';

const useExperienceData = ( desiredRole: string , currentRole: string ) => {
    const localExperiences = ExperienceStore((state) => state.experiences);
    

    const [formatted, setFormatted] = useState("");

    useEffect(() => {
        // Constructing an array of experience details
        const experiencesContent = localExperiences.slice(1).map(exp => ({
            title: exp.title,
            points: exp.points,
        }));

        // Stringifying the content object
        const bodyContent = JSON.stringify({
            experiences: experiencesContent,
            desired_role: desiredRole,
            current_role: currentRole,
          });
                  

        console.log('In sendExperienceData');
        console.log(bodyContent);

        // for local testing: http://localhost:3000/api/headers
        // for production: https://skillsync-app.vercel.app/api/headers
        fetch('/api/experiences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: bodyContent,
        })
        .then((res) => res.text())
        .then((data) => {
            console.log('Got /api/experiences', data);
            setFormatted(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [])
    return formatted;
};
  
export default useExperienceData;
