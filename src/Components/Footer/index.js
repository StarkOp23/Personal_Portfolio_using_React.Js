import styled, { keyframes } from 'styled-components';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../Data/constant';
import space from '../../Images/space.jpg'

// Twinkle effect
const twinkle = keyframes`
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(1); }
`;

// Slow floating effect
const moveStars = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-3px); } 
`;

// Moon rotation
// const rotateMoon = keyframes`
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// `;

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  // background-image: linear-gradient(to right top, #110224, #13042a, #140730, #160937, #180a3d);
  // background-image: url(https://img.freepik.com/free-photo/dark-blue-galaxy-space-with-stars-well-use-as-astronomy-backgrou_1258-106.jpg?t=st=1740717728~exp=1740721328~hmac=53400f6673f557db6034e5e64b60f5534c5ce5ad03738a76b4c1dbf0e67d67e8&w=1060);
  background-size: cover;
  // background-repeat: no-repeat
  background-position-y: 35%;
  background-image: url(${space});
  @media (max-width: 768px) {
    min-height: 200px; /* Adjust for smaller screens */
    background-position: top; /* Reposition for better mobile view */
  }

  @media (max-width: 480px) {
    min-height: 150px; /* Further adjustment for mobile */
    background-position: bottom;
  }
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
    animation: ${twinkle} 2s infinite alternate, ${moveStars} 6s infinite alternate;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
  }

  ${Array.from({ length: 150 }).map(
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


// const Moon = styled.div`
//   position: absolute;
//   bottom: -20px;
//   right: 12%;
//   width: 200px; /* Increased size */
//   height: 200px; /* Increased size */
//   background: url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/240px-FullMoon2010.jpg");
//   background-size: cover;
//   border-radius: 90%;
//   border: transparent;
//   box-shadow: 0 0 30px rgba(200, 200, 200, 0.6);
//   animation: ${rotateMoon} 20s linear infinite;
// `;


const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  z-index: 1;
`;

const Logo = styled.h1`
  font-weight: bolder;
  font-size: 40px;
  background: -webkit-linear-gradient(#116553, #33E9FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    background: -webkit-linear-gradient(#116553, #33E9FF);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledWrapper = styled.div`
  .social-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    box-shadow: 0px 0px 15px #00000027;
    padding: 15px 10px;
    border-radius: 5em;
  }

  .social-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 10px;
    background-color: #fff;
    box-shadow: 0px 0px 4px #00000027;
    transition: 0.3s;
  }

  .social-button:hover {
    background-color: #f2f2f2;
    box-shadow: 0px 0px 6px 3px #00000027;
  }

  .social-buttons svg {
    transition: 0.3s;
    height: 20px;
  }

  .facebook {
    background-color: #3b5998;
  }

  .facebook svg {
    fill: #f2f2f2;
  }

  .facebook:hover svg {
    fill: #3b5998;
  }

  .github {
    background-color: #333;
  }

  .github svg {
    width: 25px;
    height: 25px;
    fill: #f2f2f2;
  }

  .github:hover svg {
    fill: #333;
  }

  .linkedin {
    background-color: #0077b5;
  }

  .linkedin svg {
    fill: #f2f2f2;
  }

  .linkedin:hover svg {
    fill: #0077b5;
  }

  .instagram {
    background-color: #c13584;
  }

  .instagram svg {
    fill: #f2f2f2;
  }

  .instagram:hover svg {
    fill: #c13584;
  }`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>

      <StarsBackground>
        {Array.from({ length: 190 }).map((_, i) => (
          <div key={i} />
        ))}
      </StarsBackground>
      {/* <Moon /> Rotating moon */}
      <FooterWrapper>
        <Logo style={{ fontFamily: "'Nosifer', sans-serif" }}>SOUMYADEEP MAITI</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>

        {/* <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons> */}

        <StyledWrapper>
          <div className="social-buttons">
            <a href={Bio.github} className="social-button github" target="_blank" rel="noopener noreferrer">
              <svg className="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z" /></svg>
            </a>
            <a href={Bio.linkedin} className="social-button linkedin" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Icons" stroke="none" strokeWidth={1}>
                  <g transform="translate(-702.000000, -265.000000)">
                    <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
                    </path>
                  </g>
                </g>
              </svg>
            </a>
            <a href={Bio.facebook} className="social-button facebook" target="_blank" rel="noopener noreferrer">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xmlSpace="preserve">
                <g id="XMLID_834_">
                  <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
          c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
          V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
          C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
          c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                </g>
              </svg>
            </a>
            <a href={Bio.insta} className="social-button instagram" target="_blank" rel="noopener noreferrer">
              <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth={1}>
                  <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">
                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </StyledWrapper>
        {/* <Copyright>
          &copy; 2025 Soumyadeep Maiti. All rights reserved.
        </Copyright> */}
        <Copyright>
          &copy; {new Date().getFullYear()} Soumyadeep Maiti ,All rights reserved. Crafted with passion and dedication | Empowering ideas, building the future.
        </Copyright>

      </FooterWrapper>

    </FooterContainer>
  );
}

export default Footer;