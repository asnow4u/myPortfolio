import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/project.css';

class Project extends React.Component {

  constructor(){
    super();
    this.state = {
      projectImage: "",
      projectDesc: ""
    }
  }

  UpdateProjectDisplay = (project) => {

    window.scrollTo(0,0);
    let display = document.getElementById("display").style.display = "block";

    if (project == "unity"){
      this.setState({
        projectImage: process.env.PUBLIC_URL + '/img/project/unityGame.jpg',
        projectDesc: "A fun take on a 2D game in VR. Currently in a very early stage of development and design. Created using Unity with Oculus SDK, and Blender for 3D assets and animation."
      });
    }

    else if (project == "portfolio"){
      this.setState({
        projectImage: process.env.PUBLIC_URL + '/img/project/unityGame.jpg',
        projectDesc: "Welcome to the website your currently looking at. Built using React and Bootstrap, and hosted using GitPages. Explore around and see what I have to offer you."
      })
    }

    else if (project == "solarAR"){
      this.setState({
        projectImage: process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png',
        projectDesc: "A web application using WebXR to help visualize the solar system. Utilizes Three.js to produce the 3D enviroment and replicate the physics of the solar system."
      })
    }

    else if (project == "movieStar"){
      this.setState({
        projectImage: process.env.PUBLIC_URL + '/img/project/movieStarScreenShot.jpg',
        projectDesc: "A react built website that displays movies based on a criteria such as genre or popularity. The website pulls from themoviedb.org database to provide up to date information about the movie and who stars in them."
      })
    }

    else if (project == "dockerAPI"){
      this.setState({
        projectImage: process.env.PUBLIC_URL + '/img/project/docker.png',
        projectDesc: "A small program keeping track of students, information associated with them, the courses their taking, and the assignments associated with them. This utilizes a mongodb database within a seperate docker container."
      })
    }
  }


  render(){
    return (
      <div>
        <div className="showcaseTitle">
           Projects:
        </div>

        <div className="showcaseProjects">

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/unityGame.jpg'} alt=""/>
            <div className="projectTitle">Unity Project</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/portfolioScreenshot.jpg'} alt=""/>
            <div className="projectTitle">Portfolio Website</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png'} alt=""/>
            <div className="projectTitle">Solar AR</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/movieStarScreenShot.jpg'} alt=""/>
            <div className="projectTitle">Movie Star</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/docker.png'} alt=""/>
            <div className="projectTitle">Tarpaulin Api</div>
          </div>

        </div>

        <div className="externalDisplay" id="display">
          <div className="displayProject">
            <img className="displayImage"  src={process.env.PUBLIC_URL + '/img/project/unityGame.jpg'} alt=""/>

            <div className="displayDisc">
              <h3 className="displayTitle">Project Tile</h3>
              <p className="displayProjectDisc">
                This is where the bit of text will be that will discribe what the project is.
              </p>
              <div className="displayExis">

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Project;

// Unity
// <a href="https://github.com/asnow4u/UnityNatureProject/" target="_blank" rel="noopener noreferrer">

//
// Portfolio
// <a href="https://github.com/asnow4u/myPortfolio/" target="_blank" rel="noopener noreferrer">

//
// SolarAR
// <a href="https://github.com/OSU-2019-Capstone-CS19/Educational-AR-WebXR-App" target="_blank" rel="noopener noreferrer">

//
// MovieStar
// <a href="https://github.com/osu-cs419-w20/final-project-group2" target="_blank" rel="noopener noreferrer">

//
// Cloud API
  // <a href="https://github.com/osu-cs493-sp19/final-project-great-team-name" target="_blank" rel="noopener noreferrer">
