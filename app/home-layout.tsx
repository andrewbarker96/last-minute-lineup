'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '../components/navigation/footer'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>Last Minute Lineup</title>
        <meta name="description" content="For Adult Rec League Managers & Players!" />      </Head>
        <main className="home">{children}</main>
      <Footer />
    </>
  )
}