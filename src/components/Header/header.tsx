import { Box, Typography } from "@mui/material";
import logo from "../../assets/Logo.svg";
import Defaultbutton from "../DefaultButton/DefaultButton";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header-container">
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        <img className="logo-header" src={logo} alt="Logo Tour-bay" />
      </Link>

      <Box className="header-inner-container">
        <Link
          to={"/tours"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            className="cursor-pointer"
            sx={{
              fontWeight: 500,
              fontSize: "18px",
              borderBottom:
                location.pathname === "/tours" ? "2px solid #F16B51" : "",
            }}
          >
            Tours
          </Typography>
        </Link>
        <Link
          to={"/add-tour"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            className="cursor-pointer"
            sx={{
              fontWeight: 500,
              fontSize: "18px",
              borderBottom:
                location.pathname === "/add-tour" ? "2px solid #F16B51" : "",
            }}
          >
            Add Tour
          </Typography>
        </Link>

        <Link
          to={"/my-tours"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            className="cursor-pointer"
            sx={{
              fontWeight: 500,
              fontSize: "18px",
              borderBottom:
                location.pathname === "/my-tours" ? "2px solid #F16B51" : "",
            }}
          >
            My Tours
          </Typography>
        </Link>
      </Box>

      <Link to={"/explore-tour"}>
        <Defaultbutton
          buttonCaption="Explore Now"
          buttonWidth="155px"
          buttonHeight="54px"
          route={location.pathname}
        />
      </Link>
    </div>
  );
};

export default Header;
