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
  CardMedia,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "@mui/icons-material";

import slika from "../images/Dogadjanja/ec1c97e63bf9bb47635f8e4e270fa5e0-removebg-preview.png";
import slika1 from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.00.40 PM(1).jpeg";
import studentDay from "../images/Dogadjanja/347559820_1335391134056675_2443543992295508591_n.jpg";
import karneval from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.09.15 PM.jpeg";
import homoSiTec from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.10.12 PM.jpeg";
import fiumanka from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.20.11 PM.jpeg";
import womensDay from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.20.29 PM.jpeg";
import mololongo from "../images/Dogadjanja/8560967.jpg";
import bazeni from "../images/Dogadjanja/bazen-rijekasport.jpg";

// Carousel Data
const carouselItems = [
  { img: karneval, title: "KARNEVAL" },
  { img: mololongo, title: "MOLO LONGO TRK" },
  { img: studentDay, title: "STUDENT DAY FESTIVAL" },
  { img: bazeni, title: "BAZENI KANTRIDA" },
];

const Dogadjanja = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };
  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <img
            src={slika}
            alt="slika"
            style={{ width: "500px", height: "auto", marginRight: "2rem" }}
          />

          <Box textAlign="right">
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
            >
              DOGAĐANJA
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
              Pridruži se događanjima koja će te inspirirati!
            </Typography>
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
          </Box>
        </Stack>
      </Box>

      {/* Popular Events Section */}
      <Box
        sx={{
          backgroundColor: "#fff2cc",
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
          Ne propusti najpopularnija događanja!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#444" }}
        >
          Spreman/na za akciju? Otkrij najuzbudljivije sportske i društvene događaje koji te čekaju!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={homoSiTec}
                alt="Homo si teć"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Homo si teć
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Najmasovnija ulična utrka u Hrvatskoj, na riječke ulice svake ...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#fbeb7899", color: "#000" }}
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
                src={womensDay}
                alt="Women’s Weekend"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Women’s Weekend 2025
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Women’s Weekend je konferencija koja na jednom mjestu okuplja ...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Link to="/dogadjanja/women" style={{ textDecoration: "none" }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ mt: 1, backgroundColor: "#fbeb7899", color: "#000" }}
                    >
                      Pogledaj Više
                    </Button>
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <img
                src={fiumanka}
                alt="Fiumanka"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Fiumanka
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Uskoro više...
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 1, backgroundColor: "#fbeb7899", color: "#000" }}
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
          mt: 4,
          mb: 6,
          backgroundColor: "#fff2cc",
          py: 4,
          px: 2,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, color: "#000", fontWeight: "bold" }}
        >
          Sudjeluj i ti u nezaboravnim događanjima!
        </Typography>

        {/* Navigation Arrows and Grid */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Previous Arrow */}
          <IconButton onClick={handlePrev} sx={{ color: "#000" }}>
            <ArrowBackIos />
          </IconButton>

          {/* Grid for 4 Images */}
          <Grid container spacing={2} justifyContent="center">
            {carouselItems.map((item, idx) => {
              // Determine visibility of items
              const visibleIdx = (carouselIndex + idx) % carouselItems.length;

              return (
                <Grid item xs={12} sm={6} md={3} key={visibleIdx}>
                  <Card
                    sx={{
                      boxShadow: 3,
                      borderRadius: 2,
                      textAlign: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={carouselItems[visibleIdx].img}
                      alt={carouselItems[visibleIdx].title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", color: "#000" }}
                      >
                        {carouselItems[visibleIdx].title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Next Arrow */}
          <IconButton onClick={handleNext} sx={{ color: "#000" }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <img src={slika1} alt="" style={{ width: "500px", borderRadius: "50%" }} />
          <Typography
            variant="h5"
            align="center"
            sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
          >
            "Run like there’s a hot guy in front of you and a creepy one behind you."
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default Dogadjanja;
