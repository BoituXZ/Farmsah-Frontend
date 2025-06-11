// src/components/CropItem.jsx
import { Box, Typography, Paper } from '@mui/material';
import PropTypes from "prop-types";

const CropItem = ({ cropName, location }) => { // Assuming location is more useful than yields here
  return (
    <Paper
      elevation={2}
      sx={{
        display: "flex", flexDirection: "row", justifyContent: "space-between",
        alignItems: "center", p: 1.5,
        borderRadius: '8px',
        height: '40px',
        // Subtle glass effect for list items
        background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
        {cropName}
      </Typography>
      <Typography variant='body2' sx={{ color: "text.secondary", textAlign: 'right', flexShrink: 0, ml: 1 }}>
        {location || 'N/A'}
      </Typography>
    </Paper>
  );
};

CropItem.propTypes = {
  cropName: PropTypes.string.isRequired,
  location: PropTypes.string // Changed from yields to location
};

export default CropItem;