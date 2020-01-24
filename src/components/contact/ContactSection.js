import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ProjectForm from './ProjectForm';
import profilePic from '../../assets/profileImgSm.png';

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
        <h2 data-aos="flip-up">CONTACT</h2>
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
            <h3 data-aos="fade-left">Get In Touch</h3>
            <h4 data-aos="fade-left">
              Sean Pheneger | Full Stack Web Developer
            </h4>
            <img
              id="profilePic"
              src={profilePic}
              alt="Sean Pheneger, full stack developer"
              data-aos="fade-left"
            />
            <p data-aos="fade-left" data-aos-delay="200">
              I enjoy creating functional and aesthetically pleasing front ends
              and building apps that make a real difference in clients’
              productivity, efficiency, and workflow. I am tenacious when it
              comes to finding solutions to pain points and will work closely
              with stakeholders to understand needs and vision for the product.
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
    background: white;
    width: 100%;
    display: flex;
    padding: 0;
    font-weight: bold;
    white-space: nowrap;
    margin: 0;
  }

  form {
    width: 100%;
  }

  .left {
    background-color: cadetblue;
    width: 50%;

    @media (max-width: 750px) {
      width: 100%;
    }
  }

  .right {
    width: 50%;
    padding: 2rem;
    background: white;
    background-size: cover;

    h3 {
      font-size: 2rem;
      padding: 0 2rem;
      text-align: center;
      margin-top: 0;
    }

    h4 {
      font-size: 2rem;
      padding: 0 2rem;
      font-weight: normal;
      margin-bottom: 0;
    }

    img {
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
        font-size: 2rem;
        padding: 0 2rem;
        margin-top: -1rem;

        @media screen and (max-width: 500px) {
          margin-top: 0;
          margin: 0.6rem 0;
          font-size: 1.6rem;
        }
      }
    }

    p {
      color: #0f0f0f;
      width: 100%;
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
