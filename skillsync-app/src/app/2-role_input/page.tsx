'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'
import HeaderText from '@/components/HeaderText';
import FormComponent from './components/form_component';
import SkillSyncLogo from '@/components/skillsyncLogo';
import { useRouter } from "next/router";

export default function inputYourRole() {
  const router = useRouter()

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="absolute top-0 pt-12">
          <SkillSyncLogo size="medium" />
        </div>
        <HeaderText text="What brings you here?" size="large" />
        <div className="my-4"></div>
        <FormComponent />
      </div>

      <button type="button" onClick={() => router.push("/3-show_roles")}>
        <ContinueButton number="2" />
      </button>
    </div>
  );
}