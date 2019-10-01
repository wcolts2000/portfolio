import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// =================================
// ===========  COMPONENT  =========
// =================================


function Modal({closeModal, status, message, modal }) {


  return (
    status &&
    <ModalDiv modal={modal}>
      <div className="container">
        <h2><FontAwesomeIcon icon={status.toLowerCase() === "success" ? "thumbs-up" : "thumbs-down"} />&nbsp;{status} <span onClick={closeModal}>X</span></h2>
        <p>{message}</p>
      </div>
    </ModalDiv>
  )
}

export default Modal

// ==============================
// ===========  STYLES  =========
// ==============================

const ModalDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0,.8);
  display: ${props => props.modal ? 'flex' : "none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  color: white;

  .container {
    max-width: 600px;
    padding: 0 2rem;
    background-color: #6C63FF; 
  }

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  span {
    cursor: pointer;
    color: red;
    position: absolute;
    top: 85px;
    right: 50px;
    font-size: 2.6rem;
  }

  p {
    font-size: 2.6rem;
  }
`