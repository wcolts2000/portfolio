import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import heroImg from '../../assets/hero-logos.svg'
import logo from '../../assets/PhenegerDevelopmentLogo174x60White.svg'

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  padding: 8rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(98deg,  #6C63FF 0%, #6C63FF 50%, #fff 50%);

  @media (max-width: 800px) {
      width: 100%;
  background: #6C63FF;

  }

.left {
    padding: 15rem 3rem;
    width: 50%;
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
    width: 50%;
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
    border-bottom: 5px ridge  #fff;
    border-right: 5px ridge  #fff;
    left: 6.2rem;
    bottom: 10%;
  }
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

// =================================
// ===========  COMPONENT  =========
// =================================

function HeroSection() {
  return (
    <Section id="hero">
      <div className="left">
      <img src={logo} alt="pheneger development" />
      <h3>Full Stack Software Engineer</h3>
      <p>Hi, my name is Sean. I love coding, creating things, problem solving, and I never want to stop learning! If you're looking for a developer for your next project, we should talk.</p>
      <Link
        activeClass="active"
        spy={true}
        smooth
        offset={-70}
        duration={500}
        to="contact"
      >
        Get In Touch
      </Link>

      </div>
      <div className="right">
        <img src={heroImg} alt="developer illustration" />
      </div>
    </Section>
  );
}

export default HeroSection;
