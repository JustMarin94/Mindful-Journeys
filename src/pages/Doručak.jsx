import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import covjek from "../images/Recepti/e18db7e0a6b363055d0122c2386a113a-transformed-removebg-preview.png";
import jaja from "../images/Recepti/35ead66dbc338c12c3c21b0243934326.jpg";
import sendvic from "../images/Recepti/2c054ffe8b941e49baf590c853778a61.jpg";
import smoothie from "../images/Recepti/83c0fccb564423516db8cebfc20df8d0.jpg";
import palacinke from "../images/Recepti/1b693d5f968ffd44f23fc26d5bc32395.jpg";
import dorucak from "../images/Recepti/a567adb3cb8d65af7d108c10f16a4e6a-removebg-preview.png";

const Doručak = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Top Section */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
        {/* Enlarged Chef Illustration */}
        <Box>
          <img
            src={covjek}
            alt="Chef illustration"
            style={{ maxWidth: "250px", marginRight: "20px" }}
          />
        </Box>
        {/* Title and Text */}
        <Box sx={{ textAlign: "right", flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", color: "#333" }}>
            DORUČAK
          </Typography>
          <Divider sx={{ my: 1, borderColor: "#ccc", width: "100%", marginLeft: "auto" }} />
          <Typography variant="subtitle1" sx={{ mt: 1, color: "#666" }}>
            Početak dana uz – brz, zdrav i ukusan, božićni obrok koji svi
            obožavaju!
          </Typography>
        </Box>
      </Box>

      {/* Red Block with Recipe Cards */}
      <Box sx={{ backgroundColor: "#f44336", p: 4, borderRadius: "8px", color: "#fff", mb: 4 }}>
        <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
          Recepti koje ne možete propustiti za brz i zdrav doručak!
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={smoothie}
                alt="Smoothie"
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  Smoothie
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={palacinke}
                alt="Palačinke"
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  Palačinke
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={jaja}
                alt="Jaja i tost"
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  Jaja i tost
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={sendvic}
                alt="Sendvič"
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  Sendvič
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Final Image and Quote */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 6 }}>
        <Box sx={{ flex: 1 }}>
          <img
            src={dorucak}
            alt="Breakfast bowl"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Box>
        <Box sx={{ flex: 1, ml: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontStyle: "italic", color: "#555", textAlign: "center" }}
          >
            “My breakfast is my morning superpower.”
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Doručak;
