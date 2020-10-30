import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/aboutme/resume.css';

class Resume extends React.Component {

  render() {
    return (
      <div className="aboutMeDiv">
        <div>
          <div className="aboutMeTitle">Learn About Me</div>
          <div className="bioDiv">
            <div className="bio">
              I'm a software engineer and developer with a passion to create new and inovative experiences.
              I pride myself with my unique and diverse set of skills and ability to see a project to the end.
              I design, build, and test 3D enviroments and web based applications that enhance the users experience and provides a lasting impresion.
              Go check out the projects I'm currently working on or take a look at my resume.
            </div>
          </div>
        </div>

        <Container fluid className="skillList">
          <div className="skillTitle">What I Can Do...</div>
          <Row className="firstSkillRow">
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/react.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/node.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/git.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/phpIcon.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/phythonIcon.png'} alt="" className="skillImg"/>
            </Col>
          </Row>

          <Row className="secondSkillRow">
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/sqlIcon.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/mongo.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/dockerIcon.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/linuxIcon.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/android.png'} alt="" className="skillImg"/>
            </Col>
          </Row>

          <Row className="thirdSkillRow">
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/unity.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/oculusIcon.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/webxr.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/three.png'} alt="" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/openglIcon.png'} alt="" className="skillImg"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Resume;
