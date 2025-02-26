import { Box, Divider, Typography } from '@mui/material';
import CropCard from '../components/CropCard';
import CropItem from '../components/CropItem';
import AddCropComponent from '../components/AddCropComponent';
import { useState, useEffect } from 'react';

const Crops = () => {
    const [cropsData, setCropsData] = useState([]);

    useEffect(() => {
        const fetchCrops = async () => {
            try {
                const response = await fetch("http://localhost:3010/user/crops", {
                    credentials: "include",
                });
    
                if (!response.ok) {
                    throw new Error("Failed to fetch crops, you did something wrong!");
                }
    
                const data = await response.json();
                
                // Fix the image
                // Transform the data if needed
                const formattedCrops = data.map((crop) => ({
                    id: crop.id,
                    name: crop.name,
                    amountPlanted: crop.amount_planted,
                    expectedHarvest: crop.expected_harvest,
                    farmId: crop.farm_id,
                    aiSuggestions: crop.ai_suggestions,
                    image: crop.crop_image || "",  // ✅ Corrected field name
                    image2: crop.crop_image2 || "",
                    image3: crop.crop_image3 || "",
                }));
                
    
                setCropsData(formattedCrops);
            } catch (error) {
                console.error("Error fetching crops:", error);
            }
        };
    
        fetchCrops();
    }, []);
    


    return (
        <Box
            id="page"
            sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%",  }}
        >
            <Box
                id="mainContent"
                sx={{
                    overflowY: "auto",
                    display: "flex",
                    flex: "4",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "10px",
                }}
            >
                {cropsData.map((crop) => (
    <CropCard 
        key={crop.id} // key is used by React, don't pass it as a prop
        {...crop} // Spread the crop object for cleaner prop handling
    />
))
    
}

            </Box>
            <Divider orientation="vertical" />
            <AddCropComponent />
            <Box
                id="sideContentContainer"
                sx={{
                    // border: "solid 1px red",
                }}
            >
                <Box
                    id="sideContent"
                    sx={{
                        display: { xs: "none", sm: "flex", md: "flex" },
                        flex: "1",
                        overflow: "auto",
                        minWidth: "280px",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        id="sideContentHeader"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            overflowY: "auto",
                        }}
                    >
                        <Typography variant="h2">Crop List</Typography>
                    </Box>
                    <Divider />
                    <Box
                        id="sideContentBody"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "2px",
                            gap: "5px",
                            overflowY: "auto",
                        }}
                    >
                        {cropsData.map((crop, index) =>
                            crop.crops ? crop.crops.split(", ").map((cropName, cropIndex) => (
                                <CropItem key={`${index}-${cropIndex}`} cropName={cropName} location={crop.location} />
                            )) : null
                            
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Crops;
