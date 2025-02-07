// src/context/ThemeContext.jsx
import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Define your light and dark theme objects
const lightTheme = {
  footerBackground: '#f1f1f1',
  footerText: '#333',
  buttonBackground: '#fff',
  buttonText: '#333',
  // Add any other theme properties you need (e.g., navBackground, bodyBackground, etc.)
};

const darkTheme = {
  footerBackground: '#222',
  footerText: '#f1f1f1',
  buttonBackground: '#333',
  buttonText: '#fff',
  // Add any other theme properties you need
};

// Create a ThemeContext to share the toggle functionality and current theme state
export const ThemeContext = createContext();

// Create a ThemeProvider component that uses styled-components' ThemeProvider
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme; default is 'light'
  const [theme, setTheme] = useState('light');

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Choose the current theme object based on state
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
