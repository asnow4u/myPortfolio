import React from 'react';
import '../style/project.css';

class Project extends React.Component {

  render(){
    return (
      <div>
        <div className="projectTitle">
          Projects:
        </div>

        <div className="firstShowcaseProjects">
          <div className="horShowcase">
            <div className="showcaseImage">
            </div>
            <div className="showcaseDesc">
            </div >
          </div>
          <div className="horShowcase">
            <div className="showcaseImage">
            </div>
            <div className="showcaseDesc">
            </div >
          </div>
          <div className="horShowcase">
            <div className="showcaseImage">
            </div>
            <div className="showcaseDesc">
            </div >
          </div>
        </div>

        <div className="secondShowcaseProjects">
          <div className="verShowcase">
            <div className="showcaseImage">
            </div>
            <div className="showcaseTitle">
            </div>
            <div className="showcaseDesc">
            </div >
          </div>
          <div className="verShowcase">
            <div className="showcaseImage">
            </div>
            <div className="showcaseTitle">
            </div>
            <div className="showcaseDesc">
            </div >
          </div>
          <div className="verShowcase">
            <div className="showcaseImage">
            </div>
            <div className="showcaseTitle">
            </div>
            <div className="showcaseDesc">
            </div >
          </div>
        </div>
      </div>
    );
  }

}

export default Project;
