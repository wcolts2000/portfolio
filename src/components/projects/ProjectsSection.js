import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import mac from '../../assets/mac.png';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  width: 100%;
  padding: 6rem 1.4rem;
  background-color: #b8f9e6;

  h2 {
    text-align: left;
    font-weight: bold;
    padding: 1.6rem;
    text-transform: uppercase;
    -webkit-letter-spacing: 5.5px;
    -moz-letter-spacing: 5.5px;
    -ms-letter-spacing: 5.5px;
    letter-spacing: 5.5px;
    background: #fff;
    display: inline-block;
    margin: 1.6rem 0;
    /* width: 100%; */
    font-size: 2.6rem;
  }

  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .card {
    width: 30%;
    perspective: 800px;
    height: 400px;
  }

  .card__content {
    height: 400px;
    text-align: center;
    position: relative;
    padding: 15em 5em;
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
    padding: 10rem 1rem;
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
    line-height: 1.6;
    padding: 2rem 1rem;
  }
  .card__back {
    transform: rotateY(0.5turn);
    color: white;
    background: black linear-gradient(90deg, #6C63FF 0%, #6C63FF 50%, #26235a 50%);

    h3 {
      font-size: 2rem;
      line-height: 1.5;
      margin-bottom: 1rem;
      transform: translateZ(3rem);
    }

    .icon-container {
      display: flex;
      width: 100%;
      padding: 1rem;
      justify-content: space-around;

      a {
        display: flex;
        flex-direction: column;
        color: white;
        font-size: 1.6rem;
        margin: 2rem;
        text-transform: uppercase;
        text-decoration: none;
      }

      .icon {
        transform: translateZ(3rem);
        font-size: 4rem;
        color: white;
        transition: color 0.3s ease-in-out;
        margin-bottom: 1.6rem;

        :hover {
          color: #6c63ff;
        }
      }
    }
  }
`;

const Front = styled.div`
  background-color: #6c63ff;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  color: #333;
  background-image: url(${props => props.url});
`;

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
              <h3>Cool Table: A Quiz and Note Posting Site with ReactJS</h3>
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
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} />Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cool-table.netlify.com/"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />Live
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
              <h3>Lambda Notes with ReactJS</h3>
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
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} />Code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lambda-notes-live.netlify.com"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />live
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
              <h3>Personal Blog and Reference Site with GatsbyJS</h3>
              <p className="card__body">
                {' '}
                A blog and reference site containing links to my projects and
                useful resources.
              </p>
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/wcolts2000/the_pretty_good_gatsy_blog"
                >
                  <FontAwesomeIcon className="icon" icon={['fab', 'github']} />code
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pretty-good-gatsby-blog.netlify.com/"
                >
                  <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />live
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
