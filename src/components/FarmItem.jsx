import { Box, Typography } from '@mui/material'
import PropTypes from "prop-types";
import { useEffect, useState } from 'react';


const FarmItem = ({ farmName, location }) => {
    const [displayLocation, setDisplayLocation] = useState(location);
      // const [newLocation, setLocation] = useState(location);
    
  

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
    <Box id="farmItem"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "solid 1px white",
                padding: "5px",
                backgroundColor: "rgba(101, 95, 95, 0.2)",
                borderRadius: "5px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant='h1'
              sx={{fontSize: "0.8rem"}}
              >{farmName}</Typography>
              <Typography variant='subtitle1'
              sx={{fontSize: "0.6rem",
                color: "#2c5f2dff"
              }}
              >{displayLocation}</Typography>
            </Box>
  )
}

FarmItem.propTypes = {
  farmName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
export default FarmItem