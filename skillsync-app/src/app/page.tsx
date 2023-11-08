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
  return (
    <> 
      <div className="flex flex-col items-center justify-center">
        {/* idk if my tailwind isnt working, but i have to do margin like this, fix later */}
        <div className="my-24"></div>

        <SkillSyncLogo size='large' />
        <div className="my-4"></div>

        <HeroText/>
        <div className="my-3"></div>

        <Link href="/2-role_input" passHref>
            <ContinueButton number="1" />
        </Link>

        <div className = "flex flex-row items-center mt-24 lg:px-32" >
          <FeatureText/>
        </div>

        <div className="my-24"></div>

      </div>
    </>
  );
}