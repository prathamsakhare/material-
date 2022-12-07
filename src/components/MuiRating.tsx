import React from 'react'
import { Rating, Stack } from '@mui/material'
import { useState } from 'react'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    // here for the initial value the type of the value either be a number or the null 
    console.log({value})
    const handleChange = (_event:React.ChangeEvent<{}>, newValue: number | null) => {
            setValue(newValue)
    }
  return (
    <Stack spacing={2}> 
        <Rating value={value} onChange={handleChange} precision={0.5} icon={<Favorite fontSize='inherit' color='error' />} emptyIcon={<FavoriteBorder fontSize='inherit' />} />
        {/* you can even change the icon using icon and emptyIcon properties and you can use the color you want for that icon */}
        {/* here if you use precision as 0.5 then you can even select half star */}
    </Stack>
  )
}
