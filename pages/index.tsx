import HomeLayout from "@/app/home-layout"
import React from "react"
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Item from '@mui/material/Grid';
import Link from "next/link"
import RootLayout from "@/app/layout"

export default function HomePage() {
  return (
    <RootLayout>
      <h1>Hello World</h1>
    </RootLayout>
  )
}