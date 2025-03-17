import { useState, useEffect } from "react";
import { Box, InputLabel, MenuItem, Select, TextField, Button, Typography, IconButton, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Close } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const AddCropComponent = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [newCropName, setCropName] = useState("");
  const [newSize, setSize] = useState("");
  const [newCrops, setCrops] = useState("");
  const [newPastCrops, setPastCrops] = useState("");
  const [newCropImage, setCropImage] = useState("");
  const [newCropImage2, setCropImage2] = useState("");
  const [newCropImage3, setCropImage3] = useState("");

  const [availableFarms, setAvailableFarms] = useState([]); // Store farms
  const [selectedFarm, setSelectedFarm] = useState(""); // Store selected farm

  const { pathname } = useLocation();
  const headerTitle = pathname.split("/").filter(Boolean).pop();
  const modalTitle = headerTitle ? headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1) : "Details";

  // Fetch farms when the modal opens
  useEffect(() => {
    if (open) {
      const fetchFarms = async () => {
        try {
          const response = await fetch("http://localhost:3010/user/farms", {
            credentials: "include",
          });

          if (!response.ok) {
            throw new Error("Failed to fetch farms.");
          }

          const farms = await response.json();
          setAvailableFarms(farms);
        } catch (error) {
          console.error("Error fetching farms:", error);
        }
      };

      fetchFarms();
    }
  }, [open]); // Fetch farms only when modal opens

  const handleSubmit = async () => {
    const cropData = {
      farmId: selectedFarm ? Number(selectedFarm) : null,
      name: newCropName,
      cropImage: newCropImage,
      cropImage2: newCropImage2,
      cropImage3: newCropImage3,
      amountPlanted: Number(newSize) || 0, // Ensure number
      expectedHarvest: Number(newCrops) || 0, // Use `newCrops` for expectedHarvest?
      aiSuggestions: newPastCrops, // Assuming past crops could be AI suggestions?
    };
    

    try {
      const response = await fetch("http://localhost:3010/user/crops/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(cropData),
      });

      if (!response.ok) {
        throw new Error(`Failed to add crop: ${await response.text()}`);
      }

      console.log("Crop added successfully!");
      handleClose();
    } catch (error) {
      console.error("Error adding crop:", error);
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
          left: { xs: "82vw", md: "75.3vw" },

        }}
        onClick={handleOpen}
      >
        <Box
          id="addButton"
          sx={{
            width: { xs: "56px", sm: "60px", md: "60px" },
            height: { xs: "56px", sm: "60px", md: "60px" },
            border: "solid 2px #2c5f2dff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":hover": { backgroundColor: "rgb(255, 183, 0)", cursor: "pointer" },
          }}
        >
          <AddIcon sx={{ fontSize: "2rem",
            color: "#2c5f2dff"
           }} />
        </Box>
      </Box>

      <Modal open={open} onClose={handleClose} aria-labelledby="Details" aria-describedby="details">
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.background.paper,
            width: { xs: "400px", sm: "700px", md: "800px" },
            padding: "20px",
            borderRadius: "10px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
            height: "680px"

          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
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
            sx={{ display: "flex", flexDirection: "column", gap: "49px"}}
          >
            <TextField label="Crop Image" value={newCropImage} onChange={(e) => setCropImage(e.target.value)} sx={{height: "15px"}} />
            <TextField label="Crop Image 2" value={newCropImage2} onChange={(e) => setCropImage2(e.target.value)} sx={{height: "15px"}} />
            <TextField label="Crop Image 3" value={newCropImage3} onChange={(e) => setCropImage3(e.target.value)} sx={{height: "15px"}} />
            <TextField label="Crop Name" value={newCropName} onChange={(e) => setCropName(e.target.value)} sx={{height: "15px"}} />
            <TextField label="Size (Acres)" value={newSize} onChange={(e) => setSize(e.target.value)} sx={{height: "15px"}} type="number"/>
            <TextField label="Crops" value={newCrops} onChange={(e) => setCrops(e.target.value)} sx={{height: "15px"}}  />
            <TextField label="Past Crops" value={newPastCrops} onChange={(e) => setPastCrops(e.target.value)} sx={{height: "15px"}} />

            <Box
            sx={{margin: 0, padding: 0 }}
            >
            <InputLabel id="farm-select-label">Location</InputLabel>
            <Select
              labelId="farm-select-label"
              id="farm-select"
              value={selectedFarm}
              onChange={(e) => setSelectedFarm(e.target.value)}
              fullWidth
            >
              {availableFarms.length > 0 ? (
                availableFarms.map((farm) => (
                  <MenuItem key={farm.id} value={farm.id}>
                    {farm.name} - {farm.location}
                  </MenuItem>
                ))
              ) : (
                <MenuItem disabled>No farms available</MenuItem>
              )}
            </Select>
            </Box>  
          

            
          </Box>
          <Button variant="contained" onClick={handleSubmit}
          fullWidth
            sx={{
              margin: "10px auto",
              backgroundColor: "#2c5f2dff",
              ":hover": { backgroundColor: "rgb(255, 183, 0)", cursor: "pointer" },
            }}
            >
              Submit
            </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddCropComponent;
