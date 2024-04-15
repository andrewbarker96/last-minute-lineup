import HomeLayout from "@/app/LoginLayout"
import React from "react"
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import { LogoMain } from "@/components/logo";
import Link from "next/link"
import SignIn from "@/components/LoginScreen/SignIn";

export default function HomePage() {
  return (
    <HomeLayout> 
        <SignIn />
    </HomeLayout>
  )
}