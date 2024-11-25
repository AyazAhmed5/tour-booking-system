import { Box, Typography } from "@mui/material";
import TourCard from "../Tours/TourCard";
import { toursData } from "../../utils";

const MyTours = () => {
  return (
    <div>
      <Box className="tours-header">
        <Typography className="tours-header-text">My Tours</Typography>
      </Box>
      <Box className="tours-images-container">
        {toursData.map(
          (tour, index) =>
            index < 4 && (
              <TourCard
                key={tour.id}
                id={tour.id}
                tourLocation={tour.tourLocation}
                imgSource={tour.imgSource}
                tourDescription={tour.tourDescription}
                tourCost={tour.tourCost}
                tourDuration={tour.tourDuration}
              />
            )
        )}
      </Box>
    </div>
  );
};
export default MyTours;
