import { Box, Typography } from "@mui/material";
import TourCard from "../Tours/TourCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/root-reducer";
import noDataFound from "../../assets/images/no-data-found.svg";

const MyTours = () => {
  const tours = useSelector((state: RootState) => state.tour.tours);
  const bookings = useSelector((state: RootState) => state.user.bookings);

  const bookedTours = tours.filter((tour) =>
    bookings.some((booking) => booking.tourId === tour.id)
  );

  return (
    <div>
      <Box className="tours-header">
        <Typography className="tours-header-text">My Tours</Typography>
      </Box>
      <Box className="tours-images-container">
        {bookedTours.length > 0 ? (
          bookedTours.map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              tourLocation={tour.tourLocation}
              imgSource={tour.imgSource}
              tourDescription={tour.tourDescription}
              tourCost={tour.tourCost}
              tourDuration={tour.tourDuration}
            />
          ))
        ) : (
          <div className="no-data-container">
            <img src={noDataFound} alt="" />
            <Typography>You haven't booked any tours yet.</Typography>
          </div>
        )}
      </Box>
    </div>
  );
};

export default MyTours;
