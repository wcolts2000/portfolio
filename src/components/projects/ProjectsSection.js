import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// =================================
// ===========  COMPONENT  =========
// =================================

function ProjectsSection() {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <div className="container">
        <div className="card">
          <div className="card__content">
            <Front
              url={require('../../assets/connectourkids.jpg')}
              className="card__front"
            >
              <div className="card__title">
                Connect <br />
                Our Kids
              </div>
              <div className="card__subtitle">A react native app</div>
            </Front>
            <div className="card__back">
              <h3>Connect Our Kids: A People Search App</h3>
              <p className="card__body">
              Helping Social Workers find extended family members for children entering the foster care system.
              </p>
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/labs13-connect-kids/mobile"
                >
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} /> Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://expo.io/@connectourkids/connectOurKids?release-channel=staging"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} /> Beta
                </a>
              </div>
            </div>
          </div>
          <ul>
            <li>React Native</li>
            <li>EXPO</li>
            <li>Native Base</li>
          </ul>
        </div>
        <div className="card">
          <div className="card__content">
            <Front
              url={require('../../assets/hurryupprint.jpg')}
              className="card__front"
            >
              <div className="card__title">
                Hurry <br />
                Up Print
              </div>
              <div className="card__subtitle">A printshop website</div>
            </Front>
            <div className="card__back">
              <h3>Hurry Up Print e-commerce site</h3>
              <p className="card__body">
                {' '}
                An e-commerce print shop site with user login and admin dashboard features and pricing calculators.
              </p>
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/wcolts2000/hup-client/"
                >
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} /> Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://hurryupprint.com"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} /> live
                </a>
              </div>
            </div>
          </div>
          <ul>
            <li>PHP</li>
            <li>MySQL</li>
            <li>Materialize CSS</li>
          </ul>
        </div>
        <div className="card">
          <div className="card__content">
            <Front
              url={require('../../assets/blog.jpg')}
              className="card__front"
            >
              <div className="card__title">
                GatsbyJS <br /> 
                Blog Site
              </div>
              <div className="card__subtitle">Notes/Resources</div>
            </Front>
            <div className="card__back">
              <h3>Personal Notes and Reference Lists</h3>
              <p className="card__body">
                {' '}
                Useful resources, notes, a blog, and project links made with GatsbyJS.
              </p>
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/wcolts2000/the_pretty_good_gatsy_blog"
                >
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} /> code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pretty-good-gatsby-blog.netlify.com/"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} /> live
                </a>
              </div>
            </div>
          </div>
          <ul>
            <li>GatsbyJS</li>
            <li>Contentful CMS</li>
            <li>Redux</li>
            <li>Styled-Components</li>
          </ul>
        </div>
      </div>
      <p className="description">Here are a few projects you might like looking
      through. These have been built using React, React Native, and PHP. The
      Blog Site is built with GatsbyJS to render the static pages while still using React. Styling for the sites has been done with styled-components and native CSS3 and HTML5 semantic tags. The Hurry Up Print
      site is utilizing customized MaterializeCSS and the react native app is using react-native-elements, native base and custom styles.
      </p>
    </Section>
  );
}

export default ProjectsSection;

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  width: 100%;
  padding: 8rem 4.5rem 20rem;
  background-color: #b8f9e6;
  position: relative;

  @media (max-width: 1025px) {
    padding-bottom: 6rem;
  }

  h2 {
    top: -55px;
    left: 0;
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

  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 10rem;
  }

  .card {
    width: 270.5px;
    perspective: 800px;
    height: 420px;
    margin: 7rem 0;

    ul {
      font-size: 2rem;
    }
  }

  .card__content {
    height: 420px;
    text-align: center;
    position: relative;
    padding: 2rem;
    transition: transform 1s;
    transform-style: preserve-3d;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }

  .card:hover .card__content {
    transform: rotateY(0.5turn);
  }

  .card__front,
  .card__back {
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    display: grid;
    align-content: center;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
  }

  .card__front::before {
    content: '';
    position: absolute;
    --spacer: 2rem;
    top: var(--spacer);
    bottom: var(--spacer);
    left: var(--spacer);
    right: var(--spacer);
    border: 3px solid white;
    transform: translateZ(3rem);
  }

  .card__title {
    font-size: 3.5rem;
    transform: translateZ(9rem);
    order: 2;
    text-transform: uppercase;
    margin: 1rem 0 5rem;
  }

  .card__subtitle {
    transform: translateZ(6rem);
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1rem;
    font-weight: bold;
  }

  .card__body {
    transform: translateZ(6rem);
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 2;
  }
  .card__back {
    transform: rotateY(0.5turn);
    color: white;
    background: #26235a;
    padding: 2rem 2.6rem;

    h3 {
      font-size: 2rem;
      line-height: 1.5;
      transform: translateZ(3rem);
    }

    .icon-container {
      width: 100%;
      padding: 1rem;
      justify-content: space-around;

      a {
        display: flex;
        color: white;
        font-size: 2rem;
        line-height: initial;
        letter-spacing: 2.5px;
        font-weight: bold;
        margin: 1rem 0;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 50px;
        border: 2px solid white;
        
        :hover {
          border: 2px solid white;
          background: white;
          color: #26235a;
        }
      }

      .icon {
        transform: translateZ(4rem);
        font-size: 2rem;
        margin: 0 1.6rem;

      }
    }
  }

  p.description {
    font-size: 2rem;
    position: absolute;
    width: 60%;
    z-index: 100;
    line-height: 1.5;
    background-color: #5F9EA0;
    outline: 10px solid #5F9EA0;
    outline-offset: 8px;
    padding: 2rem;
    color: white;
    text-shadow: 1px 1px 2px black;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
    bottom: -10%;
    
    a {
      text-shadow: 1px 1px 2px white;
      text-transform: uppercase;
      text-decoration: none;
      color: #6C64FF;
      font-weight: bold;
    }

    @media (max-width: 1025px) {
      position: relative;
      width: 90%;
      margin: 2rem auto 0;
    }
  }
`;

const Front = styled.div`
  background-color: #6c63ff;
  background-size: cover;
  background-position: top;
  background-blend-mode: multiply;
  color: #333;
  background-image: linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${props => props.url});
`;
