import React, {useState} from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
  IconButton,
  CardMedia,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Facebook, Instagram } from "@mui/icons-material";

import prva from "../images/Mentalno_zdravlje/95425213d78e25680cd5809fcec82ced-removebg-preview.png";
import karusel_prva from "../images/Mentalno_zdravlje/4490184b3247bc33d68b58b3b9f71402.jpg";
import karusel_druga from "../images/Mentalno_zdravlje/karusel_smajlic.jpeg";
import karusel_treca from "../images/Mentalno_zdravlje/a942e1e5ab7856f9faec701754035c07.jpg";
import karusel_cetvrta from "../images/Mentalno_zdravlje/9ba1590c5d2c746569e7d8748b28fed9.jpg";
import kraj from "../images/Mentalno_zdravlje/0a042757b46914f87b58f377a5b4326d-removebg-preview.png";


// Carousel Data
const carouselItems = [
  { img: karusel_prva, title: "Kako prepoznati stres i anksioznost" },
  { img: karusel_druga, title: "Snaga iznutra" },
  { img: karusel_treca, title: "5 vježbi za poboljšanje emocionalnog zdravlja" },
  { img: karusel_cetvrta, title: "Kako uskladiti studije i mentalno zdravlje" },
];

const ZdravljeBlog = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCarouselIndex(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

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
     
               {/* Right Side: Title and Text */}
               <Box>
                 <Typography
                   variant="h3"
                   sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
                 >
                   BLOG MENTALNO ZDRAVLJE
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
                    Brini o sebi i svom umu – uz RIaktiv pronađi podršku, ravnotežu i snagu za svaki novi dan!
                 </Typography>
                 <Button
                   variant="contained"
                   sx={{ mt: 2, backgroundColor: "#b9e185cc", color: "#fff" }}
                 >
                   Unesi novi blog
                 </Button>
                  {/* Icons aligned right */}
                         <Stack direction="row" spacing={2} sx={{ ml: "auto" }}>
                           <IconButton
                             component="a"
                             href="https://www.facebook.com"
                             target="_blank"
                             rel="noopener noreferrer"
                             sx={{ color: "#000", fontSize: "2rem" }} // Black and larger size
                           >
                             <Facebook fontSize="large" />
                           </IconButton>
                           <IconButton
                             component="a"
                             href="https://www.instagram.com"
                             target="_blank"
                             rel="noopener noreferrer"
                             sx={{ color: "#000", fontSize: "2rem" }} // Black and larger size
                           >
                             <Instagram fontSize="large" />
                           </IconButton>
                         </Stack>
               </Box>
             </Stack>
           </Box>
 

        {/* Carousel Section */}
     <Box
        sx={{
          mt: 4,
          mb: 6,
          backgroundColor: "#b9e18540",
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
          Sudjeluj i ti u nezaboravnim događanjima!
        </Typography>

        {/* Navigation Arrows and Grid */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Previous Arrow */}
          <IconButton onClick={handlePrev} sx={{ color: "#000" }}>
            <ArrowBackIos />
          </IconButton>

          {/* Grid for 4 Images */}
          <Grid container spacing={2} justifyContent="center">
            {carouselItems.map((item, idx) => {
              // Determine visibility of items
              const visibleIdx = (carouselIndex + idx) % carouselItems.length;

              return (
                <Grid item xs={12} sm={6} md={3} key={visibleIdx}>
                  <Card
                    sx={{
                      boxShadow: 3,
                      borderRadius: 2,
                      textAlign: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={carouselItems[visibleIdx].img}
                      alt={carouselItems[visibleIdx].title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold", color: "#000" }}
                      >
                        {carouselItems[visibleIdx].title}
                      </Typography>
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ mt: 2, backgroundColor: "#82ca9d" }} // Style the button
                        href="#"
                        >
                        Pogledaj Više
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>

          {/* Next Arrow */}
          <IconButton onClick={handleNext} sx={{ color: "#000" }}>
            <ArrowForwardIos />
          </IconButton>
        </Box>
      </Box>

  

          {/* Footer Section */}
              <Box textAlign="center" sx={{ mt: 6 }}>
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                  <img src={kraj} alt="" style={{ width: "450px", borderRadius: "50%" }} />
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{ fontStyle: "italic", fontWeight: "bold", color: "#333" }}
                  >
                    “And still, I rise.”  —  Maya Angelou
                  </Typography>
                </Stack>
              </Box>
    </Container>
  );
};


export default ZdravljeBlog;

