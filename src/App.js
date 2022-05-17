import React from 'react';
import './App.css';

import NavbarComponent from './components/navbar/Navbar';
import Timeline from './components/timeline/Timeline';
import Title from './components/title/Title';
import Divider from './components/divider/Divider';
import ConnectButton from './components/connect-button/ConnectButton';
import AboutMeOverview from './components/about-overview/AboutMeOverview';
import ProjectsOverview from './components/project-overview/ProjectsOverview';
import HobbiesOverview from './components/hobies-overview/HobiesOverview';
import FooterComponent from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Title />
      <ConnectButton />
      <Divider >Objectives</Divider>
      <AboutMeOverview />
      <Divider >Projects</Divider>
      <ProjectsOverview />
      <Divider >Experience</Divider>
      <Timeline />
      <Divider >Hobbies</Divider>
      <HobbiesOverview />
      <FooterComponent />
    </div >
  );
}

export default App;
