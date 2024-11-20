import { Box, Typography } from "@mui/material";
import Defaultbutton from "../../components/DefaultButton/DefaultButton";
import { Link } from "react-router-dom";
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
          />
        </Link>
      </Box>
      {/* <Box
        className="landing-page-right-container"
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            width: "100%",
            height: "auto",
            position: "absolute",
            bottom: "20px",
          }}
        >
          <Box
            component="img"
            src={image1}
            alt="Image 1"
            sx={{
              width: "300px",
              height: "556px",
              gridRow: "1 / span 2",
              objectFit: "cover",
            }}
          />
          <Box
            component="img"
            src={image2}
            alt="Image 2"
            sx={{ width: "330px", height: "266px" }}
          />
          <Box
            component="img"
            src={image3}
            alt="Image 3"
            sx={{ width: "331px", height: "266px" }}
          />
        </Box>
      </Box> */}
    </div>
  );
};

export default LandingPage;
