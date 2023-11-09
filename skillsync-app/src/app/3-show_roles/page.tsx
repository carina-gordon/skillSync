'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'

export default function RoleInput() {

  return (
    <div>
      {/* ...other components */}
      
      <h1>Role Input Page</h1>
      <Link href="/4-experiences">
            <ContinueButton number = "3" />
        </Link>
    </div>
  );
}