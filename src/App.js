import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; //Going to remove
import { Switch, Route} from 'react-router-dom';
import ProfilePicture from './components/ProfilePicture';
import Navbar from './components/Navbar';
import ProfileInfo from './components/ProfileInfo';
import Resume from './components/Resume';
import Project from './components/Project';
import './style/app.css';


function App() {

  return (
    <div className="wrapper">

      <Navbar />

        <Switch>
          <Route path = "/projects">
            <Col>
              <div className="projectBackgroundBar"></div>
              <Project />
            </Col>
          </Route>

          <Route path = "/aboutme">
            <Col xs={1}>
              <div className="aboutBackgroundBar"></div>
            </Col>
            <Col>
              <Resume />
            </Col>
          </Route>

          <Route path="/">

            <ProfilePicture />
            <ProfileInfo />

          </Route>

        </Switch>
    </div>
  );
}

export default App;