
import { Box } from "@mui/material";
import { useState } from "react";
import { Modal, TextField, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Close } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const AddComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newFarmName, setFarmName] = useState("");
  const [newFarmImage, setFarmImage] = useState("");
  const [newLocation, setLocation] = useState("");
  const [newSize, setSize] = useState("");
  const [newCrops, setCrops] = useState("");
  const [newLivestock, setLivestock] = useState("");

  const { pathname } = useLocation();
  const headerTitle = pathname.split("/").filter(Boolean).pop();
  const modalTitle = headerTitle ? headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1) : "Details";

  const handleSubmit = async () => {
    const farmData = {
      name: newFarmName,
      location: newLocation,
      size: newSize,
      cropsId: newCrops ? Number(newCrops) : null,   // Convert to number or null
      livestockId: newLivestock ? Number(newLivestock) : null,  // Convert to number or null
      imageUrl: newFarmImage,
    };
  
    try {
      const response = await fetch("http://localhost:3010/user/farms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(farmData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add farm: ${await response.text()}`);
      }
  
      console.log("Farm added successfully!");
      handleClose();
    } catch (error) {
      console.error("Error adding farm:", error);
    }
  };
  
  
  

  return (
    <Box id="addComponentContainer">
      <Box
        id="addButtonContainer"
        sx={{
          maxWidth: "100px",
          maxHeight: "100px",
          display: "flex",
          justifyContent: "center",
          padding: "1px",
          position: "fixed",
          top: { xs: "93vh", md: "90vh" },
          left: { xs: "82vw", md: "75vw" },
        }}
        onClick={handleOpen}
      >
        <Box
          id="addButton"
          sx={{
            width: { xs: "56px", sm: "60px", md: "60px" },
            height: { xs: "56px", sm: "60px", md: "60px" },
            backgroundColor: "#2c5f2dff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":hover": { backgroundColor: "rgb(255, 183, 0)", cursor: "pointer" },
          }}
        >
          <AddIcon sx={{ fontSize: "2rem" }} />
        </Box>
      </Box>

      <Modal open={open} onClose={handleClose} aria-labelledby="Details" aria-describedby="details">
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
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
              }}
            >
              {modalTitle} Details
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
          </Box>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}
          >
            <TextField label="Farm Image" value={newFarmImage} onChange={(e) => setFarmImage(e.target.value)} />
            <TextField label="Farm Name" value={newFarmName} onChange={(e) => setFarmName(e.target.value)} />
            <TextField label="Location" value={newLocation} onChange={(e) => setLocation(e.target.value)} />
            {/* Map SHould be heree where location is */}
            <TextField label="Size" value={newSize} onChange={(e) => setSize(e.target.value)} />
            <TextField label="Crops" value={newCrops} onChange={(e) => setCrops(e.target.value)} />
            <TextField label="Livestock" value={newLivestock} onChange={(e) => setLivestock(e.target.value)} />
            <Button variant="contained" onClick={handleSubmit}
            sx={{
              backgroundColor: "#2c5f2dff",
              '&:active':{
                backgroundColor: "#f7d17b"
              },
            }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddComponent;
