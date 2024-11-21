import { Button } from "@mui/material";

interface DefaultbuttonProps {
  buttonCaption?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  route?: string;
}

const Defaultbutton = ({
  buttonCaption,
  buttonWidth = "155px",
  buttonHeight = "54px",
  route,
}: DefaultbuttonProps) => {
  return (
    <Button
      className="btn-1"
      variant="contained"
      sx={{
        backgroundColor: "#f16b51",
        fontWeight: 600,
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: "12px",
        padding: 0,
        visibility: route !== "/" ? "hidden" : "",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "#e55347",
        },
      }}
    >
      {buttonCaption ?? ""}
    </Button>
  );
};

export default Defaultbutton;
