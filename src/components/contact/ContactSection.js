import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

// ==============================
// ===========  STYLES  =========
// ==============================

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1.5rem;
  align-items: flex-start;
  background: linear-gradient(to bottom right, #2496b0, #24b187);
  background: linear-gradient(to bottom right, #24b187, #2496b0);

  h2 {
    font-size: 3.6rem;
    padding: 0 2.5rem 2.5rem;
    font-weight: bold;
    letter-spacing: 10px;
    position: relative;
    margin-bottom: 1.5rem;

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
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function ContactSection() {
  return (
    <Section id="contact">
      <h2>CONTACT</h2>
      <p>Let's collaborate</p>
      <p>
        Do you have a project you are working on <br />
        or is there that one idea you are dreaming about creating?
      </p>
      <p>Let's chat, I may be able to help!</p>
      <ContactForm />
    </Section>
  );
}

export default ContactSection;
