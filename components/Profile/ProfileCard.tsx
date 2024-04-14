import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';

const ProfilePage = () => {
  // Sample profile data
  const profileData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    // Add other profile data as needed
  };

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} align="center">
        {/* Profile Picture Skeleton */}
        <Avatar
          alt="Profile Picture"
          src="/path/to/profile-picture.jpg"
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
      </Grid>
      <Grid item xs={12} align="center">
        {/* Name */}
        <Typography variant="h5" gutterBottom>
          {profileData.name}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        {/* Email */}
        <Typography variant="body1" gutterBottom>
          Email: {profileData.email}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        {/* Phone Number */}
        <Typography variant="body1" gutterBottom>
          Phone: {profileData.phone}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
