'use client';
// PSEUDOCODE: Client component for Recharts browser APIs
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function MiniChart({ data, color = "#3B82F6", height = 60 }) {
  // PSEUDOCODE: Reusable mini line chart component for financial trend visualization
  // data = Array of price points, color = line color, height = chart height in pixels

  if (!data || data.length === 0) {
    return (
      <div style={{ height: `${height}px` }} className="flex items-center justify-center text-gray-400 text-xs">
        {/* PSEUDOCODE: Empty state with centered "No data" message */}
        No data
      </div>
    );
  }

  return (
    <div style={{ height: `${height}px` }} className="w-full relative">
      {/* PSEUDOCODE: Chart container with fixed height and responsive wrapper */}
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={2}
            dot={false}
            activeDot={false}
          />
          {/* PSEUDOCODE: Smooth line chart with color-coded strokes and hidden dots */}
        </LineChart>
      </ResponsiveContainer>
      
      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-600 rounded opacity-20 pointer-events-none">
        <div className="h-full w-full" style={{ 
          background: `linear-gradient(45deg, transparent 40%, ${color}20 50%, transparent 60%)` 
        }} />
        {/* PSEUDOCODE: Fallback gradient background as visual placeholder if chart fails */}
      </div>
    </div>
  );
}

export function generateMockTrendData(baseValue, days = 30, volatility = 0.05) {
  // PSEUDOCODE: Generate realistic-looking chart data with dramatic price movements
  // baseValue = starting price, days = data points, volatility = price fluctuation percentage
  
  const data = [];
  let currentValue = baseValue * 0.95; // Start 5% lower for upward trend
  
  for (let i = 0; i < days; i++) {
    const randomChange = (Math.random() - 0.5) * 2 * volatility;
    const trendFactor = i / days * 0.1; // Gradual 10% increase over time
    
    currentValue *= (1 + randomChange + trendFactor/days);
    // PSEUDOCODE: Apply random daily changes plus overall trending behavior
    
    if (Math.random() < 0.1) { // 10% chance of big market event
      const bigMove = (Math.random() - 0.5) * 0.1; // Up to 5% swing
      currentValue *= (1 + bigMove);
    }
    
    data.push({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      value: Math.round(currentValue * 100) / 100
      // PSEUDOCODE: Create data points with dates going backwards from today
    });
  }
  
  return data;
}