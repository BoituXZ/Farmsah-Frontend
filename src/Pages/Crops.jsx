// src/pages/Crops.jsx
import { Box, Divider, Typography, Grid, Paper, useTheme } from '@mui/material';
import CropCard from '../components/CropCard';
import CropItem from '../components/CropItem';
import AddCropComponent from '../components/AddCropComponent';
import { useState, useEffect } from 'react';

const cropsDummyImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Wheat field
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Corn
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80", // Rice
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", // Barley
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80", // Sunflower
    "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80", // Soybean
    "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80", // Sugarcane
    "https://images.unsplash.com/photo-1509228468518-c5eeecbff44a?auto=format&fit=crop&w=400&q=80", // Potato
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // Tomato
    "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80", // Lettuce
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Corn again
    "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80", // Grapes
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Carrot
    "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=400&q=80", // Cabbage
    "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80", // Peppers
];

const cropsDummyData = [
    {
        id: 1,
        name: "Maize",
        amountPlanted: 100,
        expectedHarvest: 250,
        farmId: 1,
        aiSuggestions: "Irrigate twice a week. Apply fertilizer after 3 weeks.",
        image: cropsDummyImages[1],
        location: "Farm A",
        recommendedPesticide: "Pesticide X"
    },
    {
        id: 2,
        name: "Wheat",
        amountPlanted: 80,
        expectedHarvest: 200,
        farmId: 2,
        aiSuggestions: "Monitor for rust disease. Use organic compost.",
        image: cropsDummyImages[0],
        location: "Farm B",
        recommendedPesticide: "Pesticide Y"
    },
    {
        id: 3,
        name: "Rice",
        amountPlanted: 120,
        expectedHarvest: 300,
        farmId: 3,
        aiSuggestions: "Flood fields for 2 weeks. Watch for pests.",
        image: cropsDummyImages[2],
        location: "Farm C",
        recommendedPesticide: "Pesticide Z"
    },
    {
        id: 4,
        name: "Barley",
        amountPlanted: 90,
        expectedHarvest: 210,
        farmId: 4,
        aiSuggestions: "Keep soil moist. Apply nitrogen fertilizer.",
        image: cropsDummyImages[3],
        location: "Farm D",
        recommendedPesticide: "Pesticide A"
    },
    {
        id: 5,
        name: "Sunflower",
        amountPlanted: 60,
        expectedHarvest: 180,
        farmId: 5,
        aiSuggestions: "Ensure full sun. Water regularly.",
        image: cropsDummyImages[4],
        location: "Farm E",
        recommendedPesticide: "Pesticide B"
    },
    {
        id: 6,
        name: "Soybean",
        amountPlanted: 110,
        expectedHarvest: 260,
        farmId: 6,
        aiSuggestions: "Check for aphids. Rotate crops yearly.",
        image: cropsDummyImages[5],
        location: "Farm F",
        recommendedPesticide: "Pesticide C"
    },
    {
        id: 7,
        name: "Sugarcane",
        amountPlanted: 70,
        expectedHarvest: 220,
        farmId: 7,
        aiSuggestions: "Water deeply. Use organic mulch.",
        image: cropsDummyImages[6],
        location: "Farm G",
        recommendedPesticide: "Pesticide D"
    },
    {
        id: 8,
        name: "Potato",
        amountPlanted: 95,
        expectedHarvest: 240,
        farmId: 8,
        aiSuggestions: "Hill soil around stems. Watch for blight.",
        image: cropsDummyImages[7],
        location: "Farm H",
        recommendedPesticide: "Pesticide E"
    },
    {
        id: 9,
        name: "Tomato",
        amountPlanted: 130,
        expectedHarvest: 320,
        farmId: 9,
        aiSuggestions: "Stake plants. Remove lower leaves.",
        image: cropsDummyImages[8],
        location: "Farm I",
        recommendedPesticide: "Pesticide F"
    },
    {
        id: 10,
        name: "Lettuce",
        amountPlanted: 75,
        expectedHarvest: 170,
        farmId: 10,
        aiSuggestions: "Keep soil cool. Harvest early morning.",
        image: cropsDummyImages[9],
        location: "Farm J",
        recommendedPesticide: "Pesticide G"
    },
    {
        id: 11,
        name: "Grapes",
        amountPlanted: 85,
        expectedHarvest: 210,
        farmId: 11,
        aiSuggestions: "Prune vines. Protect from birds.",
        image: cropsDummyImages[11],
        location: "Farm K",
        recommendedPesticide: "Pesticide H"
    },
    {
        id: 12,
        name: "Carrot",
        amountPlanted: 105,
        expectedHarvest: 230,
        farmId: 12,
        aiSuggestions: "Thin seedlings. Water evenly.",
        image: cropsDummyImages[12],
        location: "Farm L",
        recommendedPesticide: "Pesticide I"
    },
    {
        id: 13,
        name: "Cabbage",
        amountPlanted: 65,
        expectedHarvest: 150,
        farmId: 13,
        aiSuggestions: "Protect from caterpillars. Fertilize monthly.",
        image: cropsDummyImages[13],
        location: "Farm M",
        recommendedPesticide: "Pesticide J"
    },
    {
        id: 14,
        name: "Peppers",
        amountPlanted: 115,
        expectedHarvest: 270,
        farmId: 14,
        aiSuggestions: "Mulch to retain moisture. Stake tall plants.",
        image: cropsDummyImages[14],
        location: "Farm N",
        recommendedPesticide: "Pesticide K"
    }
];

const Crops = () => {
    const [cropsData, setCropsData] = useState(cropsDummyData);
    const theme = useTheme();

    // The data-fetching logic is preserved
    // useEffect(() => {
    //     const fetchCrops = async () => {
    //         try {
    //             const response = await fetch("http://localhost:3010/user/crops", { credentials: "include" });
    //             if (!response.ok) { throw new Error("Failed to fetch crops, you did something wrong!"); }
    //             const data = await response.json();
    //             const formattedCrops = data.map((crop) => ({
    //                 id: crop.id, name: crop.name,
    //                 amountPlanted: crop.amount_planted, expectedHarvest: crop.expected_harvest,
    //                 farmId: crop.farm_id, aiSuggestions: crop.ai_suggestions,
    //                 image: crop.crop_image || "", location: crop.location, // Assuming location comes from the farm later
    //                 recommendedPesticide: crop.recommended_pesticide, // Add missing prop
    //             }));
    //             setCropsData(formattedCrops);
    //         } catch (error) { console.error("Error fetching crops:", error); }
    //     };
    //     fetchCrops();
    // }, []);

    return (
        <Box
            id="page-container"
            sx={{
                width: '100%', minHeight: '100vh', boxSizing: 'border-box',
                p: { xs: 2, md: 3 },
                background: theme.palette.background.backgroundImage,
                backgroundSize: "cover", backgroundAttachment: 'fixed',
            }}
        >
            <Grid container spacing={3}>
                {/* Main Content: Crop Cards */}
                <Grid item xs={12} md={8}>
                    <Box id="mainContent" sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {cropsData.map((crop) => (
                            <CropCard key={crop.id} {...crop} />
                        ))}
                    </Box>
                </Grid>
                {/* Side Content: Crop List */}
                <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
                    <Paper
                        elevation={6}
                        sx={{
                            p: 2.5, position: 'sticky', top: '24px',
                            background: theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(31, 31, 31, 0.4)',
                            backdropFilter: 'blur(15px)', border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '16px',
                        }}
                    >
                        <Typography variant="h2" sx={{ fontSize: '1.2rem', mb: 2, textAlign: 'center' }}>
                            Crop List
                        </Typography>
                        <Box id="sideContentBody" sx={{ display: "flex", flexDirection: "column", gap: '10px' }}>
                            {cropsData.map((crop) => (
                                <CropItem key={crop.id} cropName={crop.name} location={crop.location} />
                            ))}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            
            <AddCropComponent />
        </Box>
    );
};

export default Crops;