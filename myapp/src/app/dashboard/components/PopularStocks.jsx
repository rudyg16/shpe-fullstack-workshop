export default function PopularStocks() {
// PSEUDOCODE: Create component to display popular individual stocks
// PURPOSE: Show major company stocks (AAPL, GOOGL, MSFT, TSLA) with prices and changes
// DISPLAYS: Company name, stock symbol, current price, and percentage change

  const popularStocks = [
    // PSEUDOCODE: Array of popular stock objects with financial data
    // STRUCTURE: Each object has company name, stock symbol, price, and percentage change
    {
      name: "Apple",             // Company name
      symbol: "AAPL",            // Stock ticker symbol
      price: 175.43,             // Current stock price
      changePercent: 2.15        // Percentage change (positive = up)
    },
    {
      name: "Google",
      symbol: "GOOGL", 
      price: 142.68,
      changePercent: -0.85       // Negative = stock down
    },
    {
      name: "Microsoft",
      symbol: "MSFT",
      price: 378.85,
      changePercent: 1.20
    },
    {
      name: "Tesla",
      symbol: "TSLA",
      price: 248.50,
      changePercent: 3.45
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* PSEUDOCODE: Create responsive grid layout for stock cards */}
      {/* grid-cols-1 = 1 column on mobile (stacked) */}
      {/* md:grid-cols-2 = 2 columns on medium screens (tablets) */}
      {/* lg:grid-cols-4 = 4 columns on large screens (desktop) */}
      {/* gap-4 = Space between grid items */}
      
      {popularStocks.map((stock) => (
        // PSEUDOCODE: Loop through each stock and create a card
        // map() = Create one card for each item in popularStocks array
        // stock = Current stock object (Apple, Google, Microsoft, or Tesla)
        
        <div key={stock.symbol} className="bg-white dark:bg-gray-700 p-4 rounded-lg border hover:shadow-lg transition-shadow">
          {/* PSEUDOCODE: Individual stock card with hover effect */}
          {/* key={stock.symbol} = Unique identifier for React (AAPL, GOOGL, MSFT, TSLA) */}
          {/* bg-white dark:bg-gray-700 = White background in light mode, dark gray in dark mode */}
          {/* p-4 = Padding inside the card */}
          {/* rounded-lg = Rounded corners */}
          {/* border = Thin border around card */}
          {/* hover:shadow-lg = Add shadow when user hovers over card */}
          {/* transition-shadow = Smooth shadow animation */}
          
          <h3 className="font-semibold text-lg">{stock.name}</h3>
          {/* PSEUDOCODE: Display company name (Apple, Google, Microsoft, Tesla) */}
          {/* font-semibold = Medium bold font */}
          {/* text-lg = Large text size */}
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{stock.symbol}</p>
          {/* PSEUDOCODE: Display stock ticker symbol (AAPL, GOOGL, MSFT, TSLA) */}
          {/* text-sm = Small text size */}
          {/* text-gray-500 dark:text-gray-400 = Medium gray in light mode, lighter gray in dark mode */}
          {/* mb-2 = Margin bottom (space below symbol) */}
          
          <p className="text-xl font-bold">${stock.price.toLocaleString()}</p>
          {/* PSEUDOCODE: Display current stock price with formatting */}
          {/* text-xl font-bold = Large, bold text */}
          {/* ${stock.price.toLocaleString()} = Add dollar sign and format with commas */}
          {/* EXAMPLE: 175.43 becomes $175.43, 378.85 becomes $378.85 */}
          
          <p className={`text-sm font-medium ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stock.changePercent >= 0 ? '↗' : '↘'} {Math.abs(stock.changePercent)}%
          </p>
          {/* PSEUDOCODE: Display percentage change with conditional color and arrow */}
          {/* text-sm font-medium = Small, medium weight text */}
          {/* Conditional styling: */}
          {/*   IF changePercent >= 0 (positive): green color + up arrow ↗ */}
          {/*   IF changePercent < 0 (negative): red color + down arrow ↘ */}
          {/* Math.abs() = Show absolute value (removes negative sign for display) */}
          {/* EXAMPLE: ↗ 2.15% (green) or ↘ 0.85% (red) */}
        </div>
      ))}
    </div>
  );
}
// PSEUDOCODE: End of PopularStocks component
// RESULT: 4 cards showing popular stocks with:
// - Company name (Apple, Google, Microsoft, Tesla)
// - Stock symbol (AAPL, GOOGL, MSFT, TSLA)
// - Current price with dollar formatting
// - Percentage change with color coding (green=up, red=down)
// - Responsive layout (1 column mobile, 2 columns tablet, 4 columns desktop)
// - Hover effects for better user interaction
