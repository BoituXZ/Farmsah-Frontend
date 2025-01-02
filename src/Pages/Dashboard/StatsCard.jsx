
import { Card, CardContent, Typography, Box } from '@mui/material';
import { EmojiPeople, EmojiFoodBeverage, BarChart } from '@mui/icons-material';
import PropTypes from 'prop-types'; // Import PropTypes

const StatsCard = ({ title, value, icon }) => {
  // Map icons based on the string prop 'icon'
  let IconComponent;
  switch (icon) {
    case 'users':
      IconComponent = EmojiPeople;
      break;
    case 'crops':
      IconComponent = EmojiFoodBeverage;
      break;
    case 'reports':
      IconComponent = BarChart;
      break;
    default:
      IconComponent = EmojiPeople;
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ fontSize: '36px', marginRight: '16px' }}>
            <IconComponent />
          </Box>
          <Box>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

// Prop validation using PropTypes
StatsCard.propTypes = {
  title: PropTypes.string.isRequired, // title should be a string and is required
  value: PropTypes.string.isRequired, // value should be a string and is required
  icon: PropTypes.string.isRequired,  // icon should be a string and is required
};

export default StatsCard;
