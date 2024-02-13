'use client'

import { useState } from 'react'
import Link from 'next/link'

const NavItems = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="items-center px-3 py-2 border rounded text-black border-black hover:text-blue-500 hover:border-blue-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
          <div className="text-sm lg:flex-grow flex flex-col lg:flex-row justify-end">
            <ul className="md:flex flex-col lg:flex-row nav-item space-y-4 lg:space-y-0 lg:space-x-6 nav-item">
              <li>Hello</li>
              <li>Jordan...</li>
              <li>Hello</li>
              <li>Austin...</li>
            </ul>
          </div>
        </div>
    </>
  )
}

export { NavItems }