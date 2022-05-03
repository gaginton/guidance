import React from 'react';
import './App.css';

import NavbarComponent from './components/navbar/Navbar';
import Timeline from './timeline/Timeline';

function App() {
  return (
    <div className="App">

      <NavbarComponent />
      <br />

      <h1 className="title">Guy Ginton:
        <br />Digital Dreamer
      </h1>

      <Timeline />

    </div >
  );
}

export default App;
