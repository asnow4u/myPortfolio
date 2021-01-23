import React from 'react';
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
      slideShowImages: [],
      slideNum: ""
    }
    this.timerID = 0;
  }


  componentWillUnmount() {
    this.ClearTimer(this.timerID);
  }

  SlideShowTimer() {
    this.timerID = setInterval(() => {
      console.log("Testing");

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
    }, 2500);
  }

  ClearTimer() {
    clearInterval(this.timerID);
  }


  CloseProjectDisplay = () => {

    let display = document.getElementById("display").style.display = "none";
    let demo = document.getElementById("demoButton").style.display = "block";
    clearInterval(this.timerID);
  }


  UpdateProjectDisplay = (project) => {

    let display = document.getElementById("display").style.display = "block";
    this.SlideShowTimer();

    if (project == "Unity"){

      let demo = document.getElementById("demoButton").style.display = "none";

      this.setState({
        projectTitle: "Unity VR Game",
        projectImage: process.env.PUBLIC_URL + '/img/project/unityGame.jpg',
        projectDesc: "A fun take on a 2D game in virtual reality where the level is wrapped around the player. Take the role of a forest guardian and defend your homeland from fiery invaders from the top of the mountain.",
        projectSkills: ["<Unity>", "<C#>", "<Oculus SDK>", "<VR>", "<Blender>"],
        projectGitHub: "https://github.com/asnow4u/UnityNatureProject/",
        slideShowImages: [process.env.PUBLIC_URL + '/img/project/unityGame.jpg', process.env.PUBLIC_URL + '/img/project/UnityScreenshot1.PNG', process.env.PUBLIC_URL + '/img/project/UnityScreenshot2.PNG', process.env.PUBLIC_URL + '/img/project/UnityScreenshot3.PNG'],
        slideNum: 0
      });
    }

    else if (project == "Portfolio"){

      let demo = document.getElementById("demoButton").style.display = "none";

      this.setState({
        projectTitle: "Portfolio Website",
        projectImage: process.env.PUBLIC_URL + '/img/project/portfolioScreenshot.jpg',
        projectDesc: "Welcome to the website your currently looking at. Built using React.js and hosted using GitPages. Explore around and feel free to contact me at the bottom of the page.",
        projectSkills: ["<React>", "<Responsive>", "<EmailJS>", "<JavaScript>", "<GitPages>"], //TODO: put email client here
        projectGitHub: "https://github.com/asnow4u/myPortfolio/",
        projectDemo: "",
        slideShowImages: [process.env.PUBLIC_URL + '/img/project/portfolioScreenshot.jpg', process.env.PUBLIC_URL + '/img/project/portfolioScreenshot1.jpg', process.env.PUBLIC_URL + '/img/project/portfolioScreenshot2.jpg', process.env.PUBLIC_URL + '/img/project/portfolioScreenshot3.jpg'],
        slideNum: 0
      })
    }

    else if (project == "SolarAR"){
      this.setState({
        projectTitle: "SolarAR",
        projectImage: process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png',
        projectDesc: "A web application using WebXR to help visualize the solar system. Utilizes Three.js to produce the 3D environment and simulate the physics of the solar system in your own space. Developed as a colab with Intel as a means of educating children about the sun and planets.",
        projectSkills: ["<WebXR>", "<Three.js>", "<AR>", "<JavaScript>", "<3D Physics>"],
        projectGitHub: "https://github.com/OSU-2019-Capstone-CS19/Educational-AR-WebXR-App",
        projectDemo: "https://osu-2019-capstone-cs19.github.io/Educational-AR-WebXR-App/dist",
        slideShowImages: [process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png', process.env.PUBLIC_URL + '/img/project/solarARScreenShot1.jpg', process.env.PUBLIC_URL + '/img/project/solarARScreenShot2.jpg', process.env.PUBLIC_URL + '/img/project/solarARScreenShot3.jpg', process.env.PUBLIC_URL + '/img/project/solarARScreenShot4.jpg', process.env.PUBLIC_URL + '/img/project/solarARScreenShot5.jpg'],
        slideNum: 0
      })
    }

    //This is currently broken
    else if (project == "MovieStar"){
      this.setState({
        projectTitle: "MovieStar",
        projectImage: process.env.PUBLIC_URL + '/img/project/MovieStarScreenShot1.PNG',
        projectDesc: "A react built website that displays movies based on a criteria such as genre or popularity. The website pulls from themoviedb.org database to provide up to date information about the movie and who stars in them.",
        projectSkills: ["<React>", "<API>", "<Emotion>", "<GitPages>"],
        projectGitHub: "https://github.com/osu-cs419-w20/final-project-group2",
        projectDemo: "https://osu-cs419-w20.github.io/final-project-group2/",
        slideShowImages: [process.env.PUBLIC_URL + '/img/project/MovieStarScreenShot1.PNG', process.env.PUBLIC_URL + '/img/project/MovieStarScreenShot2.PNG', process.env.PUBLIC_URL + '/img/project/movieStarScreenShot3.jpg', process.env.PUBLIC_URL + '/img/project/MovieStarScreenShot4.PNG'],
        slideNum: 0
      })
    }
  }

  render(){

    return (
      <div className="section">
        <div className="sectionTitle">Projects I've Done...</div>
        <div className="barDivider"></div>

        <div className="showcaseProjects">

          <div className="projectTile" onClick={() => this.UpdateProjectDisplay("SolarAR")}>
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/solarARScreenShot.png'} alt=""/>
            <div className="projectTitle">Solar AR</div>
          </div>

          <div className="projectTile" onClick={() => this.UpdateProjectDisplay("Portfolio")}>
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/portfolioScreenshot.jpg'} alt=""/>
            <div className="projectTitle">Portfolio Website</div>
          </div>

          <div className="projectTile" onClick={() => this.UpdateProjectDisplay("MovieStar")}>
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/movieStarScreenShot1.PNG'} alt=""/>
            <div className="projectTitle">Movie Star</div>
          </div>

          <div className="projectTile" onClick={() => this.UpdateProjectDisplay("Unity")}>
            <img className="projectImage" src={process.env.PUBLIC_URL + '/img/project/unityGame.jpg'} alt=""/>
            <div className="projectTitle">Unity VR Game</div>
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
                  <img className="displayButton" id="demoButton" src={process.env.PUBLIC_URL + '/img/project/demo.png'} alt=""/>
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
