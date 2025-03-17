import { CloudCircle } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"

const WeatherCard = () => {
return (
    <Box
        id="cardContainer"
        sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: { xs: "92%", sm: "98%", md: "85%" },
            width: { xs: "92%", sm: "98%", md: "40%" },
            padding: "15px",
            border: "1px solid rgba(29, 46, 35, 0.24)",
            height: { xs: "220px", sm: "220px", md: "330px" },
            borderRadius: "15px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            margin: "8px",
        background: "linear-gradient(45deg,rgb(73, 159, 230) 30%, #21CBF3 90%)",
        backgroundImage: "url('https://images.pexels.com/photos/258149/pexels-photo-258149.jpeg')",
        backgroundSize: "cover",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
        <Box id="cardTop">
            <Box id="cardTopHeader"
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
            >
                <Typography variant="h2">
                New York, USA
                </Typography>
                <CloudCircle
                sx={{
                    fontSize: "2rem",
                }} />

            </Box>
        </Box>
        <Box id="cardBottom"
        
        >
                <Box id="weatherDetails"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "20px",
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: "10px" }}>
                        25°C
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                        Sunny
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                        Humidity: 60%
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                        Wind: 10 km/h
                    </Typography>
                    <Typography variant="body2" sx={{ color: "gray" }}>
                        Location: New York, USA
                    </Typography>
                </Box>
        </Box>

    </Box>
  )
}

export default WeatherCard