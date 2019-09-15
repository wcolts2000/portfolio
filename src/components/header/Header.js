import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// ==============================
// ===========  STYLES  =========
// ==============================

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 73px;
  background: #0f0f0f;
  padding: 25px;
  z-index: 2000;
  display: flex;
  justify-content: space-evenly;
  flex: 1 0 auto;

  a {
    color: aqua;
    font-size: 1.6rem;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    letter-spacing: 1.3px;

    &:hover {
      opacity: 0.6;
    }
  }
  .active {
    color: gold;
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function Header() {
  return (
    <Nav>
      <Link
        activeClass="active"
        spy={true}
        smooth
        offset={-70}
        duration={500}
        to="projects"
      >
        Projects
      </Link>
      <Link
        activeClass="active"
        spy={true}
        smooth
        offset={-70}
        duration={500}
        to="skills"
      >
        skills
      </Link>
      <Link
        activeClass="active"
        spy={true}
        smooth
        offset={-70}
        duration={500}
        to="contact"
      >
        contact
      </Link>
    </Nav>
  );
}

export default Header;
