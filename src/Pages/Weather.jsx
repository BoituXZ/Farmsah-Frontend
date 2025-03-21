import { Box } from "@mui/material"
import WeatherCard from "../components/WeatherCard"
import { useEffect, useState } from "react";

const Weather = () => {
    const [locations, setLocations] = useState([]);
  

  useEffect(() => {
      const fetchLocations = async () => {
        try {
          const response = await fetch("http://localhost:3010/user/weather/location", {
            credentials: "include",
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch Locations");
          }
  
          const data = await response.json();
          setLocations(data); // Update state with fetched farms
        } catch (error) {
          console.error("Error fetching Locations:", error);
        }
      };
  
      fetchLocations();
    }, []);


  return (
    <Box
     id="pageContainer"
    sx={{
      display: {xs:"flex",sm:"flex", md:"grid"},
      flexDirection: "column",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "12px",
      padding: "1rem",
      height: "100%",
      // background: "url('https://images.pexels.com/photos/6073183/pexels-photo-6073183.jpeg')",
      // background: "url('https://images.pexels.com/photos/6738360/pexels-photo-6738360.jpeg')",
      // background: "url('https://images.pexels.com/photos/6738360/pexels-photo-6738360.jpeg')",
      background: (theme) => theme.palette.background.backgroundImage,

      backdropFilter: "blur(100px)",
      backgroundSize: "cover",
      
    }}
    >
      {locations.map((location) => (
        <WeatherCard  
        key={location.id}  
        location={location.location}  
        name={location.name} /> 
        ))}
    </Box>
  )
}

export default Weather