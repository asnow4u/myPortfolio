import React from 'react';
import Navbar from './components/navbar/Navbar';
import ProfileInfo from './components/Profile';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import CubeView from './components/cubeView/CubeView';
import './style/app.css';

const App = () => {

  const [visual3DState, setVisual3DState] = React.useState(true);

  if (visual3DState) {

    return (
      <div>
        <CubeView changeVisual={setVisual3DState}/>
      </div>
    );
  } else {

    return (
      <div className="wrapper">
        <div className="backgroundLines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <Navbar changeVisual={setVisual3DState}/>
        <ProfileInfo />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
