// src/components/WeatherCard.jsx
import { CloudCircle } from "@mui/icons-material";
import { Box, CircularProgress, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";

const WeatherCard = ({ farmId, locationString, name }) => {
  // --- State ---
  const [displayLocation, setDisplayLocation] = useState(locationString);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFetchingNew, setIsFetchingNew] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [coordsProcessed, setCoordsProcessed] = useState(false);

  // --- Effect 1: Process locationString for display name and coordinates ---
  useEffect(() => {
    setCoordsProcessed(false);
    setLatitude(null);
    setLongitude(null);
    setError(null);
    setWeatherData(null);
    setIsLoading(true);

    const processLocation = async () => {
      let lat = null, lon = null;
      if (locationString && locationString.includes(",")) {
        const parts = locationString.split(",").map((part) => part.trim());
        if (parts.length === 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
          lat = parseFloat(parts[0]);
          lon = parseFloat(parts[1]);
          setLatitude(lat);
          setLongitude(lon);
        } else {
           console.warn(`FarmId ${farmId}: Bad coord parse.`);
        }
      } else {
        console.warn(`FarmId ${farmId}: No coords.`);
      }

      if (lat !== null && lon !== null) {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`);
          if (!response.ok) throw new Error(`Nominatim failed (${response.status})`);
          const data = await response.json();
          if (data?.address) {
            const { road, city, town, village, county, state, country } = data.address;
            const locationName = [road, city || town || village || county, state, country].filter(Boolean).join(", ");
            setDisplayLocation(locationName || "Location Name Unavailable");
          } else { setDisplayLocation("Location Name Unavailable"); }
        } catch (fetchError) {
          console.error("Error fetching location name:", fetchError);
          setDisplayLocation("Error fetching location name");
        } finally {
           setCoordsProcessed(true);
        }
      } else {
         setDisplayLocation(locationString || "Unknown Location");
         setCoordsProcessed(true);
      }
    };
    processLocation();
  }, [locationString, farmId]);

  // --- Function to fetch NEW weather data (uses state coords) ---
  const fetchAndSaveNewWeather = useCallback(async () => {
    if (latitude === null || longitude === null) {
      setError("Cannot fetch weather: Coordinates unavailable.");
      return false;
    }
    setIsFetchingNew(true);
    setError(null);
    console.log(`Attempting POST /fetch: Farm ${farmId}, Lat ${latitude}, Lon ${longitude}`);
    try {
      const fetchResponse = await fetch(`http://localhost:3010/user/weather/fetch`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ farmId, latitude, longitude }),
      });
      if (!fetchResponse.ok) {
        const errorData = await fetchResponse.json();
        throw new Error(errorData?.message || `Workspace failed (${fetchResponse.status})`);
      }
      console.log(`Success POST /fetch: Farm ${farmId}`);
      return true;
    } catch (fetchError) {
      console.error(`Error POST /fetch: Farm ${farmId}:`, fetchError);
      setError(`Failed to fetch latest: ${fetchError.message}`);
      return false;
    } finally {
      setIsFetchingNew(false);
    }
  }, [farmId, latitude, longitude]);

  // --- Effect 2: Load weather data for display (refined logic) ---
  useEffect(() => {
    if (!coordsProcessed || !farmId) {
      if(farmId && !coordsProcessed) setIsLoading(true);
      return;
    }
    if (latitude === null || longitude === null) {
      setError("Weather requires coordinates in location string.");
      setIsLoading(false);
      return;
    }

    let isMounted = true;
    const loadWeatherData = async () => {
      if (!isFetchingNew) { setIsLoading(true); }
      setError(null);
      setWeatherData(null);
      try {
        console.log(`Attempting GET /current: Farm ${farmId}`);
        const getResponse = await fetch(`http://localhost:3010/user/weather/current/${farmId}`, { credentials: "include" });
        if (isMounted && getResponse.ok) {
          console.log(`Success GET /current: Farm ${farmId}`);
          const data = await getResponse.json();
          setWeatherData(data);
        } else if (isMounted && getResponse.status === 404) {
          console.log(`GET /current 404: Farm ${farmId}. Triggering POST /fetch...`);
          const fetchSuccess = await fetchAndSaveNewWeather();
          if (isMounted && fetchSuccess) {
            console.log(`Attempting GET /current again: Farm ${farmId}`);
            const getResponseAgain = await fetch(`http://localhost:3010/user/weather/current/${farmId}`, { credentials: "include" });
            if (isMounted && getResponseAgain.ok) {
              console.log(`Success GET /current after POST: Farm ${farmId}`);
              const data = await getResponseAgain.json();
              setWeatherData(data);
            } else if (isMounted) {
              const errorData = await getResponseAgain.json().catch(() => ({}));
              throw new Error(errorData.message || `Failed GET after POST (${getResponseAgain.status})`);
            }
          } else if (isMounted && !error) {
            setError(prevError => prevError || "Failed initial fetch.");
          }
        } else if (isMounted) {
          const errorData = await getResponse.json().catch(() => ({}));
          throw new Error(errorData.message || `Failed GET /current (${getResponse.status})`);
        }
      } catch (loadError) {
        console.error(`Error loadWeather: Farm ${farmId}:`, loadError);
        if (isMounted) setError(loadError.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };
    loadWeatherData();
    return () => { isMounted = false; };
  }, [farmId, coordsProcessed, latitude, longitude, fetchAndSaveNewWeather]);


  // --- JSX ---
  return (
    <Box
      id="cardContainer"
      sx={{
        // --- Styles from your original working card ---
        display: "flex",
        flexDirection: "column",
        gap: "20px", // Your internal gap
        height: { xs: "auto", sm: "auto", md: "280px" },
        borderRadius: "15px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        background: "rgba(255, 255, 255, 0.62)",
        padding: "12px",
        border: "1px solid rgba(29, 46, 35, 0.24)",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
        },
        // --- Style Adjustments for Layout ---
        width: { xs: '95%', sm: '90%', md: '380px' }, // Responsive width
        margin: 0, // Removed margin, parent uses gap now
        flexShrink: 0, // Prevent shrinking in flex/grid container
      }}
    >
      {/* --- Original Card Top --- */}
      <Box id="cardTop">
        <Box id="cardTopHeader" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
          <Typography variant="body" sx={{ fontSize: "1.2rem", }}>
            Farm Name: {name}
          </Typography>
          <CloudCircle sx={{ fontSize: "2rem", }} />
        </Box>
      </Box>

      {/* --- Original Card Bottom --- */}
      <Box id="cardBottom">
        <Box id="weatherDetails" sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "0px", }}>
          {/* --- Conditional Rendering Logic (Unchanged) --- */}
          {isLoading ? ( <CircularProgress /> ) : error ? ( <> <Typography color="error" variant="body2" sx={{ textAlign: 'center', mb: 1 }}> {error} </Typography> {latitude !== null && longitude !== null && ( <Button variant="outlined" size="small" onClick={fetchAndSaveNewWeather} disabled={isFetchingNew} > {isFetchingNew ? <CircularProgress size={16}/> : "Retry Fetch"} </Button> )} </> ) : weatherData ? ( <> <Typography variant="h4" sx={{ marginBottom: "10px" }}> {weatherData.current_temp_celsius !== null && weatherData.current_temp_celsius !== undefined ? `${Math.round(weatherData.current_temp_celsius)}\u00B0C` : 'N/A'} </Typography> <Typography variant="body1" sx={{ marginBottom: "5px", textTransform: 'capitalize' }}> {weatherData.current_weather_description || 'N/A'} </Typography> <Typography variant="body2" sx={{ color: "gray" }}> Humidity: {weatherData.current_humidity_percent !== null ? `${weatherData.current_humidity_percent}%` : 'N/A'} </Typography> <Typography variant="body2" sx={{ color: "gray" }}> Wind: {weatherData.current_wind_speed_mps !== null ? `${weatherData.current_wind_speed_mps.toFixed(1)} m/s` : 'N/A'} </Typography> <Typography variant="body2" sx={{ color: "gray" }}> Location: {displayLocation} </Typography> <Typography variant="caption" sx={{ color: "text.disabled", mt: 1 }}> Updated: {weatherData.current_data_time ? new Date(weatherData.current_data_time).toLocaleTimeString() : 'N/A'} </Typography> <Button variant="text" size="small" onClick={fetchAndSaveNewWeather} disabled={isFetchingNew} sx={{mt: 1, fontSize: '0.7rem'}}> {isFetchingNew ? <CircularProgress size={12}/> : "Refresh"} </Button> </> ) : ( <Typography variant="body2" sx={{ color: "gray" }}> {coordsProcessed ? "Weather requires coordinates." : "Processing location..."} </Typography> )}
        </Box>
      </Box>
    </Box>
  );
};

// --- PropTypes ---
WeatherCard.propTypes = {
  farmId: PropTypes.number.isRequired,
  locationString: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default WeatherCard;