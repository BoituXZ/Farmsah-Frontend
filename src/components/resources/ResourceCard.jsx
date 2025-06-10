// src/components/resources/ResourceCard.jsx
import { Card, CardContent, CardMedia, Typography, Box, Chip, CardActionArea, useTheme } from "@mui/material";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SchoolIcon from '@mui/icons-material/School';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import EventIcon from '@mui/icons-material/Event';
import AnalyticsIcon from '@mui/icons-material/Analytics';

// Map string identifiers to actual MUI Icon components
const iconMap = {
  Newspaper: NewspaperIcon,
  School: SchoolIcon,
  PrecisionManufacturing: PrecisionManufacturingIcon,
  Event: EventIcon,
  Analytics: AnalyticsIcon,
};

const ResourceCard = ({ resource }) => {
  const theme = useTheme(); // Access the current theme
  const IconComponent = iconMap[resource.icon];

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper, // Use theme paper color
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 16px 0 ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
        }
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={resource.image}
          alt={resource.title}
        />
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1}}>
             <Chip 
               icon={IconComponent && <IconComponent />} 
               label={resource.category} 
               size="small"
               sx={{ backgroundColor: theme.palette.accent.darkGreen, color: theme.palette.background.paper }} // Style using your theme
            />
            <Typography variant="caption" color="text.secondary">
                {resource.date}
            </Typography>
          </Box>
          <Typography gutterBottom variant="h2" component="div" sx={{ typography: 'h2', color: 'text.primary', flexGrow: 1 }}>
            {resource.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ typography: 'body1', mt: 1 }}>
            {resource.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResourceCard;