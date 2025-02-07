// src/components/Navbar.jsx
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';
import { 
  FaInstagram, 
  FaTelegram, 
  FaWhatsapp, 
  FaGithub, 
  FaBars, 
  FaTimes,
  FaEraser  // This icon represents background removal
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Main navbar container
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerText};
  position: relative;
`;

// Logo styling with icon
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Group for icons (desktop view)
const IconGroup = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// A basic button (for theme toggling on desktop)
const DesktopButton = styled.button`
  margin-left: 1rem;
  background: none;
  border: none;
  color: inherit;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Hamburger icon appears only on mobile
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile menu container, animated with framer-motion
const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.footerBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  z-index: 10;
`;

// Each item in the mobile menu
const MobileMenuItem = styled.a`
  padding: 0.5rem 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.footerText};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

// A styled button version for mobile (used for toggling theme)
const MobileButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.footerText};
  font-size: 1.2rem;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <Nav>
      {/* Logo with an icon */}
      <Logo>
        <FaEraser /> 
        AI BG Removal
      </Logo>

      {/* Desktop Icon Group */}
      <IconGroup>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </IconGroup>

      {/* Desktop Theme Toggle Button */}
      <DesktopButton onClick={toggleTheme}>Toggle Theme</DesktopButton>

      {/* Hamburger icon for mobile */}
      <Hamburger onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <MobileMenuItem href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </MobileMenuItem>
          <MobileMenuItem href="https://telegram.org" target="_blank" rel="noreferrer">
            Telegram
          </MobileMenuItem>
          <MobileMenuItem href="https://whatsapp.com" target="_blank" rel="noreferrer">
            WhatsApp
          </MobileMenuItem>
          <MobileMenuItem href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </MobileMenuItem>
          {/* Mobile Theme Toggle Button */}
          <MobileButton onClick={() => { toggleTheme(); toggleMobileMenu(); }}>
            Toggle Theme
          </MobileButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
