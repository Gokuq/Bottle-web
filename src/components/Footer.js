import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logoImg from "../assets/logoF.png"; // Import the logo

const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: white;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 50px;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
    margin-bottom: 15px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 300;
    
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background 0.3s ease;

    &:hover {
      background-color: #444;
    }

    svg {
      font-size: 20px;
      color: white;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;
  flex-direction: row-reverse;
  border-bottom: 2px solid #444;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const BottomNavLinks = styled(NavLinks)`
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  color: #777;
  font-size: 0.9rem;
  text-align: center;
  width: 100%;
  margin-top: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <Logo src={logoImg} alt="Company Logo" />
        <NavLinks>
          <a href="shop">Shop</a>
          <a href="contact">Contact us</a>
          <a href="about">About</a>
          <a href="journal">Journal</a>
          <a href="custom">Custom</a>
        </NavLinks>
      </TopSection>

      <BottomSection>
        <BottomNavLinks>
          <a href="faq">FAQ's</a>
          <a href="returns">Returns</a>
          <a href="ordering">Ordering</a>
          <a href="shipping">Shipping</a>
          <a href="policies">Personalization Policies</a>
        </BottomNavLinks>
        <SocialIcons>
          <a href="https://facebook.com"><FaFacebookF /></a>
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://twitter.com"><FaTwitter /></a>
        </SocialIcons>
      </BottomSection>

      <Copyright>Copyright © 2023 BOTOL. All Rights Reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
