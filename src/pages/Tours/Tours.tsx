import { Box, Button, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Tours.css";

import { toursData } from "../../utils";
import noDataFound from "../../assets/no-data-found.svg";
import TourCard from "./TourCard";

const Tours = () => {
  return (
    <>
      <div>
        <Box className="tours-header">
          <Typography>Top Destinations At “Miami”</Typography>
          <Button
            variant="outlined"
            className="tours-header-button"
            startIcon={<FilterListIcon />}
          >
            Filters
          </Button>
        </Box>
        {toursData.length ? (
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
        ) : (
          <div className="no-data-container">
            <img src={noDataFound} alt="" />
            <Typography>
              Sorry, We didn’t found any tour right now at “Miami”
            </Typography>
          </div>
        )}
      </div>
    </>
  );
};
export default Tours;
