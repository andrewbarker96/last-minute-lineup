import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


export const LogoNav = () => {
  return (
    <div className='logo'>
      <Link href='/dashboard'><Image src="/LML-Nav.png" className='logo-light' alt="Last Minute Lineup Nav Icon" width={150} height={100} priority /></Link>
      {/* <Link href='/'><Image src="/logo-dark.png" className='logo-dark' alt="Last Minute Lineup Nav Icon" width={300} height={100} priority /></Link> */}
    </div>
  )
}

export const LogoMain = () => {
  return (
    <div className='logo'>
      <Link href='/'><Image src="/logo-light.png" className='logo-light' alt="Last Minute Lineup" width={500} height={100} priority /></Link>
      <Link href='/'><Image src="/logo-dark.png" className='logo-dark' alt="Last Minute Lineup" width={500} height={100} priority /></Link>
    </div>
  )
}

export const LogoSignIn = () => {
    return (
        <div className='logo'>
        <Link href='/'><Image src="/LML-Main.png" alt="Last Minute Lineup" width={250} height={100} priority /></Link>
        </div>
    )
    }