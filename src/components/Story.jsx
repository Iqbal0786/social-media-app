import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Story() {
  return (
  <>
  <Box sx={{width:"150px" , height:"200px", backgroundColor:"gray" ,position:"relative" ,borderRadius:"8px" ,marginRight:"5px" }}>
    <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80" alt=""  width={"100%"} style={{borderRadius:"8px"}} />
    <Box sx={{width:"40px",height:"40px",backgroundColor:"blue" , borderRadius:"8px" ,position:"absolute" , top:"105%" ,left:"10%"}}>
    </Box>
    <Typography sx={{left:"45%" , position:"absolute"}}>You</Typography>
  </Box>
  
  </>
  )
}
