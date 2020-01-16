import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import heroImg from '../../assets/hero-logos.svg';
import logo from '../../assets/PhenegerDevelopmentLogo174x60White.svg';
import { useTransition, animated } from 'react-spring';

// =================================
// ===========  COMPONENT  =========
// =================================

function LeftSection() {
  return (
    <div className="left">
      <img src={logo} alt="pheneger development" />
      <h3>Full Stack Software Engineer</h3>
      <p>Hi, my name is Sean. I love coding, creating things, problem solving, and I never want to stop learning! If you're looking for a developer for your next project or to join your team, we should talk.</p>
      <Link
        activeClass="active"
        spy={true}
        smooth
        offset={-60}
        duration={500}
        to="contact"
      >
        Get In Touch
      </Link>
    </div>
  )
}

function HeroSection() {
  const [show, set] = useState(true)
  const left = useTransition(show, null, {
    from: {position: "relative", left: "-500px",  opacity: 0},
    enter: {opacity: 1, left: "0px"},
    leave: {opacity: 0},
  })
  const right = useTransition(show, null, {
    from: {position: "relative", right: "-500px",  opacity: 0},
    enter: {opacity: 1, right: "0px"},
    leave: {opacity: 0},
  })
  return (
    <Section id="hero">
      {left.map(({item, key, props}) => item && 
      
      <animated.div key={key} style={props}><LeftSection/></animated.div>
      )}
      {right.map(({item, key, props}) => item && 

      <animated.div key={key} style={props} className="right">
        <img src={heroImg} alt="developer illustration" />
      </animated.div>
      )
      }
    </Section>
  );
}

export default HeroSection;

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  padding: 15rem 2.5rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(98deg,  #6C63FF 0%, #6C63FF 50%, #fff 50%);

  @media (max-width: 800px) {
      width: 100%;
  background: #6C63FF;
  padding: 15rem 2.5rem 8rem;

  }

.left {
    padding: 15rem 3rem;
    width: 70%;
    padding: 2.0rem;
  img {
    width: 70%;
    margin-bottom: 2rem;
  }
@media (max-width: 800px) {
    width: 100%;
    margin-bottom: 7rem;
}
}
.right {
    width: 100%;
    padding: 2.0rem;
@media (max-width: 800px) {
    display: none;
  }
}

  ::before {
    content: '';
    position: absolute;
    bottom: 15%;
    left: 50%;
    width: 25px;
    height: 25px;
    border-bottom: 5px ridge  #6C63FF;
    border-right: 5px ridge  #6C63FF;
    border-radius: 5px;
    transform: translate(-50%) rotate(45deg);
    animation: bounce 0.3s ease-out 0.3s infinite alternate;

  @media (max-width: 800px) {
    animation: smallBounce 0.3s ease-out 0.3s infinite alternate;
    border-bottom: 5px ridge  #fff;
    border-right: 5px ridge  #fff;
    left: 6.2rem;
    bottom: 8%;
  }
}

  @keyframes bounce {
    from {
      bottom: 15%;
    }
    to {
      bottom: 14%;
    }
  }
  
  @keyframes smallBounce {
    from {
      bottom: 8%;
    }
    to {
      bottom: 7%;
    }
  }

  h3 {
    font-size: 3.4rem;
    margin: 0 auto 40px;
    color: #fff;
  }

  p {
    font-size: 2.0rem;
    line-height: 1.5;
    margin-bottom: 6rem;
    color: #fff;
  }

  a {
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bolder;
    text-transform: uppercase;
    border: 2px solid #fff;
    padding: 0.75em 2.5em;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    color: #fff;
    :hover {
      opacity: 0.9;
      color:  #6C63FF;
      background: #fff;
    }
  }
`;
