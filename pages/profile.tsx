import React from 'react'
import RootLayout from '@/app/layout'
import ProfileCard from '@/components/Profile/ProfileCard'
import ProfileSettings from '@/components/Profile/ProfileSettings'


const Profile = () => {
  return (
    <RootLayout>
      <>
        <ProfileSettings />
      </>
    </RootLayout>
  )
}


export default Profile