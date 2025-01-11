import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  const styles = {
    sidebar: {
      width: '250px',
      height: '100vh',
      backgroundColor: 'rgba(90, 155, 213, 0.6)', // Blue Gray with transparency
      backdropFilter: 'blur(10px)', // Glass effect
      color: '#333333ff', // Jet text color
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      borderRight: '2px solid rgba(255, 255, 255, 0.2)', // Subtle border for the glass effect
    },
    heading: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 'bold',
      fontSize: '24px',
      marginBottom: '16px',
      color: '#f3b61fff', // Xanthous accent
    },
    subheading: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 500,
      fontSize: '18px',
      margin: '8px 0',
      color: '#ede0d4ff', // Almond for subheadings
    },
    listItem: {
      fontFamily: 'Merriweather Sans, sans-serif',
      fontSize: '16px',
      padding: '8px 0',
      color: '#ede0d4ff', // Almond for list items
      transition: 'color 0.3s, transform 0.3s', // Smooth transitions
      cursor: 'pointer',
      '&:hover': {
        color: '#f3b61fff', // Xanthous accent on hover
        transform: 'scale(1.05)', // Slight scaling effect
      },
    },
  };

  return (
    <Box sx={styles.sidebar}>
      {/* Main Heading */}
      <Typography sx={styles.heading}>Dashboard</Typography>

      {/* Subheadings */}
      <Typography sx={styles.subheading}>Navigation</Typography>
      <List>
        <ListItem sx={styles.listItem}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemText primary="Reports" />
        </ListItem>
      </List>

      <Typography sx={styles.subheading}>Management</Typography>
      <List>
        <ListItem sx={styles.listItem}>
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem sx={styles.listItem}>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
