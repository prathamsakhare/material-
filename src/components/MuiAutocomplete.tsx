import React, { useState} from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";
const skills = ["html", "css", "javascript", "typescript", "react"];
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete options={skills} renderInput={(params) => <TextField {...params} label='Skills' /> } 
      value={value}
      onChange = {(event: any, newValue: string | null) => setValue(newValue)}  />
    </Stack>
  );
};








