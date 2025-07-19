import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // First check localStorage
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      // Default to light theme (as per requirements)
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    // Ensure we're in browser environment
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    
    // Remove both classes first to avoid conflicts
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    root.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};