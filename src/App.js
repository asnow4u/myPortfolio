import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route} from 'react-router-dom';
import ProfilePicture from './components/ProfilePicture';
import Navbar from './components/Navbar';
import ProfileInfo from './components/ProfileInfo';
import Resume from './components/Resume';
import Project from './components/Project';
import './style/app.css';


function App() {

  return (
    <Container fluid>
      <Row>
        <Switch>
          <Route path = "/projects">
            <Col>
              <div className="projectBackgroundBar"></div>
              <Project />
            </Col>
          </Route>

          <Route path = "/aboutme">
            <Col xs={3}>
              <div className="aboutBackgroundBar"></div>
            </Col>
            <Col>
              <Resume />
            </Col>
          </Route>

          <Route path="/">
            <Col xs={4}>
              <ProfilePicture />
            </Col>
            <Col>
              <div className="profile">
                <ProfileInfo />
              </div>
            </Col>
          </Route>

        </Switch>
        <Col xs={1}>
          <div className="navBar">
            <Navbar />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
