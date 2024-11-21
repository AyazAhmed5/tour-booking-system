import { Box, Button, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Tours.css";
import TourCard from "./TourCard";
import { toursData } from "../../utils";

const Tours = () => {
  return (
    <div>
      <Box className="tours-header">
        <Typography
          className="tours-header-text"
          sx={{ fontSize: "40px", fontWeight: 600 }}
        >
          Top Destinations At “Miami”
        </Typography>
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            color: "inherit",
            textTransform: "none",
            borderColor: "#E1E1E1",
            borderRadius: "12px",
            fontWeight: 500,
            fontSize: "20px",
          }}
        >
          Filters
        </Button>
      </Box>
      <Box className="tours-images-container">
        {toursData.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            tourLocation={tour.tourLocation}
            imgSource={tour.imgSource}
            tourDescription={tour.tourDescription}
            tourCost={tour.tourCost}
            tourDuration={tour.tourDuration}
          />
        ))}
      </Box>
    </div>
  );
};
export default Tours;
