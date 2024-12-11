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
import bum from "../images/Mentalno_zdravlje/1165b2daecbec6041d3945e01c554e89.jpg";
import um from "../images/Mentalno_zdravlje/b005610517241f7c504aa545e90b2b3d.jpg";
import smajlic from "../images/Mentalno_zdravlje/98957b38e613409000b225e3385f9e63.jpg";
import kraj from "../images/Mentalno_zdravlje/f58fa033e60b46c1f0a6aca46f8805dc-removebg-preview.png";

const Radionice = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
      {/* Header Section */}
      <Box sx={{ mb: 6 }}>
        <Stack direction="row" alignItems="center" spacing={4}>
          {/* Left Side: Image */}
          <Box sx={{ flex: 1 }}>
            <img
              src={prva}
              alt="Smajlic"
              style={{
                width: "100%",
                maxWidth: "300px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </Box>

          {/* Right Side: Title and Text */}
          <Box sx={{ flex: 2 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                color: "#333",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Radionice
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "2px",
                backgroundColor: "#333",
                mb: 2,
              }}
            ></Box>
            <Typography variant="body1" sx={{ color: "#666", mb: 2 }}>
              Uz RIaktiv radionice za mentalno zdravlje, pronađi ravnotežu,
              osnaži um i nauči brinuti o sebi na najbolji način!
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#66bb6a",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Unesi novi blog
            </Button>
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
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 3, color: "#444", fontWeight: "bold" }}
        >
          Mjesto gdje možeš učiti, rasti i pronaći snagu za svaki novi izazov -
          pridruži nam se!
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={bum}
                alt="Radionica 1"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333", mb: 1 }}
                >
                  UPRAVLJANJE STRESOM I PREVENCIJA BURNOUTA
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Pronađi unutarnji mir uz jednostavne tehnike.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={um}
                alt="Radionica 2"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333", mb: 1 }}
                >
                  IZGRADNJA POZITIVNOG UMA
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Iskoristi svoju kreativnost za bolji dan!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={smajlic}
                alt="Radionica 3"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333", mb: 1 }}
                >
                  NAUČI ŽIVJETI U TRENUTKU
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Otkrij kako pronaći sreću u malim stvarima.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box
        sx={{
          mt: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Side: Image */}
        <Box sx={{ flex: 1 }}>
          <img
            src={kraj}
            alt="Inspirativna slika"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Box>

        {/* Right Side: Quote */}
        <Box sx={{ flex: 1, ml: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontStyle: "italic",
              fontWeight: "bold",
              color: "#333",
              mb: 2,
              textAlign: "center",
            }}
          >
            "Be yourself; everyone else is already taken."
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Radionice;
