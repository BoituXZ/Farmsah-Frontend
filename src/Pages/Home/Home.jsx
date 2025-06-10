// src/pages/Home.jsx (The New Dashboard, updated)
import { Box, Paper, Typography, Grid, Stack, useTheme } from "@mui/material";
import {
  WbSunny as WbSunnyIcon,
  EnergySavingsLeaf as EnergySavingsLeafIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Agriculture as AgricultureIcon,
  Timeline as TimelineIcon,
  NotificationsActive as NotificationsActiveIcon
} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

// --- MOCK DATA (Unchanged) ---
const kpiData = {
    totalYield: { value: 45.2, unit: "tons", trend: "up", change: "+5.2%" },
    waterUsage: { value: 78, unit: "%", trend: "down", change: "-3%" },
    netProfit: { value: 24650, unit: "USD", trend: "up", change: "+12.8%" },
    weatherForecast: { value: 22, unit: "°C", condition: "Sunny" }
};

const monthlyPerformanceData = [
  { month: 'Jan', yield: 120, profit: 15000, expenses: 8000 },
  { month: 'Feb', yield: 130, profit: 16500, expenses: 8500 },
  { month: 'Mar', yield: 150, profit: 19000, expenses: 9000 },
  { month: 'Apr', yield: 140, profit: 18500, expenses: 9200 },
  { month: 'May', yield: 180, profit: 24000, expenses: 10000 },
  { month: 'Jun', yield: 220, profit: 31000, expenses: 11000 },
];

const cropStatusData = [
    { id: 1, name: "Wheat (Field A)", stage: "Flowering", health: "Good", color: '#4CAF50' },
    { id: 2, name: "Corn (Field B)", stage: "Vegetative", health: "Excellent", color: '#2E7D32' },
    { id: 3, name: "Soybeans (Greenhouse)", stage: "Pod-filling", health: "Fair", color: '#FBC02D' },
];

const resourceData = {
    soilMoisture: 65, // percentage
    waterTankLevel: 85, // percentage
};

const activityFeed = [
    { id: 1, text: "Irrigation complete for Field A.", time: "2h ago" },
    { id: 2, text: "New pest alert: Aphids detected near Greenhouse.", time: "5h ago" },
    { id: 3, text: "Fertilizer applied to Field B.", time: "1d ago" },
    { id: 4, text: "Corn harvest projected in 3 weeks.", time: "2d ago" },
];


// --- Reusable Dashboard Panel Component (Unchanged) ---
const DashboardPanel = ({ children, title, icon, sx = {} }) => (
    <Paper
        elevation={6}
        sx={{
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            color: 'text.primary',
            background: (theme) => theme.palette.mode === 'light'
                ? 'rgba(255, 255, 255, 0.4)'
                : 'rgba(31, 31, 31, 0.4)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            ...sx
        }}
    >
        {title && (
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                {icon}
                <Typography variant="h2" sx={{ fontSize: '1.2rem' }}>{title}</Typography>
            </Stack>
        )}
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
        </Box>
    </Paper>
);


// --- THE NEW HOME / DASHBOARD COMPONENT ---
const Home = () => {
    const theme = useTheme();

    return (
        <Box
            id="dashboard-container"
            sx={{
                width: '100%', minHeight: '100vh', boxSizing: 'border-box',
                p: { xs: 2, md: 3 },
                background: theme.palette.background.backgroundImage,
                backgroundSize: "cover", backgroundAttachment: 'fixed',
            }}
        >
            <Grid container spacing={3}>
                
                {/* --- TOP ROW: Key Performance Indicators (KPIs) --- */}
                {/* ======================= CHANGE APPLIED HERE ======================= */}
                {/* The colored `sx` prop has been removed from the first three panels */}
                {/* =================================================================== */}
                <Grid item xs={12} sm={6} md={3}>
                    <DashboardPanel>
                       <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight:'bold' }}>TOTAL YIELD</Typography>
                        <Stack direction="row" alignItems="baseline" spacing={1} sx={{ my: 1 }}>
                            <Typography variant="h1" sx={{fontSize: '2.5rem'}}>{kpiData.totalYield.value}</Typography>
                            <Typography variant="h2" sx={{fontSize: '1.2rem'}}>{kpiData.totalYield.unit}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'success.main' }}>
                           <TrendingUpIcon fontSize="small"/>
                           <Typography variant="body2">{kpiData.totalYield.change}</Typography>
                        </Stack>
                    </DashboardPanel>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                   <DashboardPanel>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight:'bold' }}>WATER USAGE</Typography>
                        <Stack direction="row" alignItems="baseline" spacing={1} sx={{ my: 1 }}>
                            <Typography variant="h1" sx={{fontSize: '2.5rem'}}>{kpiData.waterUsage.value}</Typography>
                            <Typography variant="h2" sx={{fontSize: '1.2rem'}}>{kpiData.waterUsage.unit}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'warning.main' }}>
                            <TrendingDownIcon fontSize="small"/>
                            <Typography variant="body2">vs. last month</Typography>
                        </Stack>
                   </DashboardPanel>
                </Grid>
                 <Grid item xs={12} sm={6} md={3}>
                    <DashboardPanel>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight:'bold' }}>NET PROFIT (YTD)</Typography>
                        <Stack direction="row" alignItems="baseline" spacing={1} sx={{ my: 1 }}>
                             <Typography variant="h2" sx={{fontSize: '1.2rem'}}>$</Typography>
                             <Typography variant="h1" sx={{fontSize: '2.5rem'}}>{(kpiData.netProfit.value/1000).toFixed(1)}K</Typography>
                        </Stack>
                        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: 'success.main' }}>
                            <TrendingUpIcon fontSize="small"/>
                            <Typography variant="body2">{kpiData.netProfit.change}</Typography>
                        </Stack>
                    </DashboardPanel>
                </Grid>
                 <Grid item xs={12} sm={6} md={3}>
                   <DashboardPanel>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight:'bold' }}>WEATHER</Typography>
                        <Stack direction="row" alignItems="center" spacing={2} sx={{ my: 1 }}>
                            <WbSunnyIcon sx={{ fontSize: '2.5rem', color: theme.palette.accent.lightBlue }} />
                            <Stack>
                               <Typography variant="h1" sx={{fontSize: '2rem'}}>{kpiData.weatherForecast.value}{kpiData.weatherForecast.unit}</Typography>
                               <Typography variant="h2" sx={{fontSize: '1rem'}}>{kpiData.weatherForecast.condition}</Typography>
                            </Stack>
                        </Stack>
                        <Typography variant="body2" sx={{color: 'text.secondary'}}>Next 3 days: Clear</Typography>
                   </DashboardPanel>
                </Grid>

                {/* --- MIDDLE ROW: Main Charts --- */}
                <Grid item xs={12} lg={8}>
                     <DashboardPanel title="Monthly Performance Overview" icon={<TimelineIcon />}>
                          <Box sx={{ width: '100%', height: '320px', mt: 1 }}>
                              <LineChart
                                    dataset={monthlyPerformanceData}
                                    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                    series={[
                                        { dataKey: 'profit', label: 'Profit ($)', color: theme.palette.accent.darkGreen, valueFormatter: (v) => `$${(v/1000)}k`, area: true },
                                        { dataKey: 'expenses', label: 'Expenses ($)', color: theme.palette.accent.softBrown, valueFormatter: (v) => `$${(v/1000)}k`, area: true },
                                    ]}
                                    sx={{
                                        '.MuiChartsAxis-tickLabel': { fill: theme.palette.text.primary },
                                        '.MuiChartsLegend-label': { color: theme.palette.text.primary },
                                    }}
                                />
                          </Box>
                     </DashboardPanel>
                </Grid>
                 <Grid item xs={12} lg={4}>
                    <DashboardPanel title="Current Crop Status" icon={<AgricultureIcon />}>
                        <Stack spacing={2} sx={{ height: '100%', justifyContent: 'space-around', mt: 1 }}>
                             {cropStatusData.map(crop => (
                                <Stack direction="row" key={crop.id} alignItems="center" spacing={2}>
                                    <Box sx={{ width: 10, height: 40, bgcolor: crop.color, borderRadius: '4px' }}/>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>{crop.name}</Typography>
                                        <Typography variant="body2" sx={{color: 'text.secondary'}}>{crop.stage} - Health: {crop.health}</Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </DashboardPanel>
                </Grid>

                {/* --- BOTTOM ROW: Resource Management and Logs --- */}
                <Grid item xs={12} md={5}>
                    <DashboardPanel title="Resource Monitor" icon={<EnergySavingsLeafIcon />}>
                         <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ flexGrow: 1, mt: 2 }}>
                            <Box textAlign="center">
                               <Gauge width={120} height={120} value={resourceData.soilMoisture} startAngle={-110} endAngle={110}
                                   sx={{
                                       [`& .${gaugeClasses.valueText}`]: { fontSize: 24, transform: 'translate(0px, 0px)', fill: theme.palette.text.primary },
                                       [`& .${gaugeClasses.valueArc}`]: { fill: theme.palette.accent.softBrown },
                                       [`& .${gaugeClasses.referenceArc}`]: { fill: theme.palette.text.disabled }
                                   }} />
                                <Typography variant="subtitle1" sx={{ mt: 1 }}>Soil Moisture</Typography>
                            </Box>
                             <Box textAlign="center">
                                <Gauge width={120} height={120} value={resourceData.waterTankLevel} startAngle={-110} endAngle={110}
                                   sx={{
                                       [`& .${gaugeClasses.valueText}`]: { fontSize: 24, transform: 'translate(0px, 0px)', fill: theme.palette.text.primary },
                                       [`& .${gaugeClasses.valueArc}`]: { fill: theme.palette.accent.lightBlue },
                                       [`& .${gaugeClasses.referenceArc}`]: { fill: theme.palette.text.disabled }
                                   }} />
                                 <Typography variant="subtitle1" sx={{ mt: 1 }}>Water Tank</Typography>
                            </Box>
                        </Stack>
                    </DashboardPanel>
                </Grid>
                <Grid item xs={12} md={7}>
                    <DashboardPanel title="Activity Feed" icon={<NotificationsActiveIcon />}>
                         <Stack spacing={1.5} sx={{mt: 1}}>
                             {activityFeed.map(item => (
                                 <Stack key={item.id} direction="row" justifyContent="space-between" sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', pb: 1, gap: 2 }}>
                                    <Typography variant="body1" sx={{flexGrow: 1}}>{item.text}</Typography>
                                    <Typography variant="body2" sx={{color: 'text.secondary', flexShrink: 0}}>{item.time}</Typography>
                                 </Stack>
                             ))}
                         </Stack>
                    </DashboardPanel>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Home;