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
  padding: 1.5rem;

  h2 {
    font-size: 3.6rem;
    padding: 1.5rem;
  }
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function ContactSection() {
  return (
    <Section id="contact">
      <h2>Interested in collaborating with me?</h2>
      <ContactForm />
    </Section>
  );
}

export default ContactSection;
