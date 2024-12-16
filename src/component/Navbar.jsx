import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState("");

  const handleMenuOpen = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(menu);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu("");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mindful Journeys
        </Typography>

        {/* Profil Menu */}
        <Button
          color="inherit"
          onClick={(event) => handleMenuOpen(event, "profil")}
        >
          {/*ovdje stavi link od slike sta zelis za avatara */}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={activeMenu === "profil"}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/profil">
            Profil
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/profil/ranglista"
          >
            Ranglista
          </MenuItem>
        </Menu>

        {/* Recepti Menu */}
        <Button
          color="inherit"
          onClick={(event) => handleMenuOpen(event, "recepti")}
        >
          Recepti
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={activeMenu === "recepti"}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/recepti">
            Recepti
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/recepti/doručak"
          >
            Doručak
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/recepti/ručak"
          >
            Ručak
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/recepti/večera"
          >
            Večera
          </MenuItem>
        </Menu>

        {/* Putovanja Menu */}
        <Button
          color="inherit"
          onClick={(event) => handleMenuOpen(event, "putovanja")}
        >
          Putovanja
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={activeMenu === "putovanja"}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/putovanja">
            Glavna
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/putovanja/blog"
          >
            Blog
          </MenuItem>
        </Menu>

        {/* Zdravlje Menu */}
        <Button
          color="inherit"
          onClick={(event) => handleMenuOpen(event, "zdravlje")}
        >
          Zdravlje
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={activeMenu === "zdravlje"}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={Link} to="/zdravlje">
            Mentalno Zdravlje
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/zdravlje/radionice"
          >
            Radionice
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={Link}
            to="/zdravlje/blog"
          >
            Blog
          </MenuItem>
        </Menu>

        {/* Other Links */}
        <Button color="inherit" component={Link} to="/pravila">
          Pravila
        </Button>
        <Button color="inherit" component={Link} to="/dogadjanja">
          Događanja
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
