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
import { BorderBottom, InfoRounded, QuestionAnswerOutlined } from '@mui/icons-material';
import { useState } from "react";

const styles  = {
    sidebar:{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "auto",
        boxShadow: "1px 1px 1px rgb(0, 0, 0)",
        fontFamily: 'Montserrat, sans-serif',

    },
    header:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4.4rem",
        color: (theme) => theme.palette.background.green,
        borderBottom: "1px solid  #f7d17b",
        // fontFamily: (theme) => theme.typography.fontFamily.h1,
        // fontFamily: 'Montserrat, sans-serif',

        // border: "solid 1px red"
    },
    headerItem:{
        fontSize: "2rem",
        fontFamily: 'Montserrat, sans-serif',

    },
    sidebarListBox:{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "20px 0",
        fontFamily: 'Montserrat, sans-serif',

    },
    sidebarList:{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: 'Montserrat, sans-serif',

    },
    sidebarItem:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "90%",
        gap: "1rem",
        paddingRight: "12px",
        textDecoration: "none",
        fontFamily: 'Montserrat, sans-serif',


    },
    sidebarItemText:{
        fontFamily: 'Montserrat, sans-serif',


    },
    sidebarIcon:{
        fontSize: "1.8rem",
    }
}

const Sidebar = () => {
    const [isCollapsed] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width: 900px)');
  
    const handleToggleDrawer = () => setIsDrawerOpen((prev) => !prev);
    
    return (
        <Box id='sidebar' sx={styles.sidebar}>
            <Box id='sidebarHeader' sx={styles.header}>
                <Typography sx={styles.headerItem}>Farmsah</Typography>
            </Box>
            <Box id='sidebarContent' sx={styles.sidebarListBox}>
                <List sx={styles.sidebarList}>

                    <Box component={Link} to="/user/" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Home</ListItemText>
                                <HomeIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/farms" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}> 
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Farms</ListItemText>
                                <AgricultureIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/crops" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Crops</ListItemText>
                                <MapIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/insights" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Insights</ListItemText>
                                <InsightsIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/weather" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Weather</ListItemText>
                                <CloudIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/market" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Market</ListItemText>
                                <StorefrontIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/resources" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Resources</ListItemText>
                                <BookIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/settings" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Settings</ListItemText>
                                <SettingsIcon sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/Contact" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>About</ListItemText>
                                <InfoRounded sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                    <Box component={Link} to="/user/Feedback" sx={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem>
                            <Box id='sidebarItem' sx={styles.sidebarItem}>
                                <ListItemText sx={styles.sidebarItemText} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }}>Feedback</ListItemText>
                                <QuestionAnswerOutlined sx={styles.sidebarIcon} />
                            </Box>
                        </ListItem>
                    </Box>

                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;
