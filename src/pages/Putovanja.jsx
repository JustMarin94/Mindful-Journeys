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

// Import slika
import explorer from "../images/Putovanja/explorer.png";
import sedamStaza from "../images/Putovanja/staza-sedam-slapova-istra.jpg";
import plitvickaJezera from "../images/Putovanja/47283868_l-640x408.jpg";
import dolomiti from "../images/Putovanja/dolomiti-alpe-di-siusi.png";
import velikaPlanina from "../images/Putovanja/97a142_velikja-planina.jpeg";
import bledJezero from "../images/Putovanja/8746335_l-2.jpg";
import logarskaDolina from "../images/Putovanja/logarska-dolina-slap-rinik.jpg";
import bohinj from "../images/Putovanja/28178e3212e9900a696346ed023efe67.png";
import planina from "../images/Putovanja/planina.jpg"; // Slika za citat

// Carousel destinacije
const carouselDestinations = [
  { title: "Velika Planina", image: velikaPlanina, link: "/putovanja/velika-planina" },
  { title: "Bledsko Jezero", image: bledJezero, link: "/putovanja/bled" },
  { title: "Bohinjsko Jezero", image: bohinj, link: "/putovanja/bohinj" },
  { title: "Logarska Dolina", image: logarskaDolina, link: "/putovanja/logarska-dolina" },
  { title: "Plitvička Jezera", image: plitvickaJezera, link: "/putovanja/plitvice" },
];

export default function Putovanja() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselDestinations.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselDestinations.length) % carouselDestinations.length);
  };

  const getDisplayedDestinations = () => {
    return [
      ...carouselDestinations.slice(carouselIndex, carouselIndex + itemsPerPage),
      ...carouselDestinations.slice(0, Math.max(0, carouselIndex + itemsPerPage - carouselDestinations.length)),
    ].slice(0, itemsPerPage);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Sekcija */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <img src={explorer} alt="Explorer" style={{ width: "250px", marginRight: "2rem" }} />
          <Box textAlign="right">
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#222" }}>
              PUTOVANJA
            </Typography>
            <Box sx={{ width: "100%", height: "2px", backgroundColor: "#222", mt: 1 }}></Box>
            <Typography variant="body1" sx={{ mt: 2, color: "#444" }}>
              Otkrij svijet, istraži prirodu i stvori predivne uspomene!
            </Typography>
            <Button variant="contained" sx={{ mt: 2, backgroundColor: "#1e88e5", color: "#fff" }}>
              UNESI NOVU DESTINACIJU
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* Prvi Blok - Izdvojene destinacije */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 3, fontWeight: "bold" }}>
          Izdvojene Destinacije
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[
            { title: "Staza Sedam Slapova", image: sedamStaza, link: "/putovanja/sedam-staza" },
            { title: "Plitvička Jezera", image: plitvickaJezera, link: "/putovanja/plitvice" },
            { title: "Dolomiti", image: dolomiti, link: "/putovanja/dolomiti" },
          ].map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
                <Link to={item.link} style={{ textDecoration: "none" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "250px", objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" textAlign="center" sx={{ fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Drugi Blok - Carousel */}
      <Box
        sx={{
          backgroundColor: "#e3f2fd",
          py: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          mb: 6,
        }}
      >
        <Typography variant="h5" textAlign="center" sx={{ mb: 3, fontWeight: "bold" }}>
          Istraži Popularne Destinacije!
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

      {/* Footer Sekcija - Citat */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <img
            src={planina}
            alt="Planina"
            style={{ width: "400px", borderRadius: "50%" }}
          />
          <Typography
            variant="h5"
            align="center"
            sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
          >
            "Ne postoji planina koju ne možeš osvojiti ako imaš pravu volju i strast!"
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
