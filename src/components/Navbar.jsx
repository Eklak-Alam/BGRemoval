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
  FaEraser,  
  FaSun, 
  FaMoon  
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

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0.8rem;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    color: ${({ theme }) => theme.footerText};
    
    &:hover {
      background: ${({ theme }) => theme.footerText};
      color: ${({ theme }) => theme.footerBackground};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Hamburger for Mobile Menu
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile Menu Styling (Slides in from the left)
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  background-color: ${({ theme }) => theme.footerBackground};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  z-index: 100;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
`;

// Mobile Menu Item
const MobileMenuItem = styled.a`
  padding: 1rem 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.footerText};
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.footerText};
    color: ${({ theme }) => theme.footerBackground};
    padding-left: 1rem;
  }
`;

// Styled Switch Button
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

// Switch Wrapper
const Switch = styled.div`
  width: 35px;
  height: 17px;
  background: ${({ theme }) => theme.footerText};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: ${({ isDark }) => (isDark ? "flex-end" : "flex-start")};
  padding: 3px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const Toggle = styled.div`
  width: 16px;
  height: 16px;
  background: ${({ theme }) => theme.footerBackground};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
`;

// Close Button for Mobile Menu
const CloseButton = styled(FaTimes)`
  font-size: 1.8rem;
  align-self: flex-end;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
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
          <span>Instagram</span>
        </a>
        <a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer">
          <FaTelegram />
          <span>Telegram</span>
        </a>
        <a href="https://wa.link/z7wvrw" target="_blank" rel="noreferrer">
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>
        <a href="https://github.com/Eklak-Alam" target="_blank" rel="noreferrer">
          <FaGithub />
          <span>Github</span>
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
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <CloseButton onClick={toggleMobileMenu} />
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
