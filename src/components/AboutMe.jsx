import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/aboutme.css';

class Resume extends React.Component {

  render() {
    return (
      <div>
        <div className="aboutMe">
          <div className="aboutMeTitle">Learn About Me</div>
          <div className="bioDiv">
            <div className="bio">
              I'm a software engineer and developer with a passion to create new and inovative experiences.
              I pride myself with my unique and diverse set of skills and ability to see a project to the end.
              I design, build, and test 3D enviroments and web based applications that enhance the users experience and provides a lasting impresion.
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="skillTitle">What I Can Do...</div>

          <div className="skillCategory">

            <h4 className="categoryTitle"> Full Stack </h4>

            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/react.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/node.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/phpIcon.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/phythonIcon.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/sqlIcon.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/mongo.png'} alt="" className="skillImg"/>
            </div>

            <h4 className="categoryTitle"> 3D Development </h4>

            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/unity.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/oculusIcon.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/webxr.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/three.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/openglIcon.png'} alt="" className="skillImg"/>
            </div>

            <h4 className="categoryTitle"> Other Development Tools </h4>

            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/gitIcon.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/linuxIcon.png'} alt="" className="skillImg"/>
            </div>
            <div className="skillTile">
              <img src={process.env.PUBLIC_URL + '/img/skills/android.png'} alt="" className="skillImg"/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
