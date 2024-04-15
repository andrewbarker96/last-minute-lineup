import React from 'react'
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button';

const HomeCard = () => {
  return (
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
  )
}

export default HomeCard