import { Box, Modal, TextField, Typography, IconButton, Button } from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import { useState } from "react";
import { useLocation } from "react-router-dom"; // Import the hook
import PropTypes from "prop-types";

const ModalComponent = ({ farmName, location, crops, livestock, size, image, onSubmit }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation(); // Get the current location
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Local state for form values
  const [newFarmName, setFarmName] = useState(farmName);
  const [newLocation, setLocation] = useState(location);
  const [newSize, setSize] = useState(size);
  const [newCrops, setCrops] = useState(crops);
  const [newLivestock, setLivestock] = useState(livestock);

  const toggleEdit = () => setIsEditable(!isEditable);

  const handleSubmit = () => {
    onSubmit({
      farmName: newFarmName,
      location: newLocation,
      size: newSize,
      crops: newCrops,
      livestock: newLivestock,
      image,
    });
    setIsEditable(false);
    handleClose();
  };

  // Extract the last segment of the pathname
  const headerTitle = pathname.split("/").filter(Boolean).pop(); // Get the last part of the path

  return (
    <div>
      <Button onClick={handleOpen}>View Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Dynamic Modal"
        aria-describedby="Dynamic Modal Content"
      >
        <Box
          id="modalContentContainer"
          sx={{
            backgroundColor: "white",
            width: { xs: "400px", sm: "700px", md: "1000px" },
            height: { xs: "600px", sm: "700px", md: "650px" },
            alignSelf: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
            padding: "20px",
            outline: "0",
          }}
        >
          <Box
            id="modalContent"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "rgba(47, 45, 45, 0.19)",
              borderRadius: "8px",
            }}
          >
            <Box id="contentHeader" sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" }, padding: "10px" }}
              >
                {headerTitle ? headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1) : "Details"}
              </Typography>
              <IconButton onClick={toggleEdit}>
                <EditIcon />
              </IconButton>
            </Box>
            <Box
              id="contentBody"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "20px",
                width: "100%",
              }}
            >
              <Typography variant="body1">Farm Name:</Typography>
              {isEditable ? (
                <TextField
                  variant="outlined"
                  fullWidth
                  value={newFarmName}
                  onChange={(e) => setFarmName(e.target.value)}
                />
              ) : (
                <Typography>{newFarmName}</Typography>
              )}

              <Typography variant="body1">Location:</Typography>
              {isEditable ? (
                <TextField
                  variant="outlined"
                  fullWidth
                  value={newLocation}
                  onChange={(e) => setLocation(e.target.value)}
                />
              ) : (
                <Typography>{newLocation}</Typography>
              )}

              <Typography variant="body1">Size:</Typography>
              {isEditable ? (
                <TextField
                  variant="outlined"
                  fullWidth
                  value={newSize}
                  onChange={(e) => setSize(e.target.value)}
                />
              ) : (
                <Typography>{newSize}</Typography>
              )}

              <Typography variant="body1">Crops:</Typography>
              {isEditable ? (
                <TextField
                  variant="outlined"
                  fullWidth
                  value={newCrops}
                  onChange={(e) => setCrops(e.target.value)}
                />
              ) : (
                <Typography>{newCrops}</Typography>
              )}

              <Typography variant="body1">Livestock:</Typography>
              {isEditable ? (
                <TextField
                  variant="outlined"
                  fullWidth
                  value={newLivestock}
                  onChange={(e) => setLivestock(e.target.value)}
                />
              ) : (
                <Typography>{newLivestock}</Typography>
              )}

              {isEditable && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  sx={{ alignSelf: "flex-end", marginTop: "20px" }}
                >
                  Submit
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  farmName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  crops: PropTypes.string.isRequired,
  livestock: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  image: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

export default ModalComponent;
