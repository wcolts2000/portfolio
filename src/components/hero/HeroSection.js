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

  ::before {
    content: '';
    position: absolute;
    bottom: 15%;
    left: 50%;
    width: 25px;
    height: 25px;
    border-bottom: 5px ridge aqua;
    border-right: 5px ridge aqua;
    border-radius: 5px;
    transform: translate(-50%) rotate(45deg);
    animation: bounce 0.3s ease-out 0.3s infinite alternate;
  }

  @keyframes bounce {
    from {
      bottom: 15%;
    }
    to {
      bottom: 14%;
    }
  }

  h1 {
    font-size: 4.8rem;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 2.6rem;
    margin: 0 auto 40px;
  }

  a {
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bolder;
    text-transform: uppercase;
    border: 2px solid #0f0f0f;
    padding: 0.75em 2.5em;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: #0f0f0f;
    :hover {
      opacity: 0.9;
      color: aqua;
      background: #0f0f0f;
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
      <h3>Full Stack Web Developer</h3>
      <a href="#contact">Get In Touch</a>
    </Section>
  );
}

export default HeroSection;
