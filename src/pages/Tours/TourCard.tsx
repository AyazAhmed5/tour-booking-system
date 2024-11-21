import { Box, Paper, Typography } from "@mui/material";
import "./Tours.css";
import priceIcon from "../../assets/price-icon.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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
  return (
    <Paper elevation={2} className="complete-card-container">
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "75%",
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
      </Box>
    </Paper>
  );
};
export default TourCard;
