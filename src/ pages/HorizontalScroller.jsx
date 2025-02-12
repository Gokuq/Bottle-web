


  import React, { useState, useRef, useEffect, useCallback } from 'react';
  import styled, { keyframes, css } from 'styled-components';
  import backgroundImage from '../assets/BackgroundH.jpeg';
  
  const glow = keyframes`
    0% { box-shadow: 0 0 5px #B94E5C; }
    50% { box-shadow: 0 0 20px #B94E5C; }
    100% { box-shadow: 0 0 5px #B94E5C; }
  `;
  
  const Container = styled.div`
    
    width: 100%;
    height: 70vh;
    overflow: hidden;
    font-family: Arial, sans-serif;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    position: relative;
  
    ${props => props.blur && css`
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        z-index: 1;
      }
    `}
  `;
  
  const Quote = styled.div`
  font-size: 24px;
  color: #29272A;
  text-align: center;
  max-width: 80%;
  margin-bottom: 20px;
  z-index: 2;
   /* Makes the text bold */
  font-style: italic; /* Adds italics to the text */
`;
const QuoteHeader = styled.h2`
  font-size: 15px;
  color: #29272A;
    font-family: 'Neutral', sans-serif;
  font-style: italic;
  margin: 0;
    z-index: 2;
`;

  
  const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: transparent;  /* Makes the background transparent */
  color: #29272A;
  border: none;
  cursor: pointer;
  z-index: 2;
`;

  
  const TimelineContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none;
    }
    z-index: 2;
  `;
  
  const Stage = styled.div`
    display: inline-block;
    position: relative;
    width: 75vw;
    height: 100%;
  `;
  
  const StageNumber = styled.div`
    position: absolute;
    left: -13px;
    font-size: 50px;
    color: #B94E5C;
    font-weight: bold;
  `;
  
  const StageDot = styled.div`
    position: absolute;
    left: 0;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 3px solid #B94E5C;
    border-radius: 50%;
    z-index: 2;
  `;
  
  const ActiveStageDot = styled(StageDot)`
    background-color: #B94E5C;
    border: 3px solid #fff;
    box-shadow: 0 0 30px #B94E5C;
      z-index: 4;
  `;
  
  const StageContent = styled.div`
    position: absolute;
    left: 40px;
    text-align: left;
    width: 250px;
  `;
  
  const StageTitle = styled.h2`
    font-size: 18px;
    color: #B94E5C;
    margin-bottom: 10px;
    font-weight: bold;
  `;
  const StageText = styled.div`
  font-size: 14px;
  
  color: #B94E5C;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  word-wrap: break-word;  
  white-space: normal;    
  background-color: transparent;  
  gap: 40px;  
`;


  
  const TimelineLine = styled.div`
  position: absolute;
  height: 4px;
  left: 10px;
  right: 25%;
  transition: all 0.1s ease-out;
  background: linear-gradient(to right, #F6687A 50%, #FCD0D6 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: background-position 0.1s ease-out;
`;
  
const ActiveLine = styled.div`
position: absolute;
height: 4px;
left: 10px;
background-color: #F6687A;
transition: all 0.1s ease-out;
z-index: 3;
`;
const ConnectingLine = styled.div`
position: absolute;
background-color: #FCD0D6;
width: 4px;
right: 25%;
transform-origin: top right;
transition: all 0.1s ease-out;
z-index: 3;
`;
  
const DottedLine = styled.div`
position: absolute;
width: 4px;
background-image: linear-gradient(to bottom, #FCD0D6 50%, transparent 50%);
background-size: 2px 8px;
background-repeat: repeat-y;
left: 15px;
transition: all 0.1s ease-out;
`;
  
  const BendDot = styled.div`
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: #B94E5C;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 3;
    right: calc(25% - 6px);
    animation: ${glow} 1s infinite;
    transition: all 0.1s ease-out;
      z-index: 4;
  `;
  const ActiveConnectingLine = styled.div`
  position: absolute;
    background-color: #F6687A;
  width: 4px;
  right: 25%;
  transform-origin: top right;
  transition: all 0.1s ease-out;
`;
  const HorizontalScroller = () => {
    const [activeStage, setActiveStage] = useState(1);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [showTimeline, setShowTimeline] = useState(false);
    const timelineRef = useRef(null);
  
    const stages = [
      {
        number: 1,
        title: "Week 1 - Relief & Clarity:",
        text: "Feel the weight start to lift as you open up, discovering clarity in a safe, non-judgmental space."
      },
      {
        number: 2,
        title: "Week 4 - Increased Resilience:",
        text: "Begin to notice your reactions shift—less anxiety, more calmness, and tools to manage stress."
      },
      {
        number: 3,
        title: "Week 8 - Lasting Positivity:",
        text: "Wake up with a renewed sense of well-being, as you start to take control of your mental and emotional health."
      },
      {
        number: 4,
        title: "3 Months & Beyond - Thriving:",
        text: "Live with confidence, peace, and joy as you embrace the lasting impact of therapy on every area of your life."
      }
    ];
  
    const handleScroll = useCallback(() => {
      requestAnimationFrame(() => {
        if (timelineRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
          const newScrollProgress = scrollLeft / (scrollWidth - clientWidth);
          setScrollProgress(newScrollProgress);
          
          const stageWidth = scrollWidth / stages.length;
          const newActiveStage = Math.min(
            Math.max(Math.floor(scrollLeft / stageWidth) + 1, 1),
            stages.length
          );
          setActiveStage(newActiveStage);
        }
      });
    }, [stages.length]);
  
    useEffect(() => {
      const currentTimelineRef = timelineRef.current;
      if (currentTimelineRef) {
        currentTimelineRef.addEventListener('scroll', handleScroll);
        return () => currentTimelineRef.removeEventListener('scroll', handleScroll);
      }
    }, [handleScroll]);
  
    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const getBendDotPosition = (index) => {
      switch(index) {
        case 0: return { right: 10, top: -7 };
        case 1: return { right: 8, top: -7 };
        case 2: return { right: 9, top: -7 };
        default: return { right: 11, top: -7 };
      }
    };
  
    const handleStart = () => {
      setShowTimeline(true);
    };
  
    return (
      <Container blur={showTimeline}>
      {!showTimeline ? (
        <>
         <QuoteHeader>Your Transformation, One Step at a Time</QuoteHeader>
          <Quote>"Fitness is a journey—every day brings <br/>you closer to the life you want"</Quote>
          <StartButton onClick={handleStart}>Start Your Journey- </StartButton>
        </>
      ) : (
        <TimelineContainer ref={timelineRef}>
          {stages.map((stage, index) => {
            const isEven = index % 2 === 0;
            const topPosition = isEven ? 60 : 40;
            const bendDotPosition = getBendDotPosition(index);
            
            const currentStageProgress = Math.max(0, Math.min(1, (scrollProgress * stages.length) - index));
            const nextStageProgress = index < stages.length - 1 
              ? Math.max(0, Math.min(1, (scrollProgress * stages.length) - (index + 1)))
              : 0;
  
            const lineOpacity = 0.3 + currentStageProgress * 0.7;
            const connectingOpacity = 0.3 + nextStageProgress * 0.7;
  
            return (
              <Stage key={index}>
                <StageNumber style={{ top: `${isEven ? 65 : 25}%` }}>{stage.number}</StageNumber>
                {activeStage === stage.number ? (
                  <ActiveStageDot style={{ top: `${topPosition}%` }} />
                ) : (
                  <StageDot style={{ top: `${topPosition}%` }} />
                )}
                <TimelineLine style={{
                  top: `${topPosition}%`,
                  backgroundPosition: `${(1 - currentStageProgress) * 100}% 0`,
                }} />
                <ActiveLine style={{
                  top: `${topPosition}%`,
                  width: `calc(${currentStageProgress * 100}% - ${index < stages.length - 1 ? '25%' : '0'})`,
                  left: '10px',
                  right: 'auto',
                }} />
                {index < stages.length - 1 && (
                  <>
                    <ConnectingLine style={{
                      opacity: 1,
                      transform: `rotate(${isEven ? 255 : 286}deg)`,
                      top: `${topPosition}%`,
                      height: `${screenWidth * 0.75 * 0.27}px`,
                      backgroundColor: nextStageProgress > 0 ? '#F6687A' : '#FCD0D6',

                    }} />
                    <ActiveConnectingLine style={{
                      opacity: nextStageProgress,
                      transform: `rotate(${isEven ? 255 : 286}deg)`,
                      top: `${topPosition}%`,
                      height: `${screenWidth * 0.75 * 0.27}px`,
                      backgroundColor: '#F6687A',

                    }} />
                    <BendDot style={{
                      top: `calc(${topPosition}% + ${bendDotPosition.top}px)`,
                      right: `calc(25% - ${bendDotPosition.right}px)`,
                      opacity: 1,
                    }} />
                  </>
                )}
                <DottedLine style={{
                  top: isEven ? `${topPosition}%` : '0',
                  bottom: isEven ? '0' : `${100 - topPosition}%`,
                  opacity: lineOpacity,
                  backgroundImage: `linear-gradient(to bottom, ${currentStageProgress > 0 ? '#F6687A' : '#FCD0D6'} 50%, transparent 50%)`,
                }} />
                <StageContent style={{ top: `${isEven ? 65 : 5}%` }}>
                  <StageTitle>{stage.title}</StageTitle>
                  <StageText>{stage.text}</StageText>
                </StageContent>
              </Stage>
            );
          })}
        </TimelineContainer>
      )}
    </Container>
    );
  };
  
  export default HorizontalScroller;