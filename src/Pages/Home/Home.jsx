
import { Box, Grid, Typography, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for charts
const farmData = [
  { month: 'Jan', yield: 400 },
  { month: 'Feb', yield: 300 },
  { month: 'Mar', yield: 200 },
  { month: 'Apr', yield: 278 },
  { month: 'May', yield: 189 },
];

const cropDistribution = [
  { name: 'Wheat', value: 40 },
  { name: 'Corn', value: 30 },
  { name: 'Soy', value: 20 },
  { name: 'Rice', value: 10 },
];

const Home = () => {
  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    },
    header: {
      marginBottom: '20px',
      textAlign: 'center',
    },
    card: {
      padding: '20px',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    chartTitle: {
      marginBottom: '10px',
    },
  };

  return (
    <Box sx={styles.container}>
      {/* Header */}
      <Typography variant="h4" sx={styles.header}>
        Welcome to the Farmsah Dashboard 🌾
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={styles.card}>
            <Typography variant="h6">Total Farms</Typography>
            <Typography variant="h4">45</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={styles.card}>
            <Typography variant="h6">Crop Yield (kg)</Typography>
            <Typography variant="h4">1,250</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={styles.card}>
            <Typography variant="h6">Weather Alerts</Typography>
            <Typography variant="h4">2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={styles.card}>
            <Typography variant="h6">Market Updates</Typography>
            <Typography variant="h4">5</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Charts Section */}
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} md={6}>
          <Paper sx={styles.card}>
            <Typography variant="h6" sx={styles.chartTitle}>
              Farm Performance
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={farmData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="yield" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={styles.card}>
            <Typography variant="h6" sx={styles.chartTitle}>
              Crop Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={cropDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
