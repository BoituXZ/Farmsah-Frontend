import { Theme } from '../theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import { Accordion, Box, Card, CssBaseline, Divider, Typography } from '@mui/material';
import { Css } from '@mui/icons-material';
import FarmCard from '../components/FarmCard';
import FarmItem from '../components/FarmItem';

const Farms = () => {
  const farmData = [
    {
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg',
      name: 'Sunny Acres',
      location: 'California, USA',
      size: '150 acres',
      livestock: 'Cattle, Chickens',
      crops: 'Corn, Wheat'
    },
    {
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
      name: 'Green Valley',
      location: 'Texas, USA',
      size: '200 acres',
      livestock: 'Sheep, Goats',
      crops: 'Soybeans, Barley'
    },
    {
      image: 'https://images.pexels.com/photos/442116/pexels-photo-442116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Blue Mountain Farm',
      location: 'Colorado, USA',
      size: '300 acres',
      livestock: 'Horses, Pigs',
      crops: 'Grapes, Alfalfa'
    },
    {
      image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Riverbend Farm',
      location: 'Oregon, USA',
      size: '250 acres',
      livestock: 'Ducks, Turkeys',
      crops: 'Carrots, Peas'
    }
  ];

  return(
    <Box id="page"
      sx={{ display: "flex",flexDirection: "row", height: "100%", width: "100%" }}>
      <Box id="maiContent"
        sx={{ 
          // border: "solid 1px red",
          width: "100%",
          height: "100%",
          flex: "4",
          overflow: "auto",
          gap: "15px",
          display: "flex",
          flexDirection: "column",
          padding: "10px"}}>

        {/* Farm cards */}
        {farmData.map((farm, index) => (
          <FarmCard 
            key={index}
            image={farm.image}
            farmName={farm.name}
            location={farm.location}
            size={farm.size}
            livestock={farm.livestock}
            crops={farm.crops}
          />
        ))}
      </Box>
      
      <Box id="sideContent"
        sx={{ display:{xs:"none", sm:"flex", md:"flex"},
        flex: "1", 
        overflow: "None",
        minWidth: "250px",
        flexDirection: "column",
        }}>
          <Box id="sideContentHeader" 
          
          sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px", overflowY: "auto"}}>
            <Typography variant='h2'>Farm List</Typography>
          </Box>
          <Divider/>
          <Box id="sideContentBody"
            sx={{display: "flex", flexDirection: "column", padding: "2px", gap: "5px", overflowY: "auto"}}>
            
            {farmData.map((farm, index) => (
              <FarmItem
                key={index}
                farmName={farm.name}
                location={farm.location}/>  
            ))}
            </Box>
        
        
      </Box>
    </Box>
  )
}

export default Farms
