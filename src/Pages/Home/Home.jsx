import { homeTheme } from "../../theme/Theme";
import { ThemeProvider } from "@mui/material";
import { Box, Typography } from "@mui/material";
import StatCard from "../../components/Card";

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
            <Typography variant="h1" sx={{fontSize:"1rem", fontWeight:"600", padding: "1rem", margin: "0rem"}}>
              Overview
            </Typography>
            <Box id="overviewContent" sx={{display: "flex", flexWrap: "wrap", gap:"15px", width: "100%", margin: "0rem", padding: "0.2rem"}}>
              <StatCard title="Crops" value="1203Kg"/>
              <StatCard title="Weather" value="48F"/>
              <StatCard title="Water" value="129000"/>
              <StatCard title="Profits" value="$2033"/>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}


export default Home