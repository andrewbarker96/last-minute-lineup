import React, { useState } from 'react';
import { Avatar, Typography, Button, Switch, FormControlLabel, Select, MenuItem } from '@mui/material';

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  allowNotifications: boolean;
  freeAgent: boolean;
  availability: string[];
  competitiveLevel: string;
  location: string;
}

const ProfileSettings: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    allowNotifications: true,
    freeAgent: false,
    availability: [],
    competitiveLevel: '',
    location: '',
  });

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [event.target.name]: event.target.checked });
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>, field: string) => {
    setProfileData({ ...profileData, [field]: event.target.value as string });
  };

  const saveProfile = () => {
    console.log("Profile data saved:", profileData);
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
      <div>
        <FormControlLabel
          control={<Switch checked={profileData.allowNotifications} onChange={handleSwitchChange} name="allowNotifications" />}
          label="Allow Notifications"
        />
      </div>
      <div>
        <FormControlLabel
          control={<Switch checked={profileData.freeAgent} onChange={handleSwitchChange} name="freeAgent" />}
          label="Free Agent"
        />
      </div>
      {profileData.freeAgent && (
        <>
          <div>
            <Select
              label="Days of Availability"
              value={profileData.availability}
              onChange={(e) => handleSelectChange(e, 'availability')}
              multiple
              displayEmpty
              sx={{ width: 200 }}
            >
              <MenuItem value="Days of" disabled>
                Days of Availability
              </MenuItem>
              <MenuItem value="Monday">Monday</MenuItem>
              <MenuItem value="Tuesday">Tuesday</MenuItem>
              <MenuItem value="Wednesday">Wednesday</MenuItem>
              <MenuItem value="Thursday">Thursday</MenuItem>
              <MenuItem value="Friday">Friday</MenuItem>
              <MenuItem value="Saturday">Saturday</MenuItem>
              <MenuItem value="Sunday">Sunday</MenuItem>
            </Select>
          </div>
          <div>
            <Select
              label="Competitive Level"
              value={profileData.competitiveLevel}
              onChange={(e) => handleSelectChange(e, 'competitiveLevel')}
              displayEmpty
              sx={{ width: 200 }}
            >
              <MenuItem value="" disabled>
                Select Competitive Level
              </MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Semi-Competitive">Semi-Competitive</MenuItem>
              <MenuItem value="Competitive">Competitive</MenuItem>
              <MenuItem value="Tournament">Tournament</MenuItem>
            </Select>
          </div>
          <div>
            <Select
              label="Location"
              value={profileData.location}
              onChange={(e) => handleSelectChange(e, 'location')}
              displayEmpty
              sx={{ width: 200 }}
            >
              <MenuItem value="" disabled>
                Select Location
              </MenuItem>
              <MenuItem value="Wapplehorst">Wapplehorst</MenuItem>
              <MenuItem value="O'Fallon">O'Fallon</MenuItem>
              <MenuItem value="BMAC">BMAC</MenuItem>
              <MenuItem value="Forest Park">Forest Park</MenuItem>
              <MenuItem value="Pacific">Pacific</MenuItem>
              <MenuItem value="St. Peters">St. Peters</MenuItem>
            </Select>
          </div>
        </>
      )}
      <div>
        <Button variant="contained" color="primary" onClick={saveProfile}>Save</Button>
      </div>
    </>
  );
};

export default ProfileSettings;
