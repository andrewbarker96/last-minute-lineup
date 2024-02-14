import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const LogoNav = () => {
  return (
    <div className='logo'>
      <Link href='/'><Image src="/logo-light.png" className='logo-light' alt="Last Minute Lineup Nav Icon" width={300} height={100} priority /></Link>
      <Link href='/'><Image src="/logo-dark.png" className='logo-dark' alt="Last Minute Lineup Nav Icon" width={300} height={100} priority /></Link>
    </div>
  )
}

const LogoMain = () => {
  return (
    <div className='logo'>
      <Link href='/'><Image src="/logo-light.png" className='logo-light' alt="Last Minute Lineup" width={500} height={100} priority /></Link>
      <Link href='/'><Image src="/logo-dark.png" className='logo-dark' alt="Last Minute Lineup" width={500} height={100} priority /></Link>
    </div>
  )
}

export { LogoMain, LogoNav }