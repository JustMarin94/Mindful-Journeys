import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Avatar,
  Box,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Uvoz lokalnih slika
import Logo from "../images/Login_stranica/Yellow_and_Green_Modern_Logo-removebg-preview.png";
import AvatarImg from "../images/Profil/86e086efb17f46db00b20a433aca4a55.jpg";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState("");

  // Funkcije za otvaranje/zatvaranje menija
  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu("");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: 0 }}>
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {/* Avatar sa strelicom i padajućim menijem */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="User Avatar"
            src={AvatarImg}
            sx={{ cursor: "pointer", marginRight: 1 }}
            component={Link}
            to="/profil" // Ovo vodi na stranicu profila
          />
          <IconButton
            onClick={(event) => handleMenuOpen(event, "profil")}
            sx={{ color: "black" }}
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openMenu === "profil"}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/pravila">
              Pravila
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/naslovna">
              Odjava
            </MenuItem>
          </Menu>
        </Box>

        {/* Centralni meni */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            backgroundColor: "#fff",
            borderRadius: 5,
            padding: "8px 24px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Recepti */}
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            RECEPTI
          </Button>

          {/* Putovanja */}
          <Button
            color="inherit"
            onClick={(event) => handleMenuOpen(event, "putovanja")}
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            PUTOVANJA
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu === "putovanja"}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/putovanja"
            >
              Putovanja
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/putovanja/blog"
            >
              Blog putovanja
            </MenuItem>
          </Menu>

          {/* Mentalno Zdravlje */}
          <Button
            color="inherit"
            onClick={(event) => handleMenuOpen(event, "zdravlje")}
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            MENTALNO ZDRAVLJE
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={openMenu === "zdravlje"}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/zdravlje/radionice"
            >
              Mentalno zdravlje
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              component={Link}
              to="/zdravlje/blog"
            >
              Blog mentalno zdravlje
            </MenuItem>
          </Menu>

          {/* Događanja */}
          <Button
            color="inherit"
            component={Link}
            to="/dogadjanja"
            sx={{ color: "#000", fontWeight: "bold" }}
          >
            DOGAĐANJA
          </Button>
        </Box>

        {/* Logo na desnoj strani */}
        <Box>
          <img src={Logo} alt="RIaktiv Logo" style={{ height: "100px" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
