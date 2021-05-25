import React from 'react';
import Navbar from './components/navbar/Navbar';
import ProfileInfo from './components/profile/Profile';
import AboutMe from './components/aboutMe/AboutMe';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import CubeView from './components/cubeView/CubeView';
import './app.css';
import * as data from './data.json';

const App = () => {

  const [visual3DState, setVisual3DState] = React.useState(window.innerWidth<700 ? false : true);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 700 || window.innerHeight < 600) {
      setVisual3DState(false);
    } else {
      setVisual3DState(true);
    }
  });


  if (visual3DState) {

    return (
      <div>
        <CubeView changeVisual={setVisual3DState} data={data}/>
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
