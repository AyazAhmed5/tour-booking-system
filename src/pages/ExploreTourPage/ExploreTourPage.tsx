import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
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
  const priceRanges = [
    { value: "50-200", label: "$50 - $200" },
    { value: "200-400", label: "$200 - $400" },
    { value: "400-600", label: "$400 - $600" },
    { value: "600-800", label: "$600 - $800" },
    { value: "800-1000", label: "$800 - $1000" },
    { value: "1000+", label: "$1000 Above" },
  ];
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
    <>
      <div className="outer-wrapperr"></div>
      <Box className="explore-page-container">
        <Paper
          elevation={5}
          className="middle-container"
          sx={{
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" }, // Stack items on small screens
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            padding: { xs: 2, md: 3 },
            width: { xs: "90%", sm: "60%", md: "50%" },
            margin: "auto",
            borderRadius: "12px",
            zIndex: 2,
          }}
        >
          {/* Location Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              flex: 1,
              paddingRight: { xs: 0, md: 2 },
              borderRight: { xs: "none", md: "1px solid #E1E1E1" }, // Remove border on mobile
              marginBottom: { xs: 2, md: 0 }, // Add space between rows on mobile
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img
                src={locationIcon}
                alt="Location Icon"
                style={{ width: "16px", height: "16px" }}
              />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                Location
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#999",
                marginTop: "4px",
                marginLeft: "40px",
              }}
            >
              Where do you want to go?
            </Typography>
          </Box>

          {/* Date Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              flex: 1,
              paddingRight: { xs: 0, md: 2 },
              borderRight: { xs: "none", md: "1px solid #E1E1E1" },
              marginBottom: { xs: 2, md: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img
                src={locationIcon} // Replace with a date icon
                alt="Date Icon"
                style={{ width: "16px", height: "16px" }}
              />
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                Choose Date
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#999",
                marginTop: "4px",
                marginLeft: "50px",
              }}
            >
              26 Mar - 4 Apr
            </Typography>
          </Box>

          {/* Price Range Section */}
          {/* Price Range Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              flex: 1,
              marginBottom: { xs: 2, md: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <div className="icon-outer-container">
                <img
                  src={priceIcon}
                  alt="Price Icon"
                  style={{ width: "14px", height: "18px" }}
                />
              </div>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                Price Range
              </Typography>
            </Box>
            <FormControl
              fullWidth
              sx={{
                borderRadius: "12px",
                maxWidth: "300px",
                paddingLeft: "30px",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priceRange}
                onChange={handlePriceChange}
                sx={{
                  paddingRight: "22px", // Control padding around the dropdown icon
                  "& .MuiSelect-select": {
                    padding: "10px 12px", // Adjust inner content padding
                    lineHeight: "1.5", // Ensure consistency with the label height
                  },
                  "& .MuiOutlinedInput-root": {
                    paddingRight: "8px", // Adjust the space for the dropdown icon
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none", // Optional: Remove the border
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: "20px", // Adjust the icon size
                    right: "8px", // Ensure the icon is aligned to the right
                  },
                }}
              >
                {/* Placeholder MenuItem */}
                {!priceRange && (
                  <MenuItem disabled value="">
                    Choose Here
                  </MenuItem>
                )}
                {priceRanges.map((range) => (
                  <MenuItem key={range.value} value={range.value}>
                    {range.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Search Button */}
          <Button
            sx={{
              minWidth: "54px",
              height: "74px",
              backgroundColor: "#F16B51",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#e95b45",
              },
            }}
          >
            <img
              src={searchIcon}
              alt="Search Icon"
              style={{ width: "24px", height: "24px" }}
            />
          </Button>
        </Paper>
        <Box
          className="bottom-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            gap: 2, // Space between children
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: { xs: "14px", sm: "16px", md: "20px" },
              lineHeight: { xs: "24px", sm: "28px", md: "32px" },
              textAlign: "center",
            }}
          >
            Popular Search
          </Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              width: { xs: "75%", sm: "80%", md: "90%" }, // Responsive width
            }}
          >
            {popularDestinations.map((destination, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                {" "}
                <Chip
                  className="chip-design"
                  label={destination}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font size
                    height: { xs: "15px", sm: "20px", md: "35px" }, // Responsive height
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default ExploreTourPage;
