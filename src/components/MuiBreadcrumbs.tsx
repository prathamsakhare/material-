import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-aria-label='breadcrumb' separator={<NavigateNext />}>
            {/* you can use the separator icon for showing the heirarchy between the links */}
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.primary'>Events</Typography>
        </Breadcrumbs>
    </Box>
  )
}
