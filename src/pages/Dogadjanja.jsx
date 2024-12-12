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
import slika from "../images/ec1c97e63bf9bb47635f8e4e270fa5e0-removebg-preview.png";
import slika1 from "../images/WhatsApp Image 2024-12-11 at 4.00.40 PM(1).jpeg";
import terminal from "../images/8560967.jpg";
import studentDay from "../images/347559820_1335391134056675_2443543992295508591_n.jpg";
import karneval from "../images/WhatsApp Image 2024-12-11 at 4.09.15 PM.jpeg";
import homoSiTec from "../images/WhatsApp Image 2024-12-11 at 4.10.12 PM.jpeg";
import fiumanka from "../images/WhatsApp Image 2024-12-11 at 4.20.11 PM.jpeg";
import womensDay from "../images/WhatsApp Image 2024-12-11 at 4.20.29 PM.jpeg";

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
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      {/* Header Section */}
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Stack direction={"row"}>
          <img src={slika} alt="" />

          <Stack justifyContent={"center"}>
            <Typography variant="h4">DOGAĐANJA</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Pronađi sva događanja koja će te inspirirati!
            </Typography>
          </Stack>
        </Stack>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "green", // Or use a specific hex/rgb value
          py: 4, // Optional padding for top and bottom spacing
          borderRadius: 2, // Optional rounded corners
        }}
      >
        {/* Upcoming Events Section */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ mb: 3, color: "white" }}
          >
            Ne propusti najpopularnija događanja!
          </Typography>
          <Grid container spacing={2}>
            {/* Event Cards */}
            {events.map((event, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <Box
                    sx={{
                      height: "150px",
                      overflow: "hidden",
                      backgroundColor: "lightgray",
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
                    <Typography variant="h6" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Datum: {event.date}
                    </Typography>
                    <Typography variant="body2">
                      Lokacija: {event.location}
                    </Typography>
                    <Button variant="contained" size="small" sx={{ mt: 2 }}>
                      Pogledaj više
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Featured Events Section */}
      <Box sx={{ mb: 6, backgroundColor: "#88d9f4", py: 4, borderRadius: 2 }}>
        <Typography variant="h5" textAlign="center" sx={{ mb: 4 }}>
          Sudjeluj i ti u nezaboravnim događanjima!
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }} // Stacks vertically on small screens, horizontally on larger screens
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {/* Event Images */}
          {[terminal, karneval, homoSiTec, studentDay].map((image, index) => (
            <Box
              key={index}
              sx={{
                width: "150px", // Set consistent size
                height: "150px",
                overflow: "hidden", // Ensures images don't overflow
                borderRadius: 2,
                boxShadow: 3,
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
        <Stack direction={"row"}>
          <img src={slika1} alt="" />
          <Box sx={{ alignContent: "center" }}>
            <Typography variant="h6" align="center">
              "Run like there’s a hot guy in front of you and a creepy one
              behind you."
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Dogadjanja;
