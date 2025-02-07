// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        {/* You can include ThemeToggle in your Navbar or anywhere else */}
        <Navbar>
          <ThemeToggle />
        </Navbar>
        <main style={{ flex: 1 }}>
          <Home />
        </main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
