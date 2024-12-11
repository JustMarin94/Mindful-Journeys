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
import prva from "../images/Mentalno_zdravlje/95425213d78e25680cd5809fcec82ced-removebg-preview.png";
import stres from "../images/Mentalno_zdravlje/4490184b3247bc33d68b58b3b9f71402.jpg";
import pet from "../images/Mentalno_zdravlje/a942e1e5ab7856f9faec701754035c07.jpg";
import studij from "../images/Mentalno_zdravlje/9ba1590c5d2c746569e7d8748b28fed9.jpg";
import um from "../images/Mentalno_zdravlje/b005610517241f7c504aa545e90b2b3d.jpg";
import slika_dno from "../images/Mentalno_zdravlje/bb71e2bfdc79db2c43c45ae8ec721e60-removebg-preview.png";



const MentalnoZdravlje = () => {
  const healthTips = [
    {
      title: "Kako smanjiti stres?",
      description: "Pronađi tehnike koje te opuštaju!",
      image: stres,
    },
    {
      title: "Pazi na svoje tijelo!",
      description: "Vježbaj i dobro se naspavaj.",
      image: pet,
    },
    {
      title: "Uspjeh na studiju",
      description: "Nauči kako uskladiti obveze i zabavu.",
      image: studij,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <img
            src={prva}
            alt="Logo za mentalno zdravlje"
            style={{ width: "250px", marginRight: "auto" }}
          />
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
            >
              MENTALNO ZDRAVLJE
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#222",
                mt: 1,
              }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, color: "#444", textAlign: "right" }}
            >
              Brini o sebi i onome što voliš – tu možeš pronaći podršku, motivaciju i nove načine za rast!
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* Green Section */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#d8f5d3",
          py: 4,
          px: 3,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, color: "#444", fontWeight: "bold" }}
        >
          Popularni blogovi koje ne smiješ propustiti!
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, color: "#666" }}
        >
          Tvoj mentalni razvoj počinje ovdje. Saznaj kako se nositi sa svakodnevnim izazovima!
        </Typography>

        <Grid container spacing={3}>
          {healthTips.map((tip, index) => (
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
                    src={tip.image}
                    alt={tip.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
                    {tip.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {tip.description}
                  </Typography>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{ mt: 2, backgroundColor: "#66bb6a", color: "#fff" }}
                  >
                    Pogledaj više
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box textAlign="center" sx={{ mt: 6 }}>
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontStyle: "italic",
            fontWeight: "bold",
            color: "#333",
            mb: 2,
          }}
        >
          "There cannot be a crisis next week. My schedule is already full."
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "300px",
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={slika_dno}
            alt="Inspirativna slika za mentalno zdravlje"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default MentalnoZdravlje;

