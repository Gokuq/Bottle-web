import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import bottleImage from '../assets/bottle-down.png';
import bottleCapImage from '../assets/bottle-cap.png';
import HorizontalScroller from './HorizontalScroller';
import handHeldBottleImage from '../assets/handheld.jpeg';
import Shop from './Shop';
import vacuumBottleIcon from '../assets/vaccum.png';
import fridgeBottleIcon from '../assets/fridge.png';
import borosilicateBottleIcon from '../assets/boro.png';
import kettleIcon from '../assets/wine.png';
import LeftBottle from '../assets/left-bottle.png'
import RightBottle from '../assets/right-bottle.png'


const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-color: white;
`;

const BottleSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  width: 100%;
  overflow: visible;
`;

const BottleContainer = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  z-index: 3;
`;

const BottleImage = styled(motion.img)`
  width: 100%;
`;

const BottleCapImage = styled(motion.img)`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const HandHeldBottleSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const HandHeldBottleImage = styled(motion.img)`
  width: 50%;
  height: 100vh;
  object-fit: cover;
`;

const ProductCategories = styled(motion.div)`
  width: 50%;
  height: 100%;
  background-color: #20292C;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #20292C;
  padding: 25px;
  font-size: 25px;
  margin-bottom: 15px;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  
`;

const CategoryText = styled.span`
  font-size: 25px;
`;

const CategoryIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 20px;
`;

const AdditionalContent = styled.section`
  height: auto;
  display:flex;
  justify-content: center;
  align-items: center;
  
`;

const Circle = styled(motion.div)`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 8px solid transparent;
  background-image: linear-gradient(white, white), 
      linear-gradient(180deg, #4DFBFB 0%, #788EFF 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #333;
  text-align: center;
  font-size: 60px;
  z-index: 1;
`;
const Button = styled(motion.button)`
  display: flex;
  background: linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%);
  margin-left:5rem;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  opacity: 0;
  margin-top: 1rem; // Add some space above the button
  position: relative;
  z-index: 2;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #00A3FF 0%, #0066CC 100%);
    transform: translateY(-2px);
  }
`;
const ContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
  z-index: 1;
  padding: 0 20px;
  width: 50%;
  white-space: nowrap;
  position: relative;
  opacity: 0;
`;

const Title = styled(motion.h2)`
font-size: 70px;
  margin-bottom: 2rem;
  font-weight: bold;
  opacity: 0;
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  margin-bottom: 6rem;
  opacity: 0;
  font-size: 20px;
`;

const SideBottleContainer = styled(motion.div)`
  width: 31px;
  height: 84px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideBottleGradient = styled(motion.div)`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background: linear-gradient(180deg, #4DFBFB 0%, #788EFF 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
`;

const SideBottle = styled(motion.img)`
  width: 150px;
  height: 200px;
  object-fit: contain;
`;

const LeftBottleContainer = styled(SideBottleContainer)`
  left: 10%;
  transform: rotate(10deg);
`;

const RightBottleContainer = styled(SideBottleContainer)`
  right: 10%;
`;

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const [contentVisible, setContentVisible] = useState(false);
    const bottleControls = useAnimation();
    const capControls = useAnimation();
    const circleControls = useAnimation();
    const contentControls = useAnimation();
    const titleControls = useAnimation();
    const subtitleControls = useAnimation();
    const leftBottleControls = useAnimation();
    const rightBottleControls = useAnimation();
    const buttonControls = useAnimation();
    const initialBottleY = 300;
    const initialCapY = 0;
    const quickMoveThreshold = 50;
    const secondStageThreshold = 200;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const maxScroll = window.innerHeight;
        let bottleY, capY, bottleScale;


        // Calculate progress for side bottle visibility and movement
        const sideBottleVisibilityProgress = Math.min(scrollY / quickMoveThreshold, 1);
        const sideBottleMovementProgress = Math.max((scrollY - quickMoveThreshold) / (secondStageThreshold - quickMoveThreshold), 0);

        if (scrollY < quickMoveThreshold) {
            // Stage 1: Quick initial movement
            const quickProgress = scrollY / quickMoveThreshold;
            bottleY = initialBottleY + quickProgress * 200;
            capY = initialCapY - quickProgress * 350;
            bottleScale = 1; // Keep initial scale

            // Gradually show content
            setContentVisible(true);
            contentControls.start({
                opacity: quickProgress,
                scale: 0.3 + quickProgress * 0.2,
                transition: { type: 'spring', stiffness: 100, damping: 20 }
            });
            titleControls.start({ opacity: quickProgress, scale: 0 + quickProgress * 0.3, transition: { delay: 0.1 } });
            subtitleControls.start({ opacity: quickProgress, scale: 1 + quickProgress * 0.2, transition: { delay: 0.2 } });
            buttonControls.start({ opacity: quickProgress, scale: 1 + quickProgress * 0.1, transition: { delay: 0.3 } });
        } else if (scrollY < secondStageThreshold) {
            // Stage 2: New second stage
            const secondStageProgress = (scrollY - quickMoveThreshold) / (secondStageThreshold - quickMoveThreshold);
            bottleY = initialBottleY + 300 + secondStageProgress * 100;
            capY = initialCapY - 700 + secondStageProgress * 350;
            bottleScale = 1 - secondStageProgress * 0.1; // Start reducing scale

            // Keep content fully visible
            setContentVisible(true);
            contentControls.start({ opacity: 1, scale: 1.2 });
            titleControls.start({ opacity: 1, scale: 1.3 });
            subtitleControls.start({ opacity: 1, scale: 1.2 });
            buttonControls.start({ opacity: 1, scale: 1.1 });
        } else {
            // Stage 3: Original animation
            const progress = Math.min((scrollY - secondStageThreshold) / (maxScroll - secondStageThreshold), 1);
            bottleY = initialBottleY + 300 + progress * (window.innerHeight * 1 - initialBottleY - 200);
            capY = initialCapY - 350 + progress * 350;

            // Start fading out content
            const fadeOutProgress = Math.min(progress * 2, 1);
            contentControls.start({ opacity: 1 - fadeOutProgress, scale: 1.2 - fadeOutProgress * 0.2 });
            titleControls.start({ opacity: 1 - fadeOutProgress, scale: 1.3 - fadeOutProgress * 0.3 });
            subtitleControls.start({ opacity: 1 - fadeOutProgress, scale: 1.2 - fadeOutProgress * 0.2 });
            buttonControls.start({ opacity: 1 - fadeOutProgress, scale: 1.1 - fadeOutProgress * 0.1 });
            bottleScale = 0.9 - progress * 0.1;

            if (fadeOutProgress === 1) {
                setContentVisible(false);
            }
        }

        bottleControls.start({
            y: bottleY,
            scale: bottleScale,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        });

        capControls.start({
            y: capY,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        });

        // Circle animation
        circleControls.start({

            opacity: 1.2 - scrollY / maxScroll,
            transition: { type: 'spring', stiffness: 100, damping: 20 }
        });

        // Side bottle animations
        leftBottleControls.start({
            opacity: sideBottleVisibilityProgress,
            y: -200 * sideBottleMovementProgress,
            rotate: [-4, 4, -4],
            transition: { duration: 0.5, ease: "easeOut" }
        });

        rightBottleControls.start({
            opacity: sideBottleVisibilityProgress,
            y: -100 * sideBottleMovementProgress,
            rotate: [4, -4, 4],
            transition: { duration: 0.5, ease: "easeOut" }
        });

    }, [scrollY, bottleControls, capControls, circleControls, contentControls, titleControls, subtitleControls, buttonControls, leftBottleControls, rightBottleControls, initialBottleY, initialCapY]);

    return (
        <HomeContainer>
            <BottleSection>
                <LeftBottleContainer animate={leftBottleControls}>
                    <SideBottleGradient>
                        <SideBottle src={LeftBottle} alt="Left Bottle" />
                    </SideBottleGradient>
                </LeftBottleContainer>
                <Circle animate={circleControls}>
                    {contentVisible && (
                        <ContentContainer animate={contentControls}>
                            <Title animate={titleControls}>The Ultimate Companion <br /> for Hydration</Title>
                            <Subtitle animate={subtitleControls}>We believe in the power of hydration. <br />Our mission is simple yet vital<Button animate={buttonControls}>Inquiry Now</Button></Subtitle>

                        </ContentContainer>
                    )}
                </Circle>
                <RightBottleContainer animate={rightBottleControls}>
                    <SideBottleGradient>
                        <SideBottle src={RightBottle} alt="Right Bottle" />
                    </SideBottleGradient>
                </RightBottleContainer>
                <BottleContainer animate={bottleControls}>
                    <BottleImage
                        src={bottleImage}
                        alt="Bottle"
                    />
                    <BottleCapImage
                        src={bottleCapImage}
                        alt="Bottle Cap"
                        animate={capControls}
                    />
                </BottleContainer>
            </BottleSection>
            <HandHeldBottleSection>
                <HandHeldBottleImage src={handHeldBottleImage} alt="Hand Held Bottle" />
                <ProductCategories>
                    <CategoryItem>
                        <CategoryIcon src={vacuumBottleIcon} alt="Vacuum Bottles" />
                        <CategoryText>Vacuum Bottles</CategoryText>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryIcon src={fridgeBottleIcon} alt="Fridge Bottles & Jugs" />
                        <CategoryText>Fridge Bottles & Jugs</CategoryText>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryIcon src={borosilicateBottleIcon} alt="Borosilicate Bottles" />
                        <CategoryText>Borosilicate Bottles</CategoryText>
                    </CategoryItem>
                    <CategoryItem>
                        <CategoryIcon src={kettleIcon} alt="Kettles" />
                        <CategoryText>Kettles</CategoryText>
                    </CategoryItem>
                </ProductCategories>
            </HandHeldBottleSection>
            <AdditionalContent>
                <Shop />
            </AdditionalContent>
            <HorizontalScroller />
        </HomeContainer>
    );
};

export default Home;