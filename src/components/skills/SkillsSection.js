import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/codingbg.jpg';
import skills from '../../assets/skills-logos.svg';
import brainstorm from '../../assets/brainstorming.jpg';

// =================================
// ===========  COMPONENT  =========
// =================================

function SkillsSection() {
  return (
    <Section id="skills">
      <h2 className="main">Skills</h2>
      <div className="skills-container">
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>LESS</li>
          <li>SASS</li>
        </ul>
        <img src={skills} alt="library and language logos" />
      </div>
    </Section>
  );
}

export default SkillsSection;

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  background: linear-gradient(rgba(108, 99, 255, 0.8), rgba(108, 99, 255, 0.8)),  url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 20rem 4.5rem;
  
  .main {
    top: -55px;
    right: 0;
    position: absolute;
    text-align: left;
    font-weight: bold;
    padding: 2.6rem 5rem;
    color: #26235a;
    text-transform: uppercase;
    -webkit-letter-spacing: 5.5px;
    -moz-letter-spacing: 5.5px;
    -ms-letter-spacing: 5.5px;
    letter-spacing: 5.5px;
    background: #fff;
    margin: 2.6rem 0 4rem;
    font-size: 3.6rem;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  }
  
  h2 {
    font-size: 2.2rem;
    text-align: left;
    font-weight: bold;
    padding: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 5.5px;
    background: #fff;
    display: inline-block;
    margin: 1.6rem 0 0;
  }
  
  .skills-container {
    background: linear-gradient(rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.8)), url(${brainstorm}) no-repeat bottom;
    background-size: cover;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    ::before, ::after {
      content: "";
      position: absolute;
    }
    ::before {
      background:  #B8F9E6AA;
      top: 0;
      left:0;
      right: 50%;
      z-index:1;
      bottom: 0;
      clip-path: polygon(0% 0%, 100% 0%, 20% 100%, 0% 100% );
    }
    ::after {
      background:  #6C64FFAA;
      top: 0;
      left:0;
      right: 50%;
      z-index: 2;
      bottom: 0;
      clip-path: polygon(0% 0%, 20% 0%, 100% 100%, 0% 100% );
    }
  }

  ul {
    padding: 2.6rem;
    margin-bottom: 2.5rem;
    width: 40%;
    color: white;
    z-index: 3;    
  }

  li {
    font-size: 3rem;
    min-width: 10%;
    letter-spacing: 2.5px;
    font-weight: bold;
    margin: 1.6rem;
    text-shadow: 2px 2px black;
  }

  img {
    width: 40%;
  }
`;
