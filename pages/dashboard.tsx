import React from 'react'
import RootLayout from '@/app/layout'
import SidebarNav from '@/components/navigation/SidebarNav'
import { Box, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const dashboard = () => {
  return (
    <RootLayout>
      <Box style={{ padding: '5%', backgroundImage: 'url(ImageTemplate.png)', backgroundSize: 'cover' }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h1>Find Free Agents</h1>
            <h2>Fill your team roster with available players!</h2>
            <div className='flex-auto'>
              <Button variant="contained" style={{ backgroundColor: '#A86CEF' }} href='free-agents'>Find Free Agents</Button>
              <Button variant="contained" style={{ backgroundColor: 'white', color: '#A86CEF' }}>Manage Team</Button>
            </div>
          </Grid>
        </Grid>
      </Box>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant="h4">Recent Activity</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, quam in aliquam. </Typography>
        </Grid>
        <br />
        {[...Array(4)].map((_, index) => (
          <Grid item xs={12} md={12} xl={3} key={index}>
            <Stack spacing={1} style={{ backgroundColor: '#F5F7FA', margin:'1%', padding: '5%' }} >
              <Skeleton variant="rectangular" width={'100%'} height={150} />
              <Skeleton variant="circular" width={40} height={40} />
              {[...Array(4)].map((_, index) => (
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} key={index} />
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </RootLayout>
  )
}

export default dashboard