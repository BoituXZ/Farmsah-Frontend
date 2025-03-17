import { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, IconButton, Drawer,} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon} from '@mui/icons-material';
import { useMediaQuery} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import MapIcon from '@mui/icons-material/Map';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudIcon from '@mui/icons-material/Cloud';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import { InfoRounded, QuestionAnswerOutlined } from '@mui/icons-material';

// TODO: Make it coool


// Colors
const styles = {
  sidebar: {
    width: '100%',
    height: {xs: "100vh", sm:"100vh", md:'100%'},
    display: 'flex',
    padding:"2px 0",
    flexDirection: 'column',
    backDropFilter: 'blur(45px)', // Glassmorphism effect
    backgroundColor: (theme) => theme.palette.background.green,
    
    // backgroundColor: "grey", // Background color for the sidebar f9f9f9

  },
  sidebarTitle: {
    flex: 1,
    maxHeight: '8%',

  },
  
  sidebarContent: {
    flex: 4,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    //  border: 'solid 1px black'
  },
  minimizedSidebar: {
    width: '60px',
  },
  list: {
    // height: '100%',
    padding: '10px 12px',
    flex: "4",
    display: "flex",
    flexDirection: "column",
    margin:"1rem 0",
    gap:"14px",
    // justifyContent: 'space-evenly',
    // border: 'solid 1px black',
  },
  list2:{
    // height: '100%',
    flex:"2",
    width: "100%",
    padding: '1px 12px',
    color: "black",
    marginTop:"50px",
    display: "flex",
    flexDirection: "column",
    alignSelf: "end",
    // border: 'solid 1px red',
    gap: "14px"
  },
  heading: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '400',
    fontSize: '2rem',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    padding: '9px 10px',
    marginBottom: '16px',
    borderBottom: '1px solid #f7d17b', // Subtle border for the glass
    color: (theme) => theme.palette.background.white
  },
  listItem: {
    fontFamily: 'Montserrat, sans-serif',
    padding: '8px 0',
    fontWeight: '200',
    color: (theme) => theme.palette.background.white2,
    cursor: 'pointer',
    transition: '40ms',
    '&:hover': {
      color: (theme) => theme.palette.background.white,
    },
    listItemText:{
      fontSize: "30rem",
      color: "red"
    },
  },
  listItemIcon: {
    color:'rgba(0, 0, 0, 0.56)',
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
  const [isCollapsed] = useState(false); // For desktop sidebar minimization
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // For mobile hamburger menu
  const isSmallScreen = useMediaQuery('(max-width: 900px)'); // Media query for small screens

  const handleToggleDrawer = () => setIsDrawerOpen((prev) => !prev); // Toggle drawer
  const SidebarContent = (
    
    <>
      <Box sx={styles.sidebar}>
        <Box id='sidebarTitle' sx={styles.sidebarTitle}>
          <Typography sx={styles.heading}>Farmsah</Typography>
        </Box>
        <Box id='sidebarContent' sx={styles.sidebarContent}>
          <List sx={styles.list}>
            <Link to="/user/" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <HomeIcon  />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </Link>
            <Link to="/user/farms" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <AgricultureIcon />
                </ListItemIcon>
                <ListItemText sx={styles.listItemText}>Farms</ListItemText>
              </ListItem>
            </Link>
            <Link to="/user/crops" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText>Crops</ListItemText>
              </ListItem>
            </Link>
            <Link to="/user/insights" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <InsightsIcon />
                </ListItemIcon>
                <ListItemText>Insights</ListItemText>
              </ListItem>
            </Link>
            <Link to="/user/weather" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <CloudIcon />
                </ListItemIcon>
                <ListItemText>Weather</ListItemText>
              </ListItem>
            </Link>
            <Link to="/user/market" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <StorefrontIcon />
                </ListItemIcon>
                <ListItemText>Market</ListItemText>
              </ListItem>
            </Link>
            <Link to="/user/resources" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText>Resources</ListItemText>
              </ListItem>
            </Link>
            

            </List>

          <List sx={styles.list2}>
            <Link to="/user/settings" style={styles.link}>
                <ListItem sx={styles.listItem}>
                  <ListItemIcon sx={styles.listItemIcon}>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </ListItem>
              </Link>
            <Link to="/user/Contact" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <InfoRounded />
                </ListItemIcon>
                <ListItemText>About</ListItemText>
              </ListItem>
            </Link>
            <Link to="/user/Feedback" style={styles.link}>
              <ListItem sx={styles.listItem}>
                <ListItemIcon sx={styles.listItemIcon}>
                  <QuestionAnswerOutlined/>
                </ListItemIcon>
                <ListItemText>Feedback</ListItemText>
              </ListItem>
            </Link>
            </List>
        </Box>
        
      </Box>
      
      
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
          {/* <IconButton
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
          </IconButton> */}
          {SidebarContent}
        </Box>
      )}
    </>
  );
};

export default Sidebar;
