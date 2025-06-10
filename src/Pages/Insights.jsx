// src/Pages/Insights.jsx
import { Box, Typography, Container, Tabs, Tab, useTheme } from '@mui/material';
import InsightCard from '../components/insights/InsightCard';
import { useEffect, useState } from 'react';
import { mockInsights } from '../data/mockInsightsData';

const insightFilters = ['All', 'Critical', 'High', 'Medium'];

const Insights = () => {
  // --- ALL LOGIC PRESERVED ---
  const [insights, setInsights] = useState([]);
  const [filter, setFilter] = useState('All');
  const theme = useTheme();

  useEffect(() => {
    // This effect simulates fetching and then sorting the data on load.
    try {
      setTimeout(() => {
        const sortedInsights = [...mockInsights].sort((a, b) => {
           const priorityOrder = { 'CRITICAL': 0, 'HIGH': 1, 'MEDIUM': 2 };
           return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
        setInsights(sortedInsights);
      }, 500);

    } catch (error) {
      console.error("Error fetching insights", error);
    }
  }, []);

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  const filteredInsights = insights.filter(insight => {
    if (filter === 'All') return true;
    return insight.priority === filter.toUpperCase();
  });

  return (
    // --- STYLING APPLIED TO THE PAGE CONTAINER ---
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        p: { xs: 2, md: 3 },
        background: theme.palette.background.backgroundImage, // Using your theme's background
        backgroundSize: "cover",
        backgroundAttachment: 'fixed',
      }}
    >
        {/* Your Original Container is preserved to maintain content width */}
      <Container maxWidth="xl" sx={{ p: '0 !important' }}>
          <Typography variant="h2" component="h1" sx={{ typography: 'h1', color: 'text.primary', mb: 2 }}>
              AI-Powered Insights
          </Typography>
          <Typography variant="body1" sx={{ typography: 'subtitle1', color: 'text.secondary', mb: 4 }}>
            Actionable intelligence to increase yield and mitigate risks on your farm.
          </Typography>

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs
              value={filter}
              onChange={handleFilterChange}
              aria-label="insight priority filters"
            >
              {insightFilters.map(f => <Tab key={f} label={f} value={f}/>)}
            </Tabs>
          </Box>

        <Box
          id="insightPageContainer"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(auto, 1fr))", 
            gap: "24px",
          }}
        >
          {filteredInsights.map(insight => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Insights;