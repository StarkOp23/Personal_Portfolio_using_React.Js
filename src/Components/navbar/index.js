import React from 'react'
import { Nav, NavLink, NavbarContainer, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import { FaBars } from 'react-icons/fa';
import './nav.css';
import { useTheme } from 'styled-components';
import { Bio } from '../../Data/constant';
import Phoenix from "./Phoenix.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href='*' style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <img src={Phoenix} alt='no' width="150px" height="150px" id='navimg' />
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='https://github.com/StarkOp23?tab=repositories' target="_blank">Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>

            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>

            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience
            </MobileLink>

            <MobileLink href='https://github.com/StarkOp23?tab=repositories' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects
            </MobileLink>

            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education
            </MobileLink>

            <GitHubButton
              style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github
            </GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>

    </Nav>

  )
}

export default Navbar