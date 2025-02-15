import { Box, Button, Modal, TextField, Typography, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Close, Edit} from "@mui/icons-material";

const CropCard = ({ cropData }) => {
    const {
        image,
        image2,
        image3,
        name,
        location,
        size,
        crops,
        livestock,
        amountPlanted,
        expectedHarvest,
        aiSuggestions,
        recommendedPesticide,
    } = cropData;

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
    };

    const [newCropName, setCropName] = useState(name);
    const [newLocation, setLocation] = useState(location);
    const [newSize, setSize] = useState(size);
    const [newCrops, setCrops] = useState(crops);
    const [newLivestock, setLivestock] = useState(livestock);
    const [newAmountPlanted, setAmountPlanted] = useState(amountPlanted);
    const [newCropImage, setCropImage] = useState(image)
    const [newCropImage2, setCropImage2] = useState(image2)
    const [newCropImage3, setCropImage3] = useState(image3)
    const newAiSuggestions = aiSuggestions
    const newPesticide = recommendedPesticide
    const newExpectedHarvest = expectedHarvest
    


    const handleEditClick = () => setIsEditing(true);
    const handleSubmit = async () => {
        try {
          const response = await fetch(`http://localhost:3010/user/crops/${slug}`, {
            method: "PUT",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: newCropName,
              location: newLocation,
              size: newSize,
              crops: newCrops,
              livestock: newLivestock,
              imageUrl: newCropImage,
              imageUrl2: newCropImage2,
              imageUrl3: newCropImage3,

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

            <Box id="cardImage" sx={{ maxHeight: { xs: "100px", md: "500px" }, overflow: "hidden", flex: "3",
                }}>
                <Box id="imagesCarousel" sx={{ display: "flex", flexDirection: "row", gap: "2px" }}>
                    {[image, image2, image3].map((img, index) => (
                        <Box key={index} id={`image${index + 1}`} sx={{ flex: "1" }}>
                            <img
                                src={img}
                                alt={`Crop ${index + 1}`}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box id="cardDetails" sx={{ padding: "1px",

            display: "flex",
            flexDirection: "row",
            flex: "5",
            gap: {xs:"8px",md:"10px"},
                 }}>
                <Box id="leftCardDetails"
                sx={{
                    flex: "1",
                    width: "100%",
                    padding: "2px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
                >
                    <Box sx={{
                        flex: "1",
                        height: "100%",
                        
                    }}>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Crops:</Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.8rem", marginLeft: "10px", textAlign: "left", fontWeight: "600", color: "green" }}>
                        {crops}
                    </Typography>
                </Box>
                <Box sx={{
                    flex: "1",
                    height: "100%",
                    
                }}>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Livestock:</Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.8rem", marginLeft: "10px", textAlign: "left", fontWeight: "600", color: "green" }}>
                        {livestock}
                    </Typography>
                </Box>
                <Box sx={{
                    flex: "1",
                    height: "100%",
                    
                }}>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Recommended Pesticide:</Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.8rem", marginLeft: "10px", textAlign: "left", fontWeight: "600", color: "green" }}>
                        {recommendedPesticide}
                    </Typography>
                </Box>
                </Box>
                <Box id="rightCardDetails"
                sx={{
                    flex: "1",
                    width: "100%",
                    padding: "2px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"

                }}
                >
                    <Box sx={{
                        flex: "1",
                        height: "100%",

                    }}>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Amount Planted:</Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.8rem", marginLeft: "10px", textAlign: "left", fontWeight: "600", color: "green" }}>
                        {amountPlanted}
                    </Typography>
                </Box>
                <Box sx={{
                    flex: "1",
                    height: "100%",

                }}>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Expected Harvest:</Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.8rem", marginLeft: "10px", textAlign: "left", fontWeight: "600", color: "green" }}>
                        {expectedHarvest}
                    </Typography>
                </Box>
                <Box sx={{
                    flex: "1",
                    height: "100%",

                }}>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >AI Suggestions:</Typography>
                    <Typography variant="body2" sx={{ fontSize: "0.8rem", marginLeft: "10px", textAlign: "left", fontWeight: "600", color: "green" }}>
                        {aiSuggestions}
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
                            </Box>
                    </Box>

                    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                        {isEditing ? (
                            <>  
                                <TextField label= "CropImage 1" value={newCropImage} onChange={(e) => {setCropImage(e.target.value)}} />
                                <TextField label= "CropImage 2" value={newCropImage} onChange={(e) => {setCropImage2(e.target.value)}} />
                                <TextField label= "CropImage 3" value={newCropImage} onChange={(e) => {setCropImage3(e.target.value)}} />
                                <TextField label="Crop Name" value={newCropName} onChange={(e) => setCropName(e.target.value)} />
                                <TextField label="Location" value={newLocation} onChange={(e) => setLocation(e.target.value)} />
                                <TextField label="Size" value={newSize} onChange={(e) => setSize(e.target.value)} />
                                <TextField label="Crops" value={newCrops} onChange={(e) => setCrops(e.target.value)} />
                                <TextField label="Livestock" value={newLivestock} onChange={(e) => setLivestock(e.target.value)} />
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
                                            newSize,
                                            newCrops,
                                            newLivestock,
                                            newPesticide,
                                            newAmountPlanted,

                                        });
                                        handleSubmit();
                                        setIsEditing(false);
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
                                    {newSize}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Crops: 
                                    <Typography variant="body1">
                                    {newCrops}
                                    </Typography>
                                </Typography>
                                <Typography sx={{
                                    fontSize: "0.8rem",
                                }}>Livestock: 
                                    <Typography variant="body1">
                                    {newLivestock}
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
    cropData: PropTypes.shape({
        image: PropTypes.string.isRequired,
        image2: PropTypes.string.isRequired,
        image3: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        crops: PropTypes.string.isRequired,
        livestock: PropTypes.string.isRequired,
        lastYield: PropTypes.shape({
            value: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired,
        currentYield: PropTypes.shape({
            value: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        }).isRequired,
        pesticideRecommendation: PropTypes.arrayOf(
            PropTypes.shape({
                crop: PropTypes.string.isRequired,
                pesticide: PropTypes.string.isRequired,
            })
        ).isRequired,
        amountPlanted: PropTypes.string.isRequired,
        expectedHarvest: PropTypes.string.isRequired,
        aiSuggestions: PropTypes.string.isRequired,
    }).isRequired,
};

export default CropCard;