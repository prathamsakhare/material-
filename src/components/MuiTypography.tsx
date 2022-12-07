import React from "react";
// step => import typography
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      {/* the variant of the typography means the size of the text that you wanna get, it has 6 variants from h1 - h6 */}
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" gutterBottom>h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      {/* following subtitles are two variants of h6 tag */}
      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      {/* if you wanna use paragraphs inside the typography then you have to use  body1 and body2 tags */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro modi sunt
        tempore, necessitatibus accusantium laudantium ab dignissimos iste
        debitis, error impedit voluptates eius reprehenderit voluptas facilis
        aut vel dolore? Odio.
      </Typography>
      {/* default tag for the paragraphs or text inside the typography is body1 tag so if you dont enter any tag for the variant, the typography is gonna apply the body1 tag for that text */}

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        officia iure, consectetur in fugiat placeat optio repudiandae enim
        quibusdam eveniet dolore nulla rem perspiciatis unde quis. Delectus
        ducimus aspernatur voluptates!
      </Typography>

      {/* you can use gutterbottom for the heading, so it create a small bottom margin for that particular heading */}
      <Typography variant="h4" gutterBottom>h4 Heading</Typography>

    </div>
  );
};
