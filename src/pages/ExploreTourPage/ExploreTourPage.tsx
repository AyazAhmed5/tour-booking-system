import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import "./ExploreTour.css";
import searchIcon from "../../assets/search-icon.svg";
import locationIcon from "../../assets/location-icon.svg";
import priceIcon from "../../assets/price-icon.svg";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useState } from "react";
import { popularDestinations, priceRanges } from "../../utils";

const ExploreTourPage = () => {
  const [priceRange, setPriceRange] = useState<string>("");

  const handlePriceChange = (event: SelectChangeEvent<string>) => {
    setPriceRange(event.target.value);
  };

  return (
    <>
      <div className="outer-wrapperr"></div>
      <Box className="explore-page-container">
        <Paper
          elevation={5}
          className="middle-container"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            padding: { xs: 2, md: 3 },
            width: { xs: "90%", sm: "80%", md: "60%" },
          }}
        >
          {/* Location Section */}
          <Box
            className="location-date-box"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              flex: 1,
              paddingRight: { xs: 0, md: 2 },
              borderRight: { xs: "none", md: "1px solid #E1E1E1" },
              marginBottom: { sxs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
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
              <Typography className="middle-headings">Location</Typography>
            </Box>
            <Typography className="middle-sub-headings">
              Where do you want to go?
            </Typography>
          </Box>

          {/* Date Section */}
          <Box
            className="location-date-box"
            sx={{
              paddingRight: { xs: 0, md: 2 },
              borderRight: { xs: "none", md: "1px solid #E1E1E1" },
              marginBottom: { xs: 2, md: 0 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <div className="icon-outer-container">
                <CalendarMonthOutlinedIcon style={{ color: "#75778B" }} />
              </div>
              <Typography className="middle-headings">Choose Date</Typography>
            </Box>
            <Typography className="middle-sub-headings">
              26 Mar - 4 Apr
            </Typography>
          </Box>

          {/* Price Range Section */}
          <Box
            className="location-date-box"
            sx={{
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
              <Typography className="middle-headings">Price Range</Typography>
            </Box>
            <FormControl
              fullWidth
              sx={{
                borderRadius: "12px",
                maxWidth: "150px",
                paddingLeft: "30px",
              }}
            >
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priceRange}
                onChange={handlePriceChange}
                sx={{
                  "& .MuiSelect-select": {
                    padding: "10px 12px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: "20px",
                    right: "8px",
                  },
                }}
              >
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
            className="button-search"
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
        <Box className="bottom-container">
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
              width: { xs: "75%", sm: "80%", md: "90%" },
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
                    fontSize: { xs: "14px", sm: "16px", md: "18px" },
                    height: { xs: "15px", sm: "20px", md: "35px" },
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
