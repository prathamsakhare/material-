import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton } from '@mui/material' 
import { Mail } from '@mui/icons-material'
export const MuiList = () => {
  return (
    <Box sx={{width: '300px', bgcolor:'#efefef', margin:'15px'}}>  
        <List>
            <ListItem disablePadding>
                {/* you can apply disablePadding prop for the ListItem component so that the padding which is by default for the component will get disabled */}
                <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                    <Avatar>
                    <Mail />
                    </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List Item 1' secondary='Secondary Text'  />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <ListItemAvatar>
                <Avatar>
                    <Mail />
                    </Avatar>
                </ListItemAvatar>
                </ListItemIcon>
                
                <ListItemText primary='List Item 2' secondary='Secondary Text' />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <ListItemAvatar>
                    <Avatar>
                    <Mail />
                    </Avatar>
                </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary='List Item 3' secondary='Secondary Text' />
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}
