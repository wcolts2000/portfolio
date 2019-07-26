import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/footer';
import HeroSection from './components/hero/HeroSection';
import styled from 'styled-components';
import ProjectsSection from './components/projects/ProjectsSection';
import SkillsSection from './components/skills/SkillsSection';

// ==============================
// ===========  STYLES  =========
// ==============================

const ContentsWrapper = styled.div`
  flex: 1 0 auto;
`;

// =================================
// ===========  COMPONENT  =========
// =================================

function App() {
  return (
    <>
      <div className="App">
        <ContentsWrapper>
          <Header />
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
        </ContentsWrapper>
      </div>
      <Footer />
    </>
  );
}

export default App;
