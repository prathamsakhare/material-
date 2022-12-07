import React from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={<Switch checked={checked} 
        onChange={handleChange} />}
      />
      {/* here checked property for this type of components is the components or that buttons current state and there we have assigned checked variable from usestate which is initially false */}
    </Box>
  );
};
