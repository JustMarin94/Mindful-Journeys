import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Paper,
} from "@mui/material";

const ContactForm = () => {
  // State za unos podataka
  const [formData, setFormData] = useState({
    ime: "",
    prezime: "",
    email: "",
    dodatneInfo: "",
  });

  // Funkcija za ažuriranje state-a
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funkcija za slanje forme
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Poslani podaci:", formData);
    alert("Upit je uspješno poslan!");

    // Resetiranje forme
    setFormData({
      ime: "",
      prezime: "",
      email: "",
      dodatneInfo: "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          borderRadius: "15px",
          padding: 4,
          backgroundColor: "#f9f9f9",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{ fontWeight: "bold", marginBottom: 2 }}
          >
            Pridruži nam se!
          </Typography>

          {/* Ime */}
          <TextField
            name="ime"
            label="Ime"
            placeholder="Unesi ime"
            variant="outlined"
            fullWidth
            value={formData.ime}
            onChange={handleChange}
            InputProps={{
              sx: { borderRadius: "25px", backgroundColor: "#fff" },
            }}
          />

          {/* Prezime */}
          <TextField
            name="prezime"
            label="Prezime"
            placeholder="Unesi prezime"
            variant="outlined"
            fullWidth
            value={formData.prezime}
            onChange={handleChange}
            InputProps={{
              sx: { borderRadius: "25px", backgroundColor: "#fff" },
            }}
          />

          {/* E-mail */}
          <TextField
            name="email"
            label="E-mail"
            placeholder="Unesi E-mail"
            type="email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              sx: { borderRadius: "25px", backgroundColor: "#fff" },
            }}
          />

          {/* Dodatne informacije */}
          <TextField
            name="dodatneInfo"
            label="Dodatne Informacije"
            placeholder="Unesi dodatne informacije (npr. šalješ upit za kolegu i sebe)"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={formData.dodatneInfo}
            onChange={handleChange}
            InputProps={{
              sx: { borderRadius: "15px", backgroundColor: "#fff" },
            }}
          />

          {/* Dugme za slanje */}
          <Button
            type="submit"
            variant="contained"
            color="black"
            size="large"
            fullWidth
            sx={{
              borderRadius: "25px",
              backgroundColor: "#D4E8FF",
              ":hover": { backgroundColor: "#d8f5d3" },
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            POŠALJI UPIT
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ContactForm;
