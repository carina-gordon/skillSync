'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'

export default function RoleInput() {

  return (
    <div>
      {/* ...other components */}
      
      <h1>Experiences Page</h1>
      <Link href="/5-download_resume">
            <ContinueButton number = "4" />
      </Link>
    </div>

  );
}