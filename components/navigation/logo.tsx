import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const LastMinuteLineupLogo = () => {
  return (
    <div>
    <Link href='/'><Image src="/logo-light.png" className='logo' alt="Last Minute Lineup" width={300} height={100} priority /></Link>
    </div>
  )
}

export default LastMinuteLineupLogo