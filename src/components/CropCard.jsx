import { Box, Button, Modal, TextField, Typography, IconButton, MenuItem, Select, InputLabel } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Close, Delete, Edit, Image} from "@mui/icons-material";

{/* <TODO>
    1. Fix the 3 Images to 1 - Removed the db rows for image 2 and 3
    2. Change title from crops to crop name - Removed the Redudnacy
    4. Amount Planted
    5. Remove Ai suggestions from db -done
    6. Remove expected harvest
    7. Remove recommended pesticide
    8. Refactor details - Done
</TODO> */}

const CropCard = ({ id, name, amountPlanted, expectedHarvest, location, aiSuggestions, recommendedPesticide, image}) => {
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleOpen = () => {
        if (!open) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
        setIsEditing(false);
        window.location.reload(); // Reload page after editing
    };

    const [newCropName, setCropName] = useState(name);
    const [cropID, newCropId] = useState(id)
    const [newLocation, setLocation] = useState(location);
    const [newAmountPlanted, setAmountPlanted] = useState(amountPlanted);
    const [newCropImage, setCropImage] = useState(image);
    const [newExpectedHarvest, setExpectedHarvest] = useState(expectedHarvest);
    const [newAiSuggestions, setAiSuggestions] = useState(aiSuggestions);
    const [newPesticide, setPesticide] = useState(recommendedPesticide);
    const [availableFarms, setAvailableFarms] = useState([]); // Store farms
    const [selectedFarm, setSelectedFarm] = useState(""); // Store selected farm
    

    const handleEditClick = () => setIsEditing(true);
    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://localhost:3010/user/crops/`, {
                method: "PUT",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newCropName,
                    location: newLocation,
                    imageUrl: newCropImage,
                }),
            });
    
            if (!response.ok) throw new Error("Failed to update crop");
            console.log("Crop updated successfully");
            
            setIsEditing(false);
            window.location.reload(); // Reload page after editing
        } catch (error) {
            console.error("Error updating crop:", error);
        }
    };
    
    
      const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3010/user/crops/${cropID}`, {
                method: "DELETE",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
            });
    
            if (!response.ok) throw new Error("Failed to delete crop");
            console.log("Crop deleted successfully");
    
            setOpen(false);
            window.location.reload
            

        } catch (error){
            console.error("Error deleting Crop:", error)
        }
    };
    


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
      

    return (
        <Box
            id="cropCardContainer"
            component="div"
            onClick={handleOpen}
            sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", sm: "100%", md: "90%" },
                padding: "10px",
                border: "1px solid rgba(29, 46, 35, 0.24)",
                height: { xs: "300px", sm: "300px", md: "450px" },
                borderRadius: "9px",
                margin: { xs: "0", sm: "0", md: "0" },
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                },
            }}
        >
            <Box id="cardHeader" sx={{ display: "flex", flex:"1", justifyContent: "space-between", padding: "10px" }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "1rem" } }}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}>
                    Location: {location}
                </Typography>
            </Box>

            <Box id="cardImage" sx={{flex: 4}}>
                    <Box id="cropImage" sx={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: {xs:"128px", md:"200px"}, boxSizing:"border-box" }}>
                        <img
                            src={newCropImage}
                            alt={newCropName}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "4px",
                            }}
                        />
                    </Box>
            </Box>

            <Box
      id="cardDetails"
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: { xs: "8px", md: "10px" },
        padding: "8px",
        flex: 3
      }}
    >
      {/* Left Section */}
      <Box
        id="leftCardDetails"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: {md:"3px"},

        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Past Crops:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.8rem",
              marginLeft: "10px",
              textAlign: "left",
              fontWeight: 600,
              color: "green",
            }}
          >
            Temp
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Recommended Pesticide:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.8rem",
              marginLeft: "10px",
              textAlign: "left",
              fontWeight: 600,
              color: "green",
            }}
          >
            {recommendedPesticide}
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Box
        sx={{
          width: "2px",
          backgroundColor: "#ccc",
          marginX: "5px",
        }}
      />

      {/* Right Section */}
      <Box
        id="rightCardDetails"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: {md:"3px"},

        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Amount Planted:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.8rem",
              marginLeft: "10px",
              textAlign: "left",
              fontWeight: 600,
              color: "green",
            }}
          >
            {amountPlanted}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h2"
            sx={{ fontSize: "0.9rem", fontWeight: 600 }}
          >
            Expected Harvest:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.8rem",
              marginLeft: "10px",
              textAlign: "left",
              fontWeight: 600,
              color: "green",
            }}
          >
            {expectedHarvest}
          </Typography>
        </Box>
      </Box>
    </Box>

            <Modal open={open} onClose={handleClose} aria-labelledby="Crop Details" aria-describedby="Edit Crop details">
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
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h5">Crop Details</Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
                            <IconButton onClick={handleEditClick}>
                                <Edit />
                            </IconButton>
                            <IconButton onClick={handleClose}>
                                <Close />
                            </IconButton>
                            <IconButton onClick={handleDelete}>
                                <Delete />
                            </IconButton>
                            </Box>
                    </Box>

                    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                        {isEditing ? (
                            <>  
                                <TextField label= "Crop Image 1" value={newCropImage} onChange={(e) => {setCropImage(e.target.value)}} />
                                <TextField label="Crop Name" value={newCropName} onChange={(e) => setCropName(e.target.value)} />
                                <Box>
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
                                {/* <TextField label="Size" value={newSize} onChange={(e) => setSize(e.target.value)} /> */}
                                <TextField label="Crops" value={newCropName} onChange={(e) => setCropName(e.target.value)} />
                                {/* <TextField label="Past Crops" value={newPastCrops} onChange={(e) => setPastCrops(e.target.value)} /> */}
                                <TextField
                                    label="Amount Planted"
                                    value={newAmountPlanted}
                                    onChange={(e) => setAmountPlanted(e.target.value)}
                                />
                                
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => {
                                        console.log({
                                            newCropName,
                                            newLocation,
                                            newPesticide,
                                            newAmountPlanted,

                                        });
                                        handleSubmit();
                                        setIsEditing(false);
                                        
                                    }}
                                    sx={{
                                        backgroundColor: "#2c5f2dff",
                                        ":hover": { backgroundColor: "rgb(255, 183, 0)", cursor: "pointer" },
                                    }}
                                >
                                    Submit
                                </Button>
                            </>
                        ) : (
                            <>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Crop Name: 
                                    <Typography variant="body1">
                                    {newCropName}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Location: 
                                    <Typography variant="body1">
                                    {newLocation}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Size: 
                                    <Typography variant="body1">
                                    Temp
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Crops: 
                                    <Typography variant="body1">
                                    {newCropName}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>PastCrops: 
                                    <Typography variant="body1">
                                    {/* {newPastCrops} */}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Recommended Pesticide: 
                                    <Typography variant="body1">
                                    {newPesticide}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Amount Planted: 
                                    <Typography variant="body1">
                                    {newAmountPlanted}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Expected Harvest: 
                                    <Typography variant="body1">
                                    {newExpectedHarvest}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>AI Suggestions: 
                                    <Typography variant="body1">
                                    {newAiSuggestions}
                                    </Typography>
                                </Typography>
                            </>
                        )}
                    </Box>
                </Box>
            </Modal>
        </Box>
    );
};

CropCard.propTypes = {
    id: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    amountPlanted: PropTypes.number.isRequired,
    expectedHarvest: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    farmId: PropTypes.string.isRequired,
    farmName: PropTypes.string.isRequired,
    aiSuggestions: PropTypes.string.isRequired,
    recommendedPesticide: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    image2: PropTypes.string.isRequired,
    image3: PropTypes.string.isRequired,
};
export default CropCard;