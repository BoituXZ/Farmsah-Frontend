import { Box, Divider, Typography } from '@mui/material';
import CropCard from '../components/CropCard';
import CropItem from '../components/CropItem';

const Crops = () => {
    const cropData = [
        {
            image: 'https://images.pexels.com/photos/45211/walnuts-nuts-healthy-shell-45211.jpeg',
            image2: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg',
            image3: 'https://images.pexels.com/photos/52521/pistachio-nuts-pistachios-crisps-52521.jpeg',
            name: 'Sunny Acres',
            location: 'California, USA',
            size: '150 acres',
            livestock: 'Cattle, Chickens',
            crops: 'Corn, Wheat',
            lastYield: {
                value: '2000 kg',
                date: '2023-09-15',
            },
            currentYield: {
                value: '2200 kg',
                date: '2023-10-10',
            },
            pesticideRecommendation: [
                { crop: 'Corn', pesticide: 'Atrazine' },
                { crop: 'Wheat', pesticide: 'Chlorpyrifos' },
            ],
            amountPlanted: '100 hectares',
            expectedHarvest: '3000 kg',
            aiSuggestions: 'Consider planting soybeans after harvesting corn to improve soil nitrogen content.',
        },
        {
            image: 'https://images.pexels.com/photos/158780/cabbage-vegetable-collard-greens-green-cabbage-158780.jpeg',
            image2: 'https://images.pexels.com/photos/161573/cabbage-vegetable-diet-vitamin-161573.jpeg',
            image3: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg',
            name: 'Green Valley',
            location: 'Ontario, Canada',
            size: '200 acres',
            livestock: 'Sheep, Ducks',
            crops: 'Cabbage, Lettuce',
            lastYield: {
                value: '1500 kg',
                date: '2023-08-25',
            },
            currentYield: {
                value: '1700 kg',
                date: '2023-09-30',
            },
            pesticideRecommendation: [
                { crop: 'Cabbage', pesticide: 'Spinosad' },
                { crop: 'Lettuce', pesticide: 'Imidacloprid' },
            ],
            amountPlanted: '50 hectares',
            expectedHarvest: '2500 kg',
            aiSuggestions: 'Install drip irrigation to reduce water waste and improve crop yield for leafy vegetables.',
        },
    ];

    return (
        <Box
            id="page"
            sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}
        >
            <Box
                id="mainContent"
                sx={{
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "10px",
                }}
            >
                {cropData.map((crop, index) => (
                    <CropCard key={index} cropData={crop} />
                ))}
            </Box>
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
                        {cropData.map((crop, index) =>
                            crop.crops.split(", ").map((cropName, cropIndex) => (
                                <CropItem key={`${index}-${cropIndex}`} cropName={cropName} location={crop.location} />
                            ))
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Crops;
