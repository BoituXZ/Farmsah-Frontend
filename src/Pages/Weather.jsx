// src/pages/Weather.jsx
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Paper,
  Stack,
  CircularProgress,
  Alert,
  IconButton,
  Grid,
  Tooltip,
} from "@mui/material";
import {
  Refresh as RefreshIcon,
  Thermostat as ThermostatIcon,
  Air as AirIcon,
  Opacity as OpacityIcon,
  LocationOn as LocationOnIcon,
  ErrorOutline as ErrorOutlineIcon,
} from "@mui/icons-material";

//======================================================================
//   1. STYLED, SELF-CONTAINED WEATHER CARD COMPONENT
//      - This component is now defined inside Weather.jsx for simplicity.
//      - The complex data fetching logic is preserved as requested.
//      - The JSX and styling are completely redesigned for a modern look.
//======================================================================
const WeatherCard = ({ farmId, locationString, name }) => {
  // --- STATE AND LOGIC (PRESERVED FROM YOUR ORIGINAL WeatherCard.jsx) ---
  const [displayLocation, setDisplayLocation] = useState(locationString);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFetchingNew, setIsFetchingNew] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [coordsProcessed, setCoordsProcessed] = useState(false);

  // --- LOGIC - Effect 1: Process locationString for display name and coordinates ---
  useEffect(() => {
    setCoordsProcessed(false); setLatitude(null); setLongitude(null);
    setError(null); setWeatherData(null); setIsLoading(true);
    const processLocation = async () => {
      let lat = null, lon = null;
      if (locationString && locationString.includes(",")) {
        const parts = locationString.split(",").map((part) => part.trim());
        if (parts.length >= 2 && !isNaN(parseFloat(parts[0])) && !isNaN(parseFloat(parts[1]))) {
          lat = parseFloat(parts[0]); lon = parseFloat(parts[1]);
          setLatitude(lat); setLongitude(lon);
        }
      }
      if (lat !== null && lon !== null) {
        try { // Using Nominatim for reverse geocoding as in your original logic
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`);
          if (!response.ok) throw new Error(`Geocoding failed (${response.status})`);
          const data = await response.json();
          if (data?.address) {
            const { city, town, village, county, state, country } = data.address;
            const locationName = [city || town || village || county, state, country].filter(Boolean).join(", ");
            setDisplayLocation(locationName || "Location Name Unavailable");
          } else { setDisplayLocation("Location Name Unavailable"); }
        } catch (fetchError) {
          console.error("Error fetching location name:", fetchError);
          setDisplayLocation("Error fetching location name");
        } finally { setCoordsProcessed(true); }
      } else {
        setDisplayLocation(locationString || "Unknown Location");
        setError("Invalid or missing coordinates in location string.");
        setCoordsProcessed(true);
      }
    };
    processLocation();
  }, [locationString, farmId]);

  // --- LOGIC - Function to fetch NEW weather data ---
  const fetchAndSaveNewWeather = useCallback(async () => {
    if (latitude === null || longitude === null) {
      setError("Cannot fetch weather: Coordinates unavailable."); return false;
    }
    setIsFetchingNew(true); setError(null);
    try {
      const fetchResponse = await fetch(`http://localhost:3010/user/weather/fetch`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        credentials: "include", body: JSON.stringify({ farmId, latitude, longitude }),
      });
      if (!fetchResponse.ok) {
        const errorData = await fetchResponse.json();
        throw new Error(errorData?.message || `Fetch trigger failed (${fetchResponse.status})`);
      }
      // Trigger a reload after successful fetch
      const reloadSuccess = await loadWeatherData(true);
      return reloadSuccess;
    } catch (fetchError) {
      console.error(`Error POST /fetch: Farm ${farmId}:`, fetchError);
      setError(`Failed to fetch latest: ${fetchError.message}`);
      return false;
    } finally {
      setIsFetchingNew(false);
    }
  }, [farmId, latitude, longitude]);


  // --- LOGIC - Effect 2: Load weather data for display (with GET->404->POST->GET flow) ---
  const loadWeatherData = useCallback(async (isRetry = false) => {
    if (!coordsProcessed || latitude === null || longitude === null) return false;
    if (!isRetry) setIsLoading(true);
    setError(null);
    try {
        const getResponse = await fetch(`http://localhost:3010/user/weather/current/${farmId}`, { credentials: "include" });
        if (getResponse.ok) {
            const data = await getResponse.json();
            setWeatherData(data);
            setError(null);
            return true;
        }
        if (getResponse.status === 404 && !isRetry) { // Only trigger POST on first 404
            const fetchSuccess = await fetchAndSaveNewWeather();
            if (fetchSuccess) return true; // fetchAndSave handles the retry
        } else if (getResponse.status === 404 && isRetry) {
             throw new Error("Data not found even after refresh.");
        }else {
            const errorData = await getResponse.json().catch(() => ({}));
            throw new Error(errorData.message || `Failed to get weather data (${getResponse.status})`);
        }
    } catch (loadError) {
        console.error(`Error in loadWeatherData for Farm ${farmId}:`, loadError);
        setError(loadError.message);
        return false;
    } finally {
        setIsLoading(false);
    }
}, [farmId, coordsProcessed, latitude, longitude, fetchAndSaveNewWeather]);


useEffect(() => {
    // This effect now simply calls the memoized loadWeatherData function
    let isMounted = true;
    if (isMounted) {
      loadWeatherData();
    }
    return () => { isMounted = false; };
}, [loadWeatherData]);

  // Helper to get a weather icon component
  const getWeatherIcon = (iconCode) => {
    if (!iconCode) return null;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return <img src={iconUrl} alt="weather icon" style={{ width: '100px', height: '100px' }} />;
  };


  // --- STYLING - New Card Render Content ---
  const renderContent = () => {
    // Loading State
    if (isLoading) {
      return (
        <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
          <CircularProgress />
          <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>Initializing...</Typography>
        </Stack>
      );
    }

    // Error State
    if (error) {
      return (
        <Stack justifyContent="center" alignItems="center" sx={{ height: '100%', p: 2, textAlign: 'center' }}>
            <ErrorOutlineIcon color="error" sx={{fontSize: '48px'}}/>
            <Typography variant="h6" color="error" sx={{mt: 1}}>Loading Failed</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>{error}</Typography>
        </Stack>
      );
    }

    // Success State
    if (weatherData) {
      return (
        <Stack sx={{ height: '100%' }}>
          {/* Main temperature and icon display */}
          <Grid container spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
            <Grid item xs={6}>
              {getWeatherIcon(weatherData.current_weather_icon)}
              <Typography variant="h3" component="div" sx={{ fontWeight: 'bold' }}>
                {Math.round(weatherData.current_temp_celsius)}°C
              </Typography>
              <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
                {weatherData.current_weather_description}
              </Typography>
            </Grid>
            {/* Secondary stats */}
            <Grid item xs={6}>
              <Stack spacing={1.5}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Tooltip title="Feels Like"><ThermostatIcon sx={{ color: 'text.secondary' }} /></Tooltip>
                  <Typography variant="body2">
                    {Math.round(weatherData.current_feels_like_celsius)}°C
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Tooltip title="Humidity"><OpacityIcon sx={{ color: 'text.secondary' }} /></Tooltip>
                  <Typography variant="body2">
                    {weatherData.current_humidity_percent}%
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Tooltip title="Wind Speed"><AirIcon sx={{ color: 'text.secondary' }} /></Tooltip>
                  <Typography variant="body2">
                    {weatherData.current_wind_speed_mps.toFixed(1)} m/s
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          {/* Footer location and update time */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pt: 1, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
             <Stack direction="row" alignItems="center" spacing={0.5}>
                <LocationOnIcon fontSize="small" sx={{color: 'text.secondary'}}/>
                <Typography variant="caption" sx={{ color: 'text.secondary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {displayLocation}
                </Typography>
             </Stack>
             <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {new Date(weatherData.current_data_time).toLocaleTimeString()}
             </Typography>
          </Stack>
        </Stack>
      );
    }
    return null; // Should not be reached if logic is correct
  };


  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '16px',
        color: 'white',
        background: 'rgba(0, 0, 0, 0.25)', // Darker glass
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
        },
      }}
    >
      {/* Card Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ pb: 1, mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: '500' }}>{name}</Typography>
        <Tooltip title="Refresh Data">
          <span>
            <IconButton onClick={fetchAndSaveNewWeather} disabled={isFetchingNew || isLoading} size="small" color="inherit">
              {isFetchingNew || isLoading ? <CircularProgress size={16} color="inherit" /> : <RefreshIcon />}
            </IconButton>
          </span>
        </Tooltip>
      </Stack>

      {/* Main Content Area */}
      {renderContent()}
    </Paper>
  );
};

WeatherCard.propTypes = {
  farmId: PropTypes.number.isRequired,
  locationString: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

//======================================================================
//   2. MAIN WEATHER PAGE COMPONENT
//      - Fetches all farm locations.
//      - Uses a responsive grid to display a WeatherCard for each farm.
//======================================================================
const Weather = () => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true); setError(null);
    const fetchLocations = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/weather/location`, { credentials: "include" });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Failed to fetch locations (${response.status})`);
        }
        setLocations(await response.json());
      } catch (error) {
        console.error("Error fetching Locations:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLocations();
  }, []);

  // --- Page Level Render States ---
  if (isLoading) {
    return (
        <Box sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: 2 }}>
            <CircularProgress /><Typography variant="h6">Loading Farm Locations...</Typography>
        </Box>
    );
  }

  if (error) {
    return <Box sx={{ p: 3 }}><Alert severity="error">Error: {error}</Alert></Box>;
  }

  if (locations.length === 0) {
    return <Box sx={{ p: 3 }}><Alert severity="info">No farm locations found.</Alert></Box>;
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        p: { xs: 2, md: 3 }, // Responsive padding
        background: (theme) => theme.palette.background.backgroundImage,
        backdropFilter: "blur(100px)",
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
      }}
    >
      <Grid container spacing={3}>
        {locations.map((location) => (
          <Grid item key={location.id} xs={12} sm={6} md={4} lg={3}>
            <WeatherCard
              farmId={location.id}
              locationString={location.location}
              name={location.name}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Weather;