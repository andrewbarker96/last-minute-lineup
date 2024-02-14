import React from "react"
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import Link from "next/link";
import LastMinuteLineupLogo from "./navigation/logo";

export default function HomeSlider() {
    return (
        <div>
            <Grid container spacing={2} className ='home-container flex justify-center'>
                <Grid item xs={12} sm={12} md={12}>
                <Item className = 'flex justify-center'>
                    <Link href="/">
                        <LastMinuteLineupLogo />
                    </Link>
                </Item>
                <Item>
                    <button className='main-button'>
                        <Link href='/login'>Sign In</Link>
                    </button>
                </Item>
                <Item>
                    <button className='alt-button'>
                        <Link href='/signup'>Sign Up</Link>
                    </button>
                </Item>
                </Grid>
                <br />
            </Grid>
        </div>
    )
  }