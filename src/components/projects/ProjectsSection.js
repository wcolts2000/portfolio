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
    cursor: pointer;

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
    bottom: 100%;
    /* border: 3px solid red; */
    top: -40px;
    z-index: 100;
    left: 0px;
    right: 0px;
    background-color: #0f0f0f;
    clip-path: polygon(100% 100%, 100% 90%, 0% 0%, 0% 100%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    z-index: 1000;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #0f0f0f;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
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
            <FontAwesomeIcon left className="icon" icon={['fab', 'github']} />
            <FontAwesomeIcon left className="icon" icon={['fas', 'desktop']} />
          </IconDiv>
        </ImgWrapper>

        <TextDiv>
          <h2>Judy's Jewels E-Commerce Site</h2>
          <p>
            A custom designed e-commerse jewelry website built utilizing
            GatsbyJS and Firebase.
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
            <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />
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
            <FontAwesomeIcon left className="icon" icon={['fab', 'github']} />
            <FontAwesomeIcon left className="icon" icon={['fas', 'desktop']} />
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
            <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />
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
            <FontAwesomeIcon left className="icon" icon={['fab', 'github']} />
            <FontAwesomeIcon left className="icon" icon={['fas', 'desktop']} />
          </IconDiv>
        </ImgWrapper>

        <TextDiv>
          <h2>Personal Blog Site with GatsbyJS</h2>
          <p>My blog.</p>{' '}
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>Terminal Based MUD with Python</h2>
          <p>A python Multi User Dungeon terminal based game.</p>{' '}
        </TextDiv>
        <ImgWrapper>
          <ImageContainer>
            <img
              src={require('./../../assets/mud.jpg')}
              alt="terminal based mud thumbnail"
            />
          </ImageContainer>
          <IconDiv>
            <FontAwesomeIcon className="icon" icon={['fab', 'github']} />
            <FontAwesomeIcon className="icon" icon={['fas', 'desktop']} />
          </IconDiv>
        </ImgWrapper>
      </LightDiv>
    </Section>
  );
}

export default ProjectsSection;
