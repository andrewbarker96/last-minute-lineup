import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { ExitToApp, Menu } from '@mui/icons-material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { LogoNav } from '../logo';
import Footer from './footer';


export default function SidebarNav() {
  const [open, setOpen] = React.useState(false);

  const drawerWidth = 300;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOpen(window.innerWidth > 654);
      
      const handleResize = () => {
        setOpen(window.innerWidth > 654);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{marginTop: '10%'}} role="presentation" onClick={toggleDrawer(false)}>
      <div className='flex' style={{ paddingBottom: '5%'}}>  
        <LogoNav />
      </div>
      <List style={{ display: 'flex', justifyContent: 'space-evenly', paddingLeft: '10%', paddingRight: '10%' }}>
        <ListItemButton href='profile' className='justify-center'>
          <PersonOutlineOutlinedIcon />
        </ListItemButton>
        <ListItemButton href='#' className='justify-center'>
          <SettingsOutlinedIcon />
        </ListItemButton>
        <ListItemButton href='#' className='justify-center'>
          <NotificationsOutlinedIcon />
        </ListItemButton>
      </List>

      <List>
        <ListItemButton href='dashboard'>
          <HomeRoundedIcon /><ListItemText primary='Home' />
        </ListItemButton>
        <ListItemButton href='free-agents'>
          <PersonSearchRoundedIcon /><ListItemText primary='Free Agents' />
        </ListItemButton>
        <ListItemButton href='team'>
          <AssignmentRoundedIcon /><ListItemText primary='Team' />
        </ListItemButton>
      </List>
    </Box>
  );

  const LogOut = (
    <Box sx={{marginTop: '10%'}} role="presentation">
      <List>
        <ListItemButton href='/'><ExitToApp /><ListItemText primary='Logout' /></ListItemButton>
        <Footer />
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><Menu /></Button>
      <Drawer
        variant='persistent'
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { width:drawerWidth, boxSizing:'border-box' },
          '@media (max-width: 654px)': {
            '& .MuiDrawer-paper': { width: '100%', padding:'2%' },
          },
        }}
      >
        <Button onClick={toggleDrawer(false)} className='justify-start' style={{ paddingLeft: '5%' }}><CloseRoundedIcon /></Button>
        {DrawerList}
        {LogOut}
      </Drawer>
      <div style={{ marginLeft: open ? drawerWidth : 0 }} /> {/* Div is used to 'push' main content sideways in desktop view */}

    </div>
  );
}
