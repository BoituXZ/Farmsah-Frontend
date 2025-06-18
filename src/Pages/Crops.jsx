// src/pages/Crops.jsx
import { Box, Divider, Typography, Grid, Paper, useTheme } from '@mui/material';
import CropCard from '../components/CropCard';
import CropItem from '../components/CropItem';
import AddCropComponent from '../components/AddCropComponent';
import { useState, useEffect } from 'react';

const Crops = () => {
    const [cropsData, setCropsData] = useState([]);
    const theme = useTheme();

    useEffect(() => {
        const fetchCrops = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/crops`, { credentials: "include" });
                if (!response.ok) { throw new Error("Failed to fetch crops, you did something wrong!"); }
                const data = await response.json();
                const formattedCrops = data.map((crop) => ({
                    id: crop.id,
                    name: crop.name,
                    amountPlanted: crop.amount_planted,
                    expectedHarvest: crop.expected_harvest,
                    farmId: crop.farm_id,
                    aiSuggestions: crop.ai_suggestions,
                    image: crop.crop_image || "",
                    location: crop.location,
                    recommendedPesticide: crop.recommended_pesticide,
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
