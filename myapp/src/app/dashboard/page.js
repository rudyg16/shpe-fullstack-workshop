// PSEUDOCODE: Import dashboard components for financial data display
import ThemeToggle from '../components/ThemeToggle';
import MarketOverview from './components/MarketOverview';
import PopularStocks from './components/PopularStocks';
import NewsFeed from './components/NewsFeed';

export default function Dashboard() {
  // PSEUDOCODE: Main dashboard page with theme-aware layout and financial components
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      {/* PSEUDOCODE: Full-screen container with responsive theme colors and padding */}
        
      <div className="max-w-6xl mx-auto">
        {/* PSEUDOCODE: Centered content wrapper with max width constraint */}
        
        <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
        {/* PSEUDOCODE: Main page title with large bold styling */}
          
        {/* Navigation Tabs */}
        <div className="flex gap-4 items-center mb-8">
          {/* PSEUDOCODE: Navigation bar with tab buttons and theme toggle */}
          
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">
            General
          </button>
          {/* PSEUDOCODE: Active tab with blue background */}
          
          <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium">
            My Portfolio
          </button>
          {/* PSEUDOCODE: Inactive tab with theme-aware gray styling */}
          
          <ThemeToggle />
          {/* PSEUDOCODE: Dark/light mode toggle button */}
        </div>
          
        {/* Market Overview Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          {/* PSEUDOCODE: Card container for market indices with theme-aware background */}
          
          <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
          {/* PSEUDOCODE: Section header with large semibold text */}
          
          <MarketOverview />
          {/* PSEUDOCODE: Component displaying S&P 500, NASDAQ with charts and price data */}
        </div>
          
        {/* Popular Stocks Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
          {/* PSEUDOCODE: Card container for individual stock data */}
          
          <h2 className="text-2xl font-semibold mb-4">Popular Stocks</h2>
          {/* PSEUDOCODE: Section header */}
          
          <PopularStocks />
          {/* PSEUDOCODE: Component displaying AAPL, GOOGL, MSFT, TSLA with charts and clickable cards */}
        </div>
          
        {/* News Feed Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          {/* PSEUDOCODE: Card container for financial news articles */}
          
          <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
          {/* PSEUDOCODE: Section header */}
          
          <NewsFeed />
          {/* PSEUDOCODE: Component displaying categorized financial news with sources and summaries */}
        </div>
        
      </div>
    </div>
  );
}