import React from 'react';
import styled from 'styled-components';

// ==============================
// ===========  STYLES  =========
// ==============================

const Nav = styled.nav`
  position: sticky;
  background: #0f0f0f;
  padding: 25px;
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
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function Header() {
  return (
    <Nav>
      <a href="#projects">Projects</a>
      <a href="#skills">skills</a>
      <a href="#contact">contact</a>
    </Nav>
  );
}

export default Header;
