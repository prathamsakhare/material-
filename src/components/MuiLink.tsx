import React from 'react'
import { Stack, Link, Typography } from '@mui/material'
export const MuiLink = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary' underline='hover'>Link Number 2</Link>
        {/* you can change the underline property for the link */}
        <Link href='#' color='secondary' underline='none'>Link Number 2</Link>
        {/* you can set it to none */}
        <Typography variant='h6'>
            <Link href='#' color='secondary' underline='none'>Link Number 3</Link>
            {/* you can even apply typography property of mui to link text */}
        </Typography>

    </Stack>
  )
}
