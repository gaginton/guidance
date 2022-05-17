import React from 'react';
import './App.css';

import NavbarComponent from './components/navbar/Navbar';
import Timeline from './components/timeline/Timeline';
import Title from './components/title/Title';
import Divider from './components/divider/Divider';
import ProjectsOverview from './components/project-overview/ProjectsOverview';
// import FooterComponent from './components/footer/Footer';
import ConnectButton from './components/connect-button/ConnectButton';

function App() {
  return (
    <div className="App">
      <NavbarComponent animation="false" />
      <Title />
      <ConnectButton />
      <Divider >Projects</Divider>
      <ProjectsOverview />
      <Divider >Timeline</Divider>
      <Timeline />
      {/* <FooterComponent /> */}
    </div >
  );
}

export default App;
