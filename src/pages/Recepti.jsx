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
import kuhar from "../images/Recepti/e18db7e0a6b363055d0122c2386a113a-transformed-removebg-preview.png";
import tanjur from "../images/Recepti/63766abef4f3baf8fb80c1e732873cc6-removebg-preview.png";
import tortilja from "../images/Recepti/0ee52694961ae463e3a341b990d9c028.jpg";
import dorucak from "../images/Recepti/2c054ffe8b941e49baf590c853778a61.jpg";
import tunaPasta from "../images/Recepti/bf61cbb13a70399b030ceeac2543fe53.jpg";
import juha from "../images/Recepti/bf0083ef13121f2cce94f1b1c2053774.jpg";
import desert from "../images/Recepti/2286e2b3beebf8e89f35ee3fb8c6f44d.jpg";
import riza from "../images/Recepti/33ec05e7bfa3006faca51b8d7aa0abb5.jpg";
import keksi from "../images/Recepti/keksi_02.jpg";

const recipes = [
  { title: "Doručak", image: dorucak, link: "/recepti/doručak" },
  { title: "Rucak", image: keksi, link: "/Rucak" },
  { title: "Večera", image: keksi, link: "/Vecera" },
  { title: "Juha", image: juha, link: "/Juha" },
  { title: "Salata", image: keksi, link: "/Salata" },
  { title: "Desert", image: desert, link: "/Desert" },
];

export default function Recepti() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + itemsPerPage) % recipes.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) =>
      prev - itemsPerPage < 0 ? recipes.length - itemsPerPage : prev - itemsPerPage
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <img
            src={kuhar}
            alt="Kuhar"
            style={{ width: "250px", height: "auto", marginRight: "2rem" }}
          />
          <Box textAlign="right">
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#222" }}>
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
            <Typography variant="body1" sx={{ mt: 2, color: "#444" }}>
              RIaktiv recepti – tvoj put do zdravih i brzih obroka na studentski način!
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 2, backgroundColor: "#f44336", color: "#fff" }}
            >
              Unesi Novi Recept
            </Button>
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
          sx={{ mb: 3, color: "#444", fontWeight: "bold" }}
        >
          Popularni recepti koje ne možeš propustiti!
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
                  sx={{ mt: 1, backgroundColor: "#f44336", color: "#fff" }}
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
                  sx={{ mt: 1, backgroundColor: "#f44336", color: "#fff" }}
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
                    sx={{ mt: 1, backgroundColor: "#f44336", color: "#fff" }}
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
          sx={{ mb: 3, color: "#444", fontWeight: "bold" }}
        >
          Uživaj u kuhanju s nama!
        </Typography>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <IconButton onClick={handlePrev}>
            <ArrowBackIos />
          </IconButton>
          {recipes.slice(carouselIndex, carouselIndex + itemsPerPage).map((recipe, index) => (
            <Box key={index} textAlign="center">
              <Link to={recipe.link} style={{ textDecoration: "none", color: "inherit" }}>
                <Box
                  sx={{
                    width: "200px",
                    height: "200px",
                    borderRadius: 2,
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    mb: 1,
                  }}
                >
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#444" }}>
                  {recipe.title}
                </Typography>
              </Link>
            </Box>
          ))}
          <IconButton onClick={handleNext}>
            <ArrowForwardIos />
          </IconButton>
        </Stack>
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
            "Kuhanje je umjetnost, a svaki obrok priča svoju priču."
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
