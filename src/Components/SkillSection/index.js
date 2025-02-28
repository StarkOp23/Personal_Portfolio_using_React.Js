import React from 'react'
import styled, { keyframes } from 'styled-components'
import { skills } from '../../Data/constant';

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
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;

`

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
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: white;
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  // background: ${({ theme }) => theme.card};
  box-shadow: rgba(23, 92, 200, 0.15) 0px 4px 40px;
  border-radius: 20px;
  padding: 18px 36px;
  cursor: pointer;
  overflow: hidden;
  &:hover{
  border: 3px solid #0000;
  border-radius: 12px;
  background: linear-gradient(#131219, #131219) padding-box, linear-gradient(
        var(--angle),
        #070707,
        #687aff
      ) border-box;
  animation: 8s rotate linear infinite;
}

@keyframes rotate {
  to {
    --angle: 360deg;
  }
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`
const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: underline;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: white;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 30px;
  height: 30px;
`


const Skills = () => {
  return (
    <Container id="skills">
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
        <Title style={{ fontFamily: "'Permanent Marker', cursive" }}>Skills</Title>
        <Desc>I am continuously honing my skills and expanding my expertise in various domains. Here are some of the key areas I am currently working on:
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle style={{ fontFamily: "'Caveat', cursive" }}>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills