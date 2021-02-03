import React from 'react';
import '../style/aboutme.css';

class Resume extends React.Component {

  render() {
    return (
      <div className="section">
        <div className="sectionTitle">Learn About Me...</div>
        <div className="barDivider"></div>
        <div className="bioDiv">
          <div className="bio">
            I'm a software engineer and developer with a passion to create new and innovative experiences.
            I pride myself with my unique and diverse set of skills and ability to see a project to the end.
            I design, build, and test 3D environments and web based applications that enhance the users experience and provides a lasting impression.
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
