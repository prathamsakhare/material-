import { AppBar, IconButton, Toolbar, Stack, Typography, Button } from '@mui/material'
import { AccountCircle, CatchingPokemon, Login } from '@mui/icons-material'
import {  useState } from 'react'
export const NavTheMohh = () => {
    const [active, setActive] = useState(true)
    const setActiveSession = () => {
        active ? setActive(false) : setActive(true)
    }
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' color='inherit' aria-label='logo' edge='start'>
                <CatchingPokemon />
            </IconButton>
            <Typography variant='h6' sx={{flexGrow: 1}}>
                THE MOHH
            </Typography>
            <Stack direction='row' spacing={2}> 
                <Button sx={{color:"white"}} size='small' disableElevation>Pricing</Button>
                <Button sx={{color:"white"}} size='small' disableElevation>About</Button>
                <Button onClick={setActiveSession} size='small' variant='contained' disableElevation>
                    {
                        active ? <IconButton size='small' sx={{color:'white'}}><AccountCircle /></IconButton>:<IconButton size='small' sx={{color:'white'}}><Login /></IconButton>
                            
                    }
                </Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
