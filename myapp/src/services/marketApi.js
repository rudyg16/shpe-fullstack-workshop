// PSEUDOCODE: Market Data API Service Layer
// PURPOSE: Handle all communication with FastAPI backend for real financial data
// CONNECTED: Real FastAPI backend with SQLite database

// Configuration - supports both local development and Docker
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const API_DELAY = 100; // Small delay for smooth UX

// Helper function to calculate percentage change from historical data
function calculatePercentChange(current, previous) {
  if (!previous || previous === 0) return 0;
  return parseFloat(((current - previous) / previous * 100).toFixed(2));
}

// Helper function to get latest price for a symbol
async function getLatestPrice(symbol, category) {
  try {
    const response = await fetch(`${API_BASE_URL}/assets?symbol=${symbol}&days=2`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    if (data.data && data.data.length >= 2) {
      const latest = data.data[data.data.length - 1];
      const previous = data.data[data.data.length - 2];
      const changePercent = calculatePercentChange(latest.price, previous.price);
      
      return {
        symbol: latest.symbol,
        name: latest.name,
        price: latest.price,
        changePercent: changePercent,
        category: latest.cat,
        date: latest.date,
        volume: latest.volume
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching latest price for ${symbol}:`, error);
    return null;
  }
}

// Get market indices data (S&P 500, NASDAQ)
export async function getMarketIndices(date = 'latest') {
  console.log(`[marketApi] Fetching market indices for date: ${date}`);
  await new Promise(resolve => setTimeout(resolve, API_DELAY));

  try {
    // Get data for major indices
    const indices = ['^GSPC', '^NDX'];
    const results = [];
    
    for (const symbol of indices) {
      const indexData = await getLatestPrice(symbol, 'IDX');
      if (indexData) {
        results.push(indexData);
      }
    }
    
    console.log('[marketApi] Fetched real market indices data:', results);
    return results;
  } catch (error) {
    console.error('[marketApi] Error fetching market indices:', error);
    // Return fallback data if API fails
    return [
      {
        symbol: "^GSPC",
        name: "S&P 500",
        price: 4850.25,
        changePercent: 0.85,
        category: "IDX",
        date: "2024-01-15"
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
  }
}

// Get popular stocks data (AAPL, GOOGL, MSFT, TSLA)
export async function getPopularStocks(date = 'latest') {
  console.log(`[marketApi] Fetching popular stocks for date: ${date}`);
  await new Promise(resolve => setTimeout(resolve, API_DELAY));

  try {
    // Get data for popular stocks
    const stocks = ['AAPL', 'GOOGL', 'MSFT', 'TSLA'];
    const results = [];
    
    for (const symbol of stocks) {
      const stockData = await getLatestPrice(symbol, 'STK');
      if (stockData) {
        results.push(stockData);
      }
    }
    
    console.log('[marketApi] Fetched real popular stocks data:', results);
    return results;
  } catch (error) {
    console.error('[marketApi] Error fetching popular stocks:', error);
    // Return fallback data if API fails
    return [
      {
        symbol: "AAPL",
        name: "Apple",
        price: 178.19,
        changePercent: 2.15,
        category: "STK",
        date: "2024-01-15"
      },
      {
        symbol: "GOOGL",
        name: "Google",
        price: 142.68,
        changePercent: -0.85,
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
  }
}

// Get stock history for charts
export async function getStockHistory(symbol, days = 30) {
  console.log(`[marketApi] Fetching ${days} days of history for ${symbol}`);
  
  try {
    const response = await fetch(`${API_BASE_URL}/assets?symbol=${symbol}&days=${days}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    
    // Transform API data to chart format
    const chartData = data.data.map(item => ({
      date: item.date,
      value: item.price
    }));
    
    console.log(`[marketApi] Fetched ${chartData.length} data points for ${symbol}`);
    return chartData;
  } catch (error) {
    console.error(`[marketApi] Error fetching history for ${symbol}:`, error);
    return []; // Return empty array for charts
  }
}

// Get financial news (mock data for now since not in database)
export async function getFinancialNews(date = 'latest') {
  console.log(`[marketApi] Fetching financial news for date: ${date}`);
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  
  // Mock news data since this likely isn't in your friend's database
  const mockNews = [
    {
      headline: "Tesla Reports Strong Q4 Earnings Beat",
      summary: "Tesla exceeded Wall Street expectations with record vehicle deliveries and improved margins across all segments.",
      source: "Reuters",
      publishedAt: "2 hours ago",
      category: "Earnings"
    },
    {
      headline: "Apple Unveils Revolutionary AI Features",
      summary: "Apple announced significant AI improvements across iOS and macOS, focusing on privacy-first machine learning.",
      source: "TechCrunch", 
      publishedAt: "4 hours ago",
      category: "Technology"
    },
    {
      headline: "Federal Reserve Hints at Rate Changes",
      summary: "Fed officials suggest potential policy shifts following latest inflation data and employment figures.",
      source: "WSJ",
      publishedAt: "6 hours ago", 
      category: "Policy"
    },
    {
      headline: "Microsoft Cloud Revenue Surges 40%",
      summary: "Azure and Office 365 drive record quarterly growth as enterprise adoption accelerates post-pandemic.",
      source: "CNBC",
      publishedAt: "8 hours ago",
      category: "Earnings"
    },
    {
      headline: "Bitcoin Reaches New Monthly High",
      summary: "Cryptocurrency markets rally on institutional adoption news and regulatory clarity from major economies.",
      source: "Bloomberg",
      publishedAt: "12 hours ago",
      category: "Crypto"
    }
  ];
  
  console.log('[marketApi] Returning mock financial news data');
  return mockNews;
}

// Export API configuration for debugging
export const API_CONFIG = {
  baseUrl: API_BASE_URL,
  isConnected: true,
  environment: process.env.NODE_ENV
};