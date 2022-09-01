import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import TextsmsIcon from '@mui/icons-material/Textsms';
import GroupsIcon from '@mui/icons-material/Groups';
import { FeedOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
export default function Home() {
  return (
    <>
    <AppBar sx={{height:"90px" , backgroundColor:"white"}}>
        <Toolbar sx={{width:"100%", height:"100%"}}>
          <Typography sx={{color:"#ff4400" , fontSize:"30px"}}>Pansos</Typography>
          <Box sx={{width:"100%", border:"1px solid red", height:"80%" , display:"flex",justifyContent:"space-around", alignItems:"center"}}>
          
             {/* icons box */}
            <Box sx={{width:"30%" , border:"1px solid blue" , height:"50px" , display:"flex",justifyContent:"space-around", alignItems:"center"}}>
                <HomeIcon  sx={{color:"#ff4400", fontSize:"30px"}}/>
                <FeedOutlined  sx={{color:"#ff4400", fontSize:"30px"}}/>
                <GroupsIcon  sx={{color:"#ff4400", fontSize:"30px"}}/>
                <TextsmsIcon  sx={{color:"#ff4400", fontSize:"30px"}}/>
              <FavoriteIcon sx={{color:"#ff4400", fontSize:"30px"}}/>
            </Box>
             {/* search box */}
            <Box sx={{width:"30%" , border:"1px solid yellow" , height:"50px"}}>
                
            </Box>
             {/* user actions box */}
            <Box sx={{width:"30%" , border:"1px solid blue" , height:"50px"}}>
                
            </Box>

          </Box>
        </Toolbar>
    </AppBar>
    </>
  )
}
