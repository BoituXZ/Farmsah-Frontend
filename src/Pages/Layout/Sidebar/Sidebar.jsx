import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import MapIcon from '@mui/icons-material/Map';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudIcon from '@mui/icons-material/Cloud';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';


// --hunter-green-primary: #2c5f2dff; --almond-secondary: #ede0d4ff; --xanthous-accent: #f3b61fff; --blue-gray-accent: #5a9bd5ff; -jet-text: #333333ff;
const Sidebar = () => {
  const styles = {
    sidebar: {
      width: '200px',
      height: '100vh',
      backgroundColor: 'rgba(44, 95, 45, 0.1)', // Blue Gray with transparency
      backdropFilter: 'blur(110px)', // Glass effect
      color: '#333333ff', // Jet text color
      display: 'flex',
      flexDirection: 'column',
      borderRight: '2px solid rgba(255, 255, 255, 0.2)', // Subtle border for the glass effect
    },
    list: {
      height: '100%',
      padding: '1px 12px',
      justifyContent: 'center',
    },
    heading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      fontSize: '27px',
      textAlign: 'center',
      padding: '10px 10px',
      marginBottom: '16px',
      borderBottom: "1px solid #5a9bd5ff", // Subtle border for the glass
      color: '#5a9bd5ff', // Blue Gray accent
    },
    listItem: {
      fontFamily: 'Merriweather Sans, sans-serif',
      fontSize: '16px',
      padding: '8px 0',
      color: '#ede0d4ff', // Almond for list items
      transition: 'color 0.3s, transform 0.3s', // Smooth transitions
      cursor: 'pointer',
      '&:hover': {
        color: '#5a9bd5ff', // Xanthous accent on hover
        transform: 'scale(0.9)', // Slight scaling effect
        fontWeight: 'bolder', // Bold font on hover
      },
    },
    listItemIcon: {
      color: '#ede0d4ff', // Match text color
      minWidth: '35px', // Adjust spacing for icon
      '&:hover': {
        color: '#5a9bd5ff',},
    },
  };

  return (
    <Box sx={styles.sidebar}>
      {/* Main Heading */}
      <Typography sx={styles.heading}>Farmsah</Typography>

      {/* Subheadings */}
      <List sx={styles.list}>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Farms" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <AgricultureIcon />
          </ListItemIcon>
          <ListItemText primary="Crops" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <InsightsIcon />
          </ListItemIcon>
          <ListItemText primary="AI Insights" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <CloudIcon />
          </ListItemIcon>
          <ListItemText primary="Weather" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="Market" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Resources" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemIcon sx={styles.listItemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
