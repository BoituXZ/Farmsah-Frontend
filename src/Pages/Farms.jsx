import { Theme } from '../theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import { Box, Card, CssBaseline, Typography } from '@mui/material';

const Farms = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Box id="page" sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}>
        <Box id="maiContent" sx={{ border: "solid 1px red", width: "100%", height: "100%", flex: "4", overflow: "auto", padding: "10px" }}>
          <Box variant="outlined" sx={{ display: "flex", flexDirection: "column", width: "90%", padding: "10px", border: "1px solid #e2e2e2" }}>
            <Box id="cardHeader" sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <Typography variant='h2'>Farm Name</Typography>
              <Typography variant='subtitle1'>Location</Typography>
            </Box>
            {/* <Divider /> Figure out wht the divider isn't working */}
            <Box id="cardImage" sx={{ maxWidth: "100%", maxHeight: "200px", overflow: 'hidden' }}>
              <img component="img" src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="placeholder" style={{ width: '100%', height: 'auto' }} />
            </Box>
            <Box id="cardDetails">
              <Typography variant='subtitle1'>Size</Typography>
              <Typography variant='subtitle1'>Crops</Typography>
              <Typography variant='subtitle1'>Area</Typography>
            </Box>
          </Box>
        </Box>
        <Box id="sideContent" sx={{ border: "solid 1px blue", flex: "1", overflow: "None" }}>
          <Typography variant='h2'>Farm List</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Farms
