// src/components/ThemeToggle.jsx
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ThemeToggle = () => {
  // Get the toggleTheme function from ThemeContext
  const { toggleTheme } = useContext(ThemeContext);

  return <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>;
};

export default ThemeToggle;
