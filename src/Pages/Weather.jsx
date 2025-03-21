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
      backgroundImage: "url('https://images.pexels.com/photos/258149/pexels-photo-258149.jpeg')",
      backgroundSize: "cover"

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