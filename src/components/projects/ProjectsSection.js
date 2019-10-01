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
              url={require('../../assets/cooltbl.jpg')}
              className="card__front"
            >
              <div className="card__title">
                Cool <br />
                Table
              </div>
              <div className="card__subtitle">a study app</div>
            </Front>
            <div className="card__back">
              <h3>Cool Table: Custom Quizzes with ReactJS</h3>
              <p className="card__body">
                A multi-user site where you can create, take, and share quizzes
                and notes
              </p>
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/wcolts2000/cool_table"
                >
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} /> Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cool-table.netlify.com/"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} /> Live
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            <Front
              url={require('../../assets/notes.jpg')}
              className="card__front"
            >
              <div className="card__title">
                Lambda <br />
                Notes
              </div>
              <div className="card__subtitle">Note Taking App</div>
            </Front>
            <div className="card__back">
              <h3>Lambda Notes with <br/>ReactJS</h3>
              <p className="card__body">
                {' '}
                A multi-user notes application with CSV export and drag-n-drop
                functionality.
              </p>
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/wcolts2000/front-end-project-week"
                >
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} /> Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lambda-notes-live.netlify.com"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} /> live
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__content">
            <Front
              url={require('../../assets/blog.jpg')}
              className="card__front"
            >
              <div className="card__title">
                My <br /> Blog
              </div>
              <div className="card__subtitle">blog/Resources</div>
            </Front>
            <div className="card__back">
              <h3>Personal Blog and Reference Site</h3>
              <p className="card__body">
                {' '}
                A blog and useful resources compilation made with GatsbyJS.
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
        </div>
      </div>
    </Section>
  );
}

export default ProjectsSection;

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  width: 100%;
  padding: 8rem 4.5rem;
  background-color: #b8f9e6;
  position: relative;

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
  }

  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .card {
    width: 270.5px;
    perspective: 800px;
    height: 420px;
    margin: 2rem;
  }

  .card__content {
    height: 420px;
    text-align: center;
    position: relative;
    padding: 2rem;
    transition: transform 2s;
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
    opacity: 0.7;
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
`;

const Front = styled.div`
  background-color: #6c63ff;
  background-size: cover;
  background-position: top;
  background-blend-mode: multiply;
  color: #333;
  background-image: url(${props => props.url});
`;
