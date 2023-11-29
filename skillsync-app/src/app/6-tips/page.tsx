'use client'

import React from 'react';
import Image from 'next/image';
import ContinueButton from '@/components/ContinueButton';
import SkillSyncLogo from "@/components/skillsyncLogo"
import Link from 'next/link'
import HeaderText from '@/components/HeaderText';
import ShadedBox from './components/shadedBox';

export default function Tips() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* ...other components */}
      <div className="pl-12 pt-12">
        <SkillSyncLogo size="medium" />
      </div>
      <div className="pt-6 pb-6">
        <HeaderText
          text="Here are some tips for success in your new role"
          size="large"
        />
      </div>
      {/* Shaded boxes */}
      <div className="flex w-full justify-between px-12">
        {/* Interview Tips box */}
        <ShadedBox
          title="Interview Tips"
          text="Some helpful tips for interviews"
          width="1/4"
          height="200"
        />
        {/* Networking Tips box */}
        <ShadedBox
          title="Networking Tips"
          text="Build a strong professional network"
          width="3/4"
          height="1/2"
        />
        {/* Words of Encouragement box */}
        <ShadedBox
          title="Words of Encouragement!"
          text="It takes the average job seeker 300 applications to get an interview. Don’t give up!"
          width="3/4"
          height="1/2"
        />
      </div>
      {/* Continue button */}
      <div className="mt-4">
        <Link href="/7-complete">
          <ContinueButton number="6" />
        </Link>
      </div>
    </div>
  );
}