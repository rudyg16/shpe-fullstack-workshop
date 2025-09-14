export default function Dashboard() {
    return (
      <div>
        <h1>Financial Dashboard</h1>
        
        {/* Navigation Tabs */}
        <div>
          <button>General</button>
          <button>My Portfolio</button>
        </div>
        
        {/* Market Overview Section */}
        <div>
          <h2>Market Overview</h2>
          <p>S&P 500, NASDAQ, DOW will go here</p>
        </div>
        
        {/* Popular Stocks Section */}
        <div>
          <h2>Popular Stocks</h2>
          <p>AAPL, GOOGL, MSFT charts will go here</p>
        </div>
        
        {/* News Feed Section */}
        <div>
          <h2>Latest News</h2>
          <p>Financial news will go here</p>
        </div>
      </div>
    );
  }