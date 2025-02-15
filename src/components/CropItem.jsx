import { Box, Typography } from '@mui/material'
import PropTypes from "prop-types";


const CropItem = ({ cropName, yields }) => {
  return (
    <Box id="CropItem"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                
                
                padding: "5px",
                backgroundColor: "rgba(101, 95, 95, 0.2)",
                borderRadius: "5px",
                boxShadow: "0 2px 2px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant='h1'
              sx={{fontSize: "0.8rem"}}
              >{cropName}</Typography>
              <Typography variant='subtitle1'
              sx={{fontSize: "0.6rem",
                color: "#2c5f2dff"
              }}
              >{yields}</Typography>
            </Box>
  )
}

CropItem.propTypes = {
  cropName: PropTypes.string.isRequired,
  yields: PropTypes.string.isRequired
}
export default CropItem