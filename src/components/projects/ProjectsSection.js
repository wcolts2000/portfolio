import React from 'react';
import styled from 'styled-components';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  div {
    display: flex;
    /* flex-wrap: wrap; */
    width: 100%;
    /* div { */
    img {
    }
    /* } */
  }
`;

const Img = styled.img`
  width: 40%;
  padding: 30px;
  background: #0f0f0f;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    transform-origin: ${props => (props.left == 'true' ? 'left' : 'right')};
    /* transform-origin: left; */
  }
`;

const TextDiv = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    <Section>
      <div>
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
          </p>{' '}
        </TextDiv>
      </div>
      <div>
        <TextDiv>
          <h2>Lambda Notes with React</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
        <Img
          src={require('./../../assets/notes.jpg')}
          alt="lambda notes thumbnail"
        />
      </div>
      <div>
        <Img
          src={require('./../../assets/snj.jpg')}
          alt="s&j website thumbnail"
          left="true"
        />
        <TextDiv>
          <h2>S & J Architecture WebSite</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
      </div>
      <div>
        <TextDiv>
          <h2>Cool Table: A Test and and Message Posting Site with React</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
        <Img
          src={require('./../../assets/cooltbl.jpg')}
          alt="cool table thumbnail"
        />
      </div>
      <div>
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
      </div>
      <div>
        <TextDiv>
          <h2>A Calculator App from ReactJS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            necessitatibus deserunt perspiciatis nostrum id excepturi.
          </p>{' '}
        </TextDiv>
        <Img
          src={require('./../../assets/calc.jpg')}
          alt="calculator app thumbnail"
        />
      </div>
      <div>
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
      </div>
      <div>
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
      </div>
    </Section>
  );
}

export default ProjectsSection;
