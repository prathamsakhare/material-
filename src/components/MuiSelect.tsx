import React from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
export const MuiSelect = () => {
  const [countries, setcountries] = useState<string[]>([]);
  const [college, setCollege] = useState('');

  console.log({ countries });
  console.log({ college });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setcountries(typeof value === 'string' ? value.split(',') : value);
  };
  const handleCollegeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollege(event.target.value as string);
  }
  return (
    <Box width="250px" flexDirection='column'>
        {/* Selecting multiple items from menuitem property using array */}
      <TextField
        label="Select countries"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
            multiple: true,
        }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
      <br></br>
      <br></br>

      {/* Selecting one item from menuitem property */}
      <TextField
        label="Select college"
        select
        value={college}
        onChange={handleCollegeSelect}
        fullWidth
        
        
      >
        <MenuItem value="RIT">Rajarambapu Institute of technology, Rajaramnagar</MenuItem>
        <MenuItem value="JBKCAR">J.B Krishna College of Agriculture, Rethare BK</MenuItem>
        <MenuItem value="KMR">Krishna Mahavidyalaya, Rethare BK</MenuItem>
      </TextField>
    </Box>
  );
};

