import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, Box, Menu, MenuItem } from "@mui/material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenu, setSubmenu] = useState("");

  const handleMenuOpen = (event, menuName) => {
    setAnchorEl(event.currentTarget);
    setSubmenu(menuName);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenu("");
  };

return(
  <>
  <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Stranica
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* Profil with Dropdown */}
          <Button color="inherit" onClick={(e) => handleMenuOpen(e, "profil")}>
            Profil
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={submenu === "profil"}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/profil" onClick={handleMenuClose}>
              Profil
            </MenuItem>
            <MenuItem
              component={Link}
              to="/profil/ranglista"
              onClick={handleMenuClose}
            >
              Ranglista
            </MenuItem>
          </Menu>

          {/* Pravila */}
          <Button color="inherit" component={Link} to="/pravila">
            Pravila
          </Button>

          {/* Recepti with Dropdown */}
          <Button color="inherit" onClick={(e) => handleMenuOpen(e, "recepti")}>
            Recepti
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={submenu === "recepti"}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/recepti/doručak"
              onClick={handleMenuClose}
            >
              Doručak
            </MenuItem>
            <MenuItem
              component={Link}
              to="/recepti/ručak"
              onClick={handleMenuClose}
            >
              Ručak
            </MenuItem>
            <MenuItem
              component={Link}
              to="/recepti/večera"
              onClick={handleMenuClose}
            >
              Večera
            </MenuItem>
          </Menu>

          {/* Putovanja with Dropdown */}
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, "putovanja")}
          >
            Putovanja
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={submenu === "putovanja"}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/putovanja/blog"
              onClick={handleMenuClose}
            >
              Blog
            </MenuItem>
          </Menu>

          {/* Zdravlje with Dropdown */}
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, "zdravlje")}
          >
            Zdravlje
            </Button>
          <Menu
            anchorEl={anchorEl}
            open={submenu === "zdravlje"}
            onClose={handleMenuClose}
          >
            <MenuItem
              component={Link}
              to="/zdravlje/radionice"
              onClick={handleMenuClose}
            >
              Radionice
            </MenuItem>
            <MenuItem
              component={Link}
              to="/zdravlje/blog"
              onClick={handleMenuClose}
            >
              Blog
            </MenuItem>
          </Menu>

          {/* Događanja */}
          <Button color="inherit" component={Link} to="/dogadjanja">
            Događanja
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  </>
)
}

export default Navbar;

    
  