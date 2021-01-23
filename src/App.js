import React from 'react';
import Navbar from './components/Navbar';
import ProfileInfo from './components/Profile';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import './style/app.css';


class App extends React.Component {

  render(){
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
        <Navbar />
        <ProfileInfo />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
