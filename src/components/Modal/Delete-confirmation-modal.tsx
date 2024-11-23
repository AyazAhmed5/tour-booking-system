import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Delete-confirmation-modal.css";

interface DeleteConfirmationModalProps {
  onCloseHandler: () => void;
  tourName: string;
  tourRemainingDays: string;
}

export default function DeleteConfirmationModal({
  onCloseHandler,
  tourName,
  tourRemainingDays,
}: DeleteConfirmationModalProps) {
  return (
    <Modal
      keepMounted
      open={true}
      onClose={onCloseHandler}
      aria-labelledby="delete-modal-title"
      aria-describedby="delete-modal-description"
    >
      <Box className="modal-container">
        <Typography
          id="delete-modal-title"
          component="h2"
          className="modal-title"
        >
          Delete Tour
        </Typography>
        <Typography id="delete-modal-description" className="modal-description">
          You can’t delete <strong>“{tourName}”</strong> because there are only{" "}
          <strong>{tourRemainingDays}</strong> remaining until the beginning of
          this tour.
        </Typography>
        <div className="modal-button-container">
          <Button
            variant="outlined"
            onClick={onCloseHandler}
            className="cancel-button"
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
