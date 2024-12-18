import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Facebook, Instagram } from "@mui/icons-material";

import karusel_prva from "../images/Mentalno_zdravlje/4490184b3247bc33d68b58b3b9f71402.jpg";
import karusel_druga from "../images/Mentalno_zdravlje/karusel_smajlic.jpeg";
import karusel_treca from "../images/Mentalno_zdravlje/a942e1e5ab7856f9faec701754035c07.jpg";
import karusel_cetvrta from "../images/Mentalno_zdravlje/9ba1590c5d2c746569e7d8748b28fed9.jpg";

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
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* Left Side: Image */}
          <img
            src={prva}
            alt="Smajlic"
            style={{
              width: "400px",
              marginRight: "auto",
            }}
          />

{/* Right Side - Content */}
<Box sx={{ flex: 1 }}>
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
      ></Box>
      <Typography
        variant="body1"
        sx={{ mt: 2, color: "#444", textAlign: "right"}}
      >
        Brini o sebi i svom umu – uz RIaktiv pronađi podršku, ravnotežu i snagu za svaki novi dan!
      </Typography>

      {/* Button and Icons */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 2 }}
      >
        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#b9e185cc",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          UNESI NOVI BLOG
        </Button>

        {/* Social Media Icons */}
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
      </Stack>
    </Box>
             </Stack>
           </Box>

      {/* Static Images Section */}
      <Box
        sx={{
          mt: 4,
          mb: 6,
          backgroundColor: "#b9e18540", // Green background
          py: 4,
          px: 2,
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          sx={{ mb: 3, color: "#000", fontWeight: "bold" }}
        >
          Popularni blogovi koje ne možeš propustiti! <br/>
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mb: 3, color: "#000"}}
        >
          Tražiš ravnotežu i mir? Otkrij korisne savjete i podršku za svoje mentalno zdravlje.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* First Image */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={karusel_prva}
                alt="Kako prepoznati stres i anksioznost"
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
                  Kako prepoznati stres i anksioznost
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 2, display: "block", mx: "auto" }}
                >
                  Pogledaj Više
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Second Image */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={karusel_treca}
                alt="5 vježbi za poboljšanje emocionalnog zdravlja"
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
                  5 vježbi za poboljšanje emocionalnog zdravlja
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 2, display: "block", mx: "auto" }}
                >
                  Pogledaj Više
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Third Image */}
          <Grid item xs={12} sm={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={karusel_cetvrta}
                alt="Kako uskladiti studije i mentalno zdravlje"
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold" textAlign="center">
                  Kako uskladiti studije i mentalno zdravlje
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  sx={{ mt: 2, display: "block", mx: "auto" }}
                >
                  Pogledaj Više
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>


      {/* Green Section */}
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#b9e18540",
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
          Mjesto gdje možeš učiti, rasti i pronaći snagu za svaki novi izazov - pridruži nam se!
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
                  Upravljanje stresom i prevencija burnouta
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
                  Izgradnja pozitivnog uma
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
                  Nauči živjeti u trenutku
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
        <Box textAlign="center" sx={{ mt: 6 }}>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <img src={kraj} alt="" style={{ width: "450px", borderRadius: "50%" }} />
            <Typography
              variant="h5"
              align="center"
              sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
            >
              "Be yourself; everyone else is already taken."
            </Typography>
          </Stack>
        </Box>
    </Container>
  );
};

export default Radionice;