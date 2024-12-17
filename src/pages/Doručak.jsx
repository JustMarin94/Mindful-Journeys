import React, { useState } from "react";
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
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Facebook, Instagram } from "@mui/icons-material";

import covjek from "../images/Recepti/e18db7e0a6b363055d0122c2386a113a-transformed-removebg-preview.png";
import jaja from "../images/Recepti/35ead66dbc338c12c3c21b0243934326.jpg";
import sendvic from "../images/Recepti/2c054ffe8b941e49baf590c853778a61.jpg";
import smoothie from "../images/Recepti/83c0fccb564423516db8cebfc20df8d0.jpg";
import palacinke from "../images/Recepti/1b693d5f968ffd44f23fc26d5bc32395.jpg";
import kasa from "../images/Recepti/jhkhnjknl.jpg";
import slani from "../images/Recepti/8496f874e42fee8aebb514e60e8a9553.jpg";
import dorucak from "../images/Recepti/a567adb3cb8d65af7d108c10f16a4e6a-removebg-preview.png";

const Dorucak = () => {
  const recipes = [
    { title: "Smoothie", image: smoothie },
    { title: "Lagane palačinke", image: palacinke },
    { title: "Ostaci ostataka", image: jaja },
    { title: "Mini sendviči", image: sendvic },
    { title: "Zobena kaša", image: kasa },
    { title: "Slani muffini", image: slani },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length
    );
  };

  const visibleRecipes = [
    recipes[currentIndex],
    recipes[(currentIndex + 1) % recipes.length],
    recipes[(currentIndex + 2) % recipes.length],
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
     {/* Header Section */}
<Box sx={{ mb: 4 }}>
  <Stack direction="row" alignItems="center" justifyContent="space-between">
    {/* Left Side - Image */}
    <img
      src={covjek}
      alt="Chef illustration"
      style={{ width: "250px", marginRight: "auto" }}
    />

    {/* Right Side - Content */}
    <Box textAlign="right">
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
      >
        DORUČAK
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
        RIaktiv doručak – brzo, zdravo i ukusno, baš po mjeri svakog studenta!
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
            backgroundColor: "#df3821cc", // Red button color
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
            sx={{ color: "#000", fontSize: "2rem" }} // Black color for Facebook icon
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#000", fontSize: "2rem" }} // Black color for Instagram icon
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  </Stack>
</Box>

      {/* Red Section with Carousel */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#ffcccc",
          py: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, color: "#000", fontWeight: "bold" }}
        >
          Recepti koje ne možete propustiti za brz i zdrav doručak!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#444" }}
        >
          Inspirirajte se našim receptima za savršen početak dana!
        </Typography>

        <Stack direction="row" alignItems="center" justifyContent="center">
          <IconButton onClick={handlePrev}>
            <ArrowBackIos />
          </IconButton>

          <Grid container spacing={3} justifyContent="center">
            {visibleRecipes.map((recipe, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
                      src={recipe.image}
                      alt={recipe.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#333" }}
                    >
                      {recipe.title}
                    </Typography>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        mt: 2,
                        backgroundColor: "#df3821cc",
                        color: "#fff",
                      }}
                    >
                      Pogledaj recept
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <IconButton onClick={handleNext}>
            <ArrowForwardIos />
          </IconButton>
        </Stack>
      </Container>

      {/* Footer Section */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <img src={dorucak} alt="" style={{ width: "450px", borderRadius: "50%" }} />
          <Typography
            variant="h5"
            align="center"
            sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
          >
            "My breakfast is my morning superhero."
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Dorucak;
