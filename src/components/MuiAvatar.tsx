import React from 'react'
import { Stack, Avatar } from '@mui/material'
export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{backgroundColor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{backgroundColor:'success.light'}}>CK</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{backgroundColor:'primary.light'}}>BW</Avatar>
            <Avatar sx={{backgroundColor:'success.light'}}>CK</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='Jane Doe' />
            {/* you can use images for the avatars */}
            <Avatar src='https://randomuser.me/api/portraits/women/51.jpg' alt='Jane Doe' />
        </Stack>
    </Stack>
  )
}
