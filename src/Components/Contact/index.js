import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Snackbar } from '@mui/material';
// import { useState } from 'react';



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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  // background-image: url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-90363.jpg?t=st=1740719070~exp=1740722670~hmac=82330979e2b19b2cbdc7566b6e413f79b03768c692cf18285d6414ebae47224f&w=1380);
  // background-repeat: no-repeat;
  // background-size: cover;
  // background-position-x: 50%;
  // background-position-y: 50%;
  
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

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;

@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
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
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  // background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 1px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  &:hover{
    box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    transform: translateY(-5px);
    border: 3px solid #0000;
    border-radius: 12px;
    background: linear-gradient(#131219, #131219) padding-box, linear-gradient(
    var(--angle),
    #070707,
    #687aff
  ) border-box;
animation: 8s rotate linear infinite;
}
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  outline: none;
  font-size: 18px;
  // color: ${({ theme }) => theme.text_primary};
  border-radius: 40px;
  padding: 12px 16px;
  color: #979797;
  border: 1px solid #353535;
  box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
    rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  &:focus {
    // border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  // border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  // color: ${({ theme }) => theme.text_primary};
  border-radius: 40px;
  padding: 12px 16px;
  color: #979797;
  border: 1px solid #353535;
  box-shadow: rgb(136 136 136 / 17%) 0px -23px 25px 0px inset,
    rgb(81 81 81 / 23%) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  
  &:focus {
    // border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .bt {
    border: none;
    user-select: none;
    font-size: 18px;
    color: white;
    text-align: center;
    background-color: #0873bd;
    border-radius: 12px;
    height: 55px;
    line-height: 55px;
    width: 100%;
    max-width: 535px;
    transition: all 0.2s ease;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    @media (max-width: 600px) {
      font-size: 16px;
      height: 50px;
      line-height: 50px;
    }

    &:hover .msg {
      animation: msgRun 2s forwards;
    }

    &:active {
      transition: all 0.1s ease;
      background-color: #5d9fcd;
      transform: translateY(2px);
    }
  }

  .msg {
    height: 0;
    width: 0;
    border-radius: 2px;
    position: absolute;
    left: 15%;
    top: 25%;
  }

  @keyframes msgRun {
    0% {
      border-top: #d6d6d9 0 solid;
      border-bottom: #f2f2f5 0 solid;
      border-left: #f2f2f5 0 solid;
      border-right: #f2f2f5 0 solid;
    }

    20% {
      border-top: #d6d6d9 14px solid;
      border-bottom: #f2f2f5 14px solid;
      border-left: #f2f2f5 20px solid;
      border-right: #f2f2f5 20px solid;
    }

    25% {
      border-top: #d6d6d9 12px solid;
      border-bottom: #f2f2f5 12px solid;
      border-left: #f2f2f5 18px solid;
      border-right: #f2f2f5 18px solid;
    }

    80% {
      border-top: transparent 12px solid;
      border-bottom: transparent 12px solid;
      border-left: transparent 18px solid;
      border-right: transparent 18px solid;
    }

    100% {
      transform: translateX(450px);
      border-top: transparent 12px solid;
      border-bottom: transparent 12px solid;
      border-left: transparent 18px solid;
      border-right: transparent 18px solid;
    }
  }
`;




const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mzv9mxj', 'template_uhassdq', form.current, 'MQiMiw5lEKr00iwcE')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }


  return (
    <Container>
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
        <Title style={{ fontFamily: "'Permanent Marker', cursive" }}>Drop Me a Line </Title>
        <Desc>Excited to hear from you—let’s make something great!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Reach Out—I'm Just an Email Away! 💻</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Type Your Message Here ...." rows="4" color='20' name="message" />
          <StyledWrapper>
            <button className="bt" id="bt">
              <span className="msg" id="msg" />
              Shoot It Over! 📩
            </button>
          </StyledWrapper>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}>
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Mail Dispatched! 📤
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  )
}

export default Contact