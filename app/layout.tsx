'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import SidebarNav from '@/components/navigation/SidebarNav'
import { useMediaQuery } from '@mui/material'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const matches = useMediaQuery('(min-width:654px)');

  return (
    <>
      <Head>
        <title>Last Minute Lineup</title>
        <meta name="description" content="For Adult Rec League Managers & Players!" />
      </Head>
      
      <div className={matches ? 'flex' : ''}>
        <SidebarNav />
        <main className="main" style={{width:'100%'}}>{children}</main>
      </div>
    </>
  )
}