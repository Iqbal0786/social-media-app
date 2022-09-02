import { Box } from '@mui/material'
import React from 'react'
import MyFriends from './MyFriends'
import MyGroup from './MyGroup'

export default function FriendsAndGroup() {
  return (
  <>
    <Box sx={{width:"25%" , heigth:"100%" , border:"1px solid blue"}}>
     <MyGroup/>
     <MyFriends/>
    </Box> 
  </>
  )
}
