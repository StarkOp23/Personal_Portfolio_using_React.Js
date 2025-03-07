import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import styled, { keyframes } from 'styled-components';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../Data/constant';
import "react-vertical-timeline-component/style.min.css";



// Twinkling effect
const twinkle = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(1); }
`;



// Shooting star animation
const shootingStar = keyframes`
  0% { transform: translate(-100vw, -50vh) rotate(45deg); opacity: 1; }
  100% { transform: translate(100vw, 50vh) rotate(45deg); opacity: 0; }
`;

const StarsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  div {
    position: absolute;
    background: radial-gradient(circle, white, rgba(255, 255, 255, 0.5));
    border-radius: 50%;
    animation: ${twinkle} 2s infinite alternate;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  }

  ${Array.from({ length: 200 }).map(
    (_, i) => ` 
      div:nth-child(${i + 1}) {
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        box-shadow: 0 0 ${Math.random() * 10}px rgba(255, 255, 255, 0.9);
      }
    `
)}
`;

const ShootingStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;

  div {
    position: absolute;
    width: 100px;
    height: 2px;
    background: linear-gradient(-45deg, white, rgba(255, 255, 255, 0));
    filter: drop-shadow(0 0 6px rgba(255, 255, 255, 1));
    animation: ${shootingStar} 7s linear infinite;
  }

  ${Array.from({ length: 10 }).map(
    (_, i) => ` 
      div:nth-child(${i + 1}) {
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        animation-delay: ${Math.random() * 9}s;
      }
    `
)}
`;

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const index = () => {
    return (
        <Container id='experience'>
            <StarsBackground>
                {Array.from({ length: 350 }).map((_, i) => (
                    <div key={i} />
                ))}
            </StarsBackground>
            <ShootingStars>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} />
                ))}
            </ShootingStars>
            <Wrapper>
                <Title style={{ fontFamily: "'Permanent Marker', cursive" }}>Experience</Title>
                <Desc>
                    As a dynamic and results-driven software engineer, I have worked with multiple companies, delivering innovative solutions and contributing to diverse, high-impact projects.
                </Desc>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </Wrapper>



        </Container>
    )
}

export default index