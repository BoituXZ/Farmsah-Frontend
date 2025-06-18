// src/components/AddCropComponent.jsx
import { useState, useEffect } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Typography,
  IconButton,
  Modal,
  Paper,
  Stack,
  FormControl,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Close } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const AddCropComponent = () => {
  // --- All State and Logic is Preserved ---
  const [open, setOpen] = useState(false);
  const [newCropName, setCropName] = useState("");
  const [newSize, setSize] = useState("");
  const [newCrops, setCrops] = useState(""); // Represents 'Expected Harvest' in your logic
  const [newCropImage, setCropImage] = useState("");
  const [availableFarms, setAvailableFarms] = useState([]);
  const [selectedFarm, setSelectedFarm] = useState("");
  const theme = useTheme();

  const { pathname } = useLocation();
  const headerTitle = pathname.split("/").filter(Boolean).pop();
  const modalTitle = headerTitle
    ? headerTitle.charAt(0).toUpperCase() + headerTitle.slice(1)
    : "Crop";

  // Fetch farms for the dropdown
  const fetchFarms = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/farms`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (!response.ok) throw new Error("Failed to fetch farms");
      const farms = await response.json();
      setAvailableFarms(farms);
    } catch (error) {
      console.error("Error fetching farms:", error);
      setAvailableFarms([]);
    }
  };

  // Add new crop
  const handleSubmit = async () => {
    const cropData = {
      farmId: selectedFarm,
      name: newCropName,
      amountPlanted: newSize,
      expectedHarvest: newCrops,
      cropImage: newCropImage,
      location: selectedFarm    
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/crops`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify(cropData),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to add crop: ${await response.text()}`);
      }

      console.log("Crop added successfully!");
      handleClose();
        window.location.reload();
    } catch (error) {
      console.error("Error adding crop:", error);
    }
  };

  // Original event handlers and fetch logic
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // This is from your original code

  };

  useEffect(() => {
    if (open) {
      fetchFarms();
    }
  }, [open]);

  return (
    <Box>
      {/* === 1. STYLED "ADD" BUTTON (GLASS MORPHISM) === */}
      <Box
        onClick={handleOpen}
        sx={{
          position: "fixed",
          bottom: { xs: 30, md: 40 },
          right: { xs: 30, md: 40 }, // Consistent position
          zIndex: 1000,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            width: { xs: "50px", sm: "55px", md: "60px" },
            height: { xs: "50px", sm: "55px", md: "60px" },
            border: "solid 2px #2c5f2dff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "rgba(143, 200, 229, 0)",
            alignItems: "center",
            ":hover": { backgroundColor: "#8fc9e5", cursor: "pointer" },
          }}
        >
          <AddIcon
            sx={{ fontSize: "2rem", color: theme.palette.accent.darkGreen }}
          />
        </Paper>
      </Box>

      {/* === 2. STYLED MODAL (GLASS MORPHISM) === */}
      <Modal open={open} onClose={handleClose}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "700px" },
            maxHeight: "90vh",
            p: 3,
            overflowY: "auto",
            color: "text.primary",
            background: (theme) =>
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(31, 31, 31, 0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 3 }}
          >
            <Typography variant="h2">Add New {modalTitle}</Typography>
            <IconButton title="Close" onClick={handleClose}>
              <Close />
            </IconButton>
          </Stack>

          {/* Replaced fixed-gap Box with responsive Stack */}
          <Stack component="form" spacing={2.5}>
            <TextField
              label="Crop Name"
              value={newCropName}
              onChange={(e) => setCropName(e.target.value)}
            />
            <TextField
              label="Crop Image URL"
              value={newCropImage}
              onChange={(e) => setCropImage(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id="farm-select-label">Assign to Farm</InputLabel>
              <Select
                labelId="farm-select-label"
                label="Assign to Farm"
                value={selectedFarm}
                onChange={(e) => setSelectedFarm(e.target.value)}
              >
                {availableFarms.length > 0 ? (
                  availableFarms.map((farm) => (
                    <MenuItem key={farm.id} value={farm.id}>
                      {farm.name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>Loading farms...</MenuItem>
                )}
              </Select>
            </FormControl>

            <TextField
              label="Amount Planted" // Label clarified based on handleSubmit
              value={newSize} // Corresponds to amountPlanted
              onChange={(e) => setSize(e.target.value)}
              type="number"
            />
            <TextField
              label="Expected Harvest (kg/acre)" // Label clarified
              value={newCrops} // Corresponds to expectedHarvest
              onChange={(e) => setCrops(e.target.value)}
              type="number"
              disabled
            />

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                mt: 2,
                py: 1.5,
                bgcolor: "accent.darkGreen",
                "&:hover": { bgcolor: "success.main" },
              }}
            >
              Submit
            </Button>
          </Stack>
        </Paper>
      </Modal>
    </Box>
  );
};

export default AddCropComponent;
