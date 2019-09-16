import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ProjectForm from './ProjectForm';
import map from '../../assets/map.png';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 6rem 1.5rem;
  align-items: flex-start;
  background: linear-gradient(to bottom right, #24b187, #2496b0);

  h2 {
    max-width: 1200px;
    margin: 0 auto;
    font-size: 3.6rem;
    padding: 0 2.5rem 2.5rem;
    font-weight: bold;
    letter-spacing: 10px;
    position: relative;
    margin-bottom: 1.5rem;
    width: 100%;

    ::after {
      display: inline-block;
      content: '';
      position: absolute;
      left: 2.5rem;
      right: 0;
      bottom: 0;
      width: 82%;
      height: 3px;
      background: #0f0f0f;
    }
  }

  p {
    font-size: 2rem;
    line-height: 1.5;
    padding: 0 2.5rem;
  }

  .form-toggle {
    background: #0f0f0f;
    width: 100%;
    display: flex;
    padding: 0;
    white-space: nowrap;
  }

  form {
    width: 100%;
    background-color: tan;
  }

  .left {
    width: 50%;
    height: 100%;

    @media (max-width: 750px) {
      width: 100%;
    }
  }

  .right {
    width: 50%;
    padding: 2rem;
    background: linear-gradient(#24a599 20%, rgba(0, 0, 255, 0)), url(${map});
    background-size: cover;
    p {
      color: white;
      width: 100%;
    }

    @media (max-width: 750px) {
      display: none;
    }
  }
`;

const Wrapper = styled.div`
  height: ${props => (props.active ? '592px' : '786px')};
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const Span = styled.span`
  cursor: pointer;
  width: 50%;
  padding: 2rem;
  color: ${props => (props.active ? 'gold' : 'white')};
  border-bottom: ${props => (props.active ? '.3rem solid gold' : 'none')};
  transition: color 0.3s ease-in;
  padding-bottom: ${props => (props.active ? '1.7rem' : '2rem')};

  :hover {
    color: gold;
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

class ContactSection extends Component {
  state = {
    simple: false
  };

  toggleForm = ({ target: { id } }) =>
    this.setState({ simple: id === 'simple' ? true : false });

  render() {
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
            {this.state.simple ? <ContactForm /> : <ProjectForm />}
          </div>
          <div className="right">
            <p>Let's collaborate</p>
            <p>
              Do you have a project you are working on <br />
              or is there that one idea you are dreaming about creating?
            </p>
            <p>We should chat, I may be able to help!</p>
          </div>
        </Wrapper>
      </Section>
    );
  }
}

export default ContactSection;
