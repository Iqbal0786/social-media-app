import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FriendsAndGroup from "./FriendsAndGroup";
import MainContent from "./MainContent";
import NavMenues from "./NavMenues";
import UserInfoAndActivity from "./UserInfoAndActivity";

export default function Home() {
  return (
    <>
      <AppBar sx={{ height: "90px", backgroundColor: "white" , position:"fixed" }}>
        <Toolbar sx={{ width: "100%", height: "100%" }}>
          <Typography sx={{ color: "#ff4400", fontSize: "30px" }}>
            Pansos
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "80%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
           <NavMenues/>
          </Box>
        </Toolbar>
      </AppBar>

        {/* main content box */}
        <Box sx={{width:"100%" , height:"800px" ,border:"1px solid red",marginTop:"120px" ,display:"flex" , justifyContent:"space-between" ,gap:"10px" , padding:"20px",marginBottom:"300px"}}>

         <FriendsAndGroup/>
         <MainContent/>
         <UserInfoAndActivity/>
        
        </Box>
    </>
  );
}
