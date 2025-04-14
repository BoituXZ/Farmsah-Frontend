// src/pages/Weather.jsx
import { Box } from "@mui/material";
import WeatherCard from "../components/WeatherCard";
import { useEffect, useState } from "react";

const Weather = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchLocations = async () => {
      setIsLoading(true); // Start loading
      setError(null); // Reset error
      try {
        const response = await fetch(
          "http://localhost:3010/user/weather/location", // Ensure your protectedRoutes prefix is handled if necessary, e.g., /api/user/weather/location
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          // More specific error handling based on status code
          const errorData = await response.json();
          throw new Error(
            errorData.message || `Failed to fetch Locations (${response.status})`
          );
        }

        const data = await response.json();
        setLocations(data); // Update state with fetched farms
      } catch (error) {
        console.error("Error fetching Locations:", error);
        setError(error.message); // Set error message
      } finally {
        setIsLoading(false); // Stop loading regardless of success or failure
      }
    };

    fetchLocations();
  }, []);

  // Display loading indicator
  if (isLoading) {
    return <Box sx={{ padding: "1rem" }}>Loading farm locations...</Box>;
  }

  // Display error message
  if (error) {
    return <Box sx={{ padding: "1rem", color: "red" }}>Error: {error}</Box>;
  }

  // Display message if no locations are found
  if (locations.length === 0) {
    return (
      <Box sx={{ padding: "1rem" }}>
        No farm locations found. Add a farm to see weather data.
      </Box>
    );
  }

  return (
    <Box
      id="pageContainer"
      sx={{
        display: {xs:"flex",sm:"flex", md:"flex"},
      flexDirection: {xs:"column", sm:"column", md:"row"},
      gridTemplateColumns: "repeat(2, 1fr)",
      flexWrap: "wrap",
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
          farmId={location.id} // <-- Pass farmId here
          locationString={location.location} // <-- Rename prop to avoid confusion
          name={location.name}
        />
      ))}
    </Box>
  );
};

export default Weather;