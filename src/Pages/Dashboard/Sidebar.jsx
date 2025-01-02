
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, BarChart, Settings, Info } from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <Home /> },
    { text: 'Analytics', icon: <BarChart /> },
    { text: 'Settings', icon: <Settings /> },
    { text: 'About', icon: <Info /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', backgroundColor: '#1976d2', color: '#fff' },
      }}
    >
      <Typography variant="h5" sx={{ padding: '16px', textAlign: 'center', color: '#fff' }}>
        FarmDashboard
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
