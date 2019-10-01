import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/codingbg.jpg';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  background: linear-gradient(rgba(108, 99, 255,.8), rgba(108, 99, 255,.8)), url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 4.5rem;

.main {
  font-size: 2.6rem;
  display: inline-block;
}

  h2 {
    font-size: 2.2rem;
    text-align: left;
    font-weight: bold;
    padding: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 5.5px;
    background:  #fff;
    display: inline-block;
    margin: 1.6rem 0 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;
    padding: 2.6rem;
    background: white;
    margin-bottom: 2.5rem;
  }

  li {
    font-size: 1.8rem;
    min-width: 10%;
    font-weight: bold;
    margin: 1.6rem;
    display: flex;
    flex-direction: column;

    i,
    .svg {
      padding: 0;
      margin: 0;
      font-size: 3em;
      padding-bottom: 10px;
      margin-bottom: 10px;
      display: inline-block;
      position: relative;
      align-items: center;

      :after {
        content: '';
        position: absolute;
        height: 1px;
        bottom: 0;
        left: 35%;
        right: 35%;
        background: #0f0f0f;
      }
    }
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function SkillsSection() {
  return (
    <Section id="skills">
      <h2 className="main">Skills</h2>
      <div>
        <ul>
          <li>
            <i className="devicon-html5-plain colored"></i>
            HTML5
          </li>
          <li>
            <i className="devicon-css3-plain colored"></i>CSS3
          </li>
          <li>
            <i class="devicon-less-plain-wordmark colored"></i>LESS
          </li>
          <li>
            <i class="devicon-sass-original colored"></i>SASS
          </li>
          <li>
            <i class="devicon-react-original colored"></i>REACT
          </li>
          <li>
            <i style={{ padding: 5 }}>
              <svg
                width="54px"
                height="54px"
                viewBox="0 0 100 100"
                enable-background="new 0 0 54 54"
              >
                <g fill="#764ABC">
                  <path d="M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z" />
                  <path d="M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z" />
                  <path d="M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z" />
                </g>
              </svg>
            </i>
            REDUX
          </li>
          <li>
            <i class="devicon-django-plain colored"></i>DJANGO
          </li>
          <li>
            <i class="devicon-nodejs-plain colored"></i>NODE
          </li>
          <li>
            <i class="devicon-express-original colored"></i>EXPRESS
          </li>
          <li>
            <i class="devicon-javascript-plain colored"></i>JS
          </li>
          <li>
            <i class="devicon-python-plain colored"></i>PYTHON
          </li>
          <li>
            <i class="devicon-photoshop-plain colored"></i>PHOTOSHOP
          </li>
          <li>
            <i class="devicon-illustrator-plain colored"></i>ILLUSTRATOR
          </li>
          <li>
            <i class="devicon-heroku-original colored"></i>HEROKU
          </li>
          <li>
            <i class="devicon-docker-plain colored"></i>DOCKER
          </li>
          <li>
            <i class="devicon-git-plain colored"></i>GIT
          </li>
          <li>
            <i class="devicon-github-plain colored"></i>GITHUB
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default SkillsSection;
