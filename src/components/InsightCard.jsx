import { ThemeContext } from "@emotion/react"
import { Box, Typography } from "@mui/material"


const InsightCard = () => {
  return (
    <Box id="insightCardContainer"
    sx={{
        border: "1px solid rgba(29, 46, 35, 0.24)",
        height: "320px", 
        maxWidth: {xs:"400px", sm:"300px", md:"600px"},
        display: "flex",
        flexDirection: "column",
        borderRadius: "9px",
        justifyContent: "center",
        background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "1px 3px 5px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "scale(1.01)",
                    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                },


    }}
    >

        <Box
        id="cardHeader"
        sx={{
            padding: "0 6px",
            margin: "3px"
        }}
        >
        <Typography variant="h2">
            Suggestion Type (Ai or Just information)
        </Typography>
        </Box>

        <Box 
        id="suggestionSubject"
        sx={{
            margin: "3px 9px",
            padding: "1px",
            width: "300px",
            marginBottom: "18px"
        }}
        >
            <Typography variant="body"
            sx={{
                fontSize: "0.8rem",
                color: "#2c5f2dff",

            }}
            >
                Plant Maize || Add Pesticide in uKleza
            </Typography>
        </Box>
        <Box 
        id="suggestionBody"
        sx={{
            padding: "3px",
            height: "200px",
            width: "100%",
            textAlign: "left",
            justifySelf: "center",
        }}
        >
            <Typography variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        </Box>
    </Box>
  )
}

export default InsightCard