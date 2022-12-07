// Go to material ui docs and then go to system --- properties for all the css and theming properties to apply to corresponding layout

// component you study in this

import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
export const MuiLayout = () => {
  return (
    <Paper sx={{padding:"32px"}}>
        {/* this Paper component is used for contact form and other things that you need to show as a paper */}
    <Stack
      sx={{ border: "1px solid" }}
    //   you can even apply all the css properties to the stack component to using sx prop
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    //   this divider will create faint verticle line (divider) between the two components
    >
      {/* stack by default arranges all the component inside it in the column */}
      {/* you can even change the direction of the stack to row from the column and even row-reverse and column-reverse */}
      {/* you can also use SPACING property for the stack, it can create spaces between the components inside the stack */}
      <Box
        sx={{
          backgroundColor: "palegoldenrod",
          color: "palevioletred",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "palevioletred",
            color: "palegoldenrod",
          },
        }}
        //   you can use theming for the box component and can use the css properties to animate/ modify it using sx prop
      >
        Codevolution
      </Box>

      <Box
        sx={{
          backgroundColor: "palevioletred",
          color: "palegoldenrod",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "palegoldenrod",
            color: "palevioletred",
          },
        }}
      >
        Pratham P. Sakhare
      </Box>
    </Stack>

        {/* Grid component has two parts ---- one which is parent component that is Grid and then it has child component which is Grid Item */}
        {/* On the parent component add the 'Container' prop and on the child component add the 'item' prop */}


    <Grid container my={4} rowSpacing={2}>
        
        <Grid item xs={12} sm={6}>
            {/* here xs denotes the columns that you wanna assign to each and every item and for this above item you have assigned 3 columns --- and it will only be applicable to extra small devices and larger */}
            {/* but if you assign a width to sm that means small then it will assign those columns to small sized (tablets and larger devices) */}
            <Box bgcolor='primary.light' p={2}>Item1</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box bgcolor='primary.light' p={2}>Item4</Box>
        </Grid>
        
    </Grid>
    </Paper>
  );
};



// SPACING => 
    // here you can use the prop spacing for layout contents by using --- spacing={2} code
    // also you can use row spacing and column spacing separetly using rowSpacing={2} and columnSpacing={2}
