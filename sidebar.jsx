import { Box, List, ListItem, ListItemText, Typography, useMediaQuery } from "@mui/material"
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import MapIcon from '@mui/icons-material/Map';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudIcon from '@mui/icons-material/Cloud';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import { InfoRounded, QuestionAnswerOutlined } from '@mui/icons-material';
import { useState } from "react";


const styles  = {
    sidebar:{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "auto",
        boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
        border: "solid 1px red"
    },

    header:{
        // flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4.4rem",
        border: "solid 1px red"
    },
    sidebarListBox:{
        // flex: "4",
        display: "flex",
        flexDirection: "column",
        // border: "solid 4px green",
        height: "100%",
        padding: "20px 0",
    },
    sidebarList:{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },

    sidebarItem:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "90%",
        gap: "1rem",
        paddingRight: "12px",
        textDecoration: "none",
        // border: "solid 1px red"
    },
    sidebarIcon:{
        fontSize: "1.8rem",
    },
    sidebarLink:{
        textDecoration: "none",
        color: "black"
    }
}
const Sidebars = () => {
      const [isCollapsed] = useState(false); // For desktop sidebar minimization
      const [isDrawerOpen, setIsDrawerOpen] = useState(false); // For mobile hamburger menu
      const isSmallScreen = useMediaQuery('(max-width: 900px)'); // Media query for small screens
    
      const handleToggleDrawer = () => setIsDrawerOpen((prev) => !prev); // Toggle drawer
      
    

  return (
    <Box id='sidebar'
    sx={styles.sidebar}
    >
        <Box  id='sidebarHeader'
        sx={styles.header}
        >
            <Typography variant='h4'>Farmsah</Typography>
        </Box>
        <Box id='sidebarContent'
        sx={styles.sidebarListBox}
        >
            <List sx={styles.sidebarList}>
                <Link to="/user/" sx={styles.sidebarLink}>
                    <ListItem>
                        <Box id='sidebarItem'
                        sx={styles.sidebarItem}
                        >
                            <ListItemText>Home</ListItemText>
                            <HomeIcon sx={styles.sidebarIcon}  />
                            
                            
                        </Box>
                    </ListItem>
                    
                </Link>
                <Link to="/user/farms" sx={styles.sidebarLink}>
                    <ListItem>
                        <Box id='sidebarItem'
                        sx={styles.sidebarItem}
                        >
                        <ListItemText>Farms</ListItemText>
                            <AgricultureIcon sx={styles.sidebarIcon} />
                            
                            
                        </Box>
                    </ListItem>
                    
                </Link>
                <Link to="/user/crops" sx={styles.sidebarLink}>
                        <ListItem>
                                <Box id='sidebarItem' sx={styles.sidebarItem}>
                                        <ListItemText>Crops</ListItemText>
                                        <MapIcon sx={styles.sidebarIcon} />
                                </Box>
                        </ListItem>
                </Link>
                <Link to="/user/insights" sx={styles.sidebarLink}>
                        <ListItem>
                                <Box id='sidebarItem' sx={styles.sidebarItem}>
                                        <ListItemText>Insights</ListItemText>
                                        <InsightsIcon sx={styles.sidebarIcon}  />
                                </Box>
                        </ListItem>
                </Link>
                <Link to="/user/weather" sx={styles.sidebarLink}>
                        <ListItem>
                                <Box id='sidebarItem' sx={styles.sidebarItem}>
                                        <ListItemText>Weather</ListItemText>
                                        <CloudIcon sx={styles.sidebarIcon}  />
                                </Box>
                        </ListItem>
                </Link>
                <Link to="/user/market" sx={styles.sidebarLink}>
                        <ListItem>
                                <Box id='sidebarItem' sx={styles.sidebarItem}>
                                        <ListItemText>Market</ListItemText>
                                        <StorefrontIcon sx={styles.sidebarIcon} />
                                </Box>
                        </ListItem>
                </Link>
                <Link to="/user/resources" sx={styles.sidebarLink}>
                        <ListItem>
                                <Box id='sidebarItem' sx={styles.sidebarItem}>
                                        <ListItemText>Resources</ListItemText>
                                        <BookIcon sx={styles.sidebarIcon} />
                                </Box>
                        </ListItem>
                </Link>
                <Link to="/user/settings" sx={styles.sidebarLink}>
        <ListItem>
                <Box id='sidebarItem' sx={styles.sidebarItem}>
                        <ListItemText>Settings</ListItemText>
                        <SettingsIcon sx={styles.sidebarIcon}  />
                </Box>
        </ListItem>
            </Link>
            <Link to="/user/Contact" sx={styles.sidebarLink}>
                    <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                    <ListItemText>About</ListItemText>
                                    <InfoRounded sx={styles.sidebarIcon} />
                            </Box>
                    </ListItem>
            </Link>
            <Link to="/user/Feedback" sx={styles.sidebarLink}>
                    <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                    <ListItemText>Feedback</ListItemText>
                                    <QuestionAnswerOutlined sx={styles.sidebarIcon} />
                            </Box>
                    </ListItem>
            </Link>

            </List>
        </Box>
    </Box>
  )
}

export default Sidebars