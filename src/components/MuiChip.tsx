import React from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import { Face } from '@mui/icons-material'
import { useState } from 'react'
// by default the chip is read only but by using onClick events we can use it for clicking purposes
export const MuiChip = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
  return (
    <Stack direction='row' spacing={1} sx={{marginLeft: '18px'}}>
        <Chip label='Chip' color='primary' size='small' icon={<Face />} />
        <Chip label='Chip Outlined' color='primary' size='small' variant='outlined' avatar={<Avatar>V</Avatar>} />
        {/* you can use several props for the chip component, like color, size, avatar, label, icon */}
        <Chip label='Click' color='success' size='small' onClick={() => {alert("Chip is clicked")}} />
        <Chip label='Delete' color='error' onClick={() => alert('Clicked')} size='small' onDelete={() => alert('Delete')} />
        {/* {
            chips.map(chip => (<Chip key={chip} />))
        } */}
    </Stack>
  )
}
