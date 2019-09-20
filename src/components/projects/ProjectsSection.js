import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mac from '../../assets/mac.png';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  width: 100%;
`;

const LightDiv = styled.div`
  background: papayawhip;
  position: relative;
  display: flex;
  width: 100%;
  padding: 2rem 1rem;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const ImageContainer = styled.div`
  margin: 0;
  padding: 50%;
  width: 100%;
  position: relative;
  background-image: url(${mac});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  img {
    position: absolute;
    top: 13%;
    left: 0.4%;
    bottom: 55%;
    transform: scale(0.93, 1.01);
  }
`;

const ImgWrapper = styled.div`
  width: 40%;
  padding: 30px;
  background-color: ${props => (props.left ? '#0f0f0f' : 'papayawhip')};
  display: flex;
  flex-direction: column;
  @media (max-width: 700px) {
    order: 2;
    flex-direction: row;
    width: 80%;
  }
  .icon {
    font-size: 6rem;
    color: ${props => (props.left ? 'white' : '#0f0f0f')};
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      color: rgb(230, 195, 0);
    }

    @media (max-width: 700px) {
      margin: 2rem;
    }
  }
`;
const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 2rem;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  background: #0f0f0f;
  color: #ccc;
  position: relative;
  display: flex;
  width: 100%;
  padding: 2rem 1rem;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 99%;
    top: -40px;
    z-index: 100;
    left: 0px;
    right: 0px;
    background-color: #0f0f0f;
    clip-path: polygon(100% 99%, 100% 90%, 0% 0%, 0% 100%);
  }

  &::after {
    content: '';
    /* border: 1px solid red; */
    position: absolute;
    bottom: -50px;
    z-index: 1000;
    top: 99%;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #0f0f0f;
    clip-path: polygon(0% 1%, 100% 5%, 0% 100%);
  }

  &::after,
  &::before {
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

const TextDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  @media (max-width: 700px) {
    width: 100%;
  }

  h2 {
    margin-bottom: 15px;
    font-size: 2.4rem;
    line-height: 1.3;

    @media (max-width: 700px) {
      order: 0;
    }
  }
  p {
    line-height: 1.5;
    font-size: 1.7rem;
    opacity: 0.9;
    max-width: 80%;
    @media (max-width: 700px) {
      order: 1;
      max-width: 100%;
    }
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function ProjectsSection() {
  return (
    <Section id="projects">
      <Div bottom="dark">
        <ImgWrapper left>
          <ImageContainer>
            <img
              src={require('./../../assets/jjs.jpg')}
              alt="judys jewels snapshot"
            />
          </ImageContainer>
          <IconDiv>
            <a
              href="https://github.com/wcolts2000/JudysJewels"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon left className="icon" icon={['fab', 'github']} />
            </a>
            <a
              href="https://wcolts2000.github.io/JudysJewels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                left
                className="icon"
                icon={['fas', 'desktop']}
              />
            </a>
          </IconDiv>
        </ImgWrapper>

        <TextDiv>
          <h2>Judy's Jewels E-Commerce Site Design</h2>
          <p>
            A custom design for an e-commerse jewelry website currently being
            rebuilt utilizing GatsbyJS and Firebase.
          </p>
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>Lambda Notes with ReactJS</h2>
          <p>
            A multi-user notes application with CSV export and drag-n-drop
            functionality.
          </p>{' '}
        </TextDiv>
        <ImgWrapper>
          <ImageContainer>
            <img
              src={require('./../../assets/notes.jpg')}
              alt="lambda notes thumbnail"
            />
          </ImageContainer>
          <IconDiv>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wcolts2000/front-end-project-week"
            >
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://lambda-notes-live.netlify.com"
            >
              <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />
            </a>
          </IconDiv>
        </ImgWrapper>
      </LightDiv>
      <Div>
        <ImgWrapper left>
          <ImageContainer>
            <img
              src={require('./../../assets/snj.jpg')}
              alt="s&j website thumbnail"
            />
          </ImageContainer>
          <IconDiv>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wcolts2000/User-Interface-Project-Week"
            >
              <FontAwesomeIcon left className="icon" icon={['fab', 'github']} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wcolts2000.github.io/User-Interface-Project-Week/"
            >
              <FontAwesomeIcon
                left
                className="icon"
                icon={['fas', 'desktop']}
              />
            </a>
          </IconDiv>
        </ImgWrapper>

        <TextDiv>
          <h2>S & J Architecture WebSite with Vanilla JS</h2>
          <p>
            A multipage architecture firms website utilizing HTML5, LESS
            preprocessor with CSS3, and Vanilla JS.
          </p>{' '}
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>Cool Table: A Test and Message Posting Site with ReactJS</h2>
          <p>
            A multi-user site that allows a user to post tests with multiple
            choice answers so others can take them to assist in help learn new
            material or prep for a real test. Also has a notes/comments feature
            where users can leave comments and interact with each other
          </p>{' '}
        </TextDiv>
        <ImgWrapper>
          <ImageContainer>
            <img
              src={require('./../../assets/cooltbl.jpg')}
              alt="cool table thumbnail"
            />
          </ImageContainer>
          <IconDiv>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wcolts2000/cool_table"
            >
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://cool-table.netlify.com/"
            >
              <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />
            </a>
          </IconDiv>
        </ImgWrapper>
      </LightDiv>
      <Div>
        <ImgWrapper left>
          <ImageContainer>
            <img
              src={require('./../../assets/blog.jpg')}
              alt="gatsby blog site thumbnail"
            />
          </ImageContainer>
          <IconDiv>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/wcolts2000/the_pretty_good_gatsy_blog"
            >
              <FontAwesomeIcon left className="icon" icon={['fab', 'github']} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="#">
              <FontAwesomeIcon
                left
                className="icon"
                icon={['fas', 'desktop']}
              />
            </a>
          </IconDiv>
        </ImgWrapper>

        <TextDiv>
          <h2>Personal Blog Site with GatsbyJS</h2>
          <p>My blog.</p>{' '}
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>Cave Escape M.U.D. with Python</h2>
          <p>
            A Python Django Multi User Dungeon html5 canvas maze race game.
          </p>{' '}
        </TextDiv>
        <ImgWrapper>
          <ImageContainer>
            <img
              src={require('./../../assets/cave-escape.png')}
              alt="terminal based mud thumbnail"
            />
          </ImageContainer>
          <IconDiv>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/cs19-maze-mud"
            >
              <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://maze-mud-client.herokuapp.com"
            >
              <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />
            </a>
          </IconDiv>
        </ImgWrapper>
      </LightDiv>
    </Section>
  );
}

export default ProjectsSection;
