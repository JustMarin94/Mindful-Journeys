import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import slika from "../images/Dogadjanja/ec1c97e63bf9bb47635f8e4e270fa5e0-removebg-preview.png";
import slika1 from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.00.40 PM(1).jpeg";
import studentDay from "../images/Dogadjanja/347559820_1335391134056675_2443543992295508591_n.jpg";
import karneval from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.09.15 PM.jpeg";
import homoSiTec from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.10.12 PM.jpeg";
import fiumanka from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.20.11 PM.jpeg";
import womensDay from "../images/Dogadjanja/WhatsApp Image 2024-12-11 at 4.20.29 PM.jpeg";


const Dogadjanja = () => {
  const events = [
    {
      title: "Homo Si Tec",
      date: "12.03.2024",
      location: "Rijeka",
      image: homoSiTec,
    },
    {
      title: "Women's Day Event",
      date: "08.03.2024",
      location: "City Center",
      image: womensDay,
    },
    {
      title: "Fiumanka Regatta",
      date: "15.06.2024",
      location: "Rijeka Marina",
      image: fiumanka,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <img
            src={slika}
            alt=""
            style={{ width: "400px", marginRight: "auto" }}
          />
          <Box>
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
          </Box>
        </Stack>
      </Box>

      {/* Yellow Section */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#fff2cc",
          py: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, color: "#444", fontWeight: "bold" }}
        >
          Ne propusti najpopularnija događanja!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#666" }}
        >
          Spreman/na za akciju? Otkrij najuzbudljivije sportske i društvene događaje koji te čekaju!
        </Typography>

        <Grid container spacing={3}>
          {events.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    height: "150px",
                    overflow: "hidden",
                    backgroundColor: "#eaeaea",
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
                    {event.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom sx={{ color: "#666" }}>
                    Datum: {event.date}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Lokacija: {event.location}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 2, backgroundColor: "#ff9800", color: "#fff" }}
                  >
                    Pogledaj više
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Events Section */}
      <Box
        sx={{
          mt: 6,
          mb: 6,
          backgroundColor: "#fff2cc",
          py: 4,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 2, color: "#444", fontWeight: "bold" }}
        >
          Sudjeluj i ti u nezaboravnim događanjima!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#666" }}
        >
          Opusti se, stekni nova prijateljstva i uživaj u energiji koju donose naši događaji!
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {[karneval, homoSiTec, studentDay].map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "180px",
                height: "180px",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "white",
              }}
            >
              <img
                src={image}
                alt={`Event ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Footer Section */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <img src={slika1} alt="" style={{ width: "250px", borderRadius: "50%" }} />
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