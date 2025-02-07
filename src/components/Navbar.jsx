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
  FaEraser,  // Icon for BG Removal
  FaSun, 
  FaMoon  // Icons for light/dark mode
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Styled Navbar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.footerBackground};
  color: ${({ theme }) => theme.footerText};
  position: relative;
`;

// Logo Styling
const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Desktop Icons
const IconGroup = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Hamburger for Mobile Menu
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile Menu Styling
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

// Mobile Menu Item
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

// Styled Switch Button
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

// Switch Wrapper
const Switch = styled.div`
  width: 50px;
  height: 24px;
  background: ${({ theme }) => theme.footerText};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: ${({ isDark }) => (isDark ? "flex-end" : "flex-start")};
  padding: 3px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const Toggle = styled.div`
  width: 18px;
  height: 18px;
  background: ${({ theme }) => theme.footerBackground};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`;


const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme.mode === 'dark';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <Nav>
      {/* Logo */}
      <Logo>
        <FaEraser /> 
        AI BG Removal
      </Logo>

      {/* Desktop Icons */}
      <IconGroup>
        <a href="https://www.instagram.com/heartless_eklak/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
        <a href="https://wa.link/z7wvrw" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/Eklak-Alam" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </IconGroup>

      {/* Switch Button for Theme Toggle */}
      <SwitchContainer onClick={toggleTheme}>
        {isDark ? <FaMoon /> : <FaSun />}
        <Switch isDark={isDark}>
          <Toggle />
        </Switch>
      </SwitchContainer>


      {/* Mobile Hamburger */}
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
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
