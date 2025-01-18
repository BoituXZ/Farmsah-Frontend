import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Drawer } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
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
const styles = {
  sidebar: {
    width: '200px',
    height: '100vh',
    backgroundColor: 'rgba(44, 95, 45, 0.1)', // Blue Gray with transparency
    backdropFilter: 'blur(110px)', // Glass effect
    color: '#333333ff', // Jet text color
    display: 'flex',
    flexDirection: 'column',
    borderRight: '2px solid rgba(255, 255, 255, 0.2)', // Subtle border
    overflow: 'hidden',
    transition: 'width 0.3s ease-in-out',
  },
  minimizedSidebar: {
    width: '60px',
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
    borderBottom: '1px solid #5a9bd5ff', // Subtle border for the glass
    color: '#5a9bd5ff',
  },
  listItem: {
    fontFamily: 'Merriweather Sans, sans-serif',
    fontSize: '16px',
    padding: '8px 0',
    color: '#ede0d4ff',
    cursor: 'pointer',
    '&:hover': {
      color: '#5a9bd5ff',
    },
  },
  listItemIcon: {
    color: '#ede0d4ff',
    minWidth: '35px',
    '&:hover': {
      color: '#5a9bd5ff',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  hamburgerIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: 'black',
    zIndex: 100,
  },
  drawer: {
    width: '200px',
  },
};

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // For desktop sidebar minimization
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // For mobile hamburger menu
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Media query for small screens

  const handleToggleSidebar = () => setIsCollapsed((prev) => !prev); // Toggle minimization
  const handleToggleDrawer = () => setIsDrawerOpen((prev) => !prev); // Toggle drawer

  const SidebarContent = (
    <>
      <Typography
        sx={{ ...styles.heading, fontSize: isCollapsed && !isSmallScreen ? '0px' : '27px' }}
      >
        Farmsah
      </Typography>
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
    </>
  );

  return (
    <>
      {/* Hamburger Icon for Small Screens */}
      {isSmallScreen && (
        <IconButton
          sx={styles.hamburgerIcon}
          onClick={handleToggleDrawer}
        >
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}

      {/* Drawer for Small Screens */}
      <Drawer
        open={isDrawerOpen}
        onClose={handleToggleDrawer}
        PaperProps={{ sx: styles.drawer }}
      >
        <Box sx={styles.sidebar}>{SidebarContent}</Box>
      </Drawer>

      {/* Sidebar for Larger Screens */}
      {!isSmallScreen && (
        <Box
          sx={{
            ...styles.sidebar,
            ...(isCollapsed && styles.minimizedSidebar),
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: '10px',
              right: isCollapsed ? '-15px' : '-20px',
              background: '#5a9bd5ff',
              borderRadius: '50%',
              padding: '5px',
              color: '#fff',
              zIndex: 1,
            }}
            onClick={handleToggleSidebar}
          >
            {isCollapsed ? '>' : '<'}
          </IconButton>
          {SidebarContent}
        </Box>
      )}
    </>
  );
};

export default Sidebar;
