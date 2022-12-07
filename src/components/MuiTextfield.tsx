import React from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";
export const MuiTextfield = () => {
  const [value, setValue] = useState("");
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2}>
        {/* you can use --- label, variant, size, color properties for the textfield */}
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small primary" size="small" color="primary" />
        <TextField label="medium secondary" size="medium" color="secondary" />
        <TextField label="medium success" size="medium" color="success" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Form Input" required />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share password with anyone"
        />
        {/* you can put helper text that displays below the text field */}
        {/* also you can use type property to specify the type of content textfield is gonna get */}
      </Stack>

      {/* Entering adornments in the textfields  */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* ERROR PROP */}
        {/* you can use the error prop to show the error inside the textfield */}
        {/* you can use useState to conditionally render the content for the field  */}
        {/* for example --- you can use onChange event for the input value and then you can conditionally change the helper text and the error prop */}
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required': "Do not share your password with anyone"}
        />
        {/* here if the value of the field is not equal to the value inside the useState then it will show required as the helper text, and error color of the field  */}
      </Stack>
    </Stack>
  );
};
