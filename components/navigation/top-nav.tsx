'use client'

import { useState } from 'react'
import Link from 'next/link'
import LastMinuteLineupLogo from './logo'
import { NavItems } from './nav-items'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="md:flex-auto items-center flex-shrink-0 text-white mr-6">
          <LastMinuteLineupLogo/>
        </div>
        <NavItems />
        </nav>
    </>
  )
}

export { Navbar }