import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ==============================
// ========= COMPONENT ==========
// ==============================

function ProjectCard({
  url,
  titleTop,
  titleBottom,
  subtitle,
  techUsed,
  backTitle,
  backBody,
  projectCode,
  projectLive
}) {
  return (
    <Card className="card">
      <div className="card__content">
        <Front url={require('../../assets/' + url)} className="card__front">
          <div className="card__title">
            {titleTop} <br />
            {titleBottom}
          </div>
          <div className="card__subtitle">{subtitle}</div>
          <div className="techstack">
            <h3>Tech Used</h3>
            <ul>
              {techUsed.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </Front>
        <div className="card__back">
          <h3>{backTitle}</h3>
          <p className="card__body">{backBody}</p>
          <div className="icon-container">
            <a target="_blank" rel="noopener noreferrer" href={projectCode}>
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} /> Code
            </a>
            <a target="_blank" rel="noopener noreferrer" href={projectLive}>
              <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />{' '}
              Live
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;

// ==============================
// ===========  STYLES  =========
// ==============================

const Card = styled.div`
  width: 270.5px;
  perspective: 800px;
  height: 420px;
  margin: 7rem 0;

  .card__content {
    height: 420px;
    text-align: center;
    position: relative;
    padding: 2rem;
    transition: transform 1s;
    transform-style: preserve-3d;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  }

  :hover .card__content {
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
  .card__front .techstack {
    order: 3;
    h3 {
      font-size: 2.4rem;
      padding: 0 2rem;
    }

    ul {
      list-style-type: square;
      font-size: 2rem;
      list-style: inside;
      text-align: left;
    }
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
    margin: 1rem 0 2rem;
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
`;

const Front = styled.div`
  background-color: #6c63ff;
  background-size: cover;
  background-position: top;
  background-blend-mode: multiply;
  color: #333;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${props => props.url});
`;
