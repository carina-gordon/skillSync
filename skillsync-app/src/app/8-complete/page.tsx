import Image from 'next/image'
import Link from 'next/link'
import SkillSyncLogo from "@/components/skillsyncLogo"
import ThankYouText from "@/components/thankYouText"
import HeaderText from '@/components/HeaderText';

export default function Complete() {

  return (
    <div>
      {/* ...other components */}

      <div className="pl-12 pt-12 pb-12">
        <SkillSyncLogo size="large" />
      </div>

      <HeaderText text="Thank You For Using SkillSync!" size="large"/>
      <div className="my-3"></div>

      <div className="my-3"></div>
    </div>
  );
}