'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'

export default function DownloadResume() {

  return (
    <div>
      {/* ...other components */}
      
      <h1>Download Resume Page</h1>
      <Link href="/6-tips">
            <ContinueButton number = "5" />
      </Link>
    </div>

  );
}