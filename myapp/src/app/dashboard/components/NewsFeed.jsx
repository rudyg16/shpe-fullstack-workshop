'use client';
// PSEUDOCODE: Client component for async data fetching and state management
import { useState, useEffect } from 'react';
import { getFinancialNews } from '../../../services/marketApi';

export default function NewsFeed() {
  // PSEUDOCODE: Component displaying financial news articles with categorized badges
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // PSEUDOCODE: State management for API data, loading status, and error handling

  useEffect(() => {
    // PSEUDOCODE: Fetch financial news data on component mount
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getFinancialNews('latest');
        setNewsData(data);
      } catch (err) {
        console.error('Error fetching news data:', err);
        setError('Failed to load news data. Please try again later.');
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
        <span className="ml-2 text-gray-600 dark:text-gray-400">Loading news...</span>
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

  if (!newsData || newsData.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 dark:text-gray-400">No news available</p>
      </div>
      // PSEUDOCODE: Empty state when no data is returned
    );
  }

  const getCategoryColor = (category) => {
    // PSEUDOCODE: Return color classes based on news category
    const colors = {
      'Earnings': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300',
      'Technology': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300',
      'Policy': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300',
      'Crypto': 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300',
      'Market': 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
    };
    return colors[category] || colors['Market'];
  };

  return (
    <div className="space-y-4">
      {/* PSEUDOCODE: Vertical stack of news cards with consistent spacing */}
      
      {newsData.map((article, index) => (
        <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg border hover:shadow-lg transition-shadow">
          {/* PSEUDOCODE: News card with hover effects */}
          
          <div className="flex justify-between items-start mb-2">
            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(article.category)}`}>
              {article.category}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {article.publishedAt}
            </span>
          </div>
          {/* PSEUDOCODE: Header with category badge and publication time */}
          
          <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
            {article.headline}
          </h3>
          {/* PSEUDOCODE: Article headline with large semibold text */}
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            {article.summary}
          </p>
          {/* PSEUDOCODE: Article summary with muted text */}
          
          <div className="flex justify-between items-center">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {article.source}
            </span>
            <a 
              href="#" 
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
            >
              Read more →
            </a>
          </div>
          {/* PSEUDOCODE: Footer with source and read more link */}
        </div>
      ))}
    </div>
  );
}