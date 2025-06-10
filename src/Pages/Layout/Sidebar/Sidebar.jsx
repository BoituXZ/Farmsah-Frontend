// src/components/Sidebar/Sidebar.jsx
import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    useTheme, // Import the useTheme hook
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
// Icons
import HomeIcon from '@mui/icons-material/Home';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import GrassIcon from '@mui/icons-material/Grass';
import InsightsIcon from '@mui/icons-material/Insights';
import CloudIcon from '@mui/icons-material/Cloud';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

// --- Data arrays are preserved from the previous refactor ---
const mainLinks = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/user/" },
    { text: "Farms", icon: <AgricultureIcon />, path: "/user/farms" },
    { text: "Crops", icon: <GrassIcon />, path: "/user/crops" },
    { text: "Insights", icon: <InsightsIcon />, path: "/user/insights" },
    { text: "Weather", icon: <CloudIcon />, path: "/user/weather" },
    { text: "Market", icon: <StorefrontIcon />, path: "/user/market" },
    { text: "Resources", icon: <BookIcon />, path: "/user/resources" },
];
const secondaryLinks = [
    { text: "Settings", icon: <SettingsIcon />, path: "/user/settings" },
    { text: "About", icon: <InfoRoundedIcon />, path: "/user/contact" },
    { text: "Feedback", icon: <QuestionAnswerOutlinedIcon />, path: "/user/feedback" },
];

const Sidebar = ({ onClose }) => {
    const location = useLocation();
    const theme = useTheme(); // Use the theme hook to get current theme properties

    // Reusable NavLink component is preserved
    const NavLink = ({ item }) => (
        <ListItem disablePadding>
            <ListItemButton
                component={Link}
                to={item.path}
                onClick={onClose}
                selected={location.pathname === item.path}
                sx={{
                    borderRadius: '8px',
                    color: 'text.primary',
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.25)' }
                    },
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' }
                }}
            >
                <ListItemIcon sx={{ color: 'inherit', minWidth: '40px' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} primaryTypographyProps={{ sx: { fontFamily: 'Montserrat, sans-serif' } }} />
            </ListItemButton>
        </ListItem>
    );

    return (
        // === STYLING APPLIED HERE ===
        // Glass morphism is now applied directly to the sidebar's root Box
        // This ensures it looks correct regardless of its parent container
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                // Applying the glass effect directly
                background: theme.palette.mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.4)' 
                    : 'rgba(31, 31, 31, 0.4)',
                backdropFilter: 'blur(15px)',
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    p: 2,
                    height: '64px', // Standard MUI header height
                }}
            >
                <Typography variant="h1" sx={{ color: 'text.primary', fontFamily: 'Montserrat, sans-serif' }}>
                    Farmsah
                </Typography>
            </Box>
            
            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

            <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
                <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {mainLinks.map((item) => (
                        <NavLink key={item.text} item={item} />
                    ))}
                </List>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
            
            <Box sx={{ p: 2 }}>
                <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    {secondaryLinks.map((item) => (
                        <NavLink key={item.text} item={item} />
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;