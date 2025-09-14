'use client';
// PSEUDOCODE: Client component for async data fetching and state management
import { useState, useEffect } from 'react';
import { getMarketIndices } from '../../../services/marketApi';
import MiniChart, { generateMockTrendData } from './MiniChart';
import StockModal from './StockModal';

export default function MarketOverview() {
  // PSEUDOCODE: Component displaying major market indices with charts and click functionality
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // PSEUDOCODE: State management for API data, loading status, and error handling

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // PSEUDOCODE: Modal state for displaying detailed index information

  const handleIndexClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };
  // PSEUDOCODE: Handler to open modal with selected index details

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };
  // PSEUDOCODE: Handler to close modal and clear selection

  useEffect(() => {
    // PSEUDOCODE: Fetch market index data on component mount
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMarketIndices('latest');
        setMarketData(data);
      } catch (err) {
        console.error('Error fetching market data:', err);
        setError('Failed to load market data. Please try again later.');
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
        <span className="ml-2 text-gray-600 dark:text-gray-400">Loading market data...</span>
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

  if (!marketData || marketData.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No market data available</p>
      </div>
      // PSEUDOCODE: Empty state when no data is returned
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* PSEUDOCODE: Responsive grid layout for market index cards */}
      
      {marketData.map((index) => (
        <div 
          key={index.symbol} 
          className="bg-white dark:bg-gray-700 p-4 rounded-lg border hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105"
          onClick={() => handleIndexClick(index)}
        >
          {/* PSEUDOCODE: Clickable index card with hover effects and animations */}
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{index.name}</h3>
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full">
              {index.category}
            </span>
          </div>
          {/* PSEUDOCODE: Header with index name and category badge */}
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{index.symbol}</p>
          
          <p className="text-2xl font-bold mb-3">${index.price.toLocaleString()}</p>
          {/* PSEUDOCODE: Large price display with comma formatting */}
          
          <div className="mb-3">
            <MiniChart 
              data={generateMockTrendData(index.price, 30)} 
              color={index.changePercent >= 0 ? "#10B981" : "#EF4444"}
              height={50}
            />
            {/* PSEUDOCODE: Mini trend chart with color-coded lines based on performance */}
          </div>
          
          <div className="flex items-center">
            <p className={`text-sm font-medium ${index.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {index.changePercent >= 0 ? '↗' : '↘'} {Math.abs(index.changePercent)}%
            </p>
            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
              {index.date}
            </span>
          </div>
          {/* PSEUDOCODE: Change indicator with directional arrows and date */}
        </div>
      ))}
      
      <StockModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        stock={selectedIndex}
        type="index"
      />
      {/* PSEUDOCODE: Modal for displaying detailed index information */}
    </div>
  );
}