import { Box, Typography } from "@mui/material";
import logo from "../assets/Logo.svg";
import Defaultbutton from "./DeaultButton";

const Header = () => {
  return (
    <div className="header-container">
      <img className="logo-header" src={logo} alt="Logo Tour-bay" />

      <Box className="header-inner-container">
        <Typography
          className="cursor-pointer"
          sx={{ fontWeight: 500, fontSize: "18px" }}
        >
          Add Tour
        </Typography>
        <Typography
          className="cursor-pointer"
          sx={{ fontWeight: 500, fontSize: "18px" }}
        >
          Book Tour
        </Typography>
        <Typography
          className="cursor-pointer"
          sx={{ fontWeight: 500, fontSize: "18px" }}
        >
          My Tours
        </Typography>
      </Box>

      <Defaultbutton
        buttonCaption="Explore Now"
        buttonWidth="155px"
        buttonHeight="54px"
      />
    </div>
  );
};

export default Header;
