import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@mui/material";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";

const LocationPicker = ({ setLocation }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [locationName, setLocationName] = useState("Select a location");

  // Southern Africa bounds
  const southAfricaBounds = [
    [-35.0, 10.0], // Southwest corner
    [-10.0, 40.0], // Northeast corner
  ];

  // Reverse Geocode Function (Get Location Name from Lat/Lng)
  const fetchLocationName = async (lat, lng) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      if (data && data.display_name) {
        setLocationName(data.display_name); // Show user-friendly name
      } else {
        setLocationName("Unknown Location");
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
      setLocationName("Unknown Location");
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        if (
          lat >= southAfricaBounds[0][0] &&
          lat <= southAfricaBounds[1][0] &&
          lng >= southAfricaBounds[0][1] &&
          lng <= southAfricaBounds[1][1]
        ) {
          setMarkerPosition([lat, lng]);
          setLocation(`${lat}, ${lng}`); // Store coordinates for DB
          fetchLocationName(lat, lng); // Convert to human-readable name
        } else {
          alert("Please select a location within Southern Africa.");
        }
      },
    });
    return null;
  };

  const SearchControl = () => {
    const map = useMap();

    useEffect(() => {
      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        showMarker: false,
        retainZoomLevel: true,
        style: "bar",
      });

      map.addControl(searchControl);

      // Listen for search results and update marker
      map.on("geosearch/showlocation", async (e) => {
        const { x: lng, y: lat } = e.location;
        if (
          lat >= southAfricaBounds[0][0] &&
          lat <= southAfricaBounds[1][0] &&
          lng >= southAfricaBounds[0][1] &&
          lng <= southAfricaBounds[1][1]
        ) {
          setMarkerPosition([lat, lng]);
          setLocation(`${lat}, ${lng}`);
          fetchLocationName(lat, lng);
        } else {
          alert("Search result is outside Southern Africa.");
        }
      });

      return () => map.removeControl(searchControl);
    }, [map]);

    return null;
  };

  const locateUser = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          if (
            latitude >= southAfricaBounds[0][0] &&
            latitude <= southAfricaBounds[1][0] &&
            longitude >= southAfricaBounds[0][1] &&
            longitude <= southAfricaBounds[1][1]
          ) {
            setMarkerPosition([latitude, longitude]);
            setLocation(`${latitude}, ${longitude}`);
            fetchLocationName(latitude, longitude);
          } else {
            alert("Your current location is outside Southern Africa.");
          }
        },
        () => alert("Unable to retrieve location."),
        { enableHighAccuracy: true }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.23)",
        padding: "10px",
        borderRadius: "8px",
        "&:active": { borderColor: "black" },
        position: "relative",
      }}
    >
      <Typography variant="body1" style={{ color: "#2c5f2dff", fontWeight: "400" }}>
        {locationName}
      </Typography>
      <br />
      <Button
        onClick={locateUser}
        sx={{
          position: "absolute",
          zIndex: 1000,
          top: "10px",
          right: "10px",
          background: "white",
          border: "1px solid #2c5f2dff",
          padding: "5px 10px",
          cursor: "pointer",
          borderRadius: "5px",
          fontSize: "12px",
          "&:hover": { background: "#f7d17b" },
        }}
      >
        🎯 Use My Location
      </Button>

      <MapContainer
        center={[-25, 25]} // Start in Southern Africa
        zoom={5}
        style={{ height: "200px", width: "100%", borderRadius: "8px", margin: "auto" }}
        maxBounds={southAfricaBounds}
        maxBoundsViscosity={1.0}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SearchControl />
        <MapClickHandler />
        {markerPosition && <Marker position={markerPosition} />}
      </MapContainer>
    </Box>
  );
};

LocationPicker.propTypes = {
  setLocation: PropTypes.func.isRequired,
};

export default LocationPicker;
