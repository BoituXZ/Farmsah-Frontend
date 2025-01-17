import { homeTheme } from "../../theme/Theme";
import { ThemeProvider } from "@mui/material";
import { Box, Typography } from "@mui/material";
import Card from "../../components/Card";

// TODO: Fix card props
const Home = () => {
  return (
    <ThemeProvider theme={homeTheme}>
      <Box id="page" sx={{ bgcolor: 'background.white', borderBottom: "1px dashed red"}} >
        <Box id="pageHeader" sx={{ bgcolor: 'background.white', color: 'background.black' }}>
          <Typography variant="h1"
           sx={{fontSize:"2rem", fontWeight:"400",  padding: "0.4rem", margin: "0rem", border: "solid 1px blue"}}>
            Dashboard
            </Typography>
        </Box>
        <Box id="bodyContent">
          <Box id="bodyOveriew">
            <Typography variant="h1" sx={{fontSize:"0.9rem", fontWeight:"500", padding: "0.4rem", margin: "0rem"}}>
              Overview
            </Typography>
            <Box id="overviewContent" sx={{display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default Home