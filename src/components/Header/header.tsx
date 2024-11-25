import { useState } from "react";
import { Box, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Logo.svg";
import Defaultbutton from "../defaultButton/DefaultButton";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-header-container">
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        <img className="logo-header" src={logo} alt="Logo Tour-bay" />
      </Link>

      <Box className="header-inner-container">
        <Link
          to={"/tours"}
          className={`header-menu-link ${
            location.pathname === "/tours" ? "active" : ""
          }`}
        >
          Tours
        </Link>
        <Link
          to={"/add-tour"}
          className={`header-menu-link ${
            location.pathname === "/add-tour" ? "active" : ""
          }`}
        >
          Add Tour
        </Link>
        <Link
          to={"/my-tours"}
          className={`header-menu-link ${
            location.pathname === "/my-tours" ? "active" : ""
          }`}
        >
          My Tours
        </Link>
      </Box>

      {/* Explore Button */}
      <Link to={"/explore-tour"} className="explore-button-link">
        <Defaultbutton
          buttonCaption="Explore Now"
          buttonWidth="155px"
          buttonHeight="54px"
          route={location.pathname}
        />
      </Link>

      {/* Hamburger Icon */}
      <IconButton
        edge="end"
        className="hamburger-icon"
        onClick={toggleMenu}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      {/* Small Screen Drawer */}
      <Drawer anchor="right" open={isMenuOpen} onClose={toggleMenu}>
        <Box className="drawer-container">
          <IconButton
            edge="end"
            className="close-icon"
            onClick={toggleMenu}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem>
              <Link
                to={"/tours"}
                className={`header-menu-link ${
                  location.pathname === "/tours" ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Tours
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to={"/add-tour"}
                className={`header-menu-link ${
                  location.pathname === "/add-tour" ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                Add Tour
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to={"/my-tours"}
                className={`header-menu-link ${
                  location.pathname === "/my-tours" ? "active" : ""
                }`}
                onClick={toggleMenu}
              >
                My Tours
              </Link>
            </ListItem>
            <ListItem>
              <Link to={"/explore-tour"} onClick={toggleMenu}>
                <Defaultbutton
                  buttonCaption="Explore Now"
                  buttonWidth="155px"
                  buttonHeight="54px"
                  route={location.pathname}
                />
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
