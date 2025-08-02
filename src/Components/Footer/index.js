// import styled, { keyframes } from 'styled-components';
// // import FacebookIcon from '@mui/icons-material/Facebook';
// // import TwitterIcon from '@mui/icons-material/Twitter';
// // import LinkedInIcon from '@mui/icons-material/LinkedIn';
// // import InstagramIcon from '@mui/icons-material/Instagram';
// import { Bio } from '../../Data/constant';
// import space from '../../Images/space.jpg'

// // Twinkle effect
// const twinkle = keyframes`
//   0% { opacity: 0.3; transform: scale(1); }
//   50% { opacity: 1; transform: scale(1.1); }
//   100% { opacity: 0.3; transform: scale(1); }
// `;

// // Slow floating effect
// const moveStars = keyframes`
//   from { transform: translateY(0); }
//   to { transform: translateY(-3px); } 
// `;

// // Moon rotation
// // const rotateMoon = keyframes`
// //   from { transform: rotate(0deg); }
// //   to { transform: rotate(360deg); }
// // `;

// const FooterContainer = styled.div`
//   width: 100%;
//   padding: 2rem 0;
//   display: flex;
//   justify-content: center;
//   position: relative;
//   overflow: hidden;
//   // background-image: linear-gradient(to right top, #110224, #13042a, #140730, #160937, #180a3d);
//   // background-image: url(https://img.freepik.com/free-photo/dark-blue-galaxy-space-with-stars-well-use-as-astronomy-backgrou_1258-106.jpg?t=st=1740717728~exp=1740721328~hmac=53400f6673f557db6034e5e64b60f5534c5ce5ad03738a76b4c1dbf0e67d67e8&w=1060);
//   background-size: cover;
//   // background-repeat: no-repeat
//   background-position-y: 35%;
//   background-image: url(${space});
//   @media (max-width: 768px) {
//     min-height: 200px; /* Adjust for smaller screens */
//     background-position: top; /* Reposition for better mobile view */
//   }

//   @media (max-width: 480px) {
//     min-height: 150px; /* Further adjustment for mobile */
//     background-position: bottom;
//   }
// `;


// const StarsBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   pointer-events: none;

//   div {
//     position: absolute;
//     background: radial-gradient(circle, white, rgba(255, 255, 255, 0.5));
//     border-radius: 50%;
//     animation: ${twinkle} 2s infinite alternate, ${moveStars} 6s infinite alternate;
//     box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
//   }

//   ${Array.from({ length: 150 }).map(
//   (_, i) => ` 
//       div:nth-child(${i + 1}) {
//         top: ${Math.random() * 100}%;
//         left: ${Math.random() * 100}%;
//         animation-delay: ${Math.random() * 5}s;
//         width: ${Math.random() * 3 + 1}px;
//         height: ${Math.random() * 3 + 1}px;
//         box-shadow: 0 0 ${Math.random() * 10}px rgba(255, 255, 255, 0.9);
//       }
//     `
// )}
// `;


// // const Moon = styled.div`
// //   position: absolute;
// //   bottom: -20px;
// //   right: 12%;
// //   width: 200px; /* Increased size */
// //   height: 200px; /* Increased size */
// //   background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/240px-FullMoon2010.jpg");
// //   background-size: cover;
// //   border-radius: 90%;
// //   border: transparent;
// //   box-shadow: 0 0 30px rgba(200, 200, 200, 0.6);
// //   animation: ${rotateMoon} 20s linear infinite;
// // `;


// const FooterWrapper = styled.footer`
//   width: 100%;
//   max-width: 1200px;
//   display: flex;
//   flex-direction: column;
//   gap: 14px;
//   align-items: center;
//   padding: 1rem;
//   color: ${({ theme }) => theme.text_primary};
//   position: relative;
//   z-index: 1;
// `;

// const Logo = styled.h1`
//   font-weight: bolder;
//   font-size: 40px;
//   background: -webkit-linear-gradient(#116553, #33E9FF);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
  
// `;

// const Nav = styled.nav`
//   width: 100%;
//   max-width: 800px;
//   margin-top: 0.5rem;
//   display: flex;
//   flex-direction: row;
//   gap: 2rem;
//   justify-content: center;
//   @media (max-width: 768px) {
//     flex-wrap: wrap;
//     gap: 1rem;
//     justify-content: center;
//     text-align: center;
//     font-size: 12px;
//   }
// `;

// const NavLink = styled.a`
// color: ${({ theme }) => theme.text_primary};
//   text-decoration: none;
//   font-size: 1.2rem;
//   transition: color 0.2s ease-in-out;
//   &:hover {
//     background: -webkit-linear-gradient(#116553, #33E9FF);
// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;
//   }
//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const StyledWrapper = styled.div`
//   .social-buttons {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-color: transparent;
//     box-shadow: 0px 0px 15px #00000027;
//     padding: 15px 10px;
//     border-radius: 5em;
//   }

//   .social-button {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     margin: 0 10px;
//     background-color: #fff;
//     box-shadow: 0px 0px 4px #00000027;
//     transition: 0.3s;
//   }

//   .social-button:hover {
//     background-color: #f2f2f2;
//     box-shadow: 0px 0px 6px 3px #00000027;
//   }

//   .social-buttons svg {
//     transition: 0.3s;
//     height: 20px;
//   }

//   .facebook {
//     background-color: #3b5998;
//   }

//   .facebook svg {
//     fill: #f2f2f2;
//   }

//   .facebook:hover svg {
//     fill: #3b5998;
//   }

//   .github {
//     background-color: #333;
//   }

//   .github svg {
//     width: 25px;
//     height: 25px;
//     fill: #f2f2f2;
//   }

//   .github:hover svg {
//     fill: #333;
//   }

//   .linkedin {
//     background-color: #0077b5;
//   }

//   .linkedin svg {
//     fill: #f2f2f2;
//   }

//   .linkedin:hover svg {
//     fill: #0077b5;
//   }

//   .instagram {
//     background-color: #c13584;
//   }

//   .instagram svg {
//     fill: #f2f2f2;
//   }

//   .instagram:hover svg {
//     fill: #c13584;
//   }`;

// const Copyright = styled.p`
//   margin-top: 1.5rem;
//   font-size: 0.9rem;
//   color: ${({ theme }) => theme.soft2};
//   text-align: center;
// `;

// function Footer() {
//   return (
//     <FooterContainer>

//       <StarsBackground>
//         {Array.from({ length: 190 }).map((_, i) => (
//           <div key={i} />
//         ))}
//       </StarsBackground>
//       {/* <Moon /> Rotating moon */}
//       <FooterWrapper>
//         <Logo style={{ fontFamily: "'Nosifer', sans-serif" }}>SOUMYADEEP MAITI</Logo>
//         <Nav>
//           <NavLink href="#about">About</NavLink>
//           <NavLink href="#skills">Skills</NavLink>
//           <NavLink href="#experience">Experience</NavLink>
//           <NavLink href="#projects">Projects</NavLink>
//           <NavLink href="#education">Education</NavLink>
//         </Nav>

//         {/* <SocialMediaIcons>
//           <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
//           <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
//           <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
//           <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
//         </SocialMediaIcons> */}

//         <StyledWrapper>
//           <div className="social-buttons">
//             <a href={Bio.github} className="social-button github" target="_blank" rel="noopener noreferrer">
//               <svg className="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z" /></svg>
//             </a>
//             <a href={Bio.linkedin} className="social-button linkedin" target="_blank" rel="noopener noreferrer">
//               <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                 <g id="Icons" stroke="none" strokeWidth={1}>
//                   <g transform="translate(-702.000000, -265.000000)">
//                     <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
//                     </path>
//                   </g>
//                 </g>
//               </svg>
//             </a>
//             <a href={Bio.facebook} className="social-button facebook" target="_blank" rel="noopener noreferrer">
//               <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xmlSpace="preserve">
//                 <g id="XMLID_834_">
//                   <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
//           c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
//           V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
//           C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
//           c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
//                 </g>
//               </svg>
//             </a>
//             <a href={Bio.insta} className="social-button instagram" target="_blank" rel="noopener noreferrer">
//               <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
//                 <g id="Page-1" stroke="none" strokeWidth={1}>
//                   <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
//                     <g id="icons" transform="translate(56.000000, 160.000000)">
//                       <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">
//                       </path>
//                     </g>
//                   </g>
//                 </g>
//               </svg>
//             </a>
//           </div>
//         </StyledWrapper>
//         {/* <Copyright>
//           &copy; 2025 Soumyadeep Maiti. All rights reserved.
//         </Copyright> */}
//         <Copyright>
//           &copy; {new Date().getFullYear()} Soumyadeep Maiti ,All rights reserved. Crafted with passion and dedication | Empowering ideas, building the future.
//         </Copyright>

//       </FooterWrapper>

//     </FooterContainer>
//   );
// }

// export default Footer;



import styled, { keyframes } from 'styled-components';
import { Bio } from '../../Data/constant';

// Floating animation
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
`;

// Gradient pulse animation
const gradientPulse = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Cosmic glow animation
const cosmicGlow = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
`;

// Grid animation
const gridFlow = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

// Social icon hover animation
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 1.5rem 0 1rem;  // Reduced padding to decrease height
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: 
    radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%),
    linear-gradient(to bottom, rgba(13,29,49,0.8), rgba(12,13,19,0.9));
  background-blend-mode: overlay;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(rgba(12,13,19,0.9), rgba(13,29,49,0.8)),
      url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h50v50H0z' fill='none'/%3E%3Cpath d='M25 25a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-12.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm25 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E");
    animation: ${gridFlow} 20s linear infinite;
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 0 0.8rem;  // Reduced padding for mobile
  }
`;

const GlassOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  z-index: 1;
`;

const CosmicEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, rgba(51, 233, 255, 0.15) 0%, transparent 70%);
    animation: ${cosmicGlow} 8s ease infinite;
  }
`;

const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  div {
    position: absolute;
    background: rgba(255, 255, 255, 0.6);
    animation: ${float} 15s linear infinite;
    bottom: -100px;
    border-radius: 50%;
    
    &:nth-child(1) {
      width: 1px;
      height: 1px;
      left: 25%;
      animation-duration: 20s;
      box-shadow: 0 0 10px 2px rgba(51, 233, 255, 0.5);
    }
    
    &:nth-child(2) {
      width: 2px;
      height: 2px;
      left: 10%;
      animation-duration: 25s;
      animation-delay: 5s;
      box-shadow: 0 0 15px 3px rgba(163, 255, 51, 0.5);
    }
    
    &:nth-child(3) {
      width: 1px;
      height: 1px;
      left: 70%;
      animation-duration: 30s;
      animation-delay: 10s;
      box-shadow: 0 0 10px 2px rgba(255, 51, 233, 0.5);
    }
    
    &:nth-child(4) {
      width: 3px;
      height: 3px;
      left: 40%;
      animation-duration: 18s;
      animation-delay: 7s;
      box-shadow: 0 0 20px 4px rgba(51, 153, 255, 0.6);
    }
    
    &:nth-child(5) {
      width: 1px;
      height: 1px;
      left: 85%;
      animation-duration: 22s;
      animation-delay: 3s;
      box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.7);
    }
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;  // Reduced gap
  align-items: center;
  padding: 0.5rem 1rem;  // Reduced padding
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  z-index: 2;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 2.2rem;  // Reduced from 2.8rem
  background: linear-gradient(90deg, #33E9FF, #A3FF33, #FF33E9, #33E9FF);
  background-size: 300% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientPulse} 8s linear infinite;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 0.5rem;  // Reduced padding
  margin-bottom: 0.3rem;  // Reduced margin
  text-shadow: 0 0 15px rgba(51, 233, 255, 0.3);
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #33E9FF, transparent);
    border-radius: 50%;
    filter: blur(1px);
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;  // Reduced from 2.2rem
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;  // Reduced gap
  justify-content: center;
  
  @media (max-width: 480px) {
    gap: 0.6rem;  // Reduced gap
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;  // Reduced from 1.1rem
  font-weight: 500;
  position: relative;
  padding: 0.4rem 0.8rem;  // Reduced padding
  transition: all 0.3s ease;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  
  &:hover {
    color: #33E9FF;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(51, 233, 255, 0.2);
    border-color: rgba(51, 233, 255, 0.3);
    
    &:before {
      transform: translateX(0);
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(51, 233, 255, 0.1) 0%, 
      rgba(51, 233, 255, 0.3) 50%, 
      rgba(51, 233, 255, 0.1) 100%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;  // Reduced from 0.95rem
    padding: 0.4rem 0.7rem;  // Reduced padding
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;  // Reduced from 1.2rem
  margin: 0.3rem 0;  // Reduced margin
`;

const SocialIcon = styled.a`
  width: 40px;  // Reduced from 44px
  height: 40px;  // Reduced from 44px
  border-radius: 10px;  // Reduced from 12px
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    animation: ${bounce} 0.6s ease;
    background: ${({ color }) => color};
    box-shadow: 0 8px 20px ${({ color }) => `${color}80`};
    border-color: transparent;
    
    svg {
      transform: scale(1.1);
      fill: white;
    }
    
    &:before {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, white 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
    transition: all 0.5s ease;
  }
  
  svg {
    width: 18px;  // Reduced from 20px
    height: 18px;  // Reduced from 20px
    transition: all 0.3s ease;
    fill: ${({ theme }) => theme.text_primary};
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    width: 36px;  // Reduced from 40px
    height: 36px;  // Reduced from 40px
    border-radius: 8px;  // Reduced from 10px
    
    svg {
      width: 16px;  // Reduced from 18px
      height: 16px;  // Reduced from 18px
    }
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;  // Reduced from 1.5rem
  font-size: 0.8rem;  // Reduced from 0.85rem
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  position: relative;
  padding-top: 1rem;  // Reduced from 1.2rem
  width: 100%;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 25%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(51, 233, 255, 0.5), transparent);
  }
  
  @media (max-width: 768px) {
    font-size: 0.7rem;  // Reduced from 0.75rem
    padding-top: 0.8rem;  // Reduced from 1rem
    margin-top: 0.8rem;  // Reduced from 1rem
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <GlassOverlay />
      <CosmicEffect />
      <Particles>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} />
        ))}
      </Particles>
      
      <FooterWrapper>
        <Logo>SOUMYADEEP MAITI</Logo>
        
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        
        <SocialContainer>
          <SocialIcon href={Bio.github} target="_blank" rel="noopener noreferrer" color="#333">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </SocialIcon>
          
          <SocialIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer" color="#0077B5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </SocialIcon>
          
          <SocialIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer" color="#3B5998">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </SocialIcon>
          
          <SocialIcon href={Bio.insta} target="_blank" rel="noopener noreferrer" color="#C13584">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </SocialIcon>
        </SocialContainer>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Soumyadeep Maiti. All rights reserved.<br />
          Crafted with passion and dedication | Empowering ideas, building the future.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;