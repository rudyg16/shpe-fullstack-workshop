import ThemeToggle from '../components/ThemeToggle';
// PSEUDOCODE: Import the theme toggle button component
// PURPOSE: Allows users to switch between light/dark mode
// LOCATION: '../components/ThemeToggle' = go up one folder, then into components

import MarketOverview from './components/MarketOverview';
// PSEUDOCODE: Import the market overview component
// PURPOSE: Display major market indices (S&P 500, NASDAQ, DOW) with mock data
// LOCATION: './components/MarketOverview' = current folder, then into components
// CONTAINS: Mock financial data for 3 major indices with prices and % changes

import PopularStocks from './components/PopularStocks';
// PSEUDOCODE: Import the popular stocks component
// PURPOSE: Display individual company stocks (AAPL, GOOGL, MSFT, TSLA) with mock data
// LOCATION: './components/PopularStocks' = current folder, then into components
// CONTAINS: Mock stock data for 4 popular companies with prices and % changes

export default function Dashboard() {
// PSEUDOCODE: Create the main dashboard page component
// PURPOSE: Display the financial dashboard with all sections
// EXPORTS: This component as the default export (what gets shown at /dashboard)

    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
        {/* PSEUDOCODE: Main container with theme-aware styling */}
        {/* min-h-screen = Make container at least full screen height */}
        {/* bg-white = White background in light mode */}
        {/* dark:bg-gray-900 = Very dark gray background in dark mode */}
        {/* text-gray-900 = Dark text in light mode */}
        {/* dark:text-gray-100 = Light text in dark mode */}
        {/* p-6 = Add padding around all content */}
        
        <div className="max-w-6xl mx-auto">
          {/* PSEUDOCODE: Content wrapper with max width and center alignment */}
          {/* max-w-6xl = Maximum width (prevents content from being too wide) */}
          {/* mx-auto = Center the content horizontally */}
          
          <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
          {/* PSEUDOCODE: Main page title with styling */}
          {/* text-3xl = Large text size */}
          {/* font-bold = Bold font weight */}
          {/* mb-8 = Margin bottom (space below title) */}
          
          {/* Navigation Tabs */}
          <div className="flex gap-4 items-center mb-8">
            {/* PSEUDOCODE: Navigation container with flex layout */}
            {/* flex = Display items in a row */}
            {/* gap-4 = Space between navigation items */}
            {/* items-center = Vertically align items in center */}
            {/* mb-8 = Margin bottom (space below navigation) */}
            
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">
              General
            </button>
            {/* PSEUDOCODE: Active navigation button (currently selected) */}
            {/* px-6 = Horizontal padding inside button */}
            {/* py-2 = Vertical padding inside button */}
            {/* bg-blue-600 = Blue background (indicates active) */}
            {/* text-white = White text */}
            {/* rounded-lg = Rounded corners */}
            {/* font-medium = Medium font weight */}
            
            <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-medium">
              My Portfolio
            </button>
            {/* PSEUDOCODE: Inactive navigation button with theme awareness */}
            {/* bg-gray-200 = Light gray background in light mode */}
            {/* dark:bg-gray-700 = Darker gray background in dark mode */}
            {/* text-gray-700 = Dark gray text in light mode */}
            {/* dark:text-gray-200 = Light gray text in dark mode */}
            
            <ThemeToggle />
            {/* PSEUDOCODE: Theme toggle button component */}
            {/* PURPOSE: Allows user to switch between light/dark mode */}
          </div>
          
          {/* Market Overview Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            {/* PSEUDOCODE: Market overview card with theme-aware background */}
            {/* bg-gray-50 = Very light gray background in light mode */}
            {/* dark:bg-gray-800 = Dark gray background in dark mode */}
            {/* rounded-lg = Rounded corners */}
            {/* p-6 = Padding inside the card */}
            {/* mb-6 = Margin bottom (space below this section) */}
            
            <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
            {/* PSEUDOCODE: Section title */}
            {/* text-2xl = Large text size */}
            {/* font-semibold = Semi-bold font weight */}
            {/* mb-4 = Margin bottom (space below title) */}
            
            <MarketOverview />
            {/* PSEUDOCODE: Display the MarketOverview component */}
            {/* SHOWS: S&P 500, NASDAQ, and DOW indices with mock data */}
            {/* LAYOUT: 3-column grid with price, change amount, and percentage */}
            {/* COLORS: Green for gains (↗), red for losses (↘) */}
            {/* DATA: Mock financial data that will be replaced with real API calls later */}
          </div>
          
          {/* Popular Stocks Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            {/* PSEUDOCODE: Popular stocks card (same styling as market overview) */}
            
            <h2 className="text-2xl font-semibold mb-4">Popular Stocks</h2>
            {/* PSEUDOCODE: Section title */}
            
            <PopularStocks />
            {/* PSEUDOCODE: Display the PopularStocks component */}
            {/* SHOWS: Apple, Google, Microsoft, and Tesla stocks with mock data */}
            {/* LAYOUT: Responsive grid - 1 column mobile, 2 columns tablet, 4 columns desktop */}
            {/* FEATURES: Hover effects, color-coded changes, stock symbols */}
            {/* DATA: Mock stock prices and percentage changes */}
          </div>
          
          {/* News Feed Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            {/* PSEUDOCODE: News feed card (no mb-6 since it's last section) */}
            
            <h2 className="text-2xl font-semibold mb-4">Latest News</h2>
            {/* PSEUDOCODE: Section title */}
            
            <p className="text-gray-600 dark:text-gray-300">Financial news will go here</p>
            {/* PSEUDOCODE: Placeholder text for news feed */}
          </div>
          
        </div>
      </div>
    );
  }
  // PSEUDOCODE: End of Dashboard component
  // RESULT: A complete dashboard layout with:
  // - Theme toggle functionality
  // - Responsive design with max width
  // - Card-based sections for different content
  // - Professional spacing and typography
  // - Theme-aware colors that work in light and dark mode