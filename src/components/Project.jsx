import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/project.css';

class Project extends React.Component {

  render(){
    return (
      <div>
        <div className="projectTitle">
          Projects:
        </div>

        <div className="showcaseProjects">

          <a href="https://github.com/asnow4u/UnityNatureProject/" target="_blank" rel="noopener noreferrer">
            <div className="showcaseTile">
              <img className="showcaseImage" src={process.env.PUBLIC_URL + '/img/portfolioScreenshot.jpg'} alt="" height="50%" width="100%"/>
              <div className="showcaseDesc">
                <div className="showcaseTitle">Unity Project</div>
                <div>
                  A fun take on a "2D" game in VR. Currently in a very early stage of development and design.
                  Created using Unity with Oculus SDK, and Blender for 3D assets and animation.
                </div>
              </div >
            </div>
          </a>

          <a href="https://github.com/asnow4u/myPortfolio/" target="_blank" rel="noopener noreferrer">
            <div className="showcaseTile">
              <img className="showcaseImage" src={process.env.PUBLIC_URL + '/img/portfolioScreenshot.jpg'} alt="" height="25%" width="100%"/>
              <div className="showcaseDesc">
                <div className="showcaseTitle">Portfolio Website</div>
                <div>
                  Welcome to the website your currently looking at.
                  Built using React and Bootstrap, and hosted using GitPages.
                  Explore around and see what I have to offer you.
                </div>
              </div >
            </div>
          </a>

          <a href="https://github.com/OSU-2019-Capstone-CS19/Educational-AR-WebXR-App" target="_blank" rel="noopener noreferrer">
            <div className="showcaseTile">
              <img className="showcaseImage" src={process.env.PUBLIC_URL + '/img/solarARScreenShot.png'} alt="" height="10%" width="100%"/>
              <div className="showcaseDesc">
                <div className="showcaseTitle">Solar AR</div>
                <div>
                  A web application using WebXR to help visualize the solar system.
                  Utilizes Three.js to produce the 3D enviroment and replicate the physics of the solar system.
                </div>
              </div>
            </div>
          </a>
        </div>


        <Container fluid className="skillList">
          <div className="skillTitle">SkillSet:</div>
          <Row>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/react.png'} alt="" width="150" height="100" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/node.png'} alt="" width="150" height="100" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/git.png'} alt="" width="100" height="100" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/unity.png'} alt="" width="150" height="100" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/webxr.png'} alt="" width="150" height="90" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/three.png'} alt="" width="150" height="100" className="skillImg"/>
            </Col>
            <Col className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/mongo.png'} alt="" width="150" height="100" className="skillImg"/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}

export default Project;
