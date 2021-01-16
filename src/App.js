import React from 'react';
import { Switch, Route} from 'react-router-dom';
import ProfilePicture from './components/ProfilePicture';
import Navbar from './components/Navbar';
import ProfileInfo from './components/ProfileInfo';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
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

        <Switch>
          <Route path = "/aboutme">
            <AboutMe />
          </Route>

          <Route path = "/projects">
            <Project />
          </Route>

          <Route path = "/contact">

          </Route>

          <Route path="/">
            <ProfilePicture />
            <ProfileInfo appCallBack = {this.callbackFunction} />
          </Route>

        </Switch>
      </div>
    );
  }
}

export default App;
