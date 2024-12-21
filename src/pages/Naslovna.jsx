import React, { useState } from "react";
import { Box, Button, Typography, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import naslovna from "../images/Pocetna/6c9ea9f3d42c64f3ee150b2b01228bfc-removebg-preview.png";
import logo from "../images/Login_stranica/Yellow_and_Green_Modern_Logo-removebg-preview.png";
import slika from "../images/Pocetna/4ec4e2eb1c8af1e08409eaa115cd38f4-removebg-preview.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Naslovna() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
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
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            borderRadius: "20px",
            marginLeft: "1200px",
          }}
        >
          Prijavi se
        </Button>
        <img
          src={logo}
          alt="Logo"
          style={{
            height: "100px",
            objectFit: "contain",
            marginLeft: "16px",
          }}
        />
      </Box>

      {/* Main content */}
      <Grid container sx={{ flex: 1, position: "relative" }}>
        {/* Left column: Yellow diagonal background */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: "relative",
            overflow: "visible",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "900px",
              height: "3200px",
              backgroundColor: "#fbeb78",
              transform: "rotate(26deg)",
              marginRight: "200px",
              zIndex: 0,
            }}
          ></Box>
          <Box sx={{ zIndex: 1, p: 4, textAlign: "center" }}>
            <Typography
              variant="h1"
              sx={{
                mb: 1,
                fontSize: "9rem",
                fontWeight: "bold",
                color: "black",
              }}
            >
              RIaktiv
            </Typography>
            <Box
              sx={{
                width: "720px",
                height: "3px",
                backgroundColor: "black",
                mb: 2,
                mx: "auto",
              }}
            ></Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "1rem", mb: 3, color: "black", textAlign: "justify"}}
            >
              RIaktiv je aplikacija za studente Sveučilišta u Rijeci 
              koja promiče zdrave navike kroz pristupačne recepte, 
              planinarske izlete i radionice za mentalno zdravlje. 
              Pruža mogućnost socijalne interakcije putem blogova i 
              razmjene iskustava među studentima, uz sustav bodovanja
              i nagrađivanja za aktivno sudjelovanje. Cilj aplikacije 
              je pomoći studentima da vode zdraviji i uravnoteženiji 
              život, nudeći rješenja za izazove poput prehrane, fizičke 
              aktivnosti i stresa.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => setShowMore(!showMore)}
              sx={{
                justifyContent: "center",
                mb: 3,
                backgroundColor: "#333",
                color: "#fff",
                borderRadius: "20px",
                ":hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              {showMore ? "Saznaj manje" : "Saznaj više"}
            </Button>
            <Box sx={{ display: "flex", justifyContent: "left", gap: 2 }}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#333" }}
              >
                <FacebookIcon fontSize="medium" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#333" }}
              >
                <InstagramIcon fontSize="medium" />
              </a>
            </Box>
          </Box>
        </Grid>

        {/* Right column: Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={naslovna}
            alt="Healthy Living Cycle"
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>

      {/* Additional content revealed on button click */}
      {showMore && (
        <>
            <Typography variant="h4" 
            sx={{ 
              mb: 2, 
              color: "black", 
              fontWeight: "bold",  
              position: "absolute",
              top: "650px",
              left: "50px", 
              zIndex: 2,
              }}
            >
              Što RIaktiv nudi?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "black",
                position: "absolute",
                top: "700px",
                left: "50px",
                zIndex: 2,
              }}
            >
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Inspiracija za zdrave obroke:</strong> Isprobajte
                  ukusne, brze i povoljne recepte koji su prilagođeni
                  studentskom budžetu.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Otkrijte ljepote prirode:</strong> Pridružite se
                  organiziranim planinarskim izletima i istražite skrivene
                  kutke prirode u okolici Rijeke.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Briga o mentalnom zdravlju:</strong> Sudjelujte na
                  radionicama koje pomažu u upravljanju stresom, jačanju
                  samopouzdanja i razvijanju emocionalne otpornosti.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Društvena interakcija:</strong> Povežite se s drugim
                  studentima kroz blogove, podijelite svoja iskustva, savjete
                  ili doživljaje.
                </li>
                <li style={{ marginBottom: "1rem" }}>
                  <strong>Sustav nagrađivanja:</strong> Svaka vaša aktivnost
                  donosi bodove – bilo da kuhate, pišete blogove ili
                  sudjelujete u događajima. Zamijenite bodove za nagrade i
                  dodatne pogodnosti.
                </li>
              </ul>
            </Typography>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "black", position: "absolute", top: "1000px", left: "50px", zIndex: 2 }}>
              Zašto odabrati RIaktiv?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "black",
                position: "absolute",
                top: "1050px",
                left: "50px",
                zIndex: 2,
              }}
            >
              
                <li style={{ marginBottom: "1rem" }}>
                Biti student znači suočavati se s raznim izazovima, ali RIaktiv 
                je ovdje da ih olakša. Uz jednostavnu navigaciju i prilagođen 
                sadržaj, aplikacija je osmišljena da podrži vaše fizičko, mentalno 
                i društveno zdravlje – sve na jednom mjestu.
                </li>
              
            </Typography>

              {/* Footer Section */}
                    <Box textAlign="center" sx={{ mt: 70, zIndex: 1 }}>
                      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <img src={slika} alt="" style={{ width: "450px", borderRadius: "50%" }} />
                        <Typography
                          variant="h5"
                          align="center"
                          sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
                        >
                          “The only time ‘success’ comes before ‘work’ is in the dictionary.” – Vidal Sassoon
                        </Typography>
                      </Stack>
                    </Box>


        </>
      )}
    </Box>
  );
}

