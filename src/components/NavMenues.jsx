import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import TextsmsIcon from "@mui/icons-material/Textsms";
import GroupsIcon from "@mui/icons-material/Groups";
import { FeedOutlined } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from '@mui/system';
import { TextField,Typography } from '@mui/material';

export default function NavMenues() {
  return (
    <>
     {/* icons box */}
     <Box
              sx={{
                width: "30%",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <HomeIcon
                sx={{ color: "#ff4400", fontSize: "30px", cursor: "pointer" }}
              />
              <FeedOutlined
                sx={{ color: "#ff4400", fontSize: "30px", cursor: "pointer" }}
              />
              <GroupsIcon
                sx={{ color: "#ff4400", fontSize: "30px", cursor: "pointer" }}
              />
              <TextsmsIcon
                sx={{ color: "#ff4400", fontSize: "30px", cursor: "pointer" }}
              />
              <FavoriteIcon
                sx={{ color: "#ff4400", fontSize: "30px", cursor: "pointer" }}
              />
            </Box>
            {/* search box */}
            <Box sx={{ width: "30%", height: "50px" }}>
              <TextField
                id="input-with-icon-textfield"
                label="search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                sx={{ height: "80%", width: "100%", borderRadius: "40px" }}
              />
            </Box>
            {/* user actions box */}
            <Box
              sx={{
                width: "25%",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#eff3fa",
                  position: "relative",
                  borderRadius: "7px",
                }}
              >
                <BookmarkIcon
                  sx={{
                    color: "#192252",
                    position: "absolute",
                    top: "20%",
                    left: "20%",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#eff3fa",
                  position: "relative",
                  borderRadius: "7px",
                }}
              >
                <NotificationsIcon
                  sx={{
                    color: "#192252",
                    position: "absolute",
                    top: "20%",
                    left: "20%",
                    cursor: "pointer",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#eff3fa",
                  position: "relative",
                  borderRadius: "7px",
                }}
              >
                <BookmarkIcon
                  sx={{
                    color: "#192252",
                    position: "absolute",
                    top: "20%",
                    left: "20%",
                    cursor: "pointer",
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  width: "80px",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "black" }}>Iqbal</Typography>
                <ExpandMoreIcon sx={{ color: "black", cursor: "pointer" }} />
              </Box>
            </Box>
    </>
  )
}
