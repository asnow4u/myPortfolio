import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/aboutme/resume.css';

class Resume extends React.Component {

  render() {
    return (
      <div className="aboutMeDiv">
        <div>
          <div className="aboutMe">Learn About Me</div>
          <div className="bioDiv">
            <div className="bio">
              I'm a software engineer and developer with a passion to create new and inovative experiences.
              If your interested in some of the projects I've been working on go check out my Github.
            </div>
            <div className="buttonSelection">
              <button className="projectButton">Github</button>
              <button className="resumeButton">Resume</button>
            </div>
          </div>
        </div>

        <div className="resumeDiv">
          <div>
            Experienced Skills:
          </div>
          <div className="skillDiv">
            <Container fluid className="skills">
              <Row>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/react.png'} alt="" width="150" height="100" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/node.png'} alt="" width="150" height="100" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/git.png'} alt="" width="100" height="100" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/mongo.png'} alt="" width="150" height="100" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/webxr.png'} alt="" width="150" height="90" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/three.png'} alt="" width="150" height="100" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/unity.png'} alt="" width="150" height="100" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
                <Col className="skillTile">
                  <img src={process.env.PUBLIC_URL + '/img/android.png'} alt="" width="150" height="100" className="skillImg"/>
                  <div className="skillDisc">
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
