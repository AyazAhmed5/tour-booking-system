import { Box, Button, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Tours.css";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";

import noDataFound from "../../assets/images/no-data-found.svg";
import TourCard from "./TourCard";
import { setSearchQuery } from "../../store/user/user.slice";

const Tours = () => {
  const dispatch = useDispatch();

  const tours = useSelector((state: RootState) => state.tour.tours);
  const searchQuery = useSelector((state: RootState) => state.user.searchQuery);
  let fileteredTours = tours;

  if (searchQuery) {
    fileteredTours = tours.filter(
      (tour) =>
        tour.startDate === searchQuery?.startDate &&
        tour.endDate === searchQuery?.endDate &&
        tour.tourCost === searchQuery?.priceRange
    );
  }

  const clearSearchHandler = () => {
    dispatch(setSearchQuery(null));
  };

  return (
    <>
      <div>
        <Box className="tours-header">
          <Typography>Top Destinations At “Miami”</Typography>
          <Box className="tours-header-buttons-box">
            {searchQuery && (
              <Button
                onClick={clearSearchHandler}
                variant="outlined"
                className="tours-header-button"
                startIcon={<FilterListIcon />}
              >
                Clear Search
              </Button>
            )}
            <Button
              variant="outlined"
              className="tours-header-button"
              startIcon={<FilterListIcon />}
            >
              Filters
            </Button>
          </Box>
        </Box>
        {fileteredTours.length ? (
          <Box className="tours-images-container">
            {fileteredTours.map((tour) => (
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
