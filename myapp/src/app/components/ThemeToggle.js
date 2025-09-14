'use client';
// PSEUDOCODE: Tell Next.js "this button needs to work in the browser"
// WHY NEEDED: We need to handle user clicks and use hooks

import { useTheme } from './ThemeProvider';
// PSEUDOCODE: Import our custom theme remote control
// useTheme = The helper function we made to access theme data
// GETS US: { isDark: true/false, toggleTheme: function }

export default function ThemeToggle() {
// PSEUDOCODE: Create a toggle button component
// PURPOSE: Give users a button to switch between light/dark mode

  const { isDark, toggleTheme } = useTheme();
  // PSEUDOCODE: Connect to the theme radio station and get controls
  // isDark = Current theme state (true=dark, false=light)
  // toggleTheme = Function to flip the theme when clicked
  // LIKE: Getting a TV remote that shows current channel and has channel buttons

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
  );
  // PSEUDOCODE: Create a button that changes theme when clicked
  // onClick={toggleTheme} = When clicked, run the toggle function
  // className = Styling that changes based on current theme
  //   Light mode: gray background with dark text
  //   Dark mode: dark background with light text
  // {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'} = Show opposite of current mode
  //   IF currently dark → show "Light Mode" (what clicking will do)
  //   IF currently light → show "Dark Mode" (what clicking will do)
}
