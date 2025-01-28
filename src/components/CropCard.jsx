import { Box, Button, Modal, TextField, Typography, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Close} from "@mui/icons-material";

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
        lastYield,
        currentYield,
        recommendedPesticide,
        amountPlanted,
        expectedHarvest,
        aiSuggestions,
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
    const [newPesticide, setPesticide] = useState(recommendedPesticide);
    const [newAmountPlanted, setAmountPlanted] = useState(amountPlanted);
    const [newExpectedHarvest, setExpectedHarvest] = useState(expectedHarvest);
    const [newAiSuggestions, setAiSuggestions] = useState(aiSuggestions);

    const handleEditClick = () => setIsEditing(true);

    return (
        <Box
            id="cropCardContainer"
            component="div"
            onClick={handleOpen}
            sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", sm: "100%", md: "90%" },
                padding: "15px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                height: { xs: "300px", sm: "300px", md: "450px" },
                borderRadius: "9px",
                margin: { xs: "0", sm: "0", md: "0" },
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
                    {name}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}>
                    Location: {location}
                </Typography>
            </Box>

            <Box id="cardImage" sx={{ maxHeight: { xs: "100px", md: "300px" }, overflow: "hidden" }}>
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

            <Box id="cardDetails" sx={{ padding: "10px", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", 
                gap: {xs:"5px",md:"10px"}
                 }}>
                <Box>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Crops:</Typography>
                    <Typography variant="body1" sx={{ fontSize: "0.6rem", marginLeft: "10px" }}>
                        {crops}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Livestock:</Typography>
                    <Typography variant="body1" sx={{ fontSize: "0.6rem", marginLeft: "10px" }}>
                        {livestock}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Recommended Pesticide:</Typography>
                    <Typography variant="body1" sx={{ fontSize: "0.6rem", marginLeft: "10px" }}>
                        {recommendedPesticide}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Amount Planted:</Typography>
                    <Typography variant="body1" sx={{ fontSize: "0.6rem", marginLeft: "10px" }}>
                        {amountPlanted}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >Expected Harvest:</Typography>
                    <Typography variant="body1" sx={{ fontSize: "0.6rem", marginLeft: "10px" }}>
                        {expectedHarvest}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="h2"
                    sx={{ fontSize: "0.9rem", fontWeight: "600" }}
                    >AI Suggestions:</Typography>
                    <Typography variant="body1" sx={{ fontSize: "0.6rem", marginLeft: "10px" }}>
                        {aiSuggestions}
                    </Typography>
                </Box>
            </Box>

            <Modal open={open} onClose={handleClose} aria-labelledby="Crop Details" aria-describedby="Edit Crop details">
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
                        <Typography variant="h5">Crop Details</Typography>
                        <IconButton onClick={handleClose}>
                            <Close />
                        </IconButton>
                    </Box>

                    <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
                        {isEditing ? (
                            <>
                                <TextField label="Crop Name" value={newCropName} onChange={(e) => setCropName(e.target.value)} />
                                <TextField label="Location" value={newLocation} onChange={(e) => setLocation(e.target.value)} />
                                <TextField label="Size" value={newSize} onChange={(e) => setSize(e.target.value)} />
                                <TextField label="Crops" value={newCrops} onChange={(e) => setCrops(e.target.value)} />
                                <TextField label="Livestock" value={newLivestock} onChange={(e) => setLivestock(e.target.value)} />
                                <TextField
                                    label="Recommended Pesticide"
                                    value={newPesticide}
                                    onChange={(e) => setPesticide(e.target.value)}
                                />
                                <TextField
                                    label="Amount Planted"
                                    value={newAmountPlanted}
                                    onChange={(e) => setAmountPlanted(e.target.value)}
                                />
                                <TextField
                                    label="Expected Harvest"
                                    value={newExpectedHarvest}
                                    onChange={(e) => setExpectedHarvest(e.target.value)}
                                />
                                <TextField
                                    label="AI Suggestions"
                                    value={newAiSuggestions}
                                    onChange={(e) => setAiSuggestions(e.target.value)}
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
                                            newExpectedHarvest,
                                            newAiSuggestions,
                                        });
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