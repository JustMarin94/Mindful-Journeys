import React, { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import naslovna from "../images/Pocetna/6c9ea9f3d42c64f3ee150b2b01228bfc-removebg-preview.png";
import logo from "../images/Login_stranica/Yellow_and_Green_Modern_Logo-removebg-preview.png";
import slika from "../images/Pocetna/4ec4e2eb1c8af1e08409eaa115cd38f4-removebg-preview.png";

export default function Naslovna() {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [showMore, setShowMore] = useState(false); // State for toggling content

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header with logo and login button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          backgroundColor: "white",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate("/login")}
          sx={{ fontWeight: "bold" }}
        >
          Prijavi se
        </Button>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "50px", objectFit: "contain" }}
        />
      </Box>

      {/* Main content */}
      <Grid container sx={{ flex: 1 }}>
        {/* Left column: Yellow background with text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#FFEB3B",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 1,
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            RIaktiv
          </Typography>
          <Box
            sx={{
              width: "50px",
              height: "4px",
              backgroundColor: "#333",
              mb: 2,
            }}
          ></Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", mb: 3, color: "#555" }}
          >
            RIaktiv je aplikacija za studente Sveučilišta u Rijeci koja promiče zdrave navike kroz
            pristupačne recepte, planinarske izlete i radionice za mentalno zdravlje. Pruža mogućnost
            socijalne interakcije putem blogova i razmjene iskustava među studentima, uz sustav
            bodovanja i nagrađivanja za aktivno sudjelovanje. Cilj aplikacije je pomoći studentima
            da vode zdraviji i uravnoteženiji život, nudeći rješenja za izazove poput prehrane,
            fizičke aktivnosti i stresa.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setShowMore(!showMore)}
            sx={{ mb: 3 }}
          >
            {showMore ? "Sakrij" : "Saznaj više"}
          </Button>
          <Box sx={{ display: "flex", gap: 2 }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/path/to/facebook-icon.png"
                alt="Facebook"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/path/to/instagram-icon.png"
                alt="Instagram"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </Box>
        </Grid>

        {/* Right column: Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={slika}
            alt="Healthy Living Cycle"
            style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>

      {/* Additional content revealed on button click */}
      {showMore && (
        <Box sx={{ p: 4, backgroundColor: "white" }}>
          <Typography variant="h4" sx={{ mb: 2, color: "#333" }}>
            Što RIaktiv nudi?
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: "#555" }}>
            RIaktiv je više od aplikacije – to je vaš suputnik kroz studentski život. Evo kako vam
            može pomoći:
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: "#555" }}>
            • Inspiracija za zdrave obroke: Ukusni i povoljni recepti prilagođeni studentskom budžetu.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: "#555" }}>
            • Otkrijte ljepote prirode: Organizirani izleti i istraživanje skrivenih kutaka Rijeke.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: "#555" }}>
            • Briga o mentalnom zdravlju: Radionice za upravljanje stresom i jačanje emocionalne
            otpornosti.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: "#555" }}>
            • Društvena interakcija: Razmjena ideja i iskustava kroz blogove i događaje.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: "#555" }}>
            • Sustav nagrađivanja: Bodovi za sudjelovanje koji donose nagrade.
          </Typography>
          <Typography variant="h4" sx={{ mt: 4, mb: 2, color: "#333" }}>
            Zašto odabrati RIaktiv?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
            Biti student znači suočavati se s raznim izazovima, ali RIaktiv je ovdje da ih olakša. Uz
            jednostavnu navigaciju i prilagođen sadržaj, aplikacija je osmišljena da podrži vaše
            fizičko, mentalno i društveno zdravlje – sve na jednom mjestu.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <img
              src={naslovna}
              alt="Success Quote"
              style={{ width: "50px", height: "50px" }}
            />
            <Typography
              variant="body1"
              sx={{ color: "#555", fontStyle: "italic" }}
            >
              “The only time ‘success’ comes before ‘work’ is in the dictionary.” – Vidal Sassoon
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
