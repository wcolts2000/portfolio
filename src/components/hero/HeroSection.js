import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import heroImg from '../../assets/hero-logos.svg';
import logo from '../../assets/PhenegerDevelopmentLogo174x60White.svg';
import AOS from 'aos';

// =================================
// ===========  COMPONENT  =========
// =================================

function LeftSection() {
  useEffect(() => {
    AOS.init({
      duration: 800
    });
  }, []);
  return (
    <div className="left">
      <img src={logo} data-aos="fade-right" alt="pheneger development" />
      <h3 data-aos="fade-right" data-aos-delay="500">
        Full Stack Software Engineer
      </h3>
      <p data-aos="fade-right" data-aos-delay="800">
        Hi, my name is Sean. I love coding, creating things, problem solving,
        and I never want to stop learning! If you're looking for a developer for
        your next project or to join your team, we should talk.
      </p>
      <Link
        activeClass="active"
        spy={true}
        smooth
        offset={-60}
        duration={500}
        to="contact"
        data-aos="fade-right"
        data-aos-delay="1000"
      >
        Get In Touch
      </Link>
    </div>
  );
}

function HeroSection() {
  return (
    <Section id="hero">
      <LeftSection />
      <div className="right" data-aos="fade-left" data-aos-delay="500">
        <img src={heroImg} alt="developer illustration" />
      </div>
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
  justify-content: space-around;
  align-items: center;
  position: relative;
  background: linear-gradient(98deg, #6c63ff 0%, #6c63ff 50%, #fff 50%);

  @media (max-width: 800px) {
    width: 100%;
    background: #6c63ff;
    padding: 15rem 2.5rem 8rem;
  }

  .left {
    padding: 15rem 3rem;
    width: 45%;
    padding: 2rem;
    img {
      width: 90%;
      margin-bottom: 2rem;
    }
    @media (max-width: 800px) {
      width: 100%;
      margin-bottom: 7rem;
    }
  }
  .right {
    width: 45%;
    padding: 2rem;
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
    border-bottom: 5px ridge #6c63ff;
    border-right: 5px ridge #6c63ff;
    border-radius: 5px;
    transform: translate(-50%) rotate(45deg);
    animation: bounce 0.3s ease-out 0.3s infinite alternate;

    @media (max-width: 800px) {
      animation: smallBounce 0.3s ease-out 0.3s infinite alternate;
      border-bottom: 5px ridge #fff;
      border-right: 5px ridge #fff;
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
    font-size: 2rem;
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
      color: #6c63ff;
      background: #fff;
    }
  }
`;
