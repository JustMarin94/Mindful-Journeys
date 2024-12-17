import React from "react";
import {
  Container,
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";

// Import images
import sedamStaza from "../images/Putovanja/staza-sedam-slapova-istra.jpg";

const Sedamslapova = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Header Section */}
      <Box sx={{ position: "relative", mb: 4 }}>
        <img
          src={sedamStaza}
          alt="Staza 7 Slapova"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        {/* Text Overlay on Image */}
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "8px 16px",
            textTransform: "uppercase",
            fontWeight: "bold",
            borderRadius: "4px",
          }}
        >
          Staza 7 Slapova
        </Typography>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            height: "4px",
            width: "100px",
            backgroundColor: "#0066CC",
          }}
        />
      </Box>
        <Typography
          variant="subtitle2"
          sx={{ mt: 1, color: "#666", fontStyle: "italic" }}
        >
          Autor: Anita Geljić
        </Typography>
      

      {/* Article Content */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", textAlign: "justify" }}
        >
          Ako ste ljubitelj prirode, planinarenja i istraživanja skrivenih
          ljepota Istre, onda je Staza 7 Slapova prava destinacija za vas. Ova
          nevjerojatna staza, smještena u središnjem dijelu Istre, povezuje sedam
          predivnih slapova rijeke Mirne, a njena ljepota i pristupačnost čine je
          savršenim odredištem za sve one koji žele doživjeti prirodnu idilu
          ovog kraja.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", textAlign: "justify" }}
        >
          Staza 7 Slapova kreće od mjesta uz rijeku Mirnu, nedaleko od naselja
          Čabrunići, i kroz cijeli svoj tijek pruža posjetiteljima priliku da
          uživaju u netaknutoj prirodi, kristalno čistoj vodi, i spektakularnim
          pogledima na slapove. Sama staza nije prezahtjevna, idealna je za
          ljubitelje prirode svih uzrasta, a njezina dužina od oko 3,5
          kilometara.
        </Typography>

        {/* Section - Upoznajte slapove */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}
          >
            Upoznajte slapove
          </Typography>
          <Typography paragraph sx={{ fontSize: "1.1rem", textAlign: "justify" }}>
            Svaki slap na stazi ima svoju posebnost i čini cijeli doživljaj još
            nezaboravnijim. Od početka do kraja staze, možete uživati u raznim
            pejzažima – od mirnih bazena do strmih vodopada koji se slijevaju s
            visine.
          </Typography>
          <ul>
            <li>
              <Typography sx={{ fontSize: "1.1rem", textAlign: "justify" }}>
                <strong>Slap Jamići:</strong> Najveći i najpoznatiji slap na
                stazi, Jamići je slap koji oduzima dah. Njegova visina i snaga
                vode čine ga atrakcijom koju ćete sigurno pamtiti.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: "1.1rem", textAlign: "justify" }}>
                <strong>Slap Zarečki Krov:</strong> Slap smješten u blizini
                prirodnog mosta, stvarajući savršeni spoj rijeke, stijena i
                zelenila.
              </Typography>
            </li>
          </ul>
        </Box>

        {/* Section - Savjeti za posjetitelje */}
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, textAlign: "left" }}
          >
            Savjeti za posjetitelje
          </Typography>
          <ul>
            <li>
              <Typography sx={{ fontSize: "1.1rem", textAlign: "justify" }}>
                <strong>Obujte udobnu obuću:</strong> Staza je asfaltirana i
                zemljana na nekim dijelovima, pa je preporučljivo nositi obuću
                koja je prikladna za planinarenje.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: "1.1rem", textAlign: "justify" }}>
                <strong>Ponesite vodu i užinu:</strong> Iako je staza kratka,
                priroda može biti zahtjevna, pa je uvijek dobro imati vodu i
                nešto za grickati.
              </Typography>
            </li>
            <li>
              <Typography sx={{ fontSize: "1.1rem", textAlign: "justify" }}>
                <strong>Poštujte prirodu:</strong> Ostavite stazu čistom i ne
                uništavajte biljni svijet oko sebe.
              </Typography>
            </li>
          </ul>
        </Box>

        {/* Closing Section */}
        <Typography
          variant="body1"
          paragraph
          sx={{ fontSize: "1.1rem", textAlign: "justify" }}
        >
          Staza 7 Slapova u Istri je pravo blago koje nudi ne samo spektakularnu
          prirodu, nego i priliku za fizičku aktivnost i opuštanje u prirodi.
          Bez obzira jeste li strastveni planinar ili samo želite uživati u
          ljepotama Istre, ova staza će vas oduševiti.
        </Typography>
      </Box>
    </Container>
  );
};

export default Sedamslapova;
