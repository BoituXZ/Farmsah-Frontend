import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import MapIcon from '@mui/icons-material/Map';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudIcon from '@mui/icons-material/Cloud';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';

// Colors
// --hunter-green-primary: #2c5f2dff; --almond-secondary: #ede0d4ff; --xanthous-accent: #f3b61fff; --blue-gray-accent: #5a9bd5ff; --jet-text: #333333ff;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const styles = {
    sidebar: {
      width: isCollapsed ? '60px' : '200px', // Dynamic width
      height: '100vh',
      backgroundColor: 'rgba(44, 95, 45, 0.1)', // Blue Gray with transparency
      backdropFilter: 'blur(110px)', // Glass effect
      color: '#333333ff', // Jet text color
      display: 'flex',
      flexDirection: 'column',
      borderRight: '2px solid rgba(255, 255, 255, 0.2)', // Subtle border for the glass effect
      transition: 'width 0.3s ease-in-out',
      overflow: 'hidden',
    },
    toggleButton: {
      cursor: 'pointer',
      position: 'absolute',
      top: '10px',
      right: isCollapsed ? '-10px' : '-11px',
      background: '#5a9bd5ff',
      borderRadius: '50%',
      padding: '5px',
      color: '#fff',
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 1,
    },
    list: {
      height: '100%',
      padding: '1px 12px',
      justifyContent: 'center',
    },
    heading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: '500',
      fontSize: isCollapsed ? '0px' : '27px', // Hide when collapsed
      textAlign: 'center',
      padding: '10px 10px',
      marginBottom: '16px',
      borderBottom: '1px solid #5a9bd5ff', // Subtle border for the glass
      color: '#5a9bd5ff', // Blue Gray accent
      transition: 'font-size 0.3s ease-in-out',
    },
    listItem: {
      fontFamily: 'Merriweather Sans, sans-serif',
      fontSize: isCollapsed ? '0px' : '16px', // Hide text when collapsed
      padding: '8px 0',
      color: '#ede0d4ff', // Almond for list items
      transition: 'font-size 0.3s, transform 0.3s', // Smooth transitions
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
        color: '#5a9bd5ff',
      },
    },
    link: {
      textDecoration: 'none', // Remove underline
      color: 'inherit', // Inherit color from parent styles
    },
  };

  return (
    <Box sx={styles.sidebar}>
      {/* Toggle Button */}
      <Box
        sx={styles.toggleButton}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? '>' : '<'}
      </Box>

      {/* Main Heading */}
      <Typography sx={styles.heading}>Farmsah</Typography>

      {/* Subheadings */}
      <List sx={styles.list}>
        <Link to="/user/home" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <HomeIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Home" />}
          </ListItem>
        </Link>

        <Link to="/user/farms" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <MapIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Farms" />}
          </ListItem>
        </Link>

        <Link to="/user/crops" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <AgricultureIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Crops" />}
          </ListItem>
        </Link>

        <Link to="/user/insights" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <InsightsIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="AI Insights" />}
          </ListItem>
        </Link>

        <Link to="/user/weather" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <CloudIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Weather" />}
          </ListItem>
        </Link>

        <Link to="/user/market" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <StorefrontIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Market" />}
          </ListItem>
        </Link>

        <Link to="/user/resources" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <BookIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Resources" />}
          </ListItem>
        </Link>

        <Link to="/user/settings" style={styles.link}>
          <ListItem sx={styles.listItem}>
            <ListItemIcon sx={styles.listItemIcon}>
              <SettingsIcon />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Settings" />}
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Sidebar;
