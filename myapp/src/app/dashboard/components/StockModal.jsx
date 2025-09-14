'use client';
// PSEUDOCODE: Client component for modal click handlers and state

export default function StockModal({ isOpen, onClose, stock, type = 'stock' }) {
  // PSEUDOCODE: Professional modal for displaying stock/index details
  // isOpen = visibility state, onClose = close function, stock = data object, type = 'stock' or 'index'

  if (!isOpen || !stock) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* PSEUDOCODE: Full-screen overlay with semi-transparent background */}
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
        {/* PSEUDOCODE: Modal content container with theme-aware styling */}
        
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {type === 'stock' ? 'Stock Details' : 'Market Index Details'}
          </h2>
          {/* PSEUDOCODE: Dynamic title based on content type */}
          
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-2xl"
          >
            ×
          </button>
          {/* PSEUDOCODE: Close button with hover effects */}
        </div>
        
        <div className="space-y-3">
          {/* PSEUDOCODE: Content area with consistent spacing */}
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              {type === 'stock' ? 'Company:' : 'Index:'}
            </span>
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {stock.name}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Symbol:</span>
            <span className="font-mono text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
              {stock.symbol}
            </span>
          </div>
          {/* PSEUDOCODE: Symbol with monospace font and background highlight */}
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Current Price:</span>
            <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
              ${stock.price?.toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Change:</span>
            <span className={`font-semibold ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%
              {stock.changePercent >= 0 ? ' ↗' : ' ↘'}
            </span>
          </div>
          {/* PSEUDOCODE: Color-coded change percentage with directional arrows */}
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Date:</span>
            <span className="text-gray-900 dark:text-gray-100">
              {stock.date}
            </span>
          </div>
          
          {stock.category && (
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Category:</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stock.category === 'STK' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300'
                  : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300'
              }`}>
                {stock.category === 'STK' ? 'Stock' : 'Index'}
              </span>
            </div>
          )}
          {/* PSEUDOCODE: Category badge with color coding for stocks vs indices */}
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Close
          </button>
          {/* PSEUDOCODE: Close button with blue styling and hover effects */}
        </div>
      </div>
    </div>
  );
}