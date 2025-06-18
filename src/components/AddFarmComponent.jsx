
import { Box } from "@mui/material";
import { useState } from "react";
import { Modal, TextField, Button, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Close } from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import LocationPicker from "./LocationPicker";

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
  const [newLocationName, setLocationName] = useState("");

  const { pathname } = useLocation();
  const headerTitle = pathname.split("/").filter(Boolean).pop();
  const modalTitle = headerTitle ? headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1) : "Details";

  const handleSubmit = async () => {
    const farmData = {
      name: newFarmName,
      location: newLocation,
      locationName: newLocationName,
      size: newSize,
      livestockId: newLivestock ? Number(newLivestock) : null,  // Convert to number or null
      imageUrl: newFarmImage,
    };
  
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/farms`, {
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
          window.location.reload();
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
        top: { xs: "85vh", sm: "88vh", md: "90vh" },
        left: { xs: "75vw", sm: "78vw", md: "75.3vw" },
        zIndex: 1000,
      }}
      onClick={handleOpen}
      >
      <Box
        id="addButton"
        sx={{
        width: { xs: "50px", sm: "55px", md: "60px" },
        height: { xs: "50px", sm: "55px", md: "60px" },
        border: "solid 2px #2c5f2dff",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ":hover": { backgroundColor: "#8fc9e5", cursor: "pointer" },
        }}
      >
        <AddIcon sx={{ fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" }, color: "#2c5f2dff" }} />
      </Box>
      </Box>

      <Modal open={open} onClose={handleClose} aria-labelledby="Details" aria-describedby="details">
      <Box
        sx={{

        width: { xs: "90%", sm: "600px", md: "800px" },
        maxHeight: { xs: "95%", sm: "90%", md: "84%" },
        padding: { xs: "15px", sm: "18px", md: "20px" },
        borderRadius: "10px",
        position: "absolute",
        top: "50%",
        left: "50%",
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: { xs: "90%", sm: "700px" }, maxHeight: '90vh',
                        p: 3, overflowY: 'auto', color: 'text.primary',
                        background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(31, 31, 31, 0.7)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '16px', 
        transform: "translate(-50%, -50%)",
        boxShadow: 24,
        overflowY: "auto",
        "&::-webkit-scrollbar": { width: "5px", borderRadius: "10px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#2c5f2dff",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
        "&::-webkit-scrollbar-thumb:hover": { background: "#1e4020" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: { xs: "15px", sm: "18px", md: "20px" }, 
          marginTop: { xs: "15px", sm: "18px", md: "20px" } 
        }}
        >
        <TextField label="Farm Image" value={newFarmImage} onChange={(e) => setFarmImage(e.target.value)} />
        <TextField label="Farm Name" value={newFarmName} onChange={(e) => setFarmName(e.target.value)} />
        <Box>
          <LocationPicker setLocation={setLocation} />
        </Box>
        <TextField label="Location" value={newLocation} onChange={(e) => setLocation(e.target.value)} />
        <TextField label="Size (Acres)" value={newSize} onChange={(e) => setSize(e.target.value)} type="number" />
        <TextField label="Livestock" value={newLivestock} onChange={(e) => setLivestock(e.target.value)} />
        <Button 
          variant="contained" 
          onClick={handleSubmit}
          sx={{
          backgroundColor: "#2c5f2dff",
          padding: { xs: "8px 16px", sm: "10px 20px", md: "10px 20px" },
          fontSize: { xs: "0.875rem", sm: "0.9rem", md: "0.9rem" },
          '&:active': {
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
