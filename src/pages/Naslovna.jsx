import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Naslovna() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top-right Login and Register buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Button
          variant="outlined"
          sx={{ mr: 2 }}
          onClick={() => navigate("/login")} // Navigate to /login
        >
          Login
        </Button>
        <Button variant="contained">Register</Button>
      </Box>

      {/* Main content: Two columns */}
      <Grid container sx={{ flex: 1, alignItems: "center", p: 4 }}>
        {/* Left column: Text content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h1"
            sx={{ mb: 2, fontSize: "3rem", fontWeight: "bold" }}
          >
            RIacktiv
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", mb: 3 }}>
            Welcome to RIacktiv! Explore and grow with us. Here, you'll find a
            space to learn, connect, and embark on your journey toward mindful
            living.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Find out more
          </Button>
        </Grid>

        {/* Right column: Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="https://via.placeholder.com/400x300" // Replace with your image URL
            alt="Placeholder"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
