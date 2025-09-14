export default function NewsFeed() {
// PSEUDOCODE: Create component to display financial news articles
// PURPOSE: Show latest financial news headlines with summaries and sources
// DISPLAYS: Article headlines, brief summaries, news sources, and publication times

  const newsData = [
    // PSEUDOCODE: Array of financial news article objects
    // STRUCTURE: Each object has headline, summary, source, and publish time
    {
      headline: "Tesla Reports Record Q4 Earnings Beat",
      summary: "Tesla exceeded analyst expectations with $24.3B revenue, driven by strong Model Y sales and energy storage growth.",
      source: "Reuters",
      publishedAt: "2 hours ago",
      category: "earnings"
    },
    {
      headline: "Apple Announces New AI Features for iPhone",
      summary: "Apple unveils advanced machine learning capabilities and enhanced Siri functionality in latest iOS update.",
      source: "TechCrunch",
      publishedAt: "4 hours ago", 
      category: "technology"
    },
    {
      headline: "Federal Reserve Signals Potential Rate Cut",
      summary: "Fed Chair Powell hints at possible interest rate reduction amid cooling inflation and stable employment data.",
      source: "Wall Street Journal",
      publishedAt: "6 hours ago",
      category: "monetary-policy"
    },
    {
      headline: "Microsoft Cloud Revenue Surges 28%",
      summary: "Azure and Office 365 drive significant growth as enterprise customers accelerate digital transformation initiatives.",
      source: "CNBC",
      publishedAt: "8 hours ago",
      category: "earnings"
    },
    {
      headline: "Cryptocurrency Market Rallies on ETF News",
      summary: "Bitcoin and Ethereum see substantial gains following regulatory approval of new spot ETF products.",
      source: "Bloomberg",
      publishedAt: "10 hours ago",
      category: "crypto"
    }
  ];

  const getCategoryColor = (category) => {
    // PSEUDOCODE: Function to assign colors based on news category
    // PURPOSE: Visual categorization of different types of financial news
    // RETURNS: Tailwind CSS color classes for category badges
    
    switch (category) {
      case 'earnings':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'technology':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'monetary-policy':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'crypto':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-4">
      {/* PSEUDOCODE: Container with vertical spacing between news items */}
      {/* space-y-4 = Add vertical space between each news article card */}
      
      {newsData.map((article, index) => (
        // PSEUDOCODE: Loop through each news article and create a card
        // map() = Create one card for each item in newsData array
        // article = Current news article object
        // index = Position in array (0, 1, 2, 3, 4) used as unique key
        
        <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg border hover:shadow-lg transition-all duration-200 cursor-pointer">
          {/* PSEUDOCODE: Individual news article card with hover effects */}
          {/* key={index} = Unique identifier for React */}
          {/* bg-white dark:bg-gray-700 = White background in light mode, dark gray in dark mode */}
          {/* p-4 = Padding inside the card */}
          {/* rounded-lg = Rounded corners */}
          {/* border = Thin border around card */}
          {/* hover:shadow-lg = Add shadow when user hovers */}
          {/* transition-all duration-200 = Smooth animation for all changes */}
          {/* cursor-pointer = Show pointer cursor (indicates clickable) */}
          
          <div className="flex justify-between items-start mb-2">
            {/* PSEUDOCODE: Header row with category badge and publish time */}
            {/* flex = Horizontal layout */}
            {/* justify-between = Space items apart (badge left, time right) */}
            {/* items-start = Align items to top */}
            {/* mb-2 = Margin bottom (space below header) */}
            
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
              {article.category.replace('-', ' ').toUpperCase()}
            </span>
            {/* PSEUDOCODE: Category badge with dynamic colors */}
            {/* px-2 py-1 = Small padding for badge */}
            {/* rounded-full = Fully rounded corners (pill shape) */}
            {/* text-xs font-medium = Extra small, medium weight text */}
            {/* getCategoryColor() = Function that returns appropriate colors */}
            {/* .replace('-', ' ').toUpperCase() = Convert "monetary-policy" to "MONETARY POLICY" */}
            
            <span className="text-sm text-gray-500 dark:text-gray-400">{article.publishedAt}</span>
            {/* PSEUDOCODE: Publication time with muted colors */}
            {/* text-sm = Small text size */}
            {/* text-gray-500 dark:text-gray-400 = Muted gray colors for secondary info */}
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{article.headline}</h3>
          {/* PSEUDOCODE: Article headline with size limits */}
          {/* font-semibold = Medium bold font */}
          {/* text-lg = Large text size */}
          {/* mb-2 = Margin bottom (space below headline) */}
          {/* line-clamp-2 = Limit to maximum 2 lines (prevents long headlines from breaking layout) */}
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">{article.summary}</p>
          {/* PSEUDOCODE: Article summary with content limits */}
          {/* text-gray-600 dark:text-gray-300 = Medium gray for body text */}
          {/* text-sm = Small text size for summaries */}
          {/* mb-3 = Margin bottom (space below summary) */}
          {/* line-clamp-3 = Limit to maximum 3 lines (keeps cards consistent height) */}
          
          <div className="flex items-center justify-between">
            {/* PSEUDOCODE: Footer row with source and read more */}
            {/* flex = Horizontal layout */}
            {/* items-center = Vertically center items */}
            {/* justify-between = Space items apart (source left, action right) */}
            
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {article.source}
            </span>
            {/* PSEUDOCODE: News source name */}
            {/* text-sm font-medium = Small, medium weight text */}
            {/* text-gray-700 dark:text-gray-300 = Darker gray for source attribution */}
            
            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium">
              Read More →
            </button>
            {/* PSEUDOCODE: Read more button with hover effects */}
            {/* text-blue-600 dark:text-blue-400 = Blue color that adapts to theme */}
            {/* hover:text-blue-800 dark:hover:text-blue-300 = Darker blue on hover */}
            {/* text-sm font-medium = Small, medium weight text */}
            {/* → = Right arrow to indicate action */}
          </div>
        </div>
      ))}
    </div>
  );
}
// PSEUDOCODE: End of NewsFeed component
// RESULT: 5 news article cards showing:
// - Color-coded category badges (earnings=green, tech=blue, etc.)
// - Article headlines limited to 2 lines
// - Brief summaries limited to 3 lines
// - Publication times and news sources
// - Hover effects and smooth animations
// - Theme-aware styling for light/dark modes
// - "Read More" buttons for future article detail functionality
