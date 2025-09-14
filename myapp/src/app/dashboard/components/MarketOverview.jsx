export default function MarketOverview() {
// PSEUDOCODE: Create component to display major market indices
// PURPOSE: Show S&P 500, NASDAQ, and DOW with prices and percentage changes
// DISPLAYS: Current price, change amount, and percentage with color coding

    // Mock data - we'll replace with real API calls later
    const marketData = [
      // PSEUDOCODE: Array of market index objects with financial data
      // STRUCTURE: Each object has name, symbol, price, change amount, and percentage
      {
        name: "S&P 500",        // Display name
        symbol: "SPX",          // Market symbol (for API calls later)
        price: 4850.25,         // Current index price
        change: 0.85,           // Dollar amount change
        changePercent: 0.85     // Percentage change
      },
      {
        name: "NASDAQ",
        symbol: "IXIC", 
        price: 15234.18,
        change: 187.42,
        changePercent: 1.23
      },
      {
        name: "DOW",
        symbol: "DJI",
        price: 35678.42,
        change: -86.15,         // Negative = market down
        changePercent: -0.24
      }
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* PSEUDOCODE: Create responsive grid layout */}
        {/* grid-cols-1 = 1 column on mobile */}
        {/* md:grid-cols-3 = 3 columns on medium screens and up */}
        {/* gap-4 = Space between grid items */}
        
        {marketData.map((index) => (
          // PSEUDOCODE: Loop through each market index and create a card
          // map() = Create one card for each item in marketData array
          // index = Current market index object (S&P, NASDAQ, or DOW)
          
          <div key={index.symbol} className="bg-white dark:bg-gray-700 p-4 rounded-lg border">
            {/* PSEUDOCODE: Individual market index card */}
            {/* key={index.symbol} = Unique identifier for React (SPX, IXIC, DJI) */}
            {/* bg-white dark:bg-gray-700 = White background in light mode, dark gray in dark mode */}
            {/* p-4 = Padding inside the card */}
            {/* rounded-lg = Rounded corners */}
            {/* border = Thin border around card */}
            
            <h3 className="font-semibold text-lg">{index.name}</h3>
            {/* PSEUDOCODE: Display market name (S&P 500, NASDAQ, DOW) */}
            {/* font-semibold = Medium bold font */}
            {/* text-lg = Large text size */}
            
            <p className="text-2xl font-bold">${index.price.toLocaleString()}</p>
            {/* PSEUDOCODE: Display current price with formatting */}
            {/* text-2xl font-bold = Extra large, bold text */}
            {/* ${index.price.toLocaleString()} = Add dollar sign and format with commas */}
            {/* EXAMPLE: 4850.25 becomes $4,850.25 */}
            
            <p className={`text-sm ${index.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {index.change >= 0 ? '↗' : '↘'} {index.changePercent}%
            </p>
            {/* PSEUDOCODE: Display change with conditional color and arrow */}
            {/* text-sm = Small text size */}
            {/* Conditional styling: */}
            {/*   IF change >= 0 (positive): green color + up arrow ↗ */}
            {/*   IF change < 0 (negative): red color + down arrow ↘ */}
            {/* EXAMPLE: ↗ +0.85% (green) or ↘ -0.24% (red) */}
          </div>
        ))}
      </div>
    );
  }
  // PSEUDOCODE: End of MarketOverview component
  // RESULT: 3 cards showing major market indices with:
  // - Market name (S&P 500, NASDAQ, DOW)
  // - Current price with dollar formatting
  // - Percentage change with color coding (green=up, red=down)
  // - Responsive layout (1 column mobile, 3 columns desktop)