import { CloudCircle } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"


import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const WeatherCard = ({location, name}) => {
    const [newName, setName] = useState(name)
    const [displayLocation, setDisplayLocation] = useState(location);


      useEffect(() => {
        const fetchLocationName = async () => {
          if (!location.includes(",")) return; // Already a name, no need to fetch
        
          const [lat, lng] = location.split(", ").map(parseFloat);
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            );
            const data = await response.json();
        
            if (data?.address) {
              const { road, city, town, village, country } = data.address;
              const locationName = [road, city || town || village, country].filter(Boolean).join(", ");
              setDisplayLocation(locationName || "Unknown Location");
            } else {
              setDisplayLocation("Unknown Location");
            }
          } catch (error) {
            console.error("Error fetching location name:", error);
            setDisplayLocation("Unknown Location");
          }
        };
    
        fetchLocationName();
      }, [location]);
    

return (
    <Box
        id="cardContainer"
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            minWidth: { xs: "92%", sm: "98%", md: "68%" },
            width: { xs: "92%", sm: "98%", md: "40%" },
            padding: "12px",
            border: "1px solid rgba(29, 46, 35, 0.24)",
            height: { xs: "220px", sm: "220px", md: "280px" },
            borderRadius: "15px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            margin: "8px",
        background: "rgba(255, 255, 255, 0.62)",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
        <Box id="cardTop">
            <Box id="cardTopHeader"
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
            >
                <Typography variant="body"
                sx={{
                  fontSize: "1.2rem",
                }}>
                Farm Name: {name}
                </Typography>
                <CloudCircle
                sx={{
                    fontSize: "2rem",
                }} />

            </Box>
        </Box>
        <Box id="cardBottom"
        
        >
                <Box id="weatherDetails"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                        // border: "solid 1px red",
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: "10px" }}>
                        25°C
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                        Sunny
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                        Humidity: 60%
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                        Wind: 10 km/h
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                        Location: {displayLocation}
                    </Typography>
                </Box>
        </Box>

    </Box>
  )
}

WeatherCard.propTypes = {
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default WeatherCard