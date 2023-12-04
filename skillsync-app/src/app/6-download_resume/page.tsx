'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'
import SkillSyncLogo from "@/components/skillsyncLogo";

export default function DownloadResume() {

  return (
    <div>
      {/* ...other components */}

      <div className="pl-12 pt-12">
        <SkillSyncLogo size="medium" />
      </div>

      <h1>Download Resume Page</h1>
      <Link href="/6-tips">
        <ContinueButton number="5" />
      </Link>
    </div>
  );
}