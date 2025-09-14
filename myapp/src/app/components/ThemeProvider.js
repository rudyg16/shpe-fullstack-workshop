'use client';
// PSEUDOCODE: Tell Next.js "this component needs to run in the browser"
// WHY NEEDED: We use useState, useEffect, and document - all browser features

import { createContext, useContext, useState, useEffect } from 'react';
// PSEUDOCODE: Import React tools from the React library
// createContext = Tool to create data sharing between components
// useContext = Tool to access shared data from any component  
// useState = Tool to manage changing data (like theme on/off)
// useEffect = Tool to run code when something changes

// Create the theme context
const ThemeContext = createContext();
// PSEUDOCODE: Create an invisible "messenger service" for theme data
// LIKE: A radio station that broadcasts theme info to all components
// RESULT: Any component can now "tune in" to get theme information

export function ThemeProvider({ children }) {
// PSEUDOCODE: Create a wrapper component that provides theme to its children
// { children } = All components wrapped inside this provider
// EXAMPLE: <ThemeProvider><Dashboard/><Portfolio/></ThemeProvider>

  const [isDark, setIsDark] = useState(false);
  // PSEUDOCODE: Create a digital light switch with memory
  // isDark = Current switch position (true=dark mode, false=light mode)
  // setIsDark = Function to flip the switch
  // useState(false) = Start with switch in OFF position (light mode)

  // Toggle between light and dark
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  // PSEUDOCODE: Create a function that flips the light switch
  // !isDark = Take current state and flip it to opposite
  // IF currently light (!false = true) → switch to dark
  // IF currently dark (!true = false) → switch to light

  // Apply the theme to the document
  useEffect(() => {
    // PSEUDOCODE: Watch for theme changes and update the webpage
    // RUNS: Every time isDark value changes
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      // PSEUDOCODE: Add 'dark' class to <html> tag
      // RESULT: <html class="dark"> (tells Tailwind to use dark styles)
    } else {
      document.documentElement.classList.remove('dark');
      // PSEUDOCODE: Remove 'dark' class from <html> tag  
      // RESULT: <html> (tells Tailwind to use light styles)
    }
  }, [isDark]);
  // PSEUDOCODE: [isDark] = "Run this effect whenever isDark changes"
  // LIKE: "Hey React, watch isDark variable and run this code when it changes"

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
  // PSEUDOCODE: Broadcast theme data to all child components
  // value={{ isDark, toggleTheme }} = Package to broadcast
  // isDark = Current theme state (true/false)
  // toggleTheme = Function children can call to change theme
  // {children} = Render all components wrapped inside this provider
}

// Custom hook to use theme
export function useTheme() {
// PSEUDOCODE: Create a helper function for components to access theme
// LIKE: A "theme remote control" that any component can use

  const context = useContext(ThemeContext);
  // PSEUDOCODE: Try to connect to the theme radio station
  // GETS: The theme data package (isDark + toggleTheme)
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  // PSEUDOCODE: Safety check - make sure we're connected to theme radio
  // IF no connection = Component forgot to wrap with ThemeProvider
  // THROWS ERROR: Helpful message to fix the problem
  
  return context;
  // PSEUDOCODE: Return the theme remote control to the component
  // GIVES BACK: { isDark: true/false, toggleTheme: function }
}