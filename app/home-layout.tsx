'use client'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '../components/navigation/footer'
import { createTheme, ThemeProvider } from '@mui/material'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  palette: {
    primary: {
      main: '#BA75FF',
    },
  },
});

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Last Minute Lineup</title>
        <meta name="description" content="For Adult Rec League Managers & Players!" />      
      </Head>
      <main className="main">{children}</main>
      <Footer />
    </ThemeProvider>
  )
}