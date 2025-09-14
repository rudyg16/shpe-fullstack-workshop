'use client';
// PSEUDOCODE: Client component for browser APIs (useState, useEffect, document)
import { createContext, useContext, useState, useEffect } from 'react';

// PSEUDOCODE: Create context for sharing theme state across components
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // PSEUDOCODE: Provider component that manages theme state for entire app
  const [isDark, setIsDark] = useState(false);
  // PSEUDOCODE: Theme state - false for light mode, true for dark mode

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  // PSEUDOCODE: Function to switch between light and dark themes

  useEffect(() => {
    // PSEUDOCODE: Apply theme class to document when state changes
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  // PSEUDOCODE: Watch isDark state and update document class for Tailwind CSS

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/* PSEUDOCODE: Provide theme state and toggle function to all child components */}
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  // PSEUDOCODE: Custom hook for components to access theme context
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
  // PSEUDOCODE: Returns { isDark, toggleTheme } for consuming components
}