
import { Box, Grid, Paper, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import Chart from './Chart';
import StatsCard from './StatsCard';
import DataTable from './DataTable';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f6f8' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, padding: '24px' }}>
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <Grid container spacing={3}>
          {/* Stats Cards */}
          <Grid item xs={12} md={4}>
            <StatsCard title="Total Users" value="5,230" icon="👥" />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard title="Active Farms" value="1,032" icon="🌱" />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatsCard title="Reports Generated" value="12,384" icon="📈" />
          </Grid>

          {/* Chart */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ padding: '16px' }}>
              <Typography variant="h6" gutterBottom>
                Monthly Growth
              </Typography>
              <Chart />
            </Paper>
          </Grid>

          {/* Table */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '16px' }}>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <DataTable />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
