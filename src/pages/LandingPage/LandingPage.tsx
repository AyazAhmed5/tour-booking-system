import { Box, Typography } from "@mui/material";
import Defaultbutton from "../../components/DefaultButton/DefaultButton";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/image-1.svg";
import image2 from "../../assets/images/image-2.svg";
import image3 from "../../assets/images/image-3.svg";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="outer-wrapper"></div>
      <div className="landing-page-container">
        <Box className="landing-page-left-container" sx={{ mt: 8 }}>
          <Typography className="landing-page-heading">
            <span className="rainbow-underline">Explore</span> The New World
            With Tourbay
          </Typography>

          <Typography className="landing-page-paragraph">
            No matter where in the world you want to go, we can help get you
            there and make your tour a stupendous memory.
          </Typography>

          <Link to={"/explore-tour"}>
            <Defaultbutton
              buttonCaption="Explore Now"
              buttonWidth="155px"
              buttonHeight="54px"
              route="/"
            />
          </Link>
        </Box>
        <Box
          className="landing-page-right-container"
          sx={{
            position: "relative",
            width: "60%",
          }}
        >
          <div className="image-grid">
            <img src={image1} alt="Left " className="image left-image" />
            <img src={image2} alt="Top Right " className="image top-right" />
            <img
              src={image3}
              alt="Bottom Right "
              className="image bottom-right"
            />
          </div>
        </Box>
      </div>
    </>
  );
};

export default LandingPage;
