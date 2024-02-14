import React from "react"
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import Link from "next/link";
import { LogoMain, LogoNav } from "./navigation/logo";

export default function HomeSlider() {
    return (
    <div>
        <Grid container spacing={2} className ='home'>
            <Grid item xs={12} sm={12} md={12}>
            <Item className = 'flex justify-center'>
                <LogoMain />
            </Item>
            <Item className = 'flex justify-center'>
                    <Link href='/login'>
                        <button className='main-button'>
                            Login
                        </button>
                    </Link>
            </Item>
            <Item className = 'flex justify-center'>
                <Link href='/signup'>
                    <button className='alt-button'>
                        Create Account
                    </button>
                </Link>
            </Item>
            </Grid>
            <br />
        </Grid>
    </div>
    )
  }