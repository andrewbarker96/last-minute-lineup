import HomeLayout from "@/app/home-layout"
import React from "react"
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import LastMinuteLineupLogo from "@/components/navigation/logo"
import Link from "next/link"
import HomeSlider from "@/components/home-slider"


export default function HomePage() {
  return (
    <HomeLayout> 
        <div>
            <Grid container spacing={2} className ='flex justify-center'>
                <Grid item xs={12} sm={12} md={12}>
                <Item className = 'flex justify-center'>
                    <Link href="/">
                        <LastMinuteLineupLogo />
                    </Link>
                </Item>
                <Item className = 'flex justify-center'>
                    <button className='main-button'>
                        <Link href='/login'>Sign In</Link>
                    </button>
                </Item>
                <Item className = 'flex justify-center'>
                    <button className='alt-button'>
                        <Link href='/signup'>Sign Up</Link>
                    </button>
                </Item>
                </Grid>
                <br />
            </Grid>
        </div>
    </HomeLayout>
  )
}