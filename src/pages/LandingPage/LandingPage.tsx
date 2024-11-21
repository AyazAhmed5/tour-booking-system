import { Box, Typography } from "@mui/material";
import Defaultbutton from "../../components/DefaultButton/DefaultButton";
import { Link } from "react-router-dom";
import image1 from "../../assets/image-1.svg";
import image2 from "../../assets/image-2.svg";
import image3 from "../../assets/image-3.svg";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Box className="landing-page-left-container" sx={{ mt: 8 }}>
        <Typography className="landing-page-heading">
          <span className="rainbow-underline">Explore</span> The New World With
          Tourbay
        </Typography>

        <Typography className="landing-page-paragraph">
          No matter where in the world you want to go, we can help get you there
          and make your tour a stupendous memory.
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
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "40% 40%",
            gridTemplateRows: "1fr",
            gap: "20px",
            position: "absolute",
            bottom: "20px",
            height: "auto",
            width: "100%",
            justifyContent: "end",
          }}
        >
          <Box
            component="img"
            src={image1}
            alt="Image 1"
            sx={{
              gridRow: "1 / span 2",
              objectFit: "cover",
            }}
          />
          <Box component="img" src={image2} alt="Image 2" />
          <Box component="img" src={image3} alt="Image 3" />
        </Box>
      </Box>
    </div>
  );
};

export default LandingPage;
