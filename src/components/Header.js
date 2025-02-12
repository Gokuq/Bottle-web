import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.png'; // Adjust the path as needed

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  position: relative;
  z-index: 1000;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 150px; /* Default width */

  @media (max-width: 768px) {
    width: 90px; /* Smaller on mobile */
  }

  @media (max-width: 480px) {
    width: 75px; /* Even smaller on very small screens */
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1rem 0;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem;
  
  &:hover {
    color: #5DADE2;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }
`;

const InquiryButton = styled.button`
  background: linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4A90E2;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    margin-top: 1rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logoImg} alt="BOTOL Logo" />
      </Link>

      <MenuButton onClick={() => setIsNavOpen(!isNavOpen)}>
        {isNavOpen ? '✕' : '☰'}
      </MenuButton>

      <Nav isOpen={isNavOpen}>
        <NavLink to="/shop" onClick={() => setIsNavOpen(false)}>Shop</NavLink>
        <NavLink to="/contact" onClick={() => setIsNavOpen(false)}>Contact</NavLink>
        <NavLink to="/about" onClick={() => setIsNavOpen(false)}>About</NavLink>
        <NavLink to="/journal" onClick={() => setIsNavOpen(false)}>Journal</NavLink>
        <NavLink to="/custom" onClick={() => setIsNavOpen(false)}>Custom</NavLink>
        <InquiryButton>Inquiry Now</InquiryButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
