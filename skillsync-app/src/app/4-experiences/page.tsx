'use client'
import { useState } from 'react';
import SkillSyncLogo from '@/components/skillsyncLogo';
import HeaderText from '@/components/HeaderText';
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function RoleInput() {
  const router = useRouter()
  const [experiences, setExperiences] = useState([
    { title: 'Experience 1', points: ['', '', ''] },
  ]);

  const addExperience = () => {
    setExperiences([...experiences, { title: `Experience ${experiences.length + 1}`, points: ['', '', ''] }]);
  };

  const updatePoint = (index: number, pointIndex: number , value: string) => {
    const newExperiences = experiences.map((exp, expIndex) => {
      if (index === expIndex) {
        const newPoints = [...exp.points];
        newPoints[pointIndex] = value;
        return { ...exp, points: newPoints };
      }
      return exp;
    });
    setExperiences(newExperiences);
  };

  const updateTitle = (index: number, value: string) => {
    const newExperiences = experiences.map((exp, expIndex) => {
      if (index === expIndex) {
        return { ...exp, title: value };
      }
      return exp;
    });
    setExperiences(newExperiences);
  };

  const handleSubmit = () => {
    // Here you would handle the submission to GPT
    // This is just a placeholder for where you would implement the API call
    console.log('Submitting the following experiences to GPT:', experiences);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start h-screen">
      <div className="lg:w-1/2 p-12">
        <SkillSyncLogo size='medium' />
        <HeaderText text='Enter Your Experiences' size='large' />
        {experiences.map((experience, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={experience.title}
              onChange={(e) => updateTitle(index, e.target.value)}
              className="text-lg font-bold p-2 border rounded w-full"
            />
            {experience.points.map((point, pointIndex) => (
              <input
                key={pointIndex}
                type="text"
                value={point}
                onChange={(e) => updatePoint(index, pointIndex, e.target.value)}
                placeholder="Input bullet point"
                className="mt-2 p-2 border rounded w-full"
              />
            ))}
          </div>
        ))}
        <button onClick={addExperience} className="mt-4 p-2 bg-green-500 text-white rounded">Add More Experiences</button>
        <button type="button" onClick={() => router.push("/5-download_resume")}>
        <ContinueButton number="4" />
      </button>
      </div>
      <div className="lg:w-1/2 p-12">
        <div className="border p-4 rounded">
          <div className="font-bold mb-2">Tips for best results:</div>
          <ul>
            <li>- Be specific about your achievements.</li>
            <li>- Use action verbs to start your bullet points.</li>
            <li>- Quantify your achievements with numbers where possible.</li>
            <li>- Focus on outcomes and results.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}