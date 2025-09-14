'use client';
// PSEUDOCODE: Client component for click handlers and theme hooks
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  // PSEUDOCODE: Toggle button component for switching between light/dark themes
  const { isDark, toggleTheme } = useTheme();
  // PSEUDOCODE: Get current theme state and toggle function from context

  return (
    <button
      onClick={toggleTheme}
      className="
        px-4 py-2 rounded-lg font-medium transition-colors
        bg-gray-200 text-gray-800 hover:bg-gray-300
        dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600
      "
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
    // PSEUDOCODE: Button with theme-aware styling and emoji text showing opposite mode
  );
}