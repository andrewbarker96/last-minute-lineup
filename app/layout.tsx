'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Navbar } from '../components/navigation/top-nav'
import Footer from '../components/navigation/footer'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Last Minute Lineup</title>
        <meta name="description" content="For Adult Rec League Managers & Players!" />
      </Head>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}