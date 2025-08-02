// import React from 'react'
// import styled from 'styled-components'
// import { Bio } from '../../Data/constant'
// import Typewriter from 'typewriter-effect'
// // import Soumyafb from '../../Images/Soumyafb.jpg'
// import HeroBgAnimation from '../HeroBgAnimation'
// import { useState } from 'react'

// const HeroContainer = styled.div`
//   background-image: linear-gradient(to right top, #110224, #13042a, #140730, #160937, #180a3d);
  
//   display: flex;
//   justify-content: center;
//   position: relative;
//   padding: 80px 30px;
//   @media (max-width: 960px) {
//     padding: 66px 16px;
//   }
//   @media (max-width: 640) {
//     padding: 32px 16px;
//   }
//   z-index: 1;

//   clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
// `;

// const HeroBg = styled.div`
// position: absolute;
//   display: flex;
//   justify-content: end;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   max-width: 1360px;
//   overflow: hidden;
//   padding: 0 30px;
//   top: 50%;
//   left: 50%;
//   -webkit-transform: translateX(-50%) translateY(-50%);
//   transform: translateX(-50%) translateY(-50%);

//   @media (max-width: 960px) {
//     justify-content: center;
//     padding: 0 0px;
//   }
// `;
// const HeroInnerContainer = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 100%;
//   max-width: 1100px;

//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
// export const HeroLeftContainer = styled.div`
//   width: 100%;
//   order: 1;
//   @media (max-width: 960px) {
//     order: 2;
//     margin-bottom: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }

//   @media (max-width: 640px) {
//     order: 2;
//     margin-bottom: 30px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const HeroRightContainer = styled.div`
//   width: 100%;
//   display: flex;
//   order: 2;
//   justify-content: end;
//   gap: 12px;
//   @media (max-width: 960px) {
//     order: 1;
//     justify-content: center;
//     align-items: center;
//     margin-bottom: 80px;
//   }

//   @media (max-width: 640px) {
//     margin-bottom: 30px;
//   }
// `;
// const Title = styled.div`
//   font-size: 40px;
//    font-family: "Black Ops One", serif;
//   color: ${({ theme }) => theme.text_primary};
//   line-height: 68px;
//   @media (max-width: 960px) {
//     text-align: center;
//   }

//   @media (max-width: 640px) {
//     font-size: 40px;
//     line-height: 48px;
//     margin-bottom: 8px;
//   }
// `;

// export const TextLoop = styled.div`
//   font-weight: 600;
//   font-size: 32px;
//   display: flex;
//   gap: 12px;
//   color: ${({ theme }) => theme.text_primary};
//   line-height: 68px;
//   @media (max-width: 960px) {
//     text-align: center;
//   }
//   @media (max-width: 640px) {
//     font-size: 22px;
//     line-height: 48px;
//     margin-bottom: 16px;
//   }
// `;

// const Span = styled.span`
// background: -webkit-linear-gradient(#116553, #33E9FF);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
// `;

// // const SubTitle = styled.div`
// //   font-size: 20px;
// //   line-height: 32px;
// //   margin-bottom: 42px;
// //   color: ${({ theme }) => theme.text_primary + 95};

// //   @media (max-width: 960px) {
// //     text-align: center;
// //   }

// //   @media (max-width: 640px) {
// //     font-size: 16px;
// //     line-height: 32px;
// //   }
// // `;
// const StyledWrapper = styled.div`
//   .cta {
//     position: relative;
//     margin: auto;
//     padding: 12px 22px;
//     transition: all 0.2s ease;
//     border: none;
//     background: none;
//     cursor: pointer;
//     text-decoration: none;
//   }

//   .cta:before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     border-radius: 50px;
//     background: #b1dae7;
//     width: 45px;
//     height: 45px;
//     transition: all 0.3s ease;
//   }

//   .cta span {
//     position: relative;
//     font-family: "Ubuntu", sans-serif;
//     font-size: 18px;
//     font-weight: 700;
//     letter-spacing: 0.05em;
//     color: #234567;
//     text-decoration: none;
//   }

//   .cta svg {
//     position: relative;
//     top: 0;
//     margin-left: 10px;
//     fill: none;
//     stroke-linecap: round;
//     stroke-linejoin: round;
//     stroke: #234567;
//     stroke-width: 2;
//     transform: translateX(-5px);
//     transition: all 0.3s ease;
//   }

//   .cta:hover:before {
//     width: 100%;
//     background: #b1dae7;
//   }

//   .cta:hover svg {
//     transform: translateX(0);
//   }

//   .cta:active {
//     transform: scale(0.95);
//   }
//   a{
//   text-decoration: none;
//   }  
  
//   `;


// const Img = styled.img`
//   position: relative;
//   width: 100%;
//   height: 100%;
//   max-width: 400px;
//   max-height: 500px;
//   border-radius: 3%;
//   @media (max-width: 768px) {
//     max-width: 400px;
//     max-height: 400px;
//   }

//   @media (max-width: 640px) {
//     max-width: 280px;
//     max-height: 280px;
//   }
// `;

// const SubTitle = styled.div`
//   font-size: 20px;
//   line-height: 32px;
//   margin-bottom: 12px;
//   color: ${({ theme }) => theme.text_primary + 95};
//   @media (max-width: 960px) {
//     text-align: center;
//   }
//   @media (max-width: 640px) {
//     font-size: 16px;
//     line-height: 28px;
//   }
// `;

// const ReadMoreButton = styled.button`
//   background: none;
//   border: none;
//   color: #33E9FF;
//   font-size: 14px;
//   cursor: pointer;
//   text-decoration: none;
//   // margin-left: 5px;
//   &:hover {
//     color: #116553;
//   }
// `;




// const Hero = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const maxLength = 160; // Set max length for truncated text

//   return (
//     <div id='about'>
//       <HeroContainer>
//         <HeroBg>
//           <HeroBgAnimation />
//         </HeroBg>
//         <HeroInnerContainer>
//           <HeroLeftContainer>
//             <Title > Hola! I go by the name <br /> {Bio.name}</Title>
//             <TextLoop style={{ fontFamily: "'Caveat', cursive" }}  >I am a
//               <Span  >
//                 <Typewriter
//                   options={{
//                     strings: Bio.roles,
//                     autoStart: true,
//                     loop: true,
//                   }}
//                 />
//               </Span>
//             </TextLoop>
//             {/* <SubTitle >{Bio.description}</SubTitle> */}
//             {/* Read More / Read Less Toggle */}
//             <SubTitle>
//               {isExpanded ? Bio.description : `${Bio.description.substring(0, maxLength)}...`}
//               <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
//                 {isExpanded ? "Read Less" : "Read More"}
//               </ReadMoreButton>
//             </SubTitle>
//             {/* <ResumeButton href={Bio.resume} target='display'  >Resume</ResumeButton> */}
//             <StyledWrapper>
//               <button className="cta">
//                 <a href={Bio.resume} target="_blank" rel="noopener noreferrer" ><span>Resume</span>
//                   <svg width="15px" height="10px" viewBox="0 0 13 10">
//                     <path d="M1,5 L11,5" />
//                     <polyline points="8 1 12 5 8 9" />
//                   </svg></a>
//               </button>
//             </StyledWrapper>

//           </HeroLeftContainer>
//           <HeroRightContainer id="Right">

//             <Img src={'https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif'} alt="hero-image" />
//           </HeroRightContainer>
//         </HeroInnerContainer>
//       </HeroContainer>

//     </div>
//   )
// }

// export default Hero



import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Bio } from '../../Data/constant';
import Typewriter from 'typewriter-effect';
import HeroBgAnimation from '../HeroBgAnimation';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

// Styled Components
const HeroContainer = styled.div`
  background: linear-gradient(135deg, #110224 0%, #180a3d 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px;
  overflow: hidden;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%);
  
  @media (max-width: 960px) {
    padding: 80px 16px;
    clip-path: polygon(0 0, 100% 0, 100% 95%, 50% 100%, 0 95%);
  }
  
  @media (max-width: 640px) {
    padding: 60px 16px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 60%;
  height: 70%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.7;

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
    opacity: 0.5;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  animation: ${fadeIn} 0.8s ease-out forwards;
  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.8s ease-out 0.2s forwards;
  opacity: 0;

  @media (max-width: 960px) {
    order: 1;
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fff 0%, #b1dae7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 960px) {
    font-size: 2.8rem;
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 2.2rem;
    line-height: 1.3;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 2rem;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.2;
  margin-bottom: 24px;
  
  @media (max-width: 960px) {
    justify-content: center;
  }
  
  @media (max-width: 640px) {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const Span = styled.span`
  background: linear-gradient(90deg, #33E9FF 0%, #116553 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 32px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  transition: all 0.3s ease;
  
  @media (max-width: 960px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  background: linear-gradient(90deg, #33E9FF 0%, #116553 100%);
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(51, 233, 255, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(51, 233, 255, 0.4);
    color: #fff;
    
    &::after {
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #116553 0%, #33E9FF 100%);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #33E9FF;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-left: 6px;
  padding: 2px 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #fff;
    background: rgba(51, 233, 255, 0.1);
  }
`;

const HeroImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  animation: ${float} 6s ease-in-out infinite;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border: 3px solid rgba(51, 233, 255, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 3px solid rgba(51, 233, 255, 0.1);
    top: 15px;
    left: 15px;
    z-index: -1;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    top: 10px;
    left: 10px;
  }
  
  @media (max-width: 768px) {
    max-width: 350px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 30px;
  
  a {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.5rem;
    transition: all 0.2s ease;
    
    &:hover {
      color: #33E9FF;
      transform: translateY(-3px);
    }
  }
  
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 160;

  return (
    <section id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I'm <span style={{ color: '#33E9FF' }}>{Bio.name}</span>
            </Title>
            
            <TextLoop>
              <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.8rem' }}>
                I am a
              </span>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 70,
                    cursor: '|'
                  }}
                />
              </Span>
            </TextLoop>
            
            <SubTitle>
              {isExpanded ? Bio.description : `${Bio.description.substring(0, maxLength)}...`}
              <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show less" : "Show more"}
              </ReadMoreButton>
            </SubTitle>
            
            <CTAButton href={Bio.resume} target="_blank" rel="noopener noreferrer">
              View Resume
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5" stroke="currentColor" />
                <polyline points="8 1 12 5 8 9" stroke="currentColor" fill="none" />
              </svg>
            </CTAButton>
            
            {/* Safe rendering of social icons */}
            {Bio.socials && Array.isArray(Bio.socials) && (
              <SocialIcons>
                {Bio.socials.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon || social.name}
                  </a>
                ))}
              </SocialIcons>
            )}
          </HeroLeftContainer>
          
          <HeroRightContainer>
            <HeroImage>
              <img 
                src="https://user-images.githubusercontent.com/74038190/229223263-cf2e4b07-2615-4f87-9c38-e37600f8381a.gif" 
                alt={Bio.name} 
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = 'path/to/default/image.jpg'
                }}
              />
            </HeroImage>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </section>
  );
};

export default Hero;