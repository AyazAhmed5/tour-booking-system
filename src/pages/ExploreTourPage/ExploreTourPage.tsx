import { Box, Button, Chip, Paper, Stack, Typography } from "@mui/material";
import bgImage from "../../assets/bgExploreTour.svg";
import "./ExploreTour.css";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import calendarIcon from "../../assets/calendar-icon.svg";
import priceIcon from "../../assets/price-icon.svg";

const ExploreTourPage = () => {
  const popularDestinations = [
    "Istanbul",
    "Dubai",
    "Miami",
    "Chicago",
    "Dallas",
    "Havana",
    "Berlin",
    "London",
    "Ankara",
    "Orlando",
    "Cape Town",
    "Santroni",
    "Madrid",
    "Lisbon",
    "New Orleans",
  ];
  return (
    <Box className="explore-page-container">
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100vw",
          height: "55vh",
          zIndex: -1,
        }}
      >
        <img
          src={bgImage}
          alt="Explore Tour Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Paper elevation={5} className="middle-container">
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <div className="icon-outer-container">
              <img
                src={locationIcon}
                alt="Explore Tour Background"
                style={{
                  width: "14px",
                  height: "18px",
                }}
              />
            </div>
            <Typography className="middle-container-text ">Location</Typography>
          </Box>
          <Typography className="middle-secondary-text ">
            Where you want to go?
          </Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <div className="icon-outer-container">
              <img
                src={calendarIcon}
                alt="Explore Tour Background"
                style={{
                  width: "14px",
                  height: "18px",
                }}
              />
            </div>
            <Typography className="middle-container-text ">
              Choose Date
            </Typography>
          </Box>
          <Typography className="middle-secondary-text">Choose here</Typography>
        </Box>
        <Box
          sx={{
            margin: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <div className="icon-outer-container">
              <img
                src={priceIcon}
                alt="Explore Tour Background"
                style={{
                  width: "14px",
                  height: "18px",
                }}
              />
            </div>
            <Typography className="middle-container-text  ">
              Price Range
            </Typography>
          </Box>

          <Typography className=" middle-secondary-text">
            Choose here
          </Typography>
        </Box>
        <Button
          className="button-search"
          startIcon={
            <img
              src={searchIcon}
              alt="searchIcon "
              style={{ width: 24, height: 24, paddingLeft: "10px" }}
            />
          }
        />
      </Paper>

      <Box className="bottom-container">
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "28px",
            lineHeight: "42px",
            justifySelf: "center",
            margin: "10px",
          }}
        >
          Popular Search
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          useFlexGap
          sx={{
            flexWrap: "wrap",
            justifyContent: "",
            width: "60%",
          }}
        >
          {popularDestinations.map((destination, index) => (
            <Chip
              key={index}
              className="chip-design"
              label={destination}
              variant="outlined"
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
export default ExploreTourPage;
