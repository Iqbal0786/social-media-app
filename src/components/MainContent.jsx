import { Box, Typography } from '@mui/material'
import React from 'react'
import Story from './Story'

export default function MainContent() {
  return (
    <>
    <Box sx={{width:"48%" , heigth:"100%" , border:"1px solid blue"}}>
    <Box sx={{width:"100%" , height:"300px" , display:"flex" ,justifyContent:"space-between" , overflow:"auto",   boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",padding:"10px"}}>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
     <Story/>
    </Box>
            
    </Box> 
    </>
  )
}
