import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import on from "../images/Putovanja/492544fe10891041872d8afffd8d7f76-removebg-preview.png";
import sedam from "../images/Putovanja/staza-sedam-slapova-istra.jpg";
import jezera from "../images/Putovanja/47283868_l-640x408.jpg";
import dolomiti from "../images/Putovanja/dolomiti-alpe-di-siusi.png";
import platak from "../images/Putovanja/Info-Crrop-1024x682.jpg";
import putokaz from "../images/Putovanja/01c4a263edb9b29e1de520587fdf1626-removebg-preview.png";

const Blog = () => {
  const destinations = [
    { title: "Staza sedam slapova", image: sedam },
    { title: "Plitvička jezera", image: jezera },
    { title: "Dolomiti", image: dolomiti },
    { title: "Platak", image: platak },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
     {/* Header Section */}
<Box sx={{ mb: 4 }}>
  <Stack direction="row" alignItems="center" justifyContent="space-between">
    {/* Left Side - Image */}
    <img
      src={on}
      alt="Putnik"
      style={{ width: "450px", marginRight: "auto" }}
    />

    {/* Right Side - Content */}
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
      >
        BLOG PUTOVANJA
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "2px",
          backgroundColor: "#222",
          mt: 1,
        }}
      ></Box>
      <Typography
        variant="body1"
        sx={{ mt: 2, color: "#444", textAlign: "right" }}
      >
        Uz Raktiv putovanja istraži nova mjesta, stvori <br />
        nezaboravne uspomene i pronađi inspiraciju za svaki
        novi obrok!
      </Typography>

      {/* Button and Icons */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 2 }}
      >
        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#648dcbcc",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          UNESI NOVI BLOG
        </Button>

        {/* Social Media Icons */}
        <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
          <IconButton
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#000", fontSize: "2rem" }}
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#000", fontSize: "2rem" }}
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  </Stack>
</Box>

      {/* Blue Section */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#e3f2fd",
          py: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, color: "#444", fontWeight: "bold" }}
        >
          Pronađi svoje inspiracije i nove destinacije!
        </Typography>

        <Grid container spacing={3}>
          {destinations.map((destination, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    overflow: "hidden",
                    backgroundColor: "#eaeaea",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
                    {destination.title}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 2, backgroundColor: "#648dcbcc", color: "#fff" }}
                  >
                    Pogledaj više
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>


           {/* Footer Section */}
        <Box textAlign="center" sx={{ mt: 6 }}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <img src={putokaz} alt="" style={{ width: "450px", borderRadius: "50%" }} />
            <Typography
              variant="h5"
              align="center"
              sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
            >
              "Happiness is not something ready-made. It comes from your own actions." - Dalai Lama
            </Typography>
          </Stack>
        </Box>
      </Container>

  );
};

export default Blog;
