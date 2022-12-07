import React from "react";
import { Stack, ImageList, ImageListItem, Box } from "@mui/material";
export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList
        sx={{ width: "500", height: "450" }}
        cols={3}
        // it creates the columns for the image List that you want 
        rowHeight={800}
        // the rowheight will be the height of the each row that you want
      >
        {
            itemData.map(item => (
                <ImageListItem key={item.key}>
                    <img src={`${item.img}?w1648&h=1648fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))
        }
      </ImageList>

      <ImageList
        sx={{ width: "500", height: "450" }}
        cols={3}
        // it creates the columns for the image List that you want 
        variant='masonry'
        // you can choose various variants that you want to display images in 
        gap={8}
        // you can put the gap between them in form of gap instead of the normal rowheight
      >
        {
            itemData.map(item => (
                <ImageListItem key={item.key}>
                    <img src={`${item.img}?w1648&h=1648fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))
        }
      </ImageList>
      <Box sx={{ width: "500", height: "450", overflowY: "scroll" }}>
      <ImageList
          
        cols={5}
        // it creates the columns for the image List that you want 
        variant='quilted'
        gap={8}
      >
        {
            itemData.map(item => (
                <ImageListItem key={item.key}>
                    <img src={`${item.img}?w1648&h=1648fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy' />
                </ImageListItem>
            ))
        }
      </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    key:1,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:2,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:3,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:4,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:5,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:6,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:7,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:8,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:9,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
  {
    key:10,
    img: "https://source.unsplash.com/random",
    title: "breakfast",
  },
];
