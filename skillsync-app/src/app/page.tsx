'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import SkillSyncLogo from '@/components/skillsyncLogo';
import FeatureText from '@/components/featureStills';
import Link from 'next/link'
import HeroText from '@/components/heroText';

// Import Firebase Analytics to initialize it (if you're going to use it)
import { analytics } from '@/lib/firebase'; // Adjust the path to where your firebase.js file is located

export default function Home() {
  // No need to initialize Firebase here, it's done in firebase.js
  // This is page 1 of the onboarding process
  return (
    <div>
      <SkillSyncLogo size='large' />


      <HeroText/>

      <div className = "flex justify-center items-center">
        <Link href="/2-role_input" passHref>
            <ContinueButton number="1" />
        </Link>

      </div>

      <FeatureText/>

    </div>
  );
}