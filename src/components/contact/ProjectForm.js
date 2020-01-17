import React, { Component } from 'react';
import styled from 'styled-components';
import { encode } from './helpers';

// =================================
// ===========  COMPONENT  =========
// =================================

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    duration: '',
    company: '',
    budget: ''
  };

  inputChangeHandler = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  submitHandler = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'project', ...this.state })
    })
    .then(() =>{
      this.props.toggleModal("Success", "Thank you for your interest. I will get back to you as soon as possible")
    })       
    .catch(error => this.props.toggleModal("Error", error));
  e.preventDefault();
  this.setState({
    name: '',
    email: '',
    message: '',
    duration: '',
    company: '',
    budget: ''
  })
}

  render() {
    const { name, email, message, company, budget } = this.state;
    return (
      <Form onSubmit={this.submitHandler} name="project" method="post">
        <input type="hidden" name="form-name" value="project" />
        <label htmlFor="name">Name</label>
        <input
          onChange={this.inputChangeHandler}
          type="text"
          placeholder="John Doe"
          value={name}
          required
          name="name"
        />
        <label htmlFor="company">Company</label>
        <input
          onChange={this.inputChangeHandler}
          type="text"
          placeholder="JohnDoe Unlimited"
          value={company}
          name="company"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.inputChangeHandler}
          type="email"
          placeholder="jonnydoe@email.com"
          value={email}
          required
          name="email"
        />
        <label htmlFor="budget">Budget</label>
        <input
          onChange={this.inputChangeHandler}
          type="number"
          placeholder="1500"
          value={budget}
          min="1"
          required
          name="budget"
        />
        <label htmlFor="message">Description</label>
        <textarea
          onChange={this.inputChangeHandler}
          placeholder="A brief project summary..."
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
  flex-wrap: wrap;
  padding: 2rem;

  label {
    font-size: 2rem;
    color: #0f0f0f;
    margin: 1rem;
    width: 100%;
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
    border: 1px solid  #6C63FF;
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
    width: 100%;

    &[type='submit'] {
      background:  #6C63FF;
      color: white;
      cursor: pointer;
      border-radius: 5rem;
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
  textarea {
    margin-bottom: 3rem;
  }
`;
