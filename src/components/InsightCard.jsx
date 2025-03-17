import { Box, Typography } from "@mui/material"


const InsightCard = () => {
  return (
    <Box id="insightCardContainer"
    sx={{
        border: "solid 1px rgba(29, 46, 35, 0.24)",
        height: "320px", 
        maxWidth: {xs:"400px", sm:"300px", md:"600px"},
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
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
            borderBottom: "1px black solid",
            borderHeight: "60px",
            padding: "0 6px",
            margin: "10px 0px"
        }}
        >
        <Typography variant="h2"
        sx={{
            fontWeight: "300",
        }}>
            Suggestion Type (Ai or Just information)
        </Typography>
        </Box>

        <Box 
        id="suggestionSubject"
        sx={{
            margin: "3px 9px",
            // border: "solid 1px red",
            padding: "1px",
            width: "300px",
            // marginBottom: "18px"
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
            margin: "2px 2px",
            // border: "solid 1px red",
            padding: "3px",
            height: "200px",
            width: "90%",
            textAlign: "left",
            justifySelf: "center",
        }}
        >
            <Typography variant="body"
            sx={{fontWeight: "350"}}>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
        </Box>
    </Box>
  )
}

export default InsightCard