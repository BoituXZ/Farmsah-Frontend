// src/components/insights/InsightCard.jsx
import { Card, CardContent, Typography, Box, Chip, Divider, useTheme } from "@mui/material";

// Import Icons that will be used
import BugReportIcon from '@mui/icons-material/BugReport';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StormIcon from '@mui/icons-material/Storm';
import YardIcon from '@mui/icons-material/Yard';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ReportIcon from '@mui/icons-material/Report';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Map string identifiers from data to the actual components
const iconMap = {
  BugReport: BugReportIcon,
  TrendingUp: TrendingUpIcon,
  Storm: StormIcon,
  Yard: YardIcon,
  WaterDrop: WaterDropIcon,
};

const InsightCard = ({ insight }) => {
  const theme = useTheme();

  // Define styles based on priority, using your theme's colors
  const priorityStyles = {
    CRITICAL: {
      borderColor: theme.palette.error.main,
      icon: <ReportIcon />,
      color: theme.palette.error.main,
      glow: `0 0 12px ${theme.palette.error.main}40`
    },
    HIGH: {
      borderColor: theme.palette.warning.main,
      icon: <NewReleasesIcon />,
      color: theme.palette.warning.main,
      glow: `0 0 12px ${theme.palette.warning.main}40`
    },
    MEDIUM: {
      borderColor: theme.palette.info.main,
      icon: <CheckCircleIcon />,
      color: theme.palette.info.main,
      glow: 'none'
    },
    DEFAULT: {
      borderColor: theme.palette.divider,
      icon: <CheckCircleIcon />,
      color: theme.palette.text.secondary,
      glow: 'none'
    }
  };

  const styles = priorityStyles[insight.priority] || priorityStyles.DEFAULT;
  const MainIcon = iconMap[insight.icon];

  return (
    <Card sx={{
      height: '100%',
      borderLeft: `5px solid ${styles.borderColor}`,
      backgroundColor: theme.palette.background.paper, // Theme-aware paper color
      boxShadow: styles.glow,
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: `6px 6px 16px 0 ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
      }
    }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
        {/* Header */}
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Chip
                    icon={styles.icon}
                    label={insight.priority}
                    variant="outlined"
                    size="small"
                    sx={{ color: styles.color, borderColor: styles.color }}
                />
                 {MainIcon && <MainIcon sx={{ fontSize: 32, color: 'text.secondary' }}/>}
            </Box>
            <Typography variant="h2" component="h3" sx={{ mt: 1, color: 'text.primary' }}>
              {insight.headline}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Relates to: {insight.related_to} | Generated: {insight.date}
            </Typography>
        </Box>
        
        {/* Body */}
        <Typography variant="body1" sx={{ color: 'text.secondary', flexGrow: 1 }}>
            {insight.details}
        </Typography>

        <Divider />

        {/* Recommendation Footer */}
        <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                AI Recommendation:
            </Typography>
            <Typography variant="body2" sx={{ color: theme.palette.accent.darkGreen }}>
              {insight.recommendation}
            </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InsightCard;