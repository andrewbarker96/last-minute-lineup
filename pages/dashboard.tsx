import React from 'react'
import RootLayout from '@/app/layout'
import SidebarNav from '@/components/navigation/SidebarNav'
import { Box, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import HomeCard from '@/components/Home/HomeCard';
import NewsCard from '@/components/Home/NewsCard';


const dashboard = () => {
  return (
    <RootLayout>
      <HomeCard />
      <br />
      <NewsCard />
    </RootLayout>
  )
}

export default dashboard