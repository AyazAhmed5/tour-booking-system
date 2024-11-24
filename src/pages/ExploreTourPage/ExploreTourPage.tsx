import {
  Box,
  Button,
  Chip,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import bgImage from "../../assets/bgExploreTour.svg";
import "./ExploreTour.css";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import priceIcon from "../../assets/price-icon.svg";
import { useState } from "react";

const ExploreTourPage = () => {
  const [priceRange, setPriceRange] = useState<string>("");
  const handlePriceChange = (event: SelectChangeEvent<string>) => {
    setPriceRange(event.target.value);
  };
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
                src={locationIcon}
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
          <Typography className="middle-secondary-text ">
            Choose Here
          </Typography>
        </Box>
        {/* Price Range Section */}
        <Box sx={{ margin: "auto" }}>
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
                alt="Price Icon"
                style={{ width: "14px", height: "18px" }}
              />
            </div>

            <Typography className="middle-container-text">
              Price Range
            </Typography>
          </Box>

          <Select
            value={priceRange}
            onChange={handlePriceChange}
            variant="outlined"
            sx={{
              width: "100%",
              border: "none",
              borderRadius: "12px",
              textTransform: "none",
              "& .MuiSelect-select": {
                padding: "5px 50px", // Adjust the padding to reduce the distance
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },

              "& .MuiMenuItem-root:hover": {
                backgroundColor: "#F16B5133", // Hover effect for each MenuItem (dropdown option)
              },
            }}
          >
            <MenuItem value="">Choose Here</MenuItem>
            <MenuItem className="select-text" value="50-200">
              $50 - $200
            </MenuItem>
            <MenuItem className="select-text" value="200-400">
              $200 - $400
            </MenuItem>
            <MenuItem className="select-text" value="400-600">
              $400 - $600
            </MenuItem>
            <MenuItem className="select-text" value="600-800">
              $600 - $800
            </MenuItem>
            <MenuItem className="select-text" value="800-1000">
              $800 - $1000
            </MenuItem>
            <MenuItem className="select-text" value="1000+">
              $1000 Above
            </MenuItem>
          </Select>
        </Box>

        <Button
          className="button-search"
          startIcon={
            <img
              src={searchIcon}
              alt="searchIcon"
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
            justifyContent: "center",
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
