import React, { Component } from 'react';
import styled from 'styled-components';
import { encode } from './helpers';

// =================================
// ===========  COMPONENT  =========
// =================================

class ContactForm extends Component {
  state = {
    simple: true,
    name: '',
    email: '',
    message: ''
  };

  inputChangeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      })
    })
      .then(() => {
        this.props.toggleModal(
          'Success',
          'Thank you for your interest. I will get back to you as soon as possible'
        );
      })
      .catch(error => this.props.toggleModal('Error', error));
    e.preventDefault();
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <Form
        onSubmit={this.submitHandler}
        name="contact"
        method="post"
        data-aos="fade-up"
      >
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name">Name</label>
        <input
          onChange={this.inputChangeHandler}
          type="text"
          placeholder="Joseph Donaldson"
          value={name}
          required
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.inputChangeHandler}
          type="email"
          placeholder="jonnyd@email.com"
          value={email}
          required
          name="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={this.inputChangeHandler}
          placeholder="Sean, I would love
            to get in contact regarding some projects I have going on."
          value={message}
          rows="8"
          required
          name="message"
        />
        <input type="submit" value="Send" />
      </Form>
    );
  }
}

export default ContactForm;

// ==============================
// ===========  STYLES  =========
// ==============================

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  label {
    font-size: 2rem;
    color: #0f0f0f;
    margin: 1rem;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #6c63ff;
    -webkit-text-fill-color: #0f0f0f;
    -webkit-box-shadow: 0 0 0px 1000px lightgreen inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  input,
  textarea {
    padding: 1rem;
    font-size: 2.2rem;
    border: none;
    border-bottom: 1px dotted #0f0f0f;
    margin-bottom: 1rem;
    background: white;
    border-radius: 3px;

    &[type='submit'] {
      background: #6c63ff;
      color: white;
      cursor: pointer;
      text-transform: uppercase;
      position: relative;
      top: 0;
      border-radius: 5rem;

      :hover {
        top: 2px;
      }

      :active {
        top: 4px;
      }
    }
  }
  textarea {
    margin-bottom: 3rem;
  }
`;
