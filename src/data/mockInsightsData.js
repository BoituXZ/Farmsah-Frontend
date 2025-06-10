// src/data/mockInsightsData.js

export const mockInsights = [
  {
    id: 'INS001',
    type: 'PEST_WARNING',
    priority: 'CRITICAL',
    headline: 'Critical: Corn Borers Detected in Adjacent Region',
    details: 'Our regional pest model predicts a 75% probability of Corn Borer migration towards your "North Field - Corn Plot A" within the next 5-7 days due to prevailing wind patterns. Current crop growth stage is highly vulnerable.',
    recommendation: 'Scout perimeter rows immediately. Consider preemptive application of recommended pesticide (e.g., Bifenthrin) within 3 days. Monitor moth traps daily.',
    related_to: 'North Field - Corn Plot A',
    icon: 'BugReport',
    date: '2024-07-30'
  },
  {
    id: 'INS002',
    type: 'YIELD_OPPORTUNITY',
    priority: 'HIGH',
    headline: 'High-Value Opportunity: Increase Nitrogen for Soybeans',
    details: 'Recent satellite imagery analysis of your "West Field - Soybeans" shows early signs of nitrogen deficiency in the upper soil layer. Correcting this now could boost yield by an estimated 8-12%.',
    recommendation: 'Apply a supplemental 30 lbs/acre of a fast-release nitrogen fertilizer. Best applied before the forecasted light rain this Friday to ensure absorption.',
    related_to: 'West Field - Soybeans',
    icon: 'TrendingUp',
    date: '2024-07-29'
  },
  {
    id: 'INS003',
    type: 'WEATHER_ALERT',
    priority: 'HIGH',
    headline: 'Weather Alert: Hailstorm Forecasted within 48 Hours',
    details: 'A severe weather system is developing. There is a 60% chance of small to medium-sized hail impacting your farm area on Friday evening. Mature soybean crops are at significant risk of foliage damage.',
    recommendation: 'Ensure your insurance documentation is up to date. If possible, prepare any available anti-hail nets or coverings for high-value seed crops.',
    related_to: 'All Farms',
    icon: 'Storm',
    date: '2024-07-30'
  },
  {
    id: 'INS004',
    type: 'SOIL_HEALTH',
    priority: 'MEDIUM',
    headline: 'Soil Analysis: Potassium Levels Declining',
    details: 'Your latest soil sensor data from "East Field" indicates a 15% drop in potassium levels post-planting. While not critical yet, this trend could limit pod fill and overall soybean quality if unaddressed.',
    recommendation: 'Plan for a post-harvest application of potash or potassium-rich cover crop (e.g., Buckwheat) to replenish soil nutrients for the next season.',
    related_to: 'East Field',
    icon: 'Yard',
    date: '2024-07-28'
  },
   {
    id: 'INS005',
    type: 'IRRIGATION_ADVICE',
    priority: 'MEDIUM',
    headline: 'Irrigation Advisory: Reduce Watering Schedule',
    details: 'Evapotranspiration rates have decreased due to higher humidity and lower winds. Your current irrigation schedule for the "North Field - Corn" is likely to lead to over-saturation by 10%, risking root rot.',
    recommendation: 'Decrease irrigation frequency by 15% for the next 4 days. Re-evaluate based on the weekend weather forecast.',
    related_to: 'North Field - Corn',
    icon: 'WaterDrop',
    date: '2024-07-29'
  }
];