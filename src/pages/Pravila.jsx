import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  CardMedia,
  Divider,
} from "@mui/material";
import sirena from "../images/Pravila/b544e99baa9dcb5bd2d4763219637391-removebg-preview.png";
import trofej from "../images/Pravila/baa6436dd6191adc38594ea28b09d431-removebg-preview.png";

const Pravila = () => {
  return (
    <Container maxWidth="md" sx={{padding: 4 }}>
      {/* Header with Sirena Image */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            src={sirena}
            alt="Sirena"
            sx={{ width: "100%", maxWidth: 200 }}
          />
        </Grid>
        <Grid item xs={12} sm={8} sx={{ textAlign: "right" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333" }}>
            PRAVILA
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "2px",
              backgroundColor: "#222", // Crna boja linije
              mt: 1, // Gornja margina linije
            }}
          ></Box>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", lineHeight: 1.8, textAlign: "justify" }}>
            Dobrodošli u RIaktiv bodovni sustav! Ovdje svaka vaša aktivnost
            donosi bodove, a na kraju akademske godine čeka vas prilika za
            osvajanje nagrada. Sudjelovanjem u izletima, radionicama i pisanjem
            blogova doprinosite zajednici i osiguravate svoje mjesto među
            najaktivnijim studentima!
          </Typography>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Box sx={{ mt: 4 }}>
        {/* Kako se igra Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Kako se igra?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Prikupljanje bodova</strong>
          <br />
          Bodovi se dodjeljuju nakon što se aktivnosti evidentiraju i potvrde od
          strane organizatora:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Planinarski izleti:</Typography>
            <ul>
              <li>
                <Typography variant="body1">Lakši izleti: 10 bodova</Typography>
              </li>
              <li>
                <Typography variant="body1">Zahtjevniji izleti: 20 bodova</Typography>
              </li>
            </ul>
          </li>
          <li>
            <Typography variant="body1">
              Radionice za mentalno zdravlje: 5 bodova
            </Typography>
          </li>
          <li>
            <Typography variant="body1">Pisanje bloga: 5 bodova</Typography>
          </li>
          <li>
            <Typography variant="body1">Komentiranje na blogovima: 1 bod</Typography>
          </li>
        </ul>

        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Pregled bodova</strong>
          <br />
          Sve vaše aktivnosti bit će evidentirane unutar aplikacije, a bodovi se
          ažuriraju nakon što:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              Organizator potvrdi sudjelovanje na izletu ili radionici.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">Blogovi budu pregledani i odobreni.</Typography>
          </li>
          <li>
            <Typography variant="body1">
              Komentari budu dodani na blogove.
            </Typography>
          </li>
        </ul>

        {/* Nagrade Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 2 }}>
          Nagrade
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Na kraju akademske godine prvih 10 korisnika s najviše bodova osvaja
          nagrade:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              1. mjesto: Putovanje od više dana za dvije osobe.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              2.–3. mjesto: Poklon bonovi za trgovine, restorane ili sportske
              centre.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              4.–10. mjesto: RIaktiv suveniri, poput majica, boca za vodu i
              drugih praktičnih darova.
            </Typography>
          </li>
        </ul>

        {/* Pravila ponašanja Section */}
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 4, mb: 2 }}>
          Pravila ponašanja
        </Typography>

        <ul style={{ paddingLeft: "24px" }}>
            <Typography variant="body1">
              <strong> 1. Poštovanje prema drugima:</strong> <br /> 
              <ul>
                <li>
                  <p style={{marginLeft: "16px" }}>
                  Komunikacija mora biti u duhu
                  međusobnog poštovanja. Govor mržnje, uvrede i bilo koji oblik
                  diskriminacije strogo su zabranjeni.
              </p>
                </li>
                <li>
              <p style={{marginLeft: "16px" }}> Budite podrška drugima – 
                dijeljenje pozitivnih iskustava čini zajednicu jačom.
              </p>
                </li>
              </ul>
        </Typography>
          <Typography variant="body1">
            <strong>2. Zlouporaba sustava:</strong> <br /> 
            <ul>
              <li>
                <p style={{marginLeft: "16px"}}>
                Bodovi se neće priznati za lažne prijave
                sudjelovanja, kopirane blogove ili komentare koji nisu konstruktivni.
                </p>
              </li>
            </ul>
          </Typography>
          <Typography variant="body1">
            <strong>3. Evidencija aktivnosti:</strong> Organizator ima pravo odbiti bodovanje
            aktivnosti koja nije u skladu s pravilima ili temom aplikacije.
          </Typography>
        </ul>
    </Box>

      <Typography variant="body1" sx={{ mt: 2 }}>
  <strong>Prilagodbe pravila:</strong> Rlaktiv zadržava pravo izmjene
  pravila igre i bodovnog sustava radi osiguranja pravednosti. Korisnici će biti
  obaviješteni o svim promjenama.
</Typography>



      {/* Closing Section */}
      <Grid container spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            src={trofej}
            alt="Trofej"
            sx={{ width: "100%", maxWidth: 200, mx: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              fontSize: "1.2rem",
              textAlign: "center",
            }}
          >
            “Even if you’re on the right track, you’ll get run over if you just
            sit there.” – Will Rogers
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Pravila;
