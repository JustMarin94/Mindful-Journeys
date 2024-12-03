import { Card, CardMedia, Typography, CardContent } from "@mui/material";

const MojCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/150"
        alt="Card 1 Image"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          niko
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Explore this amazing feature that helps you achieve greatness.
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MojCard;
