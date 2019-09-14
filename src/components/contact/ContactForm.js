import React, { Component } from 'react';
import styled from 'styled-components';

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
    border: 1px solid aqua;
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
    background: papayawhip;
    border-radius: 3px;

    &[type='submit'] {
      background: aqua;
      color: #0f0f0f;
      cursor: pointer;
      text-transform: uppercase;
      position: relative;
      top: 0;

      :hover {
        top: 2px;
      }

      :active {
        top: 4px;
      }
    }
  }
`;

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
    e.preventDefault();
    console.log('formstate', this.state);
  };
  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          onChange={this.inputChangeHandler}
          type="text"
          placeholder="John Doe"
          value={this.state.name}
          required
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.inputChangeHandler}
          type="email"
          placeholder="jonnydoe@email.com"
          value={this.state.email}
          required
          name="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          onChange={this.inputChangeHandler}
          placeholder="Message here..."
          value={this.state.message}
          rows="8"
          cols="50"
          required
          name="message"
        />
        <input
          type="submit"
          value="Send"
          onClick={() =>
            alert(
              'not hooked up yet,:( sorry. But it will be soon so try again in a day or two, Thank you for understanding'
            )
          }
        />
      </Form>
    );
  }
}

export default ContactForm;
