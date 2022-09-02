import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function MyFriends() {
  return (
    <>
    <Box
        sx={{
          width: "100%",
          height: "auto",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          display:"flex",
          justifyContent:"space-between",
          flexDirection:"column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <Typography sx={{ color: "gray" }}>FRIENDS</Typography>
          <MoreHorizIcon />
        </Box>

        <Box sx={{ width: "100%", height: "90px", display: "flex",  marginBottom:"-40px" }}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "8px",
              marginLeft: "10px",
            
            }}
          ></Box>
          <Typography sx={{ marginLeft: "10px", marginTop: "4px" }}>
            Hello User
          </Typography>
          <ul>
            <li></li>
           </ul>
        </Box>
        <Box sx={{ width: "100%", height: "90px", display: "flex" ,  marginBottom:"-40px"}}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "8px",
              marginLeft: "10px",
            }}
          ></Box>
          <Typography sx={{ marginLeft: "10px", marginTop: "4px" }}>
            Hello User
          </Typography>
          <ul>
            <li></li>
           </ul>
        </Box>
        <Box sx={{ width: "100%", height: "90px", display: "flex" , marginBottom:"-40px"}}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "8px",
              marginLeft: "10px",
            }}
          ></Box>
          <Typography sx={{ marginLeft: "10px", marginTop: "4px" }}>
            Hello User
          </Typography>
          <ul>
            <li></li>
           </ul>
        </Box>
        <Box sx={{ width: "100%", height: "90px", display: "flex",  marginBottom:"-40px" }}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "8px",
              marginLeft: "10px",
            
            }}
          ></Box>
          <Typography sx={{ marginLeft: "10px", marginTop: "4px" }}>
            Hello User
          </Typography>
          <ul>
            <li></li>
           </ul>
        </Box>
        <Box sx={{ width: "100%", height: "90px", display: "flex" ,  marginBottom:"-40px"}}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "8px",
              marginLeft: "10px",
            }}
          ></Box>
          <Typography sx={{ marginLeft: "10px", marginTop: "4px" }}>
            Hello User
          </Typography>
          <ul>
            <li></li>
           </ul>
        </Box>
        <Box sx={{ width: "100%", height: "90px", display: "flex" , marginBottom:"-40px"}}>
          <Box
            sx={{
              width: "30px",
              height: "30px",
              backgroundColor: "gray",
              borderRadius: "8px",
              marginLeft: "10px",
            }}
          ></Box>
          <Typography sx={{ marginLeft: "10px", marginTop: "4px" }}>
            Hello User
          </Typography>
          <ul>
            <li></li>
           </ul>
        </Box>
        
      </Box>
    </>
  )
}
