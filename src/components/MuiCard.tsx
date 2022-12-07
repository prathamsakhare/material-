import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React is a library of the JavaScript that can make website's
            frontend in much more interesting way than any other one, I
            personally love React bcz of its simplicity to code{" "}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text">Share</Button>
          <Button variant="text" color="secondary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
