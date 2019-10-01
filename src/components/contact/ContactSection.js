import React, { Component } from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';
import ProjectForm from './ProjectForm';
import map from '../../assets/map.png';

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
    const { toggleModal } = this.props
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
            {this.state.simple ? <ContactForm toggleModal={toggleModal} /> : <ProjectForm toggleModal={toggleModal} />}
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

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  padding: 8rem 4.5rem;
  background: #B8F9E6;
  position: relative;

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
    background: #E4E1FF;
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
    background: linear-gradient(#E4E1FF 20%, rgba(0, 0, 255, 0)), url(${map});
    background-size: cover;
    p {
      color: #0f0f0f;
      width: 100%;
    }

    @media (max-width: 750px) {
      display: none;
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
    color:  #6C64FF;
  }
`;
