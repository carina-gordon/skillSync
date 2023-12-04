'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'
import SkillSyncLogo from "@/components/skillsyncLogo";
import { useEffect } from 'react';
import ExperienceStore from '../provider/experiences/experiences';
import useChatStore from '../provider/chat/chatstore';
import sendProfileData from './utils/header_util';
import ResumeStore from '../provider/resume/resume_data';
import importData from './utils/import_util';

export default function DownloadResume() {

  /*
  The Resume:

  1. Name on top
  2. Contact information (email, phone, github, linkedin, personal website)
  3. Education
    3a. College
    3b. Major
    3c. Time Period
    3d. GPA
    3e. Relevant Courses
  4. Experiences
    4a. Role Title
    4b. Role Description (3 bullet points)
    4c. Dates
  5. Skills
    5a. [Category 1]: Based on previous experiences
    5b. [Category 2]: Based on desired experiences
    5c. [Category 3]: Based on general skills


  Output: JSON file that is ultimately read to a latex file
  This is the workflow:
  1. Append new data to the latex file
  2. Compile the latex file 
  3. If if fails, return error and debug with GPT-4
  4. If it succeeds, continue to next step
  */

  ExperienceStore();
  useChatStore();
  ResumeStore();

  console.log("Getting data from chat store");
  const desiredRole = useChatStore((state) => state.selectedRole);
  console.log(desiredRole);
  const currentRole = useChatStore((state) => state.currentRole);
  console.log(currentRole);
  console.log("Getting data from experience store");
  const localExperiences = ExperienceStore((state) => state.experiences);
  console.log(localExperiences);

  // Set the resume import data
  const { setImports, setHeader, setEducation, setExperiences, setSkills } = ResumeStore();
  setImports(importData);

  useEffect(() => {

    console.log("Sending profile data");
    const profileJSON = sendProfileData();
    setHeader(JSON.stringify(profileJSON));

    console.log("Sending profile data");
     //const profileJSON = sendProfileData();
    setHeader(JSON.stringify(profileJSON));


  }, []);
  

  return (
    <div>
      {/* ...other components */}

      <div className="pl-12 pt-12">
        <SkillSyncLogo size="medium" />
      </div>

      <h1>Download Resume Page</h1>
      <Link href="/6-download_resume">
        <ContinueButton number="5" />
      </Link>
    </div>
  );
}