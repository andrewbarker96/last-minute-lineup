import React from 'react'
import RootLayout from '@/app/layout'
import FreeAgentsTable from '@/components/FreeAgentsTable'

const FreeAgents = () => {
  return (
    <RootLayout>
      <>
        <h1>Free Agents</h1>
        <h4>Use the table below to find Free Agents for your team</h4>
        <FreeAgentsTable />
      </>
    </RootLayout>
  )
}


export default FreeAgents