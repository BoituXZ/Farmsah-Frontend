import { useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import FarmCard from "../components/FarmCard";
import FarmItem from "../components/FarmItem";
import AddFarmComponent from "../components/AddFarmComponent";

const Farms = () => {
  const [farms, setFarms] = useState([]);
  const [locationNames, setLocationNames] = useState({});
  console.log(farms);

  useEffect(() => {
    const fetchFarms = async () => {
      try {
        const response = await fetch("http://localhost:3010/user/farms", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch farms");
        }

        const data = await response.json();
        setFarms(data); // Update state with fetched farms
      } catch (error) {
        console.error("Error fetching farms:", error);
      }
    };

    fetchFarms();
  }, []);

  

  return (
    <Box id="page" sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}>
      <Box
        id="mainContent"
        sx={{
          overflowY: "auto",
          display: "flex",
          overflowX: "none",
          flex: "4",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          "&::-webkit-scrollbar": { width: "5px", borderRadius: "10px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#2c5f2dff",
            borderRadius: "10px", // Rounded edges
          },
          "&::-webkit-scrollbar-track": { backgroundColor: "rgba(0, 0, 0, 0.1)" },
          "&::-webkit-scrollbar-thumb:hover": { background: "#1e4020" },
        }}
      >
        {/* Farm cards */}
        {farms.map((farm) => (
          <FarmCard
            key={farm.id}
            slug={farm.slug}
            image={farm.image_url || "https://via.placeholder.com/150"}
            farmName={farm.name}
            location={farm.location}
            size={`${farm.size} acres`}
            livestock={farm.livestock || "No livestock"}
            crops={farm.crops || "No crops"}
          />
        ))}
      </Box>
      <Divider />
      <AddFarmComponent />

      <Box
        id="sideContent"
        sx={{
          display: { xs: "none", sm: "flex", md: "flex" },
          flex: "1",
          overflow: "None",
          minWidth: "280px",
          flexDirection: "column",
        }}
      >
        <Box
          id="sideContentHeader"
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", overflowY: "auto" }}
        >
          <Typography variant="h2">Farm List</Typography>
        </Box>
        <Divider />
        <Box id="sideContentBody" sx={{ display: "flex", flexDirection: "column", padding: "2px", gap: "5px", overflowY: "auto" }}>
          {farms.map((farm) => (
            <FarmItem key={farm.id} farmName={farm.name} location={farm.location} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Farms;
