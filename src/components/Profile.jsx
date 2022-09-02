import { Button, Divider, TextField, Typography } from "@mui/material";
import { Box, height, Stack } from "@mui/system";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import React from "react";

export default function Profile() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <Box
          sx={{
            width: "90%",
            height: "100%",
            margin: "auto",
            marginTop: "15px",
            position: "relative",
          }}
        >
          <Box sx={{ width: "100%", height: "150px", position: "relative" }}>
            <img
              src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
              alt=""
              width={"100%"}
              height={"100%"}
              style={{borderRadius:"9px" , marginTop:"10px"}}
            />
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "orangered",
                borderRadius: "8px",
                position: "absolute",
                top: "85%",
                left: "5%",
              }}
            ></Box>
            <Box sx={{ position: "absolute", left: "40%" }}>
              <Typography>Kemito </Typography>
              <Typography sx={{ fontSize: "15px", color: "gray" }}>
                UI/UX Designer
              </Typography>
            </Box>

            <Box
              sx={{
                width: "70%",
                height: "70px",
                position: "absolute",
                top: "150%",
                left: "10%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ width: "30%" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  {" "}
                  11K
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "gray" }}>
                  Followeres
                </Typography>
              </Box>

              <Box sx={{ width: "30%" }}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  {" "}
                  1.4K
                </Typography>
                <Typography sx={{ fontSize: "14px", color: "gray" }}>
                  Following
                </Typography>
              </Box>
            </Box>
          </Box>
          <input
            placeholder="What do you think ?"
            style={{
              position: "absolute",
              top: "65%",
              left: "5%",
              width: "80%",
              height: "70px",
              outline: "none",
              backgroundColor: "#fafafa",
              border: "none",
              padding: "10px",
              borderRadius: "8px",
              color: "black",
            }}
          />
          <Stack direction="row" spacing={2} sx={{position:"absolute",top:"82%" , left:"10%"}}>
            <Button variant="filled" startIcon={<PhotoIcon sx={{color:"blue"}} />} sx={{backgroundColor:"rgb(250,250,250)" , color:"black"}}>
              Image
            </Button>
            <Button variant="filled" startIcon={<SmartDisplayIcon sx={{color:"#e84c89"}} />} sx={{backgroundColor:"rgb(250,250,250)" , color:"black"}}>
              Video
            </Button>
          </Stack>
         <Button variant="filled" startIcon={<SmartDisplayIcon/>} sx={{position:"absolute"  , top:"92%" , left:'10%' , width:"80%"}}>Streaming</Button>
        </Box>
      </Box>
    </>
  );
}
