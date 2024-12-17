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
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "@mui/icons-material"; 

import kuhar from "../images/Recepti/e18db7e0a6b363055d0122c2386a113a-transformed-removebg-preview.png";
import tanjur from "../images/Recepti/63766abef4f3baf8fb80c1e732873cc6-removebg-preview.png";
import tortilja from "../images/Recepti/0ee52694961ae463e3a341b990d9c028.jpg";
import dorucak from "../images/Recepti/2c054ffe8b941e49baf590c853778a61.jpg";
import tunaPasta from "../images/Recepti/bf61cbb13a70399b030ceeac2543fe53.jpg";
import juha from "../images/Recepti/bf0083ef13121f2cce94f1b1c2053774.jpg";
import desert from "../images/Recepti/2286e2b3beebf8e89f35ee3fb8c6f44d.jpg";
import riza from "../images/Recepti/33ec05e7bfa3006faca51b8d7aa0abb5.jpg";
import rucak from "../images/Recepti/rucak.jpg";
import vecera from "../images/Recepti/veecera.jpg";
import salata from "../images/Recepti/salata.jpg";

const recipes = [
  { title: "DORUČAK", image: dorucak, link: "/recepti/doručak" },
  { title: "RUČAK", image: rucak, link: "/Rucak" },
  { title: "VEČERA", image: vecera, link: "/Vecera" },
  { title: "JUHA", image: juha, link: "/Juha" },
  { title: "SALATA", image: salata, link: "/Salata" },
  { title: "DESERT", image: desert, link: "/Desert" },
];

export default function Recepti() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % recipes.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  const getDisplayedRecipes = () => {
    return [
      ...recipes.slice(carouselIndex, carouselIndex + itemsPerPage),
      ...recipes.slice(0, Math.max(0, carouselIndex + itemsPerPage - recipes.length)),
    ].slice(0, itemsPerPage);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
     {/* Header Section */}
<Box sx={{ mb: 4 }}>
  <Stack direction="row" alignItems="center" justifyContent="space-between">
    {/* Left Side - Image */}
    <img
      src={kuhar}
      alt="Kuhar"
      style={{ width: "250px", height: "auto", marginRight: "2rem" }}
    />

    {/* Right Side - Content */}
    <Box textAlign="right">
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
      >
        RECEPTI
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
        RIaktiv recepti – tvoj put do zdravih i brzih obroka na studentski način!
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
            backgroundColor: "#df3821cc", // Red color for the button
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          UNESI NOVI RECEPT
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

      {/* Popular Recipes Section */}
      <Box
        sx={{
          backgroundColor: "#ffcccc",
          py: 4,
          px: 2,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          mb: 6,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, color: "#000", fontWeight: "bold" }}
        >
          Popularni recepti koje ne možeš propustiti!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#444" }}
        >
          Recepti koje naši studenti obožavaju, isprobaj ih i ti!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={tunaPasta}
                alt="Pasta s Tunom"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Pašta s tunom na crveno
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ovaj recept za brzu i ukusnu tjesteninu s tunom...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#df3821cc", color: "#fff" }}
                  >
                    Pogledaj Više
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={tortilja}
                alt="Tortilja Pizza"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Tortilja Pizza
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Brz i ukusan obrok koji ćete obožavati...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#df3821cc", color: "#fff" }}
                  >
                    Pogledaj Više
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={riza}
                alt="Rižoto s Povrćem"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Rižoto sa povrćem
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rižoto je uvijek dobar izbor za jednostavan...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#df3821cc", color: "#fff" }}
                  >
                    Pogledaj Više
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Carousel Section */}
      <Box
  sx={{
    backgroundColor: "#ffcccc",
    py: 4,
    borderRadius: 2,
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    mb: 6,
  }}
>
  <Typography
    variant="h5"
    textAlign="center"
    sx={{ mb: 3, color: "#000", fontWeight: "bold" }}
  >
    Istraži recepte po kategorijama
  </Typography>
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <IconButton onClick={handlePrev}>
      <ArrowBackIos />
    </IconButton>
    <Grid container spacing={2} justifyContent="center">
      {getDisplayedRecipes().map((recipe, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <Card
            sx={{
              position: "relative", // Ovo omogućava pozicioniranje teksta preko slike
              borderRadius: 2,
              boxShadow: 2,
              overflow: "hidden", // Sprečava tekst da izlazi van slike
            }}
          >
            <Link to={recipe.link} style={{ textDecoration: "none" }}>
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute", // Pozicionira tekst na sliku
                  bottom: 0, // Tekst ide na dno slike
                  width: "100%",
                  color: "#fff", // Bela boja slova
                  backgroundColor: "rgba(0, 0, 0, 0.2)", // Tamna pozadina sa prozirnošću
                  textAlign: "left", // Centriran tekst
                  padding: "5px", // Malo prostora oko teksta
                  fontWeight: "bold",
                }}
              >
                {recipe.title}
              </Typography>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
    <IconButton onClick={handleNext}>
      <ArrowForwardIos />
    </IconButton>
  </Box>
</Box>

        {/* Footer Section */}
        <Box textAlign="center" sx={{ mt: 6 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <img
            src={tanjur}
            alt="Footer Tanjur"
            style={{ width: "400px", borderRadius: "50%" }}
          />
          <Typography
            variant="h5"
            align="center"
            sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
          >
            "If plan A fails, remember there are 25 more letters. That’s how many times I’ve tried this recipe."
          </Typography>
        </Stack>
      </Box>

    </Container>
  );
}
