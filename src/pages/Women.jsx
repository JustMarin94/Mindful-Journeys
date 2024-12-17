import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  Card,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

// Import images
import womensDay from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.20.29 PM.jpeg";
import women1 from "../images/Dogadjanja/women1.jpg";
import womens2 from "../images/Dogadjanja/women2.jpg";

const Women = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* Left Side - Larger Image */}
          <img
            src={womensDay}
            alt="Women's Weekend"
            style={{ width: "500px", marginRight: "auto" }} // Povećana širina
          />

          {/* Right Side - Content */}
          <Box textAlign="right">
            <Typography
              variant="h3" // Povećan naslov
              sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
            >
              WOMEN'S WEEKEND 2025
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#222",
                mt: 1,
              }}
            ></Box>

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

     {/* Important Information Section */}
<Box sx={{ bgcolor: "#f8f5dc", p: 4, borderRadius: 2, mb: 6 }}>
  <Typography
    variant="h5"
    fontWeight="bold"
    sx={{ fontSize: "1.8rem", mb: 2, textAlign: "justify" }}
  >
    DATUMI: 06.03.2025. - 09.03.2025.
  </Typography>
  <Typography paragraph sx={{ fontSize: "1.2rem", textAlign: "justify", mb: 3 }}>
  Treće izdanje konferencije <strong>Women’s Weekend</strong> održat će se <strong>od 6. do 9. ožujka 2025.</strong> u prostoru 
  Muzeja moderne i suvremene umjetnosti, Art kvarta u Rijeci, pružajući priliku za okupljanje 
  i razmjenu iskustava žena iz različitih područja djelovanja. Tijekom četiri dana program će 
  obuhvatiti inspirativna predavanja, interaktivne radionice i panel diskusije na teme poput 
  žena u biznisu, financijske slobode, evolucije ženskog zdravlja, društvenog statusa žena te 
  usklađivanja karijere, majčinstva i slobodnog vremena. Istaknute predavačice i panelisti s 
  regionalne i svjetske scene raspravljat će o izazovima i prilikama za žene danas, stvarajući 
  prostor za učenje, umrežavanje i inspiraciju. Konferencija je otvorena za sve koji žele 
  pridonijeti ravnopravnosti žena i oblikovanju bolje budućnosti, a Dan žena će u Art kvartu 
  biti poseban trenutak za dijeljenje podrške i novih ideja. Vidimo se u Rijeci na Women’s 
  Weekendu!
  </Typography>
  <Typography paragraph sx={{ fontSize: "1.2rem", textAlign: "justify", mb: 3 }}>
  info@primetimekomunikacije.hr
  </Typography>
</Box>

{/* Event Details in Yellow Block */}
<Box sx={{ bgcolor: "#f8f5dc", p: 4, borderRadius: 2, mb: 6 }}>
  <Typography
    variant="h5"
    fontWeight="bold"
    gutterBottom
    sx={{ fontSize: "1.8rem", mb: 2, textAlign: "justify" }}
  >
    Women’s Weekend 2025
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", mb: 1, textAlign: "justify" }}>
    <strong>Datum:</strong> 6. – 9. ožujka 2025.
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", mb: 1, textAlign: "justify" }}>
    <strong>Vrijeme:</strong> Program traje tijekom cijelog dana
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", mb: 1, textAlign: "justify" }}>
    <strong>Lokacija:</strong> Muzej moderne i suvremene umjetnosti, Art kvart, Rijeka.
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", mb: 1, textAlign: "justify" }}>
    <strong>Cilj:</strong> Jačanje ravnopravnosti žena kroz inspirativna predavanja.
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", mb: 1, textAlign: "justify" }}>
    <strong>Teme:</strong> Žene u biznisu, financijska sloboda, žensko zdravlje,
    budućnost poslovanja.
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", mb: 1, textAlign: "justify" }}>
    <strong>Sudionici:</strong> Istaknute predavačice i panelisti s regionalne i
    svjetske scene.
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
    <strong>Za koga:</strong> Otvoreno za sve zainteresirane, s naglaskom na žene iz
    različitih područja djelovanja.
  </Typography>
  <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
  <strong>Dodatne informacije:</strong> Saznajte više i prijavite se na{" "}
  <a
    href="https://womensweekend.eu/en/"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#1976d2", textDecoration: "none", fontWeight: "bold" }}
  >
    womensweekend.eu
  </a>.
</Typography>
</Box>

      {/* Image Gallery */}
      <Grid container spacing={10} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Card>
            <Box
              component="img"
              src={women1}
              alt="Event Image 1"
              width="100%"
              height="auto"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <Box
              component="img"
              src={womens2}
              alt="Event Image 2"
              width="100%"
              height="auto"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Women;
