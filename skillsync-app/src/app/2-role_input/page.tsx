'use client'

import Image from 'next/image'
import ContinueButton from '@/components/ContinueButton';
import Link from 'next/link'

export default function RoleInput() {

  return (
    <div>
      <Image src="/your-image.png" alt="Your Image" width={500} height={300} />
      {/* ...other components */}
      
      <h1>Role Input Page</h1>
      <Link href="/3-show_roles">
            <ContinueButton number = "2" />
      </Link>
    </div>
  );
}