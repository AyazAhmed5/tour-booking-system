import { Box, Paper, Typography } from "@mui/material";
import "./Tours.css";
import priceIcon from "../../assets/price-icon.svg";
import DeleteIcon from "../../assets/delete icon.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Defaultbutton from "../../components/DefaultButton/DefaultButton";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import DeleteConfirmationModal from "../../components/Modal/Delete-confirmation-modal";
interface TourCardProps {
  id: string;
  tourLocation: string;
  imgSource: string;
  tourDescription: string;
  tourCost: string;
  tourDuration: string;
}

const TourCard: React.FC<TourCardProps> = ({
  id,
  tourLocation,
  imgSource,
  tourDescription,
  tourCost,
  tourDuration,
}) => {
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);

  const onClickHandler = () => {
    setShowModal(true);
  };
  const onCloseClickHandler = () => {
    setShowModal(false);
  };

  return (
    <Paper elevation={2} className="complete-card-container cursor-pointer">
      <Box className={"image-container"}>
        <img className={"image"} src={imgSource} alt="" />
      </Box>
      <Box className="card-lower-container">
        <Typography
          sx={{ fontSize: "20px", fontWeight: 500, lineHeight: "30px" }}
        >
          {tourLocation}
        </Typography>
        <Typography
          className="truncate"
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
            color: "#999999",
            maxWidth: "370px",
            maxHeight: "48px",
          }}
        >
          {tourDescription}
        </Typography>
        <Box className="price-duration">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <div
              className="icon-outer-container"
              style={{ width: "24px", height: "24px" }}
            >
              <img
                src={priceIcon}
                alt="Explore Tour Background"
                style={{
                  width: "10px",
                  height: "15px",
                }}
              />
            </div>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#797C9A",
              }}
            >
              {tourCost}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <div
              className="icon-outer-container"
              style={{ width: "24px", height: "24px" }}
            >
              <AccessTimeIcon sx={{ color: "gray", fontSize: "18px" }} />
            </div>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
                color: "#797C9A",
              }}
            >
              {tourDuration}
            </Typography>
          </Box>
        </Box>
        <Box className="buttons-icon">
          {location.pathname === "/my-tours" ? (
            <Link
              to={`/tour-detail/${id}`}
              style={{ display: "inline-block", width: "100%" }}
            >
              <Defaultbutton
                buttonCaption="View Details"
                buttonWidth="100%"
                buttonHeight="57px"
                route="/"
              />
            </Link>
          ) : (
            <>
              <img
                onClick={onClickHandler}
                className="delete-icon"
                src={DeleteIcon}
                alt=""
              />
              <Defaultbutton
                buttonCaption="Details"
                buttonWidth="155px"
                buttonHeight="54px"
                route="/"
              />
              <Defaultbutton
                buttonCaption="Update"
                buttonWidth="155px"
                buttonHeight="54px"
                route="/"
              />
            </>
          )}
        </Box>
      </Box>
      {showModal && (
        <DeleteConfirmationModal
          tourName={tourLocation}
          tourRemainingDays={tourDuration}
          onCloseHandler={onCloseClickHandler}
        />
      )}
    </Paper>
  );
};
export default TourCard;
