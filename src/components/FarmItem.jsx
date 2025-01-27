
import { Box, Typography } from '@mui/material'
import React from 'react'
import PropTypes from "prop-types";


const FarmItem = ({ farmName, location }) => {
  return (
    <Box id="farmItem"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                border: "solid 1px white",
                padding: "5px",
                backgroundColor: "rgba(101, 95, 95, 0.2)",
                borderRadius: "5px",
              }}
            >
              <Typography variant='h1'
              sx={{fontSize: "0.8rem"}}
              >{farmName}</Typography>
              <Typography variant='subtitle1'
              sx={{fontSize: "0.6rem",
                color: "#2c5f2dff"
              }}
              >{location}</Typography>
            </Box>
  )
}

FarmItem.propTypes = {
  farmName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired
}
export default FarmItem