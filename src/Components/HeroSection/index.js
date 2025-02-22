import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../Data/constant'
import Typewriter from 'typewriter-effect'
import Soumyafb from '../../Images/Soumyafb.jpg'
import HeroBgAnimation from '../HeroBgAnimation'
import { useState } from 'react'

const HeroContainer = styled.div`
  background-image: linear-gradient(to right top, #110224, #13042a, #140730, #160937, #180a3d);
  
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;
const Title = styled.div`
  font-size: 40px;
   font-family: "Black Ops One", serif;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
background: -webkit-linear-gradient(#116553, #33E9FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

// const SubTitle = styled.div`
//   font-size: 20px;
//   line-height: 32px;
//   margin-bottom: 42px;
//   color: ${({ theme }) => theme.text_primary + 95};

//   @media (max-width: 960px) {
//     text-align: center;
//   }

//   @media (max-width: 640px) {
//     font-size: 16px;
//     line-height: 32px;
//   }
// `;
const StyledWrapper = styled.div`
  .cta {
    position: relative;
    margin: auto;
    padding: 12px 22px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    text-decoration: none;
  }

  .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }

  .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
    text-decoration: none;
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: #b1dae7;
  }

  .cta:hover svg {
    transform: translateX(0);
  }

  .cta:active {
    transform: scale(0.95);
  }
  a{
  text-decoration: none;
  }  
  
  `;


const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 500px;
  border-radius: 3%;
  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text_primary + 95};
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #33E9FF;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  // margin-left: 5px;
  &:hover {
    color: #116553;
  }
`;




const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 160; // Set max length for truncated text

  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title > Hola! I go by the name <br /> {Bio.name}</Title>
            <TextLoop style={{ fontFamily: "'Caveat', cursive" }}  >I am a
              <Span  >
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            {/* <SubTitle >{Bio.description}</SubTitle> */}
            {/* Read More / Read Less Toggle */}
            <SubTitle>
              {isExpanded ? Bio.description : `${Bio.description.substring(0, maxLength)}...`}
              <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Read Less" : "Read More"}
              </ReadMoreButton>
            </SubTitle>
            {/* <ResumeButton href={Bio.resume} target='display'  >Resume</ResumeButton> */}
            <StyledWrapper>
              <button className="cta">
                <a href={Bio.resume} target="_blank" rel="noopener noreferrer" ><span>Resume</span>
                  <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5" />
                    <polyline points="8 1 12 5 8 9" />
                  </svg></a>
              </button>
            </StyledWrapper>

          </HeroLeftContainer>
          <HeroRightContainer id="Right">

            <Img src={Soumyafb} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>

    </div>
  )
}

export default Hero
