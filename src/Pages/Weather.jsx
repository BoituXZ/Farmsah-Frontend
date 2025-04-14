// src/pages/Weather.jsx
import { Box } from "@mui/material";
import WeatherCard from "../components/WeatherCard";
import { useEffect, useState } from "react";

const Weather = () => {
  // --- State and Effect (No changes needed) ---
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
      setIsLoading(true); setError(null);
      const fetchLocations = async () => {
         try {
           const response = await fetch("http://localhost:3010/user/weather/location", { credentials: "include" });
           if (!response.ok) { const errorData = await response.json(); throw new Error(errorData.message || `Failed Locations (${response.status})`); }
           const data = await response.json(); setLocations(data);
         } catch (error) { console.error("Error fetching Locations:", error); setError(error.message); }
         finally { setIsLoading(false); }
      };
      fetchLocations();
   }, []);

  // --- Loading/Error/Empty checks (No changes needed) ---
    if (isLoading) { return <Box sx={{ padding: "1rem" }}>Loading farm locations...</Box>; }
    if (error) { return <Box sx={{ padding: "1rem", color: "red" }}>Error: {error}</Box>; }
    if (locations.length === 0) { return <Box sx={{ padding: "1rem" }}> No farm locations found. </Box>; }

  // --- Return statement with Grid/Flex layout and Gap ---
  return (
    <Box
      id="pageContainer"
      sx={{
        width: '100%',
        minHeight: "100vh",
        boxSizing: 'border-box',
        padding: "1rem",
        gap: '16px', // Spacing between items

        // Responsive Display: Flex column on mobile, Grid on desktop
        display: { xs: "flex", md: "grid" },

        // Flexbox settings (for xs/sm)
        flexDirection: { xs: "column" },
        alignItems: { xs: "center" },

        // Grid settings (for md+)
        gridTemplateColumns: { md: 'repeat(auto-fit, 380px)' }, // Fit as many 380px columns as possible
        justifyContent: { md: 'center' }, // Center the grid horizontally

        // Background styles
        background: (theme) => theme.palette.background.backgroundImage,
        backdropFilter: "blur(100px)",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Mapping locations */}
      {locations.map((location) => (
        <WeatherCard
          key={location.id}
          farmId={location.id}
          locationString={location.location}
          name={location.name}
        />
      ))}
    </Box>
  );
};

export default Weather;