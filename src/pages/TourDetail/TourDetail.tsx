import { useParams } from "react-router-dom";
import "./TourDetail.css";
import { toursData } from "../../utils";
import { Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import locationIcon from "../../assets/images/location-icon.svg";
import priceIcon from "../../assets/images/price-icon.svg";
import smallImage1 from "../../assets/images/small-image-1.png";
import smallImage2 from "../../assets/images/small-image-2.png";
import smallImage3 from "../../assets/images/small-image-3.png";
import smallImage4 from "../../assets/images/small-image-4.png";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";

const TourDetail = () => {
  const { id } = useParams();
  const currentTour = toursData[Number(id) - 1];
  return (
    <div className="details-main-container">
      <Typography className="details-heder-text">
        {currentTour.tourLocation}
      </Typography>
      <Box className="detail-sub-header">
        <Box className="icon-common-styles">
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
          <Typography className="details-sub-header-text">Miami</Typography>
        </Box>
        <Box className="icon-common-styles">
          <div
            className="icon-outer-container"
            style={{ width: "24px", height: "24px" }}
          >
            <img
              src={priceIcon}
              alt="Price-icon"
              style={{
                width: "10px",
                height: "15px",
              }}
            />
          </div>
          <Typography className="details-sub-header-text">
            {currentTour.tourCost}
          </Typography>
        </Box>
        <Box className="icon-common-styles">
          <div
            className="icon-outer-container"
            style={{ width: "24px", height: "24px" }}
          >
            <AccessTimeIcon sx={{ color: "gray", fontSize: "18px" }} />
          </div>
          <Typography className="details-sub-header-text">
            {currentTour.tourDuration}
          </Typography>
        </Box>
      </Box>

      <div className="grid-container">
        <div className="large-image">
          <img src={currentTour.imgSource} alt="Large " />
        </div>
        <div className="small-images">
          <img src={smallImage1} alt="Small-1 " />
          <img src={smallImage2} alt="Small-2" />
          <img src={smallImage3} alt="Small-3" />
          <img src={smallImage4} alt="Small-4" />
        </div>
      </div>

      {/* New Paragraphs Section */}
      <Box className="details-paragraphs-container">
        <Typography>{currentTour.tourDescription}</Typography>
        <Typography>{currentTour.tourDescription1}</Typography>
        <Typography>{currentTour.tourDescription2}</Typography>
      </Box>

      <Box className="included-section">
        <Typography component="h2">What’s included</Typography>

        <table className="included-table">
          <tbody>
            <tr>
              <td className="bold-text">Destination</td>
              <td>Miami</td>
            </tr>
            <tr>
              <td className="bold-text">Departure Location</td>
              <td>2000 Brush St, Detroit, MI 48226, United States</td>
            </tr>
            <tr>
              <td className="bold-text">Return</td>
              <td>7:00 PM on Day 3</td>
            </tr>
            <tr>
              <td className="bold-text">Return</td>
              <td colSpan={2} className="icon-cell">
                <div className="icon-grid">
                  <Typography>
                    <CheckCircleRoundedIcon sx={{ color: "#F16B51" }} /> Basic
                    first aid kit
                  </Typography>
                  <Typography>
                    <CheckCircleRoundedIcon sx={{ color: "#F16B51" }} /> Fuel
                    Expense
                  </Typography>
                  <Typography>
                    <CheckCircleRoundedIcon sx={{ color: "#F16B51" }} /> Detail
                    Guided Maps
                  </Typography>
                  <Typography>
                    <CheckCircleRoundedIcon sx={{ color: "#F16B51" }} />
                    Comfortable Private Booked Transport
                  </Typography>
                  <Typography>
                    <CheckCircleRoundedIcon sx={{ color: "#F16B51" }} /> Mess
                    Tent, Kitchen Utensils, and Cook
                  </Typography>
                  <Typography>
                    <CheckCircleRoundedIcon sx={{ color: "#F16B51" }} />{" "}
                    Waterproof Tents on twin/triple Sharing
                  </Typography>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Box>

      {/*Itinerary Section */}
      <Box className="itinerary-section">
        <Typography component="h2">Itinerary Schedule</Typography>

        <Box className="itinerary-cards">
          <Box className="itinerary-card">
            <Box className="itinerary-card-header">
              <Typography component="h3">Day 1</Typography>
              <Typography className="temperature-display">
                <WbSunnyOutlinedIcon className="temperature-title" />
                18°C
              </Typography>
            </Box>
            <ul>
              <li>Tours with American Sign Language</li>
              <li>Audio description group tours</li>
              <li>Large-print gallery notes</li>
              <li>Lunch included.</li>
            </ul>
          </Box>

          <Box className="itinerary-card">
            <Box className="itinerary-card-header">
              <Typography component="h3">Day 2</Typography>
              <Typography className="temperature-display">
                <CloudQueueOutlinedIcon className="temperature-title" />
                14°C
              </Typography>
            </Box>
            <ul>
              <li>Tours with American Sign Language</li>
              <li>Audio description group tours</li>
              <li>Large-print gallery notes</li>
              <li>Lunch included.</li>
            </ul>
          </Box>

          <Box className="itinerary-card">
            <Box className="itinerary-card-header">
              <Typography component="h3">Day 3</Typography>
              <Typography className="temperature-display">
                <WbSunnyOutlinedIcon className="temperature-title" />
                17°C
              </Typography>
            </Box>
            <ul>
              <li>Tours with American Sign Language</li>
              <li>Audio description group tours</li>
              <li>Large-print gallery notes</li>
              <li>Lunch included.</li>
            </ul>
          </Box>
        </Box>

        <Box className="book-now-container">
          <button>Book Now</button>
        </Box>
      </Box>
    </div>
  );
};
export default TourDetail;
