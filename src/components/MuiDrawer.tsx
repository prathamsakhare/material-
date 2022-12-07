import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { useState } from 'react'
export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <IconButton size='small' sx={{width:'50px'}} edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
        <Menu></Menu>
    </IconButton>
    <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        {/* anchor tag specifies you from which side the drawer will open */}
        <Box p={2} width='250px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>Side Panel</Typography>
        </Box>
    </Drawer>
    </>
  )
}
