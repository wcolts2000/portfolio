import React, {Component} from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import HeroSection from './components/hero/HeroSection';
import styled from 'styled-components';
import ProjectsSection from './components/projects/ProjectsSection';
import SkillsSection from './components/skills/SkillsSection';
import ContactSection from './components/contact/ContactSection';
import Modal from './components/contact/Modal';

// =================================
// ===========  COMPONENT  =========
// =================================

class App extends Component {
  state = {    
    modal: false,
    status: "",
    message: ""
  }

  toggleModal = (status, message) => {
    this.setState({
      modal: true,
      status,
      message
    }, () => {
      setTimeout(() => {
        this.setState({modal: false, status: "", message: ""})
      }, 3000);
    })
  } 

  closeModal = () => {
    this.setState({    
      modal: false,
      status: "",
      message: ""
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <Modal 
            modal={this.state.modal}
            closeModal={this.closeModal}
            status={this.state.status}
            message={this.state.message}
          />
          <ContentsWrapper>
            <Header />
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection toggleModal={this.toggleModal}/>
          </ContentsWrapper>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;

// ==============================
// ===========  STYLES  =========
// ==============================

const ContentsWrapper = styled.div`
  flex: 1 0 auto;
`;
