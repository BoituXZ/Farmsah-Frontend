// src/data/mockResourceData.js

export const resourcesData = [
  {
    id: 'res001',
    category: 'Market Analysis',
    title: 'Global Wheat Outlook: Q3 2024 Projections',
    summary: 'An in-depth analysis of supply chain pressures and weather patterns affecting upcoming wheat harvests worldwide.',
    author: 'Agri-Analytics Group',
    date: '2024-07-28',
    image: 'https://images.pexels.com/photos/168486/pexels-photo-168486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'Analytics',
    type: 'Article',
    featured: true, // This one will be highlighted
  },
  {
    id: 'res002',
    category: 'Best Practices',
    title: 'A Farmer\'s Guide to No-Till Soil Management',
    summary: 'Learn the principles of no-till farming to improve soil health, increase water retention, and reduce erosion on your land.',
    author: 'Sustainable AG Institute',
    date: '2024-07-25',
    image: 'https://images.pexels.com/photos/5923986/pexels-photo-5923986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'School',
    type: 'Guide',
  },
  {
    id: 'res003',
    category: 'Technology',
    title: 'Top 5 AI-Powered Tractor Attachments for 2024',
    summary: 'Discover how new AI-driven technologies can optimize planting depth, fertilizer application, and weed detection.',
    author: 'Future Farms Today',
    date: '2024-07-22',
    image: 'https://images.pexels.com/photos/8422176/pexels-photo-8422176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'PrecisionManufacturing',
    type: 'Article',
  },
  {
    id: 'res004',
    category: 'Webinar',
    title: 'Live Q&A: Agricultural Financing and Loans',
    summary: 'Join financial experts as they discuss strategies for securing capital for the upcoming season. Live event on August 15th.',
    author: 'FarmFinance Partners',
    date: '2024-08-15',
    image: 'https://images.pexels.com/photos/8468725/pexels-photo-8468725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'Event',
    type: 'Event',
  },
    {
    id: 'res005',
    category: 'Best Practices',
    title: 'Crop Rotation Strategies for Corn and Soybeans',
    summary: 'Explore proven crop rotation cycles that naturally suppress pests and diseases while enriching soil nitrogen levels.',
    author: 'MidWest Growers Association',
    date: '2024-07-19',
    image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'School',
    type: 'Guide',
  },
   {
    id: 'res006',
    category: 'Market Analysis',
    title: 'Impact of New Tariffs on Soybean Exports',
    summary: 'A look at the potential market shifts and price volatility resulting from recent international trade policy changes.',
    author: 'Global Trade Insights',
    date: '2024-07-29',
    image: 'https://images.pexels.com/photos/61127/container-ship-logistics-commerce-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    icon: 'Analytics',
    type: 'Report',
  }
];

// Provide the unique categories for filtering, starting with 'All'
export const resourceCategories = ['All', 'Market Analysis', 'Best Practices', 'Technology', 'Webinar'];