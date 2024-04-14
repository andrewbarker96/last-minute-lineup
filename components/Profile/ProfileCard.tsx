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
    <>
      <div>
        <Avatar
          alt="Profile Picture"
          src="/path/to/profile-picture.jpg"
          sx={{ width: 150, height: 150, marginBottom: 2 }}
        />
      </div>
      <div>
        <Typography variant="h5" gutterBottom>
          {profileData.name}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" gutterBottom>
          Email: {profileData.email}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" gutterBottom>
          Phone: {profileData.phone}
        </Typography>
      </div>
    </>
  );
};

export default ProfilePage;
