import HomeLayout from "@/app/home-layout"
import React from "react"
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import { LogoMain } from "@/components/navigation/logo";
import Link from "next/link"
import HomeSlider from "@/components/home-slider"
import Login from "@/components/sign-in/login";


export default function HomePage() {
  return (
    <HomeLayout> 
        <HomeSlider />
    </HomeLayout>
  )
}