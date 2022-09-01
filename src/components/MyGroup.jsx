import { Box, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function MyGroup() {
  return <>
  
  <Box sx={{width:"100%" , height:"300px" , boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
  <Box sx={{width:"100%" , display:"flex",justifyContent:"space-between",padding:"10px"}}>
       <Typography sx={{color:"gray"}}>MY GROUP</Typography>
       <MoreHorizIcon/>
      </Box>
    
  </Box>

  <Box>
    
  </Box>
  
  </>;
}
