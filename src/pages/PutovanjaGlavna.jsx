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

// Import images
import explorer from "../images/Putovanja/492544fe10891041872d8afffd8d7f76-removebg-preview.png";
import sedamStaza from "../images/Putovanja/staza-sedam-slapova-istra.jpg";
import plitvickaJezera from "../images/Putovanja/47283868_l-640x408.jpg";
import dolomiti from "../images/Putovanja/dolomiti-alpe-di-siusi.png";
import velikaPlanina from "../images/Putovanja/97a142_velikja-planina.jpeg";
import bledJezero from "../images/Putovanja/8746335_l-2.jpg";
import logarskaDolina from "../images/Putovanja/logarska-dolina-slap-rinik.jpg";
import krka from "../images/Putovanja/krka.jpg";
import planina from "../images/Putovanja/28178e3212e9900a696346ed023efe67-removebg-preview.png"; // Final image

// Carousel destinations
const carouselDestinations = [
  { title: "Logarska Dolina", image: logarskaDolina, link: "/putovanja/logarska-dolina" },
  { title: "Velika Planina", image: velikaPlanina, link: "/putovanja/velika-planina" },
  { title: "Plitvička Jezera", image: plitvickaJezera, link: "/putovanja/plitvice" },
  { title: "Bled i Bohinj", image: bledJezero, link: "/putovanja/bled-bohinj" },
  { title: "Krka i Šibenik", image: krka, link: "/putovanja/krka-sibenik" },
];

export default function Putovanja() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const itemsPerPage = 3;

  // Functions to handle carousel movement
  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselDestinations.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselDestinations.length) % carouselDestinations.length);
  };

  // Get visible destinations for carousel
  const getDisplayedDestinations = () => {
    return [
      ...carouselDestinations.slice(carouselIndex, carouselIndex + itemsPerPage),
      ...carouselDestinations.slice(0, Math.max(0, carouselIndex + itemsPerPage - carouselDestinations.length)),
    ].slice(0, itemsPerPage);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
         {/* Header Section */}
<Box sx={{ mb: 4 }}>
  <Stack direction="row" alignItems="center" justifyContent="space-between">
    <img
      src={explorer}
      alt="Putnik"
      style={{ width: "450px", marginRight: "auto" }}
    />
    <Box sx={{ flex: 1 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
      >
        PUTOVANJA
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
        Osvoji vrhove, istraži staze i uz RIaktiv pronađi sebe u svakom koraku!
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        justifyContent="space-between"
        sx={{ mt: 2 }}
      >
        {/* Button aligned left */}
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

        {/* Icons aligned right */}
        <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
          <IconButton
            component="a"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#000", fontSize: "2rem" }} // Black and larger size
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#000", fontSize: "2rem" }} // Black and larger size
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  </Stack>
</Box>
          {/* Featured Travel Destinations Section */}
      <Box
        sx={{
          backgroundColor: "#648DCB40", // Light blue background
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
          Popularni blogovi koje ne možeš propustiti!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#444" }}
        >
          Spremni za novu avanturu? Otkrij savršenu destinaciju za svoj studentski budžet!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Staza Sedam Slapova */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={sedamStaza}
                alt="Staza Sedam Slapova"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Staza Sedam Slapova
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Ima nešto umirujuće u šumu vode i pogledu na slikovite...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#648DCBCC", color: "#fff" }}
                  >
                    POGLEDAJ VIŠE
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Plitvička Jezera */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={plitvickaJezera}
                alt="Plitvička Jezera"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Plitvička Jezera
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Plitvička jezera, smještena u srcu Hrvatske, jedno su od najljepših...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#648DCBCC", color: "#fff" }}
                  >
                    POGLEDAJ VIŠE
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Dolomiti */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={dolomiti}
                alt="Dolomiti"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Dolomiti
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Intrigantno predivni, moćni, kulturno i povijesno važni, Dolomiti žive...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#648DCBCC", color: "#fff" }}
                  >
                    POGLEDAJ VIŠE
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Second Block - Carousel */}
      <Box
        sx={{
          backgroundColor: "#648DCB40",
          py: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          mb: 6,
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ mb: 3, fontWeight: "bold" }}>
        Istražuj s nama!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#444" }}
        >
          Putovanja koja naši studenti obožavaju – inspiriraj se i kreni na svoje avanture!
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <IconButton onClick={handlePrev}>
            <ArrowBackIos />
          </IconButton>
          <Grid container spacing={2} justifyContent="center">
            {getDisplayedDestinations().map((destination, idx) => (
              <Grid item xs={12} sm={4} key={idx}>
                <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                  <Link to={destination.link} style={{ textDecoration: "none" }}>
                    <img
                      src={destination.image}
                      alt={destination.title}
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        textAlign="center"
                        sx={{ fontWeight: "bold", color: "#333" }}
                      >
                        {destination.title}
                      </Typography>
                    </CardContent>
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
          <img src={planina} alt="" style={{ width: "500px", borderRadius: "50%" }} />
          <Typography
            variant="h5"
            align="center"
            sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
          >
            "I took a walk in the woods and came out taller than the trees." – Henry David Thoreau
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
