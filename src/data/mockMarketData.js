// src/data/mockMarketData.js

// REMOVED: import statements for icons, as they are no longer used here.

// Helper function to generate historical data (remains the same)
const generateHistoricalData = (basePrice, days, volatility) => {
  let data = [];
  let price = basePrice;
  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (days - i));
    const change = (Math.random() - 0.5) * volatility * price;
    price += change;
    data.push({ date: date.toISOString().split('T')[0], price: parseFloat(price.toFixed(2)) });
  }
  return data;
};

export const commoditiesData = [
  {
    id: 'WHEAT',
    name: 'Wheat (CME)',
    price: 650.25,
    unit: 'USD/bu',
    change: 1.5,
    changeType: 'increase',
    driver: 'Drought concerns in major growing regions.',
    icon: 'Grain', // CHANGED FROM JSX
    iconColor: 'warning', // ADDED for flexibility
  },
  {
    id: 'MAIZE',
    name: 'Maize (Corn)',
    price: 480.75,
    unit: 'USD/bu',
    change: -0.8,
    changeType: 'decrease',
    driver: 'Post-harvest surplus in North America.',
    icon: 'Grain', // CHANGED FROM JSX
    iconColor: 'primary', // ADDED
  },
  {
    id: 'SOY',
    name: 'Soybeans',
    price: 1350.50,
    unit: 'USD/bu',
    change: 0.5,
    changeType: 'increase',
    driver: 'Strong export demand from Asia.',
    icon: 'Agriculture', // CHANGED FROM JSX
    iconColor: 'success', // ADDED
  },
  {
    id: 'CATTLE',
    name: 'Live Cattle',
    price: 185.30,
    unit: 'USD/cwt',
    change: -0.2,
    changeType: 'decrease',
    driver: 'Seasonal increase in supply.',
    icon: 'KebabDining', // CHANGED FROM JSX
    iconColor: 'error', // ADDED
  },
  {
    id: 'DAIRY',
    name: 'Class III Milk',
    price: 18.90,
    unit: 'USD/cwt',
    change: 1.1,
    changeType: 'increase',
    driver: 'Higher processing demand for cheese.',
    icon: 'Egg', // CHANGED FROM JSX
    iconColor: 'info', // ADDED
  },
];


// --- The rest of the file remains unchanged ---
export const historicalData = {
  WHEAT: generateHistoricalData(640, 365, 0.02),
  MAIZE: generateHistoricalData(485, 365, 0.025),
  SOY: generateHistoricalData(1340, 365, 0.018),
  CATTLE: generateHistoricalData(186, 365, 0.01),
  DAIRY: generateHistoricalData(18, 365, 0.03),
};

export const analystConsensus = {
    WHEAT: "Consensus: Neutral. Geopolitical tensions are currently balanced by favorable weather forecasts in the Southern Hemisphere.",
    MAIZE: "Consensus: Bullish. Maize prices expected to rise by 3-5% next quarter due to increased ethanol production targets.",
    SOY: "Consensus: Bearish. Anticipated record harvest in Brazil may put downward pressure on prices in the short term.",
    CATTLE: "Consensus: Neutral. Feed costs are stabilizing, but consumer demand remains a watchpoint.",
    DAIRY: "Consensus: Bullish. Global demand for dairy powders is projected to grow, supporting higher prices through year-end."
};

export const tenderData = [
    {
        id: 'TNDR001',
        type: 'SELL_OFFER',
        commodity: 'Milling Wheat',
        quantity: '5,000 MT',
        quality: 'Grade 1, 12.5% protein, <13% moisture',
        location: 'Port of New Orleans, USA',
        closingDate: '2024-08-15',
        status: 'Open',
        bids: 4,
        highestBid: '655.00 USD/MT',
        certifications: ['Non-GMO', 'Sustainably Sourced']
    },
    {
        id: 'RFP002',
        type: 'BUY_REQUEST',
        commodity: 'Organic Soybeans',
        quantity: '1,200 MT',
        quality: 'USDA Organic Certified, Grade 2 or better',
        location: 'Rotterdam, Netherlands',
        closingDate: '2024-08-20',
        status: 'Open',
        offers: 2,
        bestOffer: '1450.00 USD/MT',
        certifications: ['USDA Organic']
    },
    {
        id: 'TNDR003',
        type: 'SELL_OFFER',
        commodity: 'Corn (Maize)',
        quantity: '10,000 MT',
        quality: 'Grade 2 Yellow Corn',
        location: 'Santos, Brazil',
        closingDate: '2024-07-30',
        status: 'Closed',
        bids: 8,
        highestBid: '482.50 USD/MT',
        certifications: []
    }
]