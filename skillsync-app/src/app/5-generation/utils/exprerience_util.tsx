import React from 'react';
import ExperienceStore from '../../provider/experiences/experiences';
import { useEffect } from 'react';
import { useState } from 'react';

const useExperienceData = () => {
    const localExperiences = ExperienceStore((state) => state.experiences);
    const [formatted, setFormatted] = useState("");

    useEffect(() => {
        // Using slice(1) to copy the array starting from the second element
        const experiencesContent = localExperiences.slice(1).map(exp => {
            return `Title: ${exp.title}\nPoints: ${exp.points.join(', ')}\n\n`;
        }).join('');

        const bodyContent = JSON.stringify({
            content: experiencesContent,
        });
        
        // for local testing: http://localhost:3000/api/headers
        // for production: https://skillsync-app.vercel.app/api/headers
        fetch('http://localhost:3000/api/experience', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: bodyContent,
        })
        .then((res) => res.json())
        .then((data) => {
            setFormatted(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [])
    return formatted;
};
  
export default useExperienceData;
