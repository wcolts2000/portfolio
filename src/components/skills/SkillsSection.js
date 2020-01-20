import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/codingbg.jpg';
import skills from '../../assets/skills-logos.svg';

// =================================
// ===========  COMPONENT  =========
// =================================

function SkillsSection() {
  return (
    <Section id="skills">
      <h2 className="main" data-aos="flip-up">
        Skills
      </h2>
      <div className="skills-container">
        <ul data-aos="fade-up">
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>LESS</li>
          <li>SASS</li>
        </ul>
        <ul data-aos="fade-up">
          <li>NODE</li>
          <li>EXPRESS</li>
          <li>PYTHON</li>
          <li>DJANGO</li>
          <li>RESTful</li>
          <li>AGILE</li>
          <li>SCRUM</li>
        </ul>
        <img data-aos="fade-up" src={skills} alt="library and language logos" />
      </div>
      <p className="skills-caption" data-aos="flip-down">
        With most of my experience being in JavaScript, I have found building
        applications in ReactJS to be very productive and enjoyable. I also love
        Redux for complex state management and enjoy PreProcessors and using
        Styled-Components when I am styling my sites. If you need a backend, I
        am familiar with NodeJS, Express and Django as well.
      </p>
    </Section>
  );
}

export default SkillsSection;

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  background: linear-gradient(rgba(108, 99, 255, 0.4), rgba(108, 99, 255, 0.4)),
    url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 14rem 4.5rem 16rem;

  @media (max-width: 1000px) {
    padding-bottom: 5rem;
  }

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
    background: white;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    @media screen and (max-width: 1025px) {
      margin: 0 auto 2rem;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  ul {
    padding: 2.6rem;
    margin-bottom: 2.5rem;
    width: 40%;
    color: black;
    z-index: 3;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  li {
    font-size: 3rem;
    min-width: 10%;
    letter-spacing: 2.5px;
    font-weight: bold;
    margin: 1.6rem;

    @media screen and (max-width: 1025px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 800px) {
      font-size: 2.4rem;
    }

    @media screen and (max-width: 500px) {
      font-size: 3rem;
    }
  }

  img {
    width: 40%;

    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  p.skills-caption {
    right: 4.5rem;
    font-size: 2rem;
    position: absolute;
    width: 60%;
    z-index: 100;
    line-height: 1.5;
    background-color: #6c63ff;
    outline: 10px solid #6c63ff;
    outline-offset: 8px;
    padding: 2rem;
    color: white;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
    bottom: -10%;

    @media (max-width: 1000px) {
      bottom: unset;
      position: relative;
      width: auto;
      margin: 8rem auto 4rem;
      right: 0;
    }
  }
`;
