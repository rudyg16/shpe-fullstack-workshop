import ThemeToggle from '../components/ThemeToggle';
// PSEUDOCODE: Import the theme toggle button component
// PURPOSE: Allows users to switch between light/dark mode
// LOCATION: '../components/ThemeToggle' = go up one folder, then into components

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
            
            <p className="text-gray-600 dark:text-gray-300">S&P 500, NASDAQ, DOW will go here</p>
            {/* PSEUDOCODE: Placeholder text with theme-aware color */}
            {/* text-gray-600 = Medium gray text in light mode */}
            {/* dark:text-gray-300 = Light gray text in dark mode */}
          </div>
          
          {/* Popular Stocks Section */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            {/* PSEUDOCODE: Popular stocks card (same styling as market overview) */}
            
            <h2 className="text-2xl font-semibold mb-4">Popular Stocks</h2>
            {/* PSEUDOCODE: Section title */}
            
            <p className="text-gray-600 dark:text-gray-300">AAPL, GOOGL, MSFT charts will go here</p>
            {/* PSEUDOCODE: Placeholder text for stock charts */}
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