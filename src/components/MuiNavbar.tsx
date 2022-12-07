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
import { CatchingPokemon, Logout } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useState } from "react";

export const MuiNavbar = () => {
  const [LoggedIn, setLoggedIn] = useState(true);
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const open = Boolean(anchor);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
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
              id="resources-button"
              onClick={handleClick}
              aria-expanded={open ? "true" : undefined}
              aria-controls={open ? "resources-menu" : undefined}
              aria-hapopup="true"

            >
              Resources
            </Button>

            <Button color="inherit">
              {LoggedIn ? (
                <Button
                  variant="contained"
                  endIcon={<Logout />}
                  disableElevation
                >
                  Logout
                </Button>
              ) : (
                "Login/SignUp"
              )}
            </Button>
          </Stack>
          <Menu
            id="resources-menu"
            anchorEl={anchor}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};
