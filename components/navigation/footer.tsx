import React from 'react';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterLinkItem: React.FC<{ links: { href: string; text: string }[] }> = ({ links }) => (
    <Grid item xs={12} sm={6} md={4} className='footer-item'>
      {links.map((link, index) => (
        <div key={index}><Link href={link.href}>{link.text}</Link></div>
      ))}
    </Grid>
  );
  
  const Footer = () => {
    return (
      <Box>
        <Grid container spacing={1} className='footer'>
          <FooterLinkItem links={[
            { href:'',text:'' },
          ]} />
          <FooterLinkItem links={[
            { href:'',text:'' },
          ]} />
          <Grid item xs={12} sm={12} md={12} className='footer-item'>
            <div>&copy; 2024 <Link href='/'>Last Minute Lineup</Link></div>
            <Link href="https://www.facebook.com"><FacebookIcon /></Link>
            <Link href="https://www.instagram.com"><InstagramIcon /></Link>
          </Grid>
        </Grid>
      </Box>
    )
  }

export default Footer