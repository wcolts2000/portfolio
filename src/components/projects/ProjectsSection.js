import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "./ProjectCard"

// =================================
// ===========  COMPONENT  =========
// =================================

function ProjectsSection() {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <div className="container">
        <Card 
          url="hurryupprint.jpg"
          titleTop="Connect"
          titleBottom="Our Kids"
          subtitle="A react native app"
          techUsed={['React Native', 'EXPO', 'Native Base']}
          backTitle="Connect Our Kids: A People Search App"
          backBody="Helping Social Workers find extended family members for children entering the foster care system."
          projectCode="https://github.com/labs13-connect-kids/mobile"
          projectLive="https://expo.io/@connectourkids/connectOurKids?release-channel=staging"
        />
        <Card 
          url="connectourkids.jpg"
          titleTop="Hurry"
          titleBottom="Up Print"
          subtitle="A printshop website"
          techUsed={['PHP', 'MySQL', 'Materialize CSS']}
          backTitle="Hurry Up Print e-commerce site"
          backBody="An e-commerce print shop site with user login and admin dashboard features and pricing calculators."
          projectCode="https://github.com/wcolts2000/hup-client/"
          projectLive="https://hurryupprint.com"
        />
        <Card 
          url="blog.jpg"
          titleTop="GatsbyJS"
          titleBottom="Blog Site"
          subtitle="Notes/Resources"
          techUsed={['GatsbyJS', 'Contentful CMS', 'Redux', 'Styled-Components']}
          backTitle="Personal Notes and Reference Lists"
          backBody="Useful resources, notes, a blog, and project links made with GatsbyJS."
          projectCode="https://github.com/wcolts2000/the_pretty_good_gatsy_blog"
          projectLive="https://pretty-good-gatsby-blog.netlify.com/"
        />
      </div>
      <p className="description">Here are a few projects you might like looking
      through. These have been built using React, React Native, and PHP. The
      Blog Site is built with GatsbyJS to render the static pages while still using React. Styling for the sites has been done with styled-components and native CSS3 and HTML5 semantic tags have been used for the markup. The Hurry Up Print
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


