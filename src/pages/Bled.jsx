import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";



import prva from "../images/Putovanja/8746335_l-2.jpg";


const Bled = () => {

  
    // State za čuvanje podataka, ali se ne sprema trajno
    const [formData, setFormData] = useState({
      ime: "",
      prezime: "",
      email: "",
      dodatneInformacije: "",
    });
  
    // Funkcija za rukovanje unosom
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // Funkcija za "slanje" podataka (bez trajnog čuvanja)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Podaci poslani:", formData);
      alert("Upit je poslan.");
    };

    return (

      <Container maxWidth="lg" sx={{ mt: 4, fontFamily: "'Poppins', sans-serif" }}>
            {/* Header Section */}
                 <Box sx={{ mb: 6 }}>
                   <Stack direction="row" alignItems="center" justifyContent="space-between">
                     {/* Left Side: Image */}
                     <Box
                        sx={{
                          position: "relative", // Roditeljski kontejner postavlja osnovu za pozicioniranje
                          display: "inline-block", // Drži okvir i sliku zajedno
                        }}
                      >
                        {/* Plavi okvir iza slike */}
                        <Box
                          sx={{
                            position: "absolute",
                            top: 20, // Podesi vertikalni pomak okvira iza slike
                            left: 20, // Podesi horizontalni pomak okvira iza slike
                            width: "420px", // Širina okvira (veća od slike)
                            height: "280px", // Visina okvira
                            backgroundColor: "#D4E8FF", // Plava boja okvira
                            borderRadius: "15px", // Zaobljeni uglovi
                            zIndex: 0, // Iza slike
                          }}
                        ></Box>

                        {/* Slika */}
                        <img
                          src={prva}
                          alt="Bled i Bohinj"
                          style={{
                            width: "400px",
                            borderRadius: "15px", // Zaobljeni uglovi slike
                            position: "relative", // Da slika ostane iznad okvira
                            zIndex: 1, // Iznad plavog okvira
                          }}
                        />
                      </Box>

                     {/* Right Side - Content */}
                         <Box sx={{ flex: 1 }}>
                           <Typography
                             variant="h3"
                             sx={{ fontWeight: "bold", color: "#222", textAlign: "right" }}
                           >
                             BLED I BOHINJ
                           </Typography>
                           <Box
                             sx={{
                               width: "85%",
                               height: "2px",
                               backgroundColor: "#222",
                               mt: 1,
                               ml: 15,
                             }}
                           ></Box>
                     
                           {/* Button and Icons */}
                           <Stack
                             direction="row"
                             alignItems="center"
                             justifyContent="space-between"
                             sx={{ mt: 2 }}
                           >
                     
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

      {/* Important Information Section */}
      <Box sx={{ bgcolor: "#f8f5dc", p: 4, borderRadius: 2, mb: 6, mt: 10 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontSize: "1.8rem", mb: 2, textAlign: "justify" }}
        >
          POLAZAK: 15.03.2025.
        </Typography>
        <Typography paragraph sx={{ fontSize: "1.2rem", textAlign: "justify", mb: 3 }}>
        Uživajte u prirodnim ljepotama Slovenije, prošetajte uz Bledsko i Bohinjsko jezero, 
        posjetite Bledski otočić sreće i zasluženo se počastite tradicionalnim Bledskim kremšnitama.
        Okupljanje kod kampusa Rijeka. Nakon upoznavanja sa pratiteljem putovanja, polazak u 06.50h prema BOHINJU i BLEDU. 
        Vožnja kroz Sloveniju uz kraća zaustavljanja, prema potrebi grupe, do BOHINJA. Po dolasku, slijedi obilazak 
        BOHINJSKOG JEZERA I OKOLICE: najprije ćemo se spustiti do podnožja ušća SAVE BOHINJKE u jezero i prošetati do prekrasnog SLAPA. 
        Slobodno vrijeme za individualne programe ili za ručak. Okupljanje grupe u dogovoreno vrijeme i polazak prema RIBČEVOM LAZU, 
        gdje ćemo razgledati KAMENI MOST, CRKVU SV. IVANA KRSTITELJA, SPOMENIK ČETIRIMA PLANINARIMA. 
        Kraće slobodno vrijeme za šetnju uz jezero ili pak za kavu i kolač. Okupljanje grupe u dogovoreno vrijeme, 
        te nastavak vožnje alpskim predjelima Slovenije, sve do BLEDA, bisera slovenskih Alpi, kojeg okružuju visoki
        planinski vrhunci i dodatno doprinose mističnosti i ljepoti jezera. Slijedi slobodno vrijeme za šetnju uz samo 
        jezero i za individualne programe. Predlažemo vožnju tradicionalnim čamcem – PLETNOM po jezeru, sve do BLEDSKOG 
        OTOKA na kojem se nalazi barokna CRKVA SV. MARIJE, koja se može pohvaliti odlično sačuvanim freskama. Ne propustite 
        priliku da povučete uže i zazvonite zvoncem za sreću, što će omogućiti ispunjenje Vaših želja (doplata na licu mjesta)!
        Nakon opuštanja uz kavu i kolač (predlažemo TRADICIONALNE BLEDSKE KREMŠNITE), okupljanje grupe, te polazak prema Zagrebu.
        Dolazak na mjesto polaska predviđen je u večernjim satima, do 20.30h
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
          Cijena po osobi: 20,00 €
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", mb: 1, textAlign: "justify" }}>
        CIJENA UKLJUČUJE: prijevoz turističkim autobusom visoke turističke kategorije, 
        licenciranog pratitelja, sve razglede prema programu te troškove jamčevine, 
        organizacije i prodaje, PDV <br/> <br/>
        CIJENA NE UKLJUČUJE: ulaznice za kulturno-povijesne spomenike i muzeje koje 
        nisu navedene kao uključene, vožnju brodom po jezeru, fakultativne sadržaje, 
        karte javnog prijevoza, troškove osobnih narudžbi, sve ne navedene troškove, 
        skretanje s rute, putno osiguranje <br /> <br />
        FAKULTATIVNE NADOPLATE (po želji, na licu mjesta): <br /> <br />
        – vožnja brodom Bledskim jezerom: 15,00 € <br />
        – slap Savica: 2,7 € (odrasli, minimum 20 prijavljenih) <br /> <br />
        NAPOMENA: izlet se ne otkazuje u slučaju promjenjivih vremenskih uvjeta i kiše!
        </Typography>
      </Box>


      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Ime"
          variant="outlined"
          name="ime"
          value={formData.ime}
          onChange={handleChange}
            sx={{
              backgroundColor: "#e3eaf5",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#dbe4f0" },
              "&.Mui-focused": { backgroundColor: "#dbe4f0" },
          }}
        />

        <TextField
          label="Prezime"
          variant="outlined"
          name="prezime"
          value={formData.prezime}
          onChange={handleChange}
            sx={{
              backgroundColor: "#e3eaf5",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#dbe4f0" },
              "&.Mui-focused": { backgroundColor: "#dbe4f0" },
          }}
        />

        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
            sx={{
              backgroundColor: "#e3eaf5",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#dbe4f0" },
              "&.Mui-focused": { backgroundColor: "#dbe4f0" },
            }}
        />

        <TextField
          label="Dodatne Informacije"
          variant="outlined"
          name="dodatneInformacije"
          value={formData.dodatneInformacije}
          onChange={handleChange}
          multiline
          rows={4}
            sx={{
              backgroundColor: "#e3eaf5",
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#dbe4f0" },
              "&.Mui-focused": { backgroundColor: "#dbe4f0" },
            }}

        />
        <Button type="submit" variant="contained" color="primary"
            sx={{
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "25px",
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
        >  
          POŠALJI UPIT
        </Button>
      </Box>
    

    </Container>
    );
  };
  
export default Bled;