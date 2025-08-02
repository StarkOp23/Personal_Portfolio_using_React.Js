import './App.css';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { darkTheme } from './Bio/theme';
import Navbar from './Components/navbar';
import Hero from './Components/HeroSection';
import Skills from './Components/SkillSection';
import Education from './Components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer';
import Contact from './Components/Contact'
import Experience from './Components/Experience';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './Components/PreLoader/Loader';

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


const Body = styled.div`
background-color:${({ theme }) => theme.bg};
width:100%;
height:100%
overflow-x:hidden

`;

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>

        {loading ? (
          <Loader />

        ) : (
          <>

            <Navbar />
            <Body>
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
              <Hero />
              <Wrapper />
              <Skills />
              <Experience />
              <Education />
              <Contact />
              <Footer />
            </Body>
          </>
        )}
      </Router >
    </ThemeProvider>
  );
}

export default App;