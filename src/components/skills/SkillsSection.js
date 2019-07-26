import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/codingbg.jpg';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0), url(${bg}));
  position: relative;

  &::before {
    position: absolute;
    z-index: 200;
    background-color: papayawhip;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 90%;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  }

  h2 {
    font-size: 6.6rem;
    text-align: center;
    font-weight: bold;
    padding: 8rem 0 16rem 0;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 5.5px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
  }

  li {
    font-size: 1.8rem;
    width: 30%;
    font-weight: bold;
    margin-bottom: 8.5rem;
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function SkillsSection() {
  return (
    <Section>
      <h2>Skills</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>LESS</li>
        <li>SASS</li>
        <li>REACT</li>
        <li>REDUX</li>
        <li>DJANGO</li>
        <li>JS</li>
        <li>PYTHON</li>
        <li>NODE</li>
        <li>EXPRESS</li>
        <li>SQL</li>
        <li>NOSQL</li>
        <li>GRAPHQL</li>
        <li>GATSBYJS</li>
      </ul>
    </Section>
  );
}

export default SkillsSection;
