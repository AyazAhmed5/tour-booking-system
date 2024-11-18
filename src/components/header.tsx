import { Box, Typography } from "@mui/material";
import logo from "../assets/Logo.svg";
import Defaultbutton from "./DeaultButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        <img className="logo-header" src={logo} alt="Logo Tour-bay" />
      </Link>

      <Box className="header-inner-container">
        <Link
          to={"/add-tour"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            className="cursor-pointer"
            sx={{ fontWeight: 500, fontSize: "18px" }}
          >
            Add Tour
          </Typography>
        </Link>
        <Link
          to={"/tours"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            className="cursor-pointer"
            sx={{ fontWeight: 500, fontSize: "18px" }}
          >
            Tours
          </Typography>
        </Link>
        <Link
          to={"/my-tours"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            className="cursor-pointer"
            sx={{ fontWeight: 500, fontSize: "18px" }}
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
        />
      </Link>
    </div>
  );
};

export default Header;
