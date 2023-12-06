'use client'
import { useEffect, useState } from 'react';
import SkillSyncLogo from '@/components/skillsyncLogo';
import HeaderText from '@/components/HeaderText';
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import ExperienceInput from './experience_input';
import ExperienceStore from '../provider/experiences/experiences';
import { Experience } from '../provider/experiences/experience_types';
import useChatStore from '../provider/chat/chatstore';
import { tipsData } from '../provider/chat/chat_types';

export default function RoleInput() {
  const { setSingleExperience, setExperiences } = ExperienceStore();
  useChatStore();
  const localExperiences = ExperienceStore((state) => state.experiences);
  const TipsData = useChatStore((state) => state.tipsData);
  const localTipsData = TipsData as tipsData | null;

  useEffect(() => {
    console.log("Setting the initial experience");
    console.log(localExperiences.length);

    if (localExperiences.length === 0) {
      setExperiences([emptyEducation, emptyExperience]);
    }
  }, []);
  const router = useRouter();

  const emptyExperience: Experience = {
    title: "Enter New Experience",
    points: ["", "", ""],
  };

  const emptyEducation: Experience = {
    title: "Enter your Education Details",
    points: ["College", "Major", "Time Period", "GPA", "Relevant Courses"],
  };

 
  // console.log("here is the localExperiences");
  // console.log(localExperiences);

  // const [experiences, setExperiences] = useState([
  //   { title: 'Experience 1', points: ['', '', ''] },
  // ]);

  return (
    <div className="flex flex-col lg:flex-row items-start h-screen">
      <div className="lg:w-1/2 p-12">
        <SkillSyncLogo size="medium" />
        <HeaderText text="Enter Your Experiences" size="large" />
        <div className="border p-4 rounded">
          <div className="font-bold mb-2">Tips for best results:</div>
          {localTipsData?.tips.map((tip, index) => (
            <div key={index}>
              <div className="font-bold mb-2">Tip {index + 1}</div>
              <ul>
                <li>- {tip.tip_number}</li>{" "}
              </ul>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => router.push("/5-generation")}>
          <ContinueButton number="4" />
        </button>
      </div>
      <div className="lg:w-1/2 p-12">
        {localExperiences.map((experience, index) => (
          <ExperienceInput key={index} experience={experience} index={index} />
        ))}
        <button
          onClick={() => setSingleExperience(emptyExperience)}
          className="mt-4 p-2 bg-green-500 text-white rounded"
        >
          Add More Experiences
        </button>
      </div>
    </div>
  );
} 