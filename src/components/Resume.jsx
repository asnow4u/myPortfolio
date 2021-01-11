import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/aboutme/resume.css';

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

          <div className="skillSectionTitle">Full Stack:</div>
          <div className="fullStackTile">
            <img src={process.env.PUBLIC_URL + '/img/react.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/node.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/phpIcon.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/phythonIcon.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/sqlIcon.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/mongo.png'} alt="" className="skillImg"/>
          </div>

          <div className="skillSectionTitle">3D Development:</div>
          <div className="simDevelopmentTile">
            <img src={process.env.PUBLIC_URL + '/img/unity.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/oculusIcon.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/webxr.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/three.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/openglIcon.png'} alt="" className="skillImg"/>
          </div>

          <div className="skillSectionTitle">Other Development Tools:</div>
          <div className="developmentToolTile">
            <img src={process.env.PUBLIC_URL + '/img/git.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/linuxIcon.png'} alt="" className="skillImg"/>
            <img src={process.env.PUBLIC_URL + '/img/android.png'} alt="" className="skillImg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
