import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import profil from "../images/Profil/86e086efb17f46db00b20a433aca4a55.jpg";

const Profil = () => {
  const [hasImage, setHasImage] = useState(false); // State to toggle profile picture
  const [dialogOpen, setDialogOpen] = useState(false); // State for dialog

  const handleImageChange = () => {
    setHasImage(true);
    setDialogOpen(false);
  };

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Profile Image Section */}
        <Grid item xs={12} sm={4} textAlign="center">
          <Box
            sx={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: 3,
              mx: "auto",
            }}
          >
            <img
              src={profil}
              alt="Profile"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Button
            variant="contained"
            onClick={() => setDialogOpen(true)}
            sx={{ mt: 2 }}
          >
            {hasImage ? "Promijeni sliku profila" : "Dodaj sliku profila"}
          </Button>
        </Grid>

        {/* Profile Details Section */}
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            LINA VEKIĆ
          </Typography>
          <Box
            sx={{
              borderBottom: "2px solid #000",
              width: "50px",
              mb: 2,
            }}
          ></Box>
          <Typography variant="body1" gutterBottom>
            Studij: Filozofski fakultet u Rijeci
          </Typography>
          <Typography variant="body1" gutterBottom>
            Grad: Makarska
          </Typography>
          <Typography variant="body1" gutterBottom>
            E-mail: lina.vekic@uniri.hr
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            color="primary"
            sx={{ display: "flex", alignItems: "center", mt: 2 }}
          >
            <Box component="span" sx={{ mr: 1 }}>
              🏆
            </Box>
            50 BODOVA
          </Typography>
        </Grid>
      </Grid>

      {/* Icons Section */}
      <Grid
        container
        spacing={3}
        justifyContent="space-around"
        alignItems="center"
        sx={{ mt: 5 }}
      >
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<Box component="span">💬</Box>}
            sx={{ minWidth: 150 }}
          >
            6 Komentara
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<Box component="span">📝</Box>}
            sx={{ minWidth: 150 }}
          >
            2 Bloga
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<Box component="span">⛰️</Box>}
            sx={{ minWidth: 150 }}
          >
            2 Putovanja
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<Box component="span">😊</Box>}
            sx={{ minWidth: 150 }}
          >
            2 Radionice
          </Button>
        </Grid>
      </Grid>

      {/* Dialog for Changing Profile Picture */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Promijeni sliku profila</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Izaberite novu sliku profila.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Otkaži</Button>
          <Button variant="contained" onClick={handleImageChange}>
            Učitaj novu sliku
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Profil;
