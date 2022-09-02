import { Box, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function MyGroup() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
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
          <Typography sx={{ color: "gray" }}>MY GROUP</Typography>
          <MoreHorizIcon />
        </Box>

        <Box sx={{ width: "100%", height: "90px", display: "flex" }}>
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
        </Box>
        <Box sx={{ width: "100%", height: "90px", display: "flex" }}>
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
        </Box>
        <Box sx={{ width: "100%", height: "90px", display: "flex" }}>
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
        </Box>
      </Box>
    </>
  );
}
