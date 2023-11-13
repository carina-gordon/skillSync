'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import SkillSyncLogo from '@/components/skillsyncLogo';
import FeatureText from '@/components/featureStills';
import Link from 'next/link'
import HeroText from '@/components/heroText';
import { useRouter } from 'next/navigation';

// Import Firebase Analytics to initialize it (if you're going to use it)
import { analytics } from '@/lib/firebase'; // Adjust the path to where your firebase.js file is located

export default function Home() {
  const router = useRouter()

  return (
    <> 
      <div className="flex flex-col items-center justify-center">
        {/* idk if my tailwind isnt working, but i have to do margin like this, fix later */}
        <div className="my-24"></div>

        <SkillSyncLogo size='large' />
        <div className="my-4"></div>

        <HeroText/>
        <div className="my-3"></div>

        <button type="button" onClick={() => router.push('/2-role_input')}>
            <ContinueButton number="1" />
        </button>

        <div className = "flex flex-row items-center mt-24 lg:px-32" >
          <FeatureText/>
        </div>

        <div className="my-24"></div>
        <div className='color-black'>Made with love by EECS 497 KTP</div>

      </div>
    </>
  );
}