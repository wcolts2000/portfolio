import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/codingbg.jpg';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  background-image: url(${bg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0), url(${bg}));
  position: relative;
  padding: 8rem 1.6rem 1.6rem;

  &::before {
    position: absolute;
    z-index: 200;
    background-color: papayawhip;
    content: '';
    top: -1px;
    left: 0;
    right: 0;
    bottom: 97%;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  }

  h2 {
    font-size: 2.6rem;
    text-align: left;
    font-weight: bold;
    padding: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 5.5px;
    background: gold;
    display: inline-block;
    margin: 1.6rem 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: flex-start;
    padding: 1.6rem;
    background: papayawhip;
  }

  li {
    font-size: 1.8rem;
    min-width: 20%;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    i {
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
      <h2>Skills</h2>
      <div>
        <h2>Front End</h2>
        <ul>
          <li>GATSBYJS</li>

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
          <li>REDUX</li>
          <li>
            <i class="devicon-vuejs-plain colored"></i>VUEJS
          </li>
          <li>
            <i class="devicon-bootstrap-plain colored"></i>BOOTSTRAP
          </li>
        </ul>
      </div>
      <div>
        <h2>Back End</h2>
        <ul>
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
            <i class="devicon-postgresql-plain colored"></i>POSTGRESQL
          </li>
          <li>SQLITE3</li>
          <li>
            <i class="devicon-mongodb-plain colored"></i>MONGODB
          </li>
        </ul>
      </div>
      <div>
        <h2>Languages</h2>
        <ul>
          <li>
            <i class="devicon-javascript-plain colored"></i>JS
          </li>
          <li>
            <i class="devicon-python-plain colored"></i>PYTHON
          </li>
          <li>SQL</li>
          <li>GRAPHQL</li>
          <li>NOSQL</li>
        </ul>
      </div>
      <div>
        <h2>MISCELLANEOUS</h2>
        <ul>
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
          <li>
            <i class="devicon-webpack-plain colored"></i>WEBPACK
          </li>
          <li>
            <i class="devicon-slack-plain colored"></i>SLACK
          </li>
          <li>
            <i class="devicon-trello-plain colored"></i>TRELLO
          </li>
        </ul>
      </div>
    </Section>
  );
}

export default SkillsSection;
