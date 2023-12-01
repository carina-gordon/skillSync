'use client'

import Image from 'next/image';
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link';
import SkillSyncLogo from '@/components/skillsyncLogo';
import HeaderText from '@/components/HeaderText';
import RoleButton from './components/RoleButton';

export default function ShowRoles() {
  return (
    <div className="relative">
      <div className='absolute top-0 pt-12 pl-12'>
        <SkillSyncLogo size='medium' />
      </div>
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="flex flex-col items-center relative">
        <div className="text-sm text-gray-500 mb-2">🌟 click on a role to switch to it</div>
          <HeaderText text='Have you also thought about these roles?' size='large' />
          <button className="bg-white text-black py-2 px-4 border rounded mt-4">
            I&apos;d like to keep my current role
          </button>
          <div className="mt-12">
            <Link href="/4-experiences">
              <ContinueButton number="3" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-[80%] left-[20%]">
        <RoleButton buttonText="Role 1" additionalInfo="Additional information about Role 1." />
      </div>
      <div className="absolute top-[55%] left-[12%]">
        <RoleButton buttonText="Role 2" additionalInfo="Additional information about Role 2." />
      </div>
      <div className="absolute top-[20%] left-[18%]">
        <RoleButton buttonText="Role 3" additionalInfo="Additional information about Role 3." />
      </div>
      <div className="absolute top-[12%] left-[49%]">
        <RoleButton buttonText="Role 4" additionalInfo="Additional information about Role 4." />
      </div>
      <div className="absolute top-[20%] left-[80%]">
        <RoleButton buttonText="Role 5" additionalInfo="Additional information about Role 5." />
      </div>
      <div className="absolute top-[55%] left-[85%]">
        <RoleButton buttonText="Role 6" additionalInfo="Additional information about Role 6." />
      </div>
      <div className="absolute top-[80%] left-[75%]">
        <RoleButton buttonText="Role 7" additionalInfo="Additional information about Role 7." />
      </div>
      <div className="absolute top-[77%] left-[51%]">
        <RoleButton buttonText="Role 8" additionalInfo="Additional information about Role 8." />
      </div>
    </div>
  );
}
