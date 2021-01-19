import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/project.css';

class Project extends React.Component {

  constructor(){
    super();
    this.state = {
      projectTitle: "",
      projectSkills: [],
      projectImage: "",
      projectDesc: "",
      projectGitHub: "",
      projectDemo: "",
      imageSlideShow: false,
      slideShowImages: [],
      slideNum: ""
    }
  }

  SwitchImage = () => {

    if (this.state.slideNum < this.state.slideShowImages.length -1){
      this.setState({
        projectImage: this.state.slideShowImages[this.state.slideNum + 1],
        slideNum: this.state.slideNum + 1
      });
    } else {
      this.setState({
        projectImage: this.state.slideShowImages[0],
        slideNum: 0
      });
    }

    if (this.state.imageSlideShow){
      setTimeout(this.SwitchImage, 3000);
    }
  }


  CloseProjectDisplay = () => {
    let display = document.getElementById("display").style.display = "none";


    this.setState({
      imageSlideShow: false
    });
  }


  UpdateProjectDisplay = (project) => {

    // setTimeout(this.SwitchImage, 3000); need to activate once
    // window.scrollTo(0,0);
    let display = document.getElementById("display").style.display = "block";

    if (project == "Unity"){
      this.setState({
        projectTitle: "Unity",
        projectImage: process.env.PUBLIC_URL + '/img/project/unityGame.jpg',
        projectDesc: "A fun take on a 2D game in VR. Currently in a very early stage of development and design. Created using Unity with Oculus SDK, and Blender for 3D assets and animation.",
        projectSkills: ["Unity", "C#", "3D Dev", "Oculus"],
        projectGitHub: "https://github.com/asnow4u/UnityNatureProject/",
        projectDemo: "https://github.com/asnow4u/UnityNatureProject/",
        imageSlideShow: true,
        slideShowImages: [process.env.PUBLIC_URL + '/img/project/unityGame.jpg', process.env.PUBLIC_URL + '/img/project/portfolioScreenshot.jpg'],
        slideNum: 0
      });
    }

    else if (project == "Portfolio"){
      this.setState({
        projectTitle: "Portfolio",
        projectImage: process.env.PUBLIC_URL + '/img/project/portfolioScreenshot.jpg',
        projectDesc: "Welcome to the website your currently looking at. Built using React and Bootstrap, and hosted using GitPages. Explore around and see what I have to offer you.",
        projectSkills: ["React"],
        projectGitHub: "https://github.com/asnow4u/myPortfolio/",
        projectDemo: ""
      })
    }

    else if (project == "SolarAR"){
      this.setState({
        projectTitle: "SolarAR",
        projectImage: process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png',
        projectDesc: "A web application using WebXR to help visualize the solar system. Utilizes Three.js to produce the 3D enviroment and replicate the physics of the solar system.",
        projectSkills: ["WebXR"],
        projectGitHub: "https://github.com/OSU-2019-Capstone-CS19/Educational-AR-WebXR-App",
        projectDemo: "https://github.com/OSU-2019-Capstone-CS19/Educational-AR-WebXR-App"
      })
    }

    else if (project == "MovieStar"){
      this.setState({
        projectTitle: "MovieStar",
        projectImage: process.env.PUBLIC_URL + '/img/project/movieStarScreenShot.jpg',
        projectDesc: "A react built website that displays movies based on a criteria such as genre or popularity. The website pulls from themoviedb.org database to provide up to date information about the movie and who stars in them.",
        projectSkills: ["React"],
        projectGitHub: "https://github.com/osu-cs419-w20/final-project-group2",
        projectDemo: "https://github.com/osu-cs419-w20/final-project-group2"
      })
    }

    else if (project == "DockerAPI"){
      this.setState({
        projectTitle: "API",
        projectImage: process.env.PUBLIC_URL + '/img/project/docker.png',
        projectDesc: "A small program keeping track of students, information associated with them, the courses their taking, and the assignments associated with them. This utilizes a mongodb database within a seperate docker container.",
        projectSkills: ["Docker"],
        projectGitHub: "https://github.com/osu-cs493-sp19/final-project-great-team-name",
        projectDemo: "https://github.com/osu-cs493-sp19/final-project-great-team-name"
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
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/unityGame.jpg'} alt="" onClick={() => this.UpdateProjectDisplay("Unity")}/>
            <div className="projectTitle">Unity Project</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/portfolioScreenshot.jpg'} alt="" onClick={() => this.UpdateProjectDisplay("Portfolio")}/>
            <div className="projectTitle">Portfolio Website</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png'} alt="" onClick={() => this.UpdateProjectDisplay("SolarAR")}/>
            <div className="projectTitle">Solar AR</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/movieStarScreenShot.jpg'} alt="" onClick={() => this.UpdateProjectDisplay("MovieStar")}/>
            <div className="projectTitle">Movie Star</div>
          </div>

          <div className="projectTile">
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/docker.png'} alt=""/>
            <div className="projectTitle">Tarpaulin Api</div>
          </div>

        </div>

        <div className="externalDisplay" id="display">
          <div className="displayProject">
            <h3 className="displayTitle">{this.state.projectTitle}</h3>

            <div className="displayDisc">
              <p className="projectDisc">
                {this.state.projectDesc}
              </p>

              <div className="displayButtons">
                <a href={this.state.projectGitHub} target="_blank" rel="noopener noreferrer">
                  <img className="displayButton" src={process.env.PUBLIC_URL + '/img/project/github.png'} alt=""/>
                </a>
                <a href={this.state.projectDemo} target="_blank" rel="noopener noreferrer">
                  <img className="displayButton" src={process.env.PUBLIC_URL + '/img/project/demo.png'} alt=""/>
                </a>
                <img className="displayButton" src={process.env.PUBLIC_URL + '/img/project/exit.png'} alt="" onClick={() => this.CloseProjectDisplay()}/>
              </div>
            </div>

            <img className="displayProjectImage"  src={this.state.projectImage} alt=""/>

            <div className="displaySkills">
              <h6 className="projectSkill" id="skill0"> {this.state.projectSkills[0]} </h6>
              <h6 className="projectSkill" id="skill1"> {this.state.projectSkills[1]} </h6>
              <h6 className="projectSkill" id="skill2"> {this.state.projectSkills[2]} </h6>
              <h6 className="projectSkill" id="skill2"> {this.state.projectSkills[3]} </h6>
              <h6 className="projectSkill" id="skill2"> {this.state.projectSkills[4]} </h6>
            </div>

          </div>
        </div>

      </div>
    );
  }

}

export default Project;
