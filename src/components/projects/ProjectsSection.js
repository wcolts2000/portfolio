import React from 'react';
import styled from 'styled-components';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  div {
    display: flex;
    width: 100%;
  }
`;

const LightDiv = styled.div`
  background: papayawhip;
  position: relative;

  /* &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    top: 80%;
    z-index: 1000;
    left: 0px;
    right: 0px;
    background-color: red;
  } */
`;

const Img = styled.img`
  width: 40%;
  padding: 30px;
  background-color: ${props =>
    props.left === 'true' ? '#0f0f0f' : 'papayawhip'};
`;

const Div = styled.div`
  background: #0f0f0f;
  color: #ccc;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 99%;
    top: -40px;
    z-index: 100;
    left: 0px;
    right: 0px;
    background-color: #0f0f0f;
    clip-path: polygon(100% 100%, 0% 0%, 0% 100%);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -40px;
    top: 99%;
    z-index: 1000;
    left: 0px;
    right: 0px;
    background-color: #0f0f0f;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  }
`;

const TextDiv = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  h2 {
    margin-bottom: 15px;
    font-size: 2.4rem;
    line-height: 1.3;
  }
  p {
    line-height: 1.3;
    font-size: 1.4rem;
    opacity: 0.9;
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function ProjectsSection() {
  return (
    <Section id="projects">
      <Div bottom="dark">
        <Img
          src={require('./../../assets/jjs.jpg')}
          alt="judys jewels thumbnail"
          left="true"
        />
        <TextDiv>
          <h2>Judy's Jewels E-Commerce Site</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>Lambda Notes with ReactJS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
        <Img
          src={require('./../../assets/notes.jpg')}
          alt="lambda notes thumbnail"
        />
      </LightDiv>
      <Div>
        <Img
          src={require('./../../assets/snj.jpg')}
          alt="s&j website thumbnail"
          left="true"
        />
        <TextDiv>
          <h2>S & J Architecture WebSite with Vanilla JS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>Cool Table: A Test and Message Posting Site with ReactJS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
        <Img
          src={require('./../../assets/cooltbl.jpg')}
          alt="cool table thumbnail"
        />
      </LightDiv>
      <Div>
        <Img
          src={require('./../../assets/insta.jpg')}
          alt="Instaclone thumbnail"
          left="true"
        />
        <TextDiv>
          <h2>An Instagram Clone with ReactJS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>A Calculator App with ReactJS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
        <Img
          src={require('./../../assets/calc.jpg')}
          alt="calculator app thumbnail"
        />
      </LightDiv>
      <Div>
        <Img
          src={require('./../../assets/blog.jpg')}
          alt="gatsby blog site thumbnail"
          left="true"
        />
        <TextDiv>
          <h2>A Blog Site with GatsbyJS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
      </Div>
      <LightDiv>
        <TextDiv>
          <h2>Terminal Based MUD with Python</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
        <Img
          src={require('./../../assets/mud.jpg')}
          alt="terminal based mud thumbnail"
        />
      </LightDiv>
    </Section>
  );
}

export default ProjectsSection;
