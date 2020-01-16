import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ProjectForm from './ProjectForm';
import map from '../../assets/map.png';
import profilePic from '../../assets/profileImgSm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// =================================
// ===========  COMPONENT  =========
// =================================

class ContactSection extends Component {
  state = {
    simple: true
  };

  toggleForm = ({ target: { id } }) =>
    this.setState({ simple: id === 'simple' ? true : false });

  render() {
    const { toggleModal } = this.props;
    return (
      <Section id="contact">
        <h2>CONTACT</h2>
        <Wrapper active={this.state.simple}>
          <div className="left">
            <p className="form-toggle">
              <Span
                active={this.state.simple}
                id="simple"
                onClick={this.toggleForm}
              >
                Quick Message
              </Span>
              <Span
                active={!this.state.simple}
                id="project"
                onClick={this.toggleForm}
              >
                Project Inquiry
              </Span>
            </p>
            {this.state.simple ? (
              <ContactForm toggleModal={toggleModal} />
            ) : (
              <ProjectForm toggleModal={toggleModal} />
            )}
          </div>
          <div className="right">
            <h3>Get In Touch</h3>
            <h3>Sean Pheneger | Full Stack Web Developer</h3>
            <img
              id="profilePic"
              src={profilePic}
              alt="Sean Pheneger, full stack developer"
            />

            <div className="social-links">
              <a
                href="https://github.com/wcolts2000?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="footer-icon"
                  icon={['fab', 'github']}
                />  Github Repos
              </a>
              <small>Check out some projects on my github.</small>
              <a
                href="https://www.linkedin.com/in/sean-pheneger-5393a089/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="footer-icon"
                  icon={['fab', 'linkedin']}
                />
                Linked In Profile
              </a>
              <small>Find me on LinkedIn.</small>
            </div>
            <p>
              I enjoy creating functional and aesthetically pleasing front ends and find
              building apps that make a real difference, improving the clients productivity
              and efficiency or offering a badly needed solution to some problem being faced.
            </p>
            <p>
              Reach out on LinkedIn or submit a message or project inquiry in the form and I will get back to you as soon as I can. I look forward to talking with you.
            </p>
          </div>
        </Wrapper>
      </Section>
    );
  }
}

export default ContactSection;

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  padding: 16rem 4.5rem;
  background: #b8f9e6;
  position: relative;

  @media (max-width: 800px) {
    padding: 8rem 4.5rem;
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

  p {
    font-size: 2rem;
    line-height: 1.5;
    padding: 0 2.5rem;
  }

  .form-toggle {
    background: #e4e1ff;
    width: 100%;
    display: flex;
    padding: 0;
    white-space: nowrap;
    margin: 0;
  }

  form {
    width: 100%;
    background-color: cadetblue;
  }

  .left {
    width: 50%;

    @media (max-width: 750px) {
      width: 100%;
    }
  }

  .right {
    width: 50%;
    padding: 2rem;
    background: linear-gradient(#e4e1ff 20%, rgba(0, 0, 255, 0)), url(${map});
    background-size: cover;

    h3 {
      font-size: 2rem;
      padding: 0 2rem;
    }
    
    img {
      float: left;
      width: 160px;
      overflow: hidden;
      margin: 2rem;

      @media screen and (max-width: 500px) {
        float: none;
      }
    }

    .social-links {
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 500px) {
        margin-left: 2rem;
      }
      
      a {
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
        color: black;

        @media screen and (max-width: 500px) {
          margin: 1rem 0;
        }
      }

      a svg path {
        fill: black;
      }

      small {
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0 2rem;
        margin-top: -1rem; 

        @media screen and (max-width: 500px) {
          margin-top: 0;
          margin: .6rem 0;
          font-size: 1.6rem;
        }
      }
    }




    p {
      color: #0f0f0f;
      width: 100%;
      font-weight: bold;
    }

    @media (max-width: 750px) {
      display: block;
      width: 100%;
      order: -1;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  max-width: 1200px;
  margin: 0 auto;
  align-items: stretch;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Span = styled.span`
  cursor: pointer;
  width: 50%;
  padding: 2rem;
  color: ${props => (props.active ? ' #6C64FF' : '#0f0f0f')};
  border-bottom: ${props => (props.active ? '.3rem solid  #6C64FF' : 'none')};
  transition: color 0.3s ease-in;
  padding-bottom: ${props => (props.active ? '1.7rem' : '2rem')};

  :hover {
    color: #6c64ff;
  }
`;
