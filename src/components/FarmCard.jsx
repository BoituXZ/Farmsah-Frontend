import { Box, Button, Modal, TextField, Typography, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Close, Edit } from "@mui/icons-material";

// TODO: Fix modal not closing
const FarmCard = ({ slug, farmName, location, size, crops, livestock, image,}) => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newFarmName, setFarmName] = useState(farmName);
  const [newLocation, setLocation] = useState(location);
  const [newSize, setSize] = useState(size);
  const [newCrops, setCrops] = useState(crops);
  const [newLivestock, setLivestock] = useState(livestock);
  const [newFarmImage, setFarmImage] = useState(image);

  // Updated handleOpen function with check for open state
  const handleOpen = () => {
    if (!open) {
      setOpen(true); // Open modal only if it's not already open
    }
  };
  
  const handleClose = () => {
    setOpen(false);
    setIsEditing(false); // Reset editing state when modal closes
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  

  const handleEditClick = () => setIsEditing(true);
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3010/user/farms/${slug}`, {
        method: "PUT",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newFarmName,
          location: newLocation,
          size: newSize,
          crops: newCrops,
          livestock: newLivestock,
          imageUrl: newFarmImage,
        }),
      });

      if (!response.ok) throw new Error("Failed to update farm");

      console.log("Farm updated successfully");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating farm:", error);
    }
  };

  return (
    <Box
      id="farmCardContainer"
      component="div"
      onClick={handleOpen}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "100%", md: "90%" },
        padding: "15px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        height: { xs: "280px", sm: "280px", md: "420px" },
        borderRadius: "9px",
        margin: { xs: "auto", sm: "auto", md: "0" },
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Box id="cardHeader" sx={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <Typography variant="h2" sx={{ fontSize: { xs: "1rem" } }}>
          {farmName}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}>
          Location: {location}
        </Typography>
      </Box>

      <Box id="cardImage" sx={{ maxHeight: { xs: "100px", md: "300px" }, overflow: "hidden" }}>
        <img
          src={image}
          alt="Farm"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <Box id="cardDetails" sx={{ padding: "10px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px" }}>
        <Typography>Size: {size}</Typography>
        <Typography>Crops: {crops}</Typography>
        <Typography>Livestock: {livestock}</Typography>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={handleClose} aria-labelledby="Farm Details" aria-describedby="Edit farm details">
        <Box
          sx={{
            backgroundColor: "white",
            width: { xs: "400px", sm: "700px", md: "800px" },
            padding: "20px",
            borderRadius: "10px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Farm Details</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
              <IconButton onClick={handleEditClick}>
                <Edit />
              </IconButton>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
          </Box>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}
          >
            {isEditing && (
              <>
                <TextField label="Farm Image" value={newFarmImage} onChange={(e) => setFarmImage(e.target.value)} />
                <TextField
                  label="Farm Name"
                  value={newFarmName}
                  onChange={(e) => setFarmName(e.target.value)}
                />
                <TextField
                  label="Location"
                  value={newLocation}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <TextField
                  label="Size"
                  value={newSize}
                  onChange={(e) => setSize(e.target.value)}
                />
                <TextField
                  label="Crops"
                  value={newCrops}
                  onChange={(e) => setCrops(e.target.value)}
                />
                <TextField
                  label="Livestock"
                  value={newLivestock}
                  onChange={(e) => setLivestock(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    console.log({
                      newFarmName,
                      newLocation,
                      newSize,
                      newCrops,
                      newLivestock,
                    });handleSubmit();
                    setIsEditing(false); // Close editing mode
                  }}
                >
                  Submit
                </Button>
              </>
            )}

            {!isEditing && (
              <>
                <Typography>Farm Name: {newFarmName}</Typography>
                <Typography>Location: {newLocation}</Typography>
                <Typography>Size: {newSize}</Typography>
                <Typography>Crops: {newCrops}</Typography>
                <Typography>Livestock: {newLivestock}</Typography>
              </>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

FarmCard.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  farmName: PropTypes.string,
  location: PropTypes.string,
  size: PropTypes.string,
  crops: PropTypes.string,
  livestock: PropTypes.string,

};

export default FarmCard;
