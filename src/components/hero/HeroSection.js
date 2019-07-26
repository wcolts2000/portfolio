import React from 'react';
import styled from 'styled-components';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  background: papayawhip;
  padding: 250px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 0;
    left: 0;
    top: 80%;
    z-index: 100;
    background-color: #0f0f0f;
    clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
    -webkit-clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
  }

  h1 {
    font-size: 4.8rem;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 2.6rem;
    margin: 0 auto 40px;
  }

  button {
    background: none;
    outline: none;
    padding: 0.75em 2.5em;
    color: #0f0f0f;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 1.8rem;
    border: 2px solid #0f0f0f;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
      color: aqua;
      background: #0f0f0f;
      opacity: 0.9;
    }
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function HeroSection() {
  return (
    <Section>
      <h1>Pheneger Development</h1>
      <h3>Full Stack Web Development</h3>
      <button disabled="disabled">Get In Touch</button>
    </Section>
  );
}

export default HeroSection;
