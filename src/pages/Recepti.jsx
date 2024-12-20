import React, { useState, useEffect } from "react";
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Close } from "@mui/icons-material";

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
  const [openPopup, setOpenPopup] = useState(false); // State for popup visibility
  const itemsPerPage = 4;

  useEffect(() => {
    // Trigger the popup immediately when the page is loaded
    setOpenPopup(true);
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % recipes.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + recipes.length) % recipes.length);
  };

  const getDisplayedRecipes = () => {
    return [
      ...recipes.slice(carouselIndex, carouselIndex + itemsPerPage),
      ...recipes.slice(
        0,
        Math.max(0, carouselIndex + itemsPerPage - recipes.length)
      ),
    ].slice(0, itemsPerPage);
  };

  const handleClosePopup = () => setOpenPopup(false);

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
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
              RIaktiv recepti – tvoj put do zdravih i brzih obroka na studentski
              način!
            </Typography>

            {/* Button and Icons */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 2 }}
            >
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
          {recipes.map((recipe, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {recipe.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ovaj recept za brzu i ukusnu {recipe.title.toLowerCase()}...
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "center", mt: 1 }}
                  >
                    <Link to={recipe.link} style={{ textDecoration: "none" }}>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          mt: 1,
                          backgroundColor: "#df3821cc",
                          color: "#fff",
                        }}
                      >
                        Pogledaj Više
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
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
        <Grid container spacing={4} justifyContent="center">
          {getDisplayedRecipes().map((recipe, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Link to={recipe.link} style={{ textDecoration: "none" }}>
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        color: "#000",
                      }}
                    >
                      {recipe.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* Footer Section */}
      <Box sx={{ mt: 6 }}>
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "#333",
            color: "#fff",
            py: 3,
            mb: 2,
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Živite inspirirani i kuhajte s ljubavlju!
          </Typography>
        </Box>
      </Box>

      {/* Popup Dialog */}
      <Dialog open={openPopup} onClose={handleClosePopup}>
        <DialogTitle>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClosePopup}
            aria-label="close"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: "#000",
            }}
          >
            <Close />
          </IconButton>
          Unesi novi recept
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Ovdje možete dodati novi recept. Unesite sve potrebne informacije!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            Zatvori
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
