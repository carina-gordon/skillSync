'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'
import SkillSyncLogo from "@/components/skillsyncLogo";
import { useEffect } from 'react';

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
  */

  useEffect(() => {
    

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