import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavMenues from "./NavMenues";

export default function Home() {
  return (
    <>
      <AppBar sx={{ height: "90px", backgroundColor: "white" }}>
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
    </>
  );
}
