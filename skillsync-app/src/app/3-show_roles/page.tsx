'use client'

import Image from 'next/image';
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link';
import SkillSyncLogo from '@/components/skillsyncLogo';
import HeaderText from '@/components/HeaderText';
import { useEffect } from 'react';
import RoleButton from './components/RoleButton';
import useChatStore from '../provider/chatstore';
import { SuggestedRoleData } from '../provider/chatstore'; 

export default function ShowRoles() {

  const suggestedRoleData = useChatStore((state) => state.suggestedRoleData);
  const rolesData = suggestedRoleData as SuggestedRoleData | null;


  console.log('here is the rolesData');
  console.log(rolesData);

  const positions = [
    { top: '80%', left: '20%' },
    { top: '55%', left: '12%' },
    { top: '20%', left: '18%' },
    { top: '12%', left: '49%' },
    { top: '20%', left: '80%' },
    { top: '55%', left: '85%' },
    { top: '80%', left: '75%' },
    { top: '77%', left: '51%' },
  ];

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

      {/* Map roles to their respective positions */}
      {rolesData?.roles.map((role, index) => {
          const position = positions[index]; // Get the position for this index
          return (
            <div 
              key={index} 
              className="absolute" 
              style={{ top: position.top, left: position.left }}
            >
              <RoleButton buttonText={role.role_name} additionalInfo={role.description} />
            </div>
          );
        })}


    </div>

  );
}
