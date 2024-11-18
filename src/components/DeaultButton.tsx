import { Button } from "@mui/material";

interface DefaultbuttonProps {
  buttonCaption: string;
  buttonWidth?: string;
  buttonHeight?: string;
}

const Defaultbutton = ({
  buttonCaption,
  buttonWidth = "155px",
  buttonHeight = "54px",
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
      }}
    >
      {buttonCaption}
    </Button>
  );
};

export default Defaultbutton;
