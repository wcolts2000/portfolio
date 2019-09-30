import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import smallLogo from '../../assets/PhenegerDevelopmentLogo174x60.svg'

// ==============================
// ===========  STYLES  =========
// ==============================

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #E4E1FF;
  padding: 15px;
  z-index: 2000;
  display: flex;
  justify-content: space-between;
  flex: 1 0 auto;
  width: 100%;

  .logo {
    width: 90px;
    margin: 0;
    padding: 0;
  }

  .left {
    width: 20%;
  }

  .right {
    margin: 0;
    padding: 0;
    display: flex;
    width: 80%;
    justify-content: flex-end;
    align-items: center;
  }
  a {
    color:  #000;
    font-size: 1.6rem;
    font-weight: bold
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1.3px;
    margin: 0 10px;

    &:hover {
      opacity: 0.6;
    }
  }
  .active {
    color: #6C64FF;
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function Header() {
  return (
    <Nav>
      <Link
      className="left"
      smooth
      offset={0}
      duration={500}
      to="hero"
      ><img className="logo" src={smallLogo} alt="pheneger development"/></Link>
      <div className="right">

        <Link
          activeClass="active"
          spy={true}
          smooth
          offset={-60}
          duration={500}
          to="projects"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth
          offset={-60}
          duration={500}
          to="skills"
        >
          skills
        </Link>
        <Link
          activeClass="active"
          spy={true}
          smooth
          offset={-60}
          duration={500}
          to="contact"
        >
          contact
        </Link>
      </div>
    </Nav>
  );
}

export default Header;
