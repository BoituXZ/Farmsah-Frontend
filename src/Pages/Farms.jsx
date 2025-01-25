import { Theme } from '../theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import { Accordion, Box, Card, CssBaseline, Divider, Typography } from '@mui/material';
import { Css } from '@mui/icons-material';


const Farms = () => {

  return(
    
      
      <Box id="page"
      sx={{ display: "flex",flexDirection: "row", height: "100%", width: "100%" }}>
          <Box id="maiContent"
          sx={{ border: "solid 1px red",
            width: "100%",
            height: "100%",
            flex: "4",
            overflow: "auto",
            padding: "10px"}}>
            <Card variant="outlined"
            sx={{display: "flex", flexDirection: "column", width: "90%", padding: "10px"}}>
              <Box id="cardHeader"
              sx={{width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
                <Typography variant='h2'>Farm Name</Typography>
                <Typography variant='subtitle1'>Location</Typography>
              </Box>
              {/* <Divider />  Figure out wht the divider isn't working */}
              <Box id="cardImage"
              sx={{maxWidth: "1px", maxHeight: "40px"}}>
                {/* <img src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="placeholder" /> */}
              </Box>
              <Box id="cardDetails">
                <Typography variant='subtitle1'>Size</Typography>
              </Box>
            </Card>
        </Box>
      
        <Box id="sideContent"
      sx={{ border: "solid 1px blue", flex: "1", overflow: "None",
      }}
      >
        <Typography variant='h2'>Farm List</Typography>

          </Box>

      </Box>
      

  )

}
export default Farms