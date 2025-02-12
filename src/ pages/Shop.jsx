import React from 'react';
import styled from 'styled-components';

// Import images from assets
import rainbow600Image from '../assets/Rainbow600.jpg';
import rio650Image from '../assets/Rio600.jpg';
import bigBull1300Image from '../assets/BigBull1300.jpeg';
import rome600Image from '../assets/Rome600.jpg';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ViewMoreButton = styled.button`
  background: linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const LearnMoreButton = styled.button`
  background-color: #5dade2;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  background: linear-gradient(90deg, #00d1ff 0%, #1a83ff 100%);
  width: 100%;
`;

const Shop = () => {
  const products = [
    { name: 'Rainbow 600', image: rainbow600Image },
    { name: 'Rio 650', image: rio650Image },
    { name: 'Big Bull 1300', image: bigBull1300Image },
    { name: 'Rome 600', image: rome600Image },
    { name: 'Rainbow 600', image: rainbow600Image },
    { name: 'Rio 650', image: rio650Image },
  ];

  return (
    <Container>
      <Header>
        <div>
          <Title>Hydration Essentials</Title>
          <Subtitle>Discover Our Range of Premium Water Bottles</Subtitle>
        </div>
        <ViewMoreButton>VIEW MORE</ViewMoreButton>
      </Header>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <LearnMoreButton>LEARN MORE</LearnMoreButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default Shop;
