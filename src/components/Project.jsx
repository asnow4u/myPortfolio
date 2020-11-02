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
              <img className="showcaseImage" src={process.env.PUBLIC_URL + '/img/unityGame.jpg'} alt="" height="50%" width="100%"/>
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

          <a href="https://github.com/osu-cs419-w20/final-project-group2" target="_blank" rel="noopener noreferrer">
            <div className="showcaseTile">
              <img className="showcaseImage" src={process.env.PUBLIC_URL + '/img/movieStarScreenShot.jpg'} alt="" height="10%" width="100%"/>
              <div className="showcaseDesc">
                <div className="showcaseTitle">Movie Star</div>
                <div>
                  A react built website that displays movies based on a criteria such as genre or popularity.
                  The website pulls from "themoviedb.org" database to provide up to date information about the movie and who stars in them.
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/osu-cs493-sp19/final-project-great-team-name" target="_blank" rel="noopener noreferrer">
            <div className="showcaseTile">
              <img className="showcaseImage" src={process.env.PUBLIC_URL + '/img/docker.png'} alt="" height="10%" width="100%"/>
              <div className="showcaseDesc">
                <div className="showcaseTitle">Tarpaulin Api</div>
                <div>
                  A small program keeping track of students, information associated with them, the courses their taking, and the assignments associated with them.
                  This utilizes a mongodb database within a seperate docker container.
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    );
  }

}

export default Project;
