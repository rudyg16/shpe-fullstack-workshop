'use client';
// PSEUDOCODE: Client component for async data fetching and state management
import { useState, useEffect } from 'react';
import { getPopularStocks } from '../../../services/marketApi';
import MiniChart, { generateMockTrendData } from './MiniChart';
import StockModal from './StockModal';

export default function PopularStocks() {
  // PSEUDOCODE: Component displaying popular stocks with charts and click functionality
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // PSEUDOCODE: State management for API data, loading status, and error handling

  const [selectedStock, setSelectedStock] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // PSEUDOCODE: Modal state for displaying detailed stock information

  const handleStockClick = (stock) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };
  // PSEUDOCODE: Handler to open modal with selected stock details

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStock(null);
  };
  // PSEUDOCODE: Handler to close modal and clear selection

  useEffect(() => {
    // PSEUDOCODE: Fetch popular stock data on component mount
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPopularStocks('latest');
        setStockData(data);
      } catch (err) {
        console.error('Error fetching stock data:', err);
        setError('Failed to load stock data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2 text-gray-600 dark:text-gray-400">Loading stock data...</span>
      </div>
      // PSEUDOCODE: Loading spinner with animated icon and text
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 dark:text-red-400 mb-2">⚠️ {error}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Check console for details</p>
      </div>
      // PSEUDOCODE: Error state with warning icon and helper text
    );
  }

  if (!stockData || stockData.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No stock data available</p>
      </div>
      // PSEUDOCODE: Empty state when no data is returned
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* PSEUDOCODE: Responsive grid layout - 1 column mobile, 2 tablet, 4 desktop */}
      
      {stockData.map((stock) => (
        <div 
          key={stock.symbol} 
          className="bg-white dark:bg-gray-700 p-4 rounded-lg border hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
          onClick={() => handleStockClick(stock)}
        >
          {/* PSEUDOCODE: Clickable stock card with hover effects and animations */}
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{stock.name}</h3>
            <span className="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded-full">
              {stock.category}
            </span>
          </div>
          {/* PSEUDOCODE: Header with company name and category badge */}
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{stock.symbol}</p>
          
          <p className="text-xl font-bold mb-2">${stock.price.toLocaleString()}</p>
          {/* PSEUDOCODE: Stock price with comma formatting */}
          
          <div className="mb-2">
            <MiniChart 
              data={generateMockTrendData(stock.price, 30)} 
              color={stock.changePercent >= 0 ? "#10B981" : "#EF4444"}
              height={40}
            />
            {/* PSEUDOCODE: Mini trend chart with color-coded lines based on performance */}
          </div>
          
          <div className="flex items-center justify-between">
            <p className={`text-sm font-medium ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stock.changePercent >= 0 ? '↗' : '↘'} {Math.abs(stock.changePercent)}%
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {stock.date}
            </span>
          </div>
          {/* PSEUDOCODE: Change indicator with directional arrows and date */}
        </div>
      ))}
      
      <StockModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        stock={selectedStock}
        type="stock"
      />
      {/* PSEUDOCODE: Modal for displaying detailed stock information */}
    </div>
  );
}