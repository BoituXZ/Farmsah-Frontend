// src/components/market/CommodityCard.jsx
import { Card, CardContent, Typography, Box, Chip, Paper } from '@mui/material'; // Paper can be used but not necessary here
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GrainIcon from '@mui/icons-material/Grain';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import EggIcon from '@mui/icons-material/Egg';

const iconMap = {
    Grain: GrainIcon, KebabDining: KebabDiningIcon,
    Agriculture: AgricultureIcon, Egg: EggIcon
};

const CommodityCard = ({ commodity, historicalData, onSelect }) => {
    // --- Original Logic Preserved ---
    const isIncrease = commodity.changeType === 'increase';
    const IconComponent = iconMap[commodity.icon];

    return (
        <Card 
            sx={{
                // --- STYLING CHANGE: Glass effect applied here ---
                background: (theme) => theme.palette.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(31, 31, 31, 0.4)',
                backdropFilter: 'blur(15px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'text.primary',

                // Original styles preserved
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6
                }
            }}
            elevation={0} // Setting elevation to 0 as box-shadow is manually controlled
            onClick={() => onSelect(commodity.id)}
        >
            {/* All internal components are preserved */}
            <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {IconComponent && <IconComponent color={commodity.iconColor || 'primary'} />}
                    <Typography variant="h6" component="div" sx={{ ml: 1, flexGrow: 1 }}>{commodity.name}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                    <Typography variant="h4" component="span">{commodity.price.toFixed(2)}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>{commodity.unit}</Typography>
                </Box>
                <Chip
                    icon={isIncrease ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                    label={`${isIncrease ? '+' : ''}${commodity.change}%`}
                    color={isIncrease ? 'success' : 'error'}
                    size="small" sx={{ mb: 1 }}
                />
                <Typography variant="caption" display="block" color="text.secondary">{commodity.driver}</Typography>
            </CardContent>
            <Box sx={{ height: 60, width: '100%', ml: '-10px' }}>
                <ResponsiveContainer>
                    <LineChart data={historicalData.slice(-30)} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                        <YAxis domain={['dataMin', 'dataMax']} hide={true} />
                        <Line type="monotone" dataKey="price" stroke={isIncrease ? "#4caf50" : "#f44336"} strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Card>
    );
};

export default CommodityCard;