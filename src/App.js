import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePicture from './components/ProfilePicture';
import Navbar from './components/Navbar';
import ProfileInfo from './components/ProfileInfo';
import './style/app.css';


function App() {

  return (
    <Container fluid>
      <Row>
        <Col xs={5}>
          <ProfilePicture />
        </Col>
        <Col>
          <div className="navBar">
            <Navbar />
          </div>
          <div className="profile">
            <ProfileInfo />
          </div>
        </Col>
      </Row>
    </Container>
  );

}

export default App;
