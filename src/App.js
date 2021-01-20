import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProfileInfo from './components/Profile';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Contact from './components/Contact';
import './style/app.css';


class App extends React.Component {

  state = { arrowNav: false }

  callbackFunction = (profileInfoData) => {
    this.setState({ arrowNav: profileInfoData });
  }

  render(){

    return (
      <div className="wrapper">
        <Navbar arrowLink = {this.state.arrowNav} appCallBack = {this.callbackFunction}/>
        <ProfileInfo appCallBack = {this.callbackFunction} />
        <AboutMe />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
