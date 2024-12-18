import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  Tooltip,
  IconButton,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useNavigate } from "react-router-dom";
import profil from "../images/Profil/86e086efb17f46db00b20a433aca4a55.jpg";

const Profil = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = () => {
    setDialogOpen(false);
  };

  const handleNavigate = () => {
    navigate("/profil/profillista"); // Redirect to ranking page
  };

  return (
    <Box
      sx={{
        p: 5,
        maxWidth: 1000,
        margin: "auto",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* Profile Section */}
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              position: "relative",
              width: 250,
              height: 250,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: 3,
              mx: "auto",
            }}
          >
            <img
              src={profil}
              alt="Profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Camera Icon */}
            <IconButton
              sx={{
                position: "absolute",
                bottom: 10,
                right: 10,
                backgroundColor: "#fff",
                color: "#555",
                boxShadow: 2,
              }}
              onClick={() => setDialogOpen(true)}
            >
              <CameraAltIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} textAlign="left">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            LINA VEKIĆ
          </Typography>
          <Box
            sx={{
              borderBottom: "3px solid #000",
              width: "70px",
              mb: 2,
            }}
          ></Box>
          <Typography variant="h6" gutterBottom>
            Studij: Filozofski fakultet u Rijeci
          </Typography>
          <Typography variant="h6" gutterBottom>
            Grad: Makarska
          </Typography>
          <Typography variant="h6" gutterBottom>
            E-mail: lina.vekic@uniri.hr
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 3,
              cursor: "pointer",
            }}
            onClick={handleNavigate}
          >
            <EmojiEventsIcon sx={{ fontSize: 60, color: "#FFD700" }} />
            <AddCircleOutlineIcon
              sx={{
                fontSize: 20,
                color: "#1976d2",
                position: "relative",
                left: -10,
                top: -5,
              }}
            />
            <Tooltip
              title="Više o skupljanju bodova pogledajte na stranici sa pravilima."
              arrow
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ ml: 1, color: "#333" }}
              >
                50 BODOVA
              </Typography>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>

      {/* Icons Section */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 5 }}
      >
        <Grid item xs={3}>
          <Tooltip title="Pregledajte svoje komentare." arrow>
            <Box textAlign="center">
              <ChatBubbleOutlineIcon sx={{ fontSize: 50, color: "#673ab7" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                6 KOMENTARA
              </Typography>
            </Box>
          </Tooltip>
        </Grid>

        <Grid item xs={3}>
          <Tooltip title="Pregledajte svoje blogove." arrow>
            <Box textAlign="center">
              <EditNoteIcon sx={{ fontSize: 50, color: "#ff9800" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                2 BLOGA
              </Typography>
            </Box>
          </Tooltip>
        </Grid>

        <Grid item xs={3}>
          <Tooltip title="Broj obavljenih putovanja." arrow>
            <Box textAlign="center">
              <TravelExploreIcon sx={{ fontSize: 50, color: "#4caf50" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                2 PUTOVANJA
              </Typography>
            </Box>
          </Tooltip>
        </Grid>

        <Grid item xs={3}>
          <Tooltip title="Broj obavljenih radionica." arrow>
            <Box textAlign="center">
              <EmojiEmotionsIcon sx={{ fontSize: 50, color: "#fbc02d" }} />
              <Typography variant="h6" sx={{ mt: 1 }}>
                2 RADIONICE
              </Typography>
            </Box>
          </Tooltip>
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
