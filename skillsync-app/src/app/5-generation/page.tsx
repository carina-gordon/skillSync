'use client'

import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'
import SkillSyncLogo from "@/components/skillsyncLogo";
import { useEffect, useMemo } from 'react';
import ExperienceStore from '../provider/experiences/experiences';
import useChatStore from '../provider/chat/chatstore';
import ResumeStore from '../provider/resume/resume_data';
import importData from './utils/import_util';
import useExperienceData from './utils/exprerience_util';
import useEducationData from './utils/education_util';
import useSkillData from './utils/skills_util';
import useProfileData from './utils/header_util';
import { format } from 'path';
import LoadingIndicator from '@/components/loadingIndicator';

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

  // console.log("Getting data from chat store");
  const desiredRole = useChatStore((state) => state.selectedRole);
  // console.log(desiredRole);
  const currentRole = useChatStore((state) => state.currentRole);
  // console.log(currentRole);
  // console.log("Getting data from experience store");
  const localExperiences = ExperienceStore((state) => state.experiences);
  // console.log(localExperiences);

  // Set the resume import data
  // const { setImports, setHeader, setEducation, setExperiences, setSkills } = ResumeStore();
  // setImports(importData);

  const formattedEducation = useEducationData();
  const formattedExperiences = useExperienceData(desiredRole!.role_name, currentRole!.role_name);
  const formattedSkills = useSkillData();
  const formattedProfile = useProfileData();

  const چہنست = {
    "name": "John Doe",
    "email": "yuh"
  }

  console.log(چہنست);

  // concatenate all formatted variables into a useMemo
  const overleafURL = useMemo(() => {
    const formattedResume = [
      importData,
      formattedProfile,
      formattedEducation,
      formattedExperiences,
      formattedSkills,
    ].join("\n");

    console.log(formattedResume);

    const encodedResume = `data:application/x-tex;base64,${Buffer.from(formattedResume).toString('base64')}`;

    const BASE_URL = "https://www.overleaf.com/docs?snip_uri=";

    return BASE_URL;

  }, [formattedEducation, formattedExperiences, formattedSkills, formattedProfile]);

  // useEffect(() => {
  //   console.log('THIS IS THE RESUME', [
  //     formattedEducation,
  //     formattedExperiences,
  //     formattedSkills,
  //     formattedProfile,
  //   ].join("\n"));

  //   // console.log("Sending profile data");
  //   // const profileJSON = sendProfileData();
  //   // setHeader(JSON.stringify(profileJSON));

  //   // console.log("Sending education data");
  //   // const eduJSON = sendEducationData();
  //   // setEducation(formattedEducation);

  //   // console.log("Sending experiences data");
  //   // const experienceJSON = sendExperienceData();
  //   // setExperiences(formattedExperiences);

  //   // console.log("Sending skills data");
  //   // const skillsJSON = sendExperienceData();
  //   // setSkills(formattedSkills);

  //   // print all resume 
  //   // console.log("Printing resume");
  //   // console.log(ResumeStore.getState());
  //   // console.log(formattedEducation, formattedExperiences, formattedSkills);
    
  // }, [overleafURL]);

  console.log({ overleafURL, formattedEducation, formattedExperiences, formattedSkills, formattedProfile });

  return (
    <div>
      {/* ...other components */}
      <LoadingIndicator />
      <div className="pl-12 pt-12">
        <SkillSyncLogo size="medium" />
      </div>

      <h1>Download Resume Page</h1>
      {/* <p>{formattedEducation}</p> */}
      <Link href={overleafURL}>
        <ContinueButton number="5" />
      </Link>
    </div>
  );
}