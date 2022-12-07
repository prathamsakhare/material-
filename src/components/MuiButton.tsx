import React from "react";
import { Stack, Button, IconButton, ButtonGroup } from "@mui/material";
// Icon Button is used for the buttons that only contains icons
// Icon buttons are more appropriate for the navbar icons where as you can use normal buttons for the rest of the website
import SendIcon from "@mui/icons-material/Send";
export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* you can use stack tag of material ui for arrangement of the buttons, inside this you can use spacing for space between the buttons and you can use direction for the direction in which the buttons you want to make align in */}
        <Button variant="text" href="https://www.google.com">
          Text
        </Button>
        {/* you can use href attribute for these buttons */}
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        {/* you can use different types of buttons for different purposes */}
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        {/* here, display block means it will get all the horizontal space (a css property Block) */}
        {/* it is like display = 'flex' display='inline-block' etc. */}
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          onClick={() => alert("Button Clicked!")}
        >
          Send
        </Button>
        {/* it adds icon in the start of the text */}
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        {/* disableElevation can disable the shadow effect for the button */}
        {/* it adds icon in the end of the text */}

        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-aria-label="alignment button group"
        >
          {/* here orientation does the same thing what direction does in stack */}
          {/* and you can also apply all the parameters that you can apply to the normal button */}
          <Button onClick={() => alert("Left Clicked!")}>Left</Button>
          <Button onClick={() => alert("Center Clicked!")}>Center</Button>
          <Button onClick={() => alert("Right Clicked!")}>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};
