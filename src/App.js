import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfilePicture from './components/ProfilePicture';
import Navbar from './components/Navbar';
import ProfileInfo from './components/ProfileInfo';



function App() {

  return (
    <Container fluid>
      <Row>
        <Col>
          <ProfilePicture />
        </Col>
        <Col>
          <Navbar />
          <ProfileInfo />
        </Col>
      </Row>
    </Container>
  );

}

export default App;
