import React from 'react';
import './App.css';

import NavbarComponent from './components/navbar/Navbar';
import Timeline from './components/timeline/Timeline';
import Title from './components/title/Title';
import Divider from './components/divider/Divider';
import ConnectButton from './components/connect-button/ConnectButton';
import AboutMeOverview from './components/about-overview/AboutMeOverview';
import ProjectsOverview from './components/project-overview/ProjectsOverview';
// import FooterComponent from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent animation="false" />
      <Title />
      <ConnectButton />
      <Divider >Objectives</Divider>
      <AboutMeOverview />
      <Divider >Projects</Divider>
      <ProjectsOverview />
      <Divider >Timeline</Divider>
      <Timeline />
      {/* <FooterComponent /> */}
    </div >
  );
}

export default App;
