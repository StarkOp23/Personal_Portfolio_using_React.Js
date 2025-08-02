import React from 'react';
import styled, { keyframes } from 'styled-components';
import { skills } from '../../Data/constant';
import 'swiper/css';
import { Autoplay, Parallax } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tilt from 'react-parallax-tilt';

// === Styled Components === //
const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 50px 0;
  overflow: hidden;
  // background: #0a0a1a;
`;

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


// const GradientLayer = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background: radial-gradient(circle at 30% 30%, rgba(0,255,255,0.1), transparent 70%),
//               radial-gradient(circle at 70% 70%, rgba(255,0,255,0.1), transparent 70%);
//   z-index: 0;
//   filter: blur(40px);
// `;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  font-family: 'Inter', sans-serif;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const SkillCard = styled.div`
  width: 140px;
  height: 160px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(0, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  // box-shadow: 0 0 12px rgba(0, 255, 255, 0.2), inset 0 0 8px rgba(0, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.6s ease, box-shadow 0.3s ease;

  &:hover {
    // box-shadow: 0 0 24px rgba(0, 255, 255, 0.6), inset 0 0 16px rgba(0, 255, 255, 0.4);
    transform: rotateY(180deg);
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 120px;
    padding: 12px;
  }
`;

const SkillIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 8px rgba(255,255,255,0.3));
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const SkillName = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #fff;
  text-align: center;
  opacity: 0.9;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const FloatingDots = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Dot = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(100, 100, 255, 0.15);
  filter: blur(1px);
`;

// const float = keyframes`
//   0% { transform: translate(0, 0); }
//   50% { transform: translate(50px, 50px); }
//   100% { transform: translate(0, 0); }
// `;
export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

// === Component === //
const Skills = () => {
  const allSkills = skills.reduce((acc, category) => [...acc, ...category.skills], []);

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
      {/* <GradientLayer /> */}
      <FloatingDots>
        {Array.from({ length: 20 }).map((_, i) => (
          <Dot key={i} style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 15 + 10}s infinite linear`,
            opacity: Math.random() * 0.3 + 0.1
          }} />
        ))}
      </FloatingDots>

      <ContentWrapper>
        <SectionHeader>
          <Title style={{ fontFamily: "'Permanent Marker', cursive" }}>Skills</Title>
          <Desc>I am continuously honing my skills and expanding my expertise in various domains. Here are some of the key areas I am currently working on:
          </Desc>

        </SectionHeader>

        <CarouselContainer>
          <Swiper
            slidesPerView={4}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            parallax={true}
            modules={[Autoplay, Parallax]}
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 10 },
              640: { slidesPerView: 4, spaceBetween: 12 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
              1280: { slidesPerView: 6, spaceBetween: 30 }
            }}
          >
            {allSkills.map((skill, index) => (
              <SwiperSlide key={index}>
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.0}
                  glareColor="#ffffff"
                  glarePosition="all"
                  scale={1.05}
                  transitionSpeed={1500}
                  tiltMaxAngleX={30}
                  tiltMaxAngleY={30}
                  // style={{ borderRadius: '16px' }}
                >
                  <SkillCard>
                    <SkillIcon src={skill.image} alt={skill.name} />
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </CarouselContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Skills;
