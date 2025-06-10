// src/components/market/TradingModule.jsx
import React, { useState } from 'react';
import { Box, Tab, Tabs, Typography, Paper } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import HandshakeIcon from '@mui/icons-material/Handshake';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BiddingTenders from './BiddingTenders';

// Placeholder Component
const Placeholder = ({ title }) => (
    <Paper sx={{p: 4, textAlign: 'center'}}>
        <Typography variant="h6">{title}</Typography>
        <Typography>This feature is a placeholder. A full implementation would include a dedicated interface for {title.toLowerCase()}.</Typography>
    </Paper>
);


const TradingModule = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`trading-tabpanel-${index}`}
        aria-labelledby={`trading-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box>
        <Typography variant="h4" gutterBottom>
            Marketplace & Transactions
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto">
                <Tab icon={<GavelIcon />} iconPosition="start" label="Bidding & Tenders" />
                <Tab icon={<HandshakeIcon />} iconPosition="start" label="Active Negotiations" />
                <Tab icon={<DescriptionIcon />} iconPosition="start" label="Contract Management" />
                <Tab icon={<LocalShippingIcon />} iconPosition="start" label="Logistics & Shipping" />
                <Tab icon={<AccountBalanceIcon />} iconPosition="start" label="Escrow & Financing" />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
           <BiddingTenders/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           <Placeholder title="Negotiation Interface"/>
        </TabPanel>
         <TabPanel value={value} index={2}>
           <Placeholder title="Contract Management & Digital Signatures"/>
        </TabPanel>
         <TabPanel value={value} index={3}>
           <Placeholder title="Integrated Logistics Quoting"/>
        </TabPanel>
        <TabPanel value={value} index={4}>
           <Placeholder title="Payment Escrow and Financing Options"/>
        </TabPanel>
    </Box>
  );
};

export default TradingModule;