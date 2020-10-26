import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Switch, Route} from 'react-router-dom';
import ProfilePicture from './components/ProfilePicture';
import Navbar from './components/Navbar';
import ProfileInfo from './components/ProfileInfo';
import ContactInfo from './components/ContactInfo';
import Resume from './components/Resume';
import './style/app.css';


function App() {

  return (
    <Container fluid>
      <Row>
        <Switch>
          <Route path = "/projects">

          </Route>

          <Route path = "/aboutme">
            <Col xs={3}>
              <div className="backgroundBar"></div>
              <ContactInfo />
            </Col>
            <Col>
              <Resume />
            </Col>
          </Route>

          <Route path="/">
            <Col xs={5}>
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
