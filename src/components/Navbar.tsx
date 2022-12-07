import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { CatchingPokemon, Login, Logout } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useState } from "react";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
export const Navbar = () => {
  const [LoggedIn, setLoggedIn] = useState(true);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const handleIsLoggedIn = () => {
    if(LoggedIn === true){
        setLoggedIn(false);
    }
    else{
        setLoggedIn(true);
    }
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            aria-label="logo"
          >
            <CatchingPokemon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POKEMONAPP
          </Typography>
          <Stack direction="row" spacing={2}>
            
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button
              color="inherit"
              onClick={handleClick}
              endIcon={<ArrowDropDown />}
              //   the second thing you need is the event that can make the button functional
              // inside it you make the anchor element as the current target
              id="resources-button"
              //   firstly you need to give an id for the button so that you can use it as a controller inside other items in mui
            >
              Resources
            </Button>

            <Button color="inherit">
              {LoggedIn ? (
                <Button
                  variant="contained"
                  endIcon={<Logout />}
                  disableElevation
                  onClick={handleIsLoggedIn}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  variant="contained"
                  endIcon={<Login />}
                  disableElevation
                  onClick={handleIsLoggedIn}
                >
                    Login/SignUp
                </Button>
              )}
            </Button>
          </Stack>
          <Menu
            id="resources-menu"
            open={open}
            // open prop is used to see wether your anchor is open or not, we can manipulate it using onClick and onClose events
            anchorEl={anchor}
            // anchor element is used to see if your menu is expanded or not so firstly we have made it null inside the state (anchor)
            MenuListProps={{
              "aria-labelledby": "resources-button",
              //   here for aria-labelledby means the button id from which you wanna control the actions
            }}
            onClose={handleClose}
            // this function is used to close the ancholEl, this get the state of the anchor back to null
          >
            <MenuItem>Blog</MenuItem>
            <MenuItem>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};


















