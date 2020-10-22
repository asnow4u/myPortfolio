import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/navbar.css';




class Navbar extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        profileHover: false,
        projectHover: false,
        contactHover: false,
        profileFile: process.env.PUBLIC_URL + '/img/profile_hover.png',
        projectFile: process.env.PUBLIC_URL + '/img/project.png',
        contactFile: process.env.PUBLIC_URL + '/img/contact.png'
      };
  }

  /*
    Profile
    updateNavProfile: Updates navBar when an profile is clicked
    hoverProfileToggle: Updates profile icon and background when hovered over
  */
  updateNavProfile = () => {
    //Update profile button
    let button = document.getElementById("profileLink").style.backgroundColor = "black";
    this.setState({profileFile: process.env.PUBLIC_URL + '/img/profile_hover.png'});

    //Reset project button and icon
    button = document.getElementById("projectLink").style.backgroundColor = "rgb(204, 197, 0)";
    this.setState({projectFile: process.env.PUBLIC_URL + '/img/project.png'});

    //Reset contact button and icon
    button = document.getElementById("contactLink").style.backgroundColor = "rgb(204, 197, 0)";
    this.setState({contactFile: process.env.PUBLIC_URL + '/img/contact.png'});
  }

  hoverProfileToggle = (hover) =>{
    const urlString = window.location.pathname;
    if (urlString == '/projects' || urlString == '/contact'){

      if (hover){
        this.setState({profileFile: process.env.PUBLIC_URL + '/img/profile_hover.png'});
        let button = document.getElementById("profileLink").style.backgroundColor = "black";

      } else {

        this.setState({profileFile: process.env.PUBLIC_URL + '/img/profile.png'});
        let button = document.getElementById("profileLink").style.backgroundColor = "rgb(204, 197, 0)";
      }
    }
  }


  /*
    Project
    updateNavProject: Updates navBar when an project is clicked
    hoverProjectToggle: Updates project icon and background when hovered over
  */
  updateNavProject = () => {
    let button = document.getElementById("projectLink").style.backgroundColor = "black";
    this.setState({projectFile: process.env.PUBLIC_URL + '/img/project_hover.png'});

    //Reset profile button and icon
    button = document.getElementById("profileLink").style.backgroundColor = "rgb(204, 197, 0)";
    this.setState({profileFile: process.env.PUBLIC_URL + '/img/profile.png'});

    //Reset contact button and icon
    button = document.getElementById("contactLink").style.backgroundColor = "rgb(204, 197, 0)";
    this.setState({contactFile: process.env.PUBLIC_URL + '/img/contact.png'});
  }

  hoverProjectToggle = (hover) => {
    const urlString = window.location.pathname;
    if (urlString != '/projects'){

      if (hover){
        this.setState({projectFile: process.env.PUBLIC_URL + '/img/project_hover.png'});
        let button = document.getElementById("projectLink").style.backgroundColor = "black";

      } else {

        this.setState({projectFile: process.env.PUBLIC_URL + '/img/project.png'});
        let button = document.getElementById("projectLink").style.backgroundColor = "rgb(204, 197, 0)";
      }
    }
  }


  /*
    Contact
    updateNavContact: Updates navBar when an contact is clicked
    hoverContactToggle: Updates contact icon and background when hovered over
  */
  updateNavContact = () => {
    let button = document.getElementById("contactLink").style.backgroundColor = "black";
    this.setState({contactFile: process.env.PUBLIC_URL + '/img/contact_hover.png'});

    //Reset profile button and icon
    button = document.getElementById("profileLink").style.backgroundColor = "rgb(204, 197, 0)";
    this.setState({profileFile: process.env.PUBLIC_URL + '/img/profile.png'});

    //Reset project button and icon
    button = document.getElementById("projectLink").style.backgroundColor = "rgb(204, 197, 0)";
    this.setState({projectFile: process.env.PUBLIC_URL + '/img/project.png'});
  }

  hoverContactToggle = (hover) => {
    const urlString = window.location.pathname;
    if (urlString != '/contact'){

      if (hover){
        this.setState({contactFile: process.env.PUBLIC_URL + '/img/contact_hover.png'});
        let button = document.getElementById("contactLink").style.backgroundColor = "black";

      } else {

        this.setState({contactFile: process.env.PUBLIC_URL + '/img/contact.png'});
        let button = document.getElementById("contactLink").style.backgroundColor = "rgb(204, 197, 0)";
      }
    }
  }


  render() {

    return (
      <div className="navDiv">
        <Container>
          <Row>
            <Link to="/" onClick={this.updateNavProfile}>
              <button className="button homeButton" id="profileLink" onMouseOver={() => this.hoverProfileToggle(true)} onMouseOut={() => this.hoverProfileToggle(false)}>
                <img className="linkImage" id="homeImage" src={this.state.profileFile}/>
              </button>
            </Link>
          </Row>
          <Row>
            <Link to="/projects" onClick={this.updateNavProject}>
              <button className="button" id="projectLink" onMouseOver={() => this.hoverProjectToggle(true)} onMouseOut={() => this.hoverProjectToggle(false)}>
                <img className="linkImage" id="projectImage" src={this.state.projectFile}/>
              </button>
            </Link>
          </Row>
          <Row>
            <Link to="/contact" onClick={this.updateNavContact}>
              <button className="button" id="contactLink" onMouseOver={() => this.hoverContactToggle(true)} onMouseOut={() => this.hoverContactToggle(false)}>
                <img className="linkImage" id="contactImage" src={this.state.contactFile}/>
              </button>
            </Link>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navbar;
