// src/components/WeatherCard.jsx
import { CloudCircle } from "@mui/icons-material";
// Added CircularProgress and Button
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
// Added useCallback
import { useEffect, useState, useCallback } from "react";

// Props are farmId, locationString, name (as per original working version)
const WeatherCard = ({ farmId, locationString, name }) => {
  // --- State ---
  const [displayLocation, setDisplayLocation] = useState(locationString); // For geocoded name
  const [weatherData, setWeatherData] = useState(null); // For fetched weather data
  const [isLoading, setIsLoading] = useState(true); // Overall loading
  const [error, setError] = useState(null); // For errors
  const [isFetchingNew, setIsFetchingNew] = useState(false); // For manual fetch button state
  const [latitude, setLatitude] = useState(null); // Extracted latitude
  const [longitude, setLongitude] = useState(null); // Extracted longitude
  const [coordsProcessed, setCoordsProcessed] = useState(false); // Flag for coord processing

  // --- Effect 1: Process locationString for display name and coordinates ---
  useEffect(() => {
    setCoordsProcessed(false);
    setLatitude(null);
    setLongitude(null);
    // Reset error/loading related to weather fetch when location changes
    setError(null);
    setWeatherData(null);
    setIsLoading(true);


    const processLocation = async () => {
      // ... (Exact same logic as previous response to parse locationString,
      //      set latitude/longitude state, fetch display name via Nominatim,
      //      and set coordsProcessed = true) ...

        // Basic check if it looks like coordinates before fetching/parsing
        if (!locationString || !locationString.includes(",")) {
            setDisplayLocation(locationString || "Unknown Location");
            console.warn(`FarmId ${farmId}: locationString is not coordinates.`);
            setCoordsProcessed(true); return; // Mark as processed
        }
        const parts = locationString.split(",").map((part) => part.trim());
        if (parts.length !== 2 || isNaN(parseFloat(parts[0])) || isNaN(parseFloat(parts[1]))) {
            setDisplayLocation(locationString);
            console.warn(`FarmId ${farmId}: locationString could not be parsed as coordinates.`);
            setCoordsProcessed(true); return; // Mark as processed
        }
        const parsedLat = parseFloat(parts[0]);
        const parsedLng = parseFloat(parts[1]);
        setLatitude(parsedLat); // Set state
        setLongitude(parsedLng); // Set state

        // Fetch display name
        try {
            const response = await fetch( `https://nominatim.openstreetmap.org/reverse?format=json&lat=${parsedLat}&lon=${parsedLng}&zoom=10&addressdetails=1` );
            if (!response.ok) throw new Error(`Nominatim request failed with status ${response.status}`);
            const data = await response.json();
            if (data?.address) {
                const { road, city, town, village, county, state, country } = data.address;
                const locationName = [road, city || town || village || county, state, country].filter(Boolean).join(", ");
                setDisplayLocation(locationName || "Location Name Unavailable");
            } else { setDisplayLocation("Location Name Unavailable"); }
        } catch (error) {
            console.error("Error fetching location name:", error);
            setDisplayLocation("Error fetching location name");
        } finally {
            setCoordsProcessed(true); // Mark processing complete
        }
    };
    processLocation();
  }, [locationString, farmId]);

  // --- Function to fetch NEW weather data (uses state coords) ---
  const fetchAndSaveNewWeather = useCallback(async () => {
    // ... (Exact same logic as previous response using state latitude/longitude) ...
     if (latitude === null || longitude === null) {
       setError("Cannot fetch weather: Coordinates unavailable.");
       return false;
     }
     setIsFetchingNew(true); setError(null);
     console.log(`Attempting fetch: Farm ${farmId}, Lat ${latitude}, Lon ${longitude}`);
     try {
        const fetchResponse = await fetch( `http://localhost:3010/user/weather/fetch`, {
            method: "POST", headers: { "Content-Type": "application/json" },
            credentials: "include", body: JSON.stringify({ farmId, latitude, longitude }),
        });
        if (!fetchResponse.ok) {
            const errorData = await fetchResponse.json();
            throw new Error(errorData.message || `Workspace failed (${fetchResponse.status})`);
        }
        console.log(`Success fetch/save: Farm ${farmId}`);
        return true;
     } catch (fetchError) {
        console.error(`Error fetch/save: Farm ${farmId}:`, fetchError);
        setError(`Failed to fetch latest: ${fetchError.message}`);
        return false;
     } finally { setIsFetchingNew(false); }
  }, [farmId, latitude, longitude]);

  // --- Effect 2: Load weather data for display (refined logic) ---
  useEffect(() => {
    // ... (Exact same logic as previous response: checks coordsProcessed,
    //      checks if latitude/longitude state is set, tries GET,
    //      handles 200, 404 (calls fetchAndSaveNewWeather -> GET again),
    //      handles other errors) ...
     if (!coordsProcessed || !farmId) {
        if(farmId && !coordsProcessed) setIsLoading(true);
        else if (!farmId) { setError("Missing Farm ID"); setIsLoading(false); }
        return;
     }
     if (latitude === null || longitude === null) {
         // Only set error if coords *should* have been processed but are still null
         if (locationString && locationString.includes(",")) {
             setError("Location coordinates not available for weather.");
         } else {
             // If locationString wasn't coords, this is expected, don't show weather error yet.
             // Or maybe show a specific message like "Coordinates needed for weather"
             setError("Weather requires coordinates.");
         }
         setIsLoading(false);
         return;
     }

     let isMounted = true;
     const loadWeatherData = async () => {
        setIsLoading(true); setError(null); setWeatherData(null);
        try {
            const getResponse = await fetch( `http://localhost:3010/user/weather/current/${farmId}`, { credentials: "include" } );
            if (isMounted && getResponse.ok) {
                const data = await getResponse.json(); setWeatherData(data);
            } else if (isMounted && getResponse.status === 404) {
                console.log(`No existing weather for Farm ID: ${farmId}. Fetching new...`);
                const fetchSuccess = await fetchAndSaveNewWeather(); // Await fetch
                if (isMounted && fetchSuccess) {
                    const getResponseAgain = await fetch( `http://localhost:3010/user/weather/current/${farmId}`, { credentials: "include" } );
                    if (isMounted && getResponseAgain.ok) {
                        const data = await getResponseAgain.json(); setWeatherData(data);
                    } else if (isMounted) {
                        const errorData = await getResponseAgain.json();
                        throw new Error(errorData.message || `Failed get after fetch (${getResponseAgain.status})`);
                    }
                } else if (isMounted && !error) { setError(prevError => prevError || "Failed initial fetch."); }
            } else if (isMounted) {
                const errorData = await getResponse.json();
                throw new Error(errorData.message || `Failed get weather (${getResponse.status})`);
            }
        } catch (loadError) {
            console.error(`Error loadWeather: Farm ${farmId}:`, loadError);
            if (isMounted) setError(loadError.message);
        } finally { if (isMounted) setIsLoading(false); }
     };
     loadWeatherData();
     return () => { isMounted = false; };

  }, [farmId, coordsProcessed, latitude, longitude, fetchAndSaveNewWeather, locationString]); // Added locationString dependency


  // --- JSX ---
  // Using your original structure and sx props exactly
  return (
    <Box
      id="cardContainer"
      sx={{ // <-- YOUR original sx prop
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        minWidth: { xs: "auto", sm: "auto", md: "100px" },
        width: { xs: "auto", sm: "auto", md: "380px" },
        padding: "12px",
        border: "1px solid rgba(29, 46, 35, 0.24)",
        height: { xs: "auto", sm: "auto", md: "280px" }, // Might need adjusting if content overflows
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
      {/* --- Original Card Top --- */}
      <Box id="cardTop">
        <Box
          id="cardTopHeader"
          sx={{ // <-- YOUR original sx prop
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body" // <-- YOUR original variant
            sx={{ // <-- YOUR original sx prop
              fontSize: "1.2rem",
            }}
          >
            Farm Name: {name}
          </Typography>
          <CloudCircle
            sx={{ // <-- YOUR original sx prop
              fontSize: "2rem",
            }}
          />
        </Box>
      </Box>

      {/* --- Original Card Bottom --- */}
      <Box id="cardBottom">
        <Box
          id="weatherDetails"
          sx={{ // <-- YOUR original sx prop
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0px", // Kept original, adjust if needed for loading/error states
          }}
        >
          {/* --- Conditional Rendering Logic --- */}
          {isLoading ? (
            <CircularProgress /> // Show spinner while loading
          ) : error ? (
            // Display error and potentially a retry button
            <>
               <Typography color="error" variant="body2" sx={{ textAlign: 'center', mb: 1 }}> {/* Centered error */}
                 {error} {/* Display the error message */}
               </Typography>
               {/* Show retry button only if coords are available */}
               {latitude !== null && longitude !== null && (
                   <Button
                       variant="outlined" size="small"
                       onClick={fetchAndSaveNewWeather}
                       disabled={isFetchingNew} >
                       {isFetchingNew ? <CircularProgress size={16}/> : "Retry Fetch"}
                   </Button>
                )}
             </>
          ) : weatherData ? (
            // Display fetched weather data using original Typography structure
            <>
              {/* --- Your original Typography for Weather Data --- */}
              <Typography variant="h4" sx={{ marginBottom: "10px" }}>
                {Math.round(weatherData.current_temp_celsius)}°C
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "5px", textTransform: 'capitalize' }}>
                {weatherData.current_weather_description}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Humidity: {weatherData.current_humidity_percent}%
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Wind: {weatherData.current_wind_speed_mps.toFixed(1)} m/s
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                 {/* Display the geocoded location name */}
                Location: {displayLocation}
              </Typography>
              <Typography variant="caption" sx={{ color: "text.disabled", mt: 1 }}>
                 Updated: {new Date(weatherData.current_data_time).toLocaleTimeString()}
              </Typography>
              {/* --- Optional Refresh Button (below details) --- */}
              <Button
                variant="text" size="small"
                onClick={fetchAndSaveNewWeather}
                disabled={isFetchingNew}
                sx={{mt: 1, fontSize: '0.7rem'}} >
                {isFetchingNew ? <CircularProgress size={12}/> : "Refresh"}
              </Button>
            </>
          ) : (
            // Fallback if no data and no error (e.g., waiting for coords or coords invalid)
             <Typography variant="body2" sx={{ color: "gray" }}>
               {coordsProcessed ? "Weather requires coordinates." : "Processing location..."}
             </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

// --- Original PropTypes (without lat/lon) ---
WeatherCard.propTypes = {
  farmId: PropTypes.number.isRequired,
  locationString: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default WeatherCard;