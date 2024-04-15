import React from 'react'
import { Grid, Typography, Skeleton, Stack } from '@mui/material'

const NewsCard = () => {
  return (
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
  )
}

export default NewsCard