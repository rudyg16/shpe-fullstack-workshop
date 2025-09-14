// PSEUDOCODE: Market Data API Service Layer
// PURPOSE: Handle all communication with backend API for financial data
// DESIGN: Date-based endpoint with category filtering
// FUTURE: Easy switch from mock data to real FastAPI endpoints

// Mock data that matches expected API response structure
// PSEUDOCODE: This simulates what your friend's API will return
const mockMarketIndices = [
  // PSEUDOCODE: Market indices data structure
  // STRUCTURE: Each object represents one market index with current data
  {
    symbol: "^GSPC",           // Stock symbol for S&P 500
    name: "S&P 500",           // Display name
    price: 4850.25,            // Current price
    changePercent: 0.85,       // Percentage change
    category: "IDX",           // Category: Index
    date: "2024-01-15"         // Data date
  },
  {
    symbol: "^NDX",
    name: "NASDAQ 100", 
    price: 15234.18,
    changePercent: 1.23,
    category: "IDX",
    date: "2024-01-15"
  }
];

const mockPopularStocks = [
  // PSEUDOCODE: Popular stocks data structure
  // STRUCTURE: Each object represents one company stock with current data
  {
    symbol: "AAPL",            // Stock ticker symbol
    name: "Apple",             // Company name
    price: 178.19,             // Current stock price
    changePercent: 2.15,       // Percentage change (positive = up)
    category: "STK",           // Category: Stock
    date: "2024-01-15"         // Data date
  },
  {
    symbol: "GOOGL",
    name: "Google",
    price: 142.68,
    changePercent: -0.85,      // Negative = stock down
    category: "STK",
    date: "2024-01-15"
  },
  {
    symbol: "MSFT",
    name: "Microsoft",
    price: 378.85,
    changePercent: 1.20,
    category: "STK", 
    date: "2024-01-15"
  },
  {
    symbol: "TSLA",
    name: "Tesla",
    price: 248.50,
    changePercent: 3.45,
    category: "STK",
    date: "2024-01-15"
  }
];

// PSEUDOCODE: API base URL configuration
// PURPOSE: Easy switch between development and production
// DEVELOPMENT: Use mock data (current)
// PRODUCTION: Use real FastAPI endpoint (future)
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'http://localhost:8000'  // FastAPI server URL
  : 'mock';                  // Use mock data for now

// PSEUDOCODE: Helper function to simulate API delay
// PURPOSE: Make mock data behave like real API calls
// SIMULATES: Network latency and async behavior
const simulateApiDelay = (data, delayMs = 500) => {
  // PSEUDOCODE: Return a Promise that resolves after delay
  // Promise.resolve() = Create successful promise
  // setTimeout = Wait specified milliseconds before resolving
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delayMs);
  });
};

// PSEUDOCODE: Get market indices data (S&P 500, NASDAQ)
// PURPOSE: Fetch data for MarketOverview component
// PARAMETERS: date = specific date or 'latest' for most recent
// RETURNS: Promise that resolves to array of market index objects
export async function getMarketIndices(date = 'latest') {
  // PSEUDOCODE: Function to get market indices with date filtering
  // async = Function returns a Promise
  // date parameter = Allows filtering by specific date (future feature)
  
  try {
    // PSEUDOCODE: Check if using real API or mock data
    if (API_BASE_URL === 'mock') {
      // PSEUDOCODE: Return mock data with simulated delay
      // PURPOSE: Simulate real API behavior for development
      console.log(`🔄 [MOCK] Fetching market indices for date: ${date}`);
      return await simulateApiDelay(mockMarketIndices);
    } else {
      // PSEUDOCODE: Make real API call to FastAPI backend
      // FUTURE: This will be activated when backend is ready
      const url = `${API_BASE_URL}/api/market-data?category=IDX&date=${date}`;
      console.log(`🌐 [API] Fetching from: ${url}`);
      
      const response = await fetch(url);
      // PSEUDOCODE: Check if API request was successful
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      const data = await response.json();
      return data.indices || data; // Handle different response structures
    }
  } catch (error) {
    // PSEUDOCODE: Handle errors gracefully
    // PURPOSE: Log errors and provide fallback data
    console.error('❌ Error fetching market indices:', error);
    
    // PSEUDOCODE: Return fallback data instead of crashing
    console.log('🔄 Falling back to mock data');
    return mockMarketIndices;
  }
}

// PSEUDOCODE: Get popular stocks data (AAPL, GOOGL, MSFT, TSLA)
// PURPOSE: Fetch data for PopularStocks component
// PARAMETERS: date = specific date or 'latest' for most recent
// RETURNS: Promise that resolves to array of stock objects
export async function getPopularStocks(date = 'latest') {
  // PSEUDOCODE: Function to get popular stocks with date filtering
  // Similar pattern to getMarketIndices but for stocks
  
  try {
    if (API_BASE_URL === 'mock') {
      console.log(`🔄 [MOCK] Fetching popular stocks for date: ${date}`);
      return await simulateApiDelay(mockPopularStocks);
    } else {
      // PSEUDOCODE: Real API call for stocks
      const url = `${API_BASE_URL}/api/market-data?category=STK&date=${date}`;
      console.log(`🌐 [API] Fetching from: ${url}`);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      const data = await response.json();
      return data.stocks || data;
    }
  } catch (error) {
    console.error('❌ Error fetching popular stocks:', error);
    console.log('🔄 Falling back to mock data');
    return mockPopularStocks;
  }
}

// PSEUDOCODE: Get historical data for charts (future feature)
// PURPOSE: Fetch time series data for stock price charts
// PARAMETERS: symbol = stock symbol, year/month = date range
// RETURNS: Promise that resolves to array of historical price points
export async function getStockHistory(symbol, year = 2024, month = null) {
  // PSEUDOCODE: Function to get historical stock data for charts
  // symbol = Which stock (AAPL, GOOGL, etc.)
  // year/month = Date range for historical data
  
  try {
    if (API_BASE_URL === 'mock') {
      // PSEUDOCODE: Generate mock historical data for charts
      console.log(`🔄 [MOCK] Fetching history for ${symbol} - ${year}/${month || 'all'}`);
      
      // PSEUDOCODE: Create fake historical data points
      const mockHistory = [];
      const basePrice = symbol === 'AAPL' ? 175 : symbol === 'GOOGL' ? 140 : 250;
      
      // PSEUDOCODE: Generate 30 days of fake price data
      for (let day = 1; day <= 30; day++) {
        mockHistory.push({
          date: `${year}-${String(month || 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`,
          price: basePrice + (Math.random() - 0.5) * 20, // Random price variation
          volume: Math.floor(Math.random() * 1000000)     // Random volume
        });
      }
      
      return await simulateApiDelay(mockHistory);
    } else {
      // PSEUDOCODE: Real API call for historical data
      const monthParam = month ? `&month=${month}` : '';
      const url = `${API_BASE_URL}/api/market-data?category=STK&symbol=${symbol}&year=${year}${monthParam}`;
      console.log(`🌐 [API] Fetching history from: ${url}`);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      return await response.json();
    }
  } catch (error) {
    console.error(`❌ Error fetching history for ${symbol}:`, error);
    return []; // Return empty array for charts
  }
}

// PSEUDOCODE: Get news data (if needed)
// PURPOSE: Fetch financial news for NewsFeed component
// NOTE: This might not be in your friend's database, but good to have
export async function getFinancialNews(date = 'latest') {
  // PSEUDOCODE: Function to get financial news
  // Currently returns mock data since news might not be in database
  
  const mockNews = [
    {
      headline: "Tesla Reports Strong Q4 Earnings",
      summary: "Tesla exceeded expectations with record vehicle deliveries...",
      source: "Reuters",
      publishedAt: "2 hours ago",
      category: "earnings"
    },
    {
      headline: "Apple Unveils New AI Features",
      summary: "Apple announced significant AI improvements across...",
      source: "TechCrunch", 
      publishedAt: "4 hours ago",
      category: "technology"
    }
  ];
  
  console.log(`🔄 [MOCK] Fetching news for date: ${date}`);
  return await simulateApiDelay(mockNews);
}

// PSEUDOCODE: Export configuration for easy debugging
// PURPOSE: Allow components to check what mode we're in
export const API_CONFIG = {
  baseUrl: API_BASE_URL,
  isMock: API_BASE_URL === 'mock',
  environment: process.env.NODE_ENV
};

// PSEUDOCODE: Helper function to format API responses
// PURPOSE: Ensure consistent data structure across components
export function formatMarketData(rawData) {
  // PSEUDOCODE: Standardize data format regardless of source
  // HANDLES: Different API response structures
  // RETURNS: Consistent format for frontend components
  
  if (!rawData || !Array.isArray(rawData)) {
    console.warn('⚠️ Invalid market data format:', rawData);
    return [];
  }
  
  return rawData.map(item => ({
    symbol: item.symbol || 'UNKNOWN',
    name: item.name || 'Unknown Asset',
    price: parseFloat(item.price) || 0,
    changePercent: parseFloat(item.changePercent) || 0,
    category: item.category || 'UNKNOWN',
    date: item.date || new Date().toISOString().split('T')[0]
  }));
}

// PSEUDOCODE: End of marketApi.js service
// SUMMARY: This file provides:
// 1. Mock data that matches expected API structure
// 2. Service functions that work with mock data now, real API later
// 3. Error handling and fallback mechanisms
// 4. Easy configuration switching between development and production
// 5. Consistent data formatting for frontend components
// 6. Detailed logging for debugging
// 
// USAGE: Import these functions in your components:
// import { getMarketIndices, getPopularStocks } from '@/services/marketApi';
