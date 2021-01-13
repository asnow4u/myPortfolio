import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';


class Navbar extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        profileHover: false,
        skillHover: false,
        projectHover: false,
        contactHover: false,
        profileFile: process.env.PUBLIC_URL + '/img/navBar/profileTab_hover.png',
        skillFile: process.env.PUBLIC_URL + '/img/navBar/skillTab.png',
        projectFile: process.env.PUBLIC_URL + '/img/navBar/projectTab.png',
        contactFile: process.env.PUBLIC_URL + '/img/navBar/contactTab.png',
        gitLinkFile: process.env.PUBLIC_URL + '/img/navBar/gitTab.png',
        resumeLinkFile: process.env.PUBLIC_URL + '/img/navBar/resumeLink.png'
      };
  }


  UpdateNavLinks = (link) => {

    window.scrollTo(0,0);

    //Reset all button backgrounds
    let button = document.getElementById("profileLink").style.backgroundColor = "rgb(204, 197, 0)";
    button = document.getElementById("skillLink").style.backgroundColor = "rgb(204, 197, 0)";
    button = document.getElementById("projectLink").style.backgroundColor = "rgb(204, 197, 0)";
    button = document.getElementById("contactLink").style.backgroundColor = "rgb(204, 197, 0)";

    //Reset all imgs
    this.setState({profileFile: process.env.PUBLIC_URL + '/img/navBar/profileTab.png'});
    this.setState({skillFile: process.env.PUBLIC_URL + '/img/navBar/skillTab.png'});
    this.setState({projectFile: process.env.PUBLIC_URL + '/img/navBar/projectTab.png'});
    this.setState({contactFile: process.env.PUBLIC_URL + '/img/navBar/contactTab.png'});


    if (link == "profile"){
      let button = document.getElementById("profileLink").style.backgroundColor = "black";
      this.setState({profileFile: process.env.PUBLIC_URL + '/img/navBar/profileTab_hover.png'});
    }

    else if (link == "skill"){
      let button = document.getElementById("skillLink").style.backgroundColor = "black";
      this.setState({skillFile: process.env.PUBLIC_URL + '/img/navBar/skillTab_hover.png'});
    }

    else if (link == "project"){
      let button = document.getElementById("projectLink").style.backgroundColor = "black";
      this.setState({projectFile: process.env.PUBLIC_URL + '/img/navBar/projectTab_hover.png'});
    }

    else if (link == "contact"){
      let button = document.getElementById("contactLink").style.backgroundColor = "black";
      this.setState({contactFile: process.env.PUBLIC_URL + '/img/navBar/contactTab_hover.png'});
    }
  }


  HoverNavLink = (hover, link) => {
    const urlString = window.location.pathname;

    if (hover){

      if (link == "profile"){
        if (urlString != '/'){
          this.setState({profileFile: process.env.PUBLIC_URL + '/img/navBar/profileTab_hover.png'});
          let button = document.getElementById("profileLink").style.backgroundColor = "black";
        }
      }

      else if (link == "skill"){
        if (urlString != '/aboutme'){
          this.setState({skillFile: process.env.PUBLIC_URL + '/img/navBar/skillTab_hover.png'});
          let button = document.getElementById("skillLink").style.backgroundColor = "black";
        }
      }

      else if (link == "project"){
        if (urlString != '/projects'){
          this.setState({projectFile: process.env.PUBLIC_URL + '/img/navBar/projectTab_hover.png'});
          let button = document.getElementById("projectLink").style.backgroundColor = "black";
        }
      }

      else if (link == "contact"){
        if (urlString != "/contact"){
          this.setState({contactFile: process.env.PUBLIC_URL + '/img/navBar/contactTab_hover.png'});
          let button = document.getElementById("contactLink").style.backgroundColor = "black";
        }
      }

      else if (link == "git"){
        this.setState({gitLinkFile: process.env.PUBLIC_URL + '/img/navBar/gitTab_hover.png'});
        let button = document.getElementById("gitLink").style.backgroundColor = "black";
      }

      else if (link == "resume"){
        this.setState({resumeLinkFile: process.env.PUBLIC_URL + '/img/navBar/resumeLink_hover.png'});
        let button = document.getElementById("resumeLink").style.backgroundColor = "black";
      }

    //Not hovering
    } else {

      if (link == "profile"){
        if (urlString != '/'){
          this.setState({profileFile: process.env.PUBLIC_URL + '/img/navBar/profileTab.png'});
          let button = document.getElementById("profileLink").style.backgroundColor = "rgb(204, 197, 0)";
        }
      }

      else if (link == "skill"){
        if (urlString != '/aboutme'){
          this.setState({skillFile: process.env.PUBLIC_URL + '/img/navBar/skillTab.png'});
          let button = document.getElementById("skillLink").style.backgroundColor = "rgb(204, 197, 0)";
        }
      }

      else if (link == "project"){
        if (urlString != '/projects'){
          this.setState({projectFile: process.env.PUBLIC_URL + '/img/navBar/projectTab.png'});
          let button = document.getElementById("projectLink").style.backgroundColor = "rgb(204, 197, 0)";
        }
      }

      else if (link == "contact"){
        if (urlString != "/contact"){
          this.setState({contactFile: process.env.PUBLIC_URL + '/img/navBar/contactTab.png'});
          let button = document.getElementById("contactLink").style.backgroundColor = "rgb(204, 197, 0)";
        }
      }

      else if (link == "git"){
        this.setState({gitLinkFile: process.env.PUBLIC_URL + '/img/navBar/gitTab.png'});
        let button = document.getElementById("gitLink").style.backgroundColor = "rgb(204, 197, 0)";
      }

      else if (link == "resume"){
        this.setState({resumeLinkFile: process.env.PUBLIC_URL + '/img/navBar/resumeLink.png'});
        let button = document.getElementById("resumeLink").style.backgroundColor = "rgb(204, 197, 0)";
      }
    }
  }


  render() {

    if (this.props.arrowLink){
      this.UpdateNavLinks("skill");
      this.props.appCallBack(false);
    }

    return (
      <div className="navWrapper">

        <Link to="/" onClick={() => this.UpdateNavLinks("profile")}>
          <button className="button homeButton" id="profileLink" onMouseOver={() => this.HoverNavLink(true, "profile")} onMouseOut={() => this.HoverNavLink(false, "profile")}>
            <img className="linkImage" id="homeImage" src={this.state.profileFile}/>
          </button>
        </Link>

        <Link to="/aboutme" onClick={() => this.UpdateNavLinks("skill")}>
          <button className="button" id="skillLink" onMouseOver={() => this.HoverNavLink(true, "skill")} onMouseOut={() => this.HoverNavLink(false, "skill")}>
            <img className="linkImage" id="skillImage" src={this.state.skillFile}/>
          </button>
        </Link>

        <Link to="/projects" onClick={() => this.UpdateNavLinks("project")}>
          <button className="button" id="projectLink" onMouseOver={() => this.HoverNavLink(true, "project")} onMouseOut={() => this.HoverNavLink(false, "project")}>
            <img className="linkImage" id="projectImage" src={this.state.projectFile}/>
          </button>
        </Link>

        <Link to="/contact" onClick={() => this.UpdateNavLinks("contact")}>
          <button className="button" id="contactLink" onMouseOver={() => this.HoverNavLink(true, "contact")} onMouseOut={() => this.HoverNavLink(false, "contact")}>
            <img className="linkImage" id="contactImage" src={this.state.contactFile}/>
          </button>
        </Link>

        <a href="https://github.com/asnow4u?tab=repositories" target="_blank" rel="noopener noreferrer">
          <button className="button" id="gitLink" onMouseOver={() => this.HoverNavLink(true, "git")} onMouseOut={() => this.HoverNavLink(false, "git")}>
            <img className="linkImage" src={this.state.gitLinkFile}/>
          </button>
        </a>

        <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noopener noreferrer">
          <button className="button" id="resumeLink" onMouseOver={() => this.HoverNavLink(true, "resume")} onMouseOut={() => this.HoverNavLink(false, "resume")}>
            <img className="linkImage" src={this.state.resumeLinkFile}/>
          </button>
        </a>

      </div>
    );
  }
}

export default Navbar;
