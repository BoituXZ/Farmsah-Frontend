import { Box, Typography } from "@mui/material"
import PropTypes from 'prop-types';


const FarmCard = ({farmName, location, size, crops, livestock, image}) => {
  return (
    <Box id="FarmCard"variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: { xs: "100%", sm: "100%", md: "90%" },
              padding: "15px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              height: { xs: "280px", sm: "280px", md: "420px" },
              borderRadius: "9px",
              margin: { xs: "auto", sm: "auto", md: "0" },
              background: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth animation
              "&:hover": {
                transform: "scale(1.01)", // Slightly scale up on hover
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",}
            }} >

              <Box id="cardHeader"
              sx={{width:"100%",
                display: "flex",
                flex: {xs: "2", sm:"2", md:"1"},
                maxHeight: {xs: "24px", sm:"24px", md:"40px"},
                flexDirection: "row",
                
                justifyContent: {xs: "space-between",md:"space-between"},
                // border: "solid 1px green",
                padding: {xs:"0 0.2rem",md:"1px 10px"},
                
              }}>
                <Typography variant='h2'
                sx={{fontSize: {xs:"1rem"}}}
                >{farmName}</Typography>
                <Typography variant='subtitle1' 
                sx={{textAlign:"center", 
                  fontWeight: "400",
                  fontSize: {xs:"0.7rem", md:"1rem"},

                }}
                >Location: {location}</Typography>
              </Box>
              {/* <Divider />  Figure out wht the divider isn't working */}
              <Box
  id="cardImage"
  sx={{
    maxWidth: "auto",
    maxHeight: { xs: "100px", md: "300px" },
    flex: "3",
    // border: "solid 1px red",
    overflow: "hidden", // Hide any overflow
  }}
>
  <img
    src={image}
    alt="placeholder"
    style={{
      width: "100%",
      height: "100%", // Use 100% height to make it fit within the container
      objectFit: "cover", // Ensures the image covers the space while maintaining aspect ratio
      boxSizing: "border-box",
    }}
  />
</Box>

<Box
  id="cardDetails"
  sx={{
    flex: "2",
    // border: "solid 1px blue",
    padding: "0 10px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    backgroundColor: "rgba(47, 45, 45, 0.19)",
    borderRadius: "0 0 9px 9px",
  }}
>
                <Typography variant='subtitle1'>Size:
                  <Typography variant='body1'>{size}</Typography>
                </Typography>
                
                <Typography variant='subtitle1'>Crops:
                  <Typography variant='body1'>{crops}</Typography>
                </Typography>
                
                <Typography variant='subtitle1'>Livestock:
                  <Typography variant='body1'>{livestock}</Typography>
                </Typography>
                

              </Box>
            </Box>
  )
}
FarmCard.propTypes = {
  image: PropTypes.string.isRequired,
    farmName: PropTypes.string,
    location: PropTypes.string,
    size: PropTypes.string,
    crops: PropTypes.string,
    livestock: PropTypes.string,

};

export default FarmCard
