import React from 'react';
import '../style/navbar.css';


class Navbar extends React.Component {

  constructor(){
    super();
    this.state = {
      gitLinkFile: process.env.PUBLIC_URL + '/img/navBar/gitTab.png',
      resumeLinkFile: process.env.PUBLIC_URL + '/img/navBar/resumeLink.png',
      linkedInFile: process.env.PUBLIC_URL + '/img/navBar/linkedin.png'
    };
  }

  HoverNavLink = (hover, link) => {

    if (hover){

      if (link == "git"){
        this.setState({gitLinkFile: process.env.PUBLIC_URL + '/img/navBar/gitTab_hover.png'});
        let button = document.getElementById("gitLink").style.backgroundColor = "black";
        let desc = document.getElementById("gitDesc").style.display = "block";
      }

      else if (link == "resume"){
        this.setState({resumeLinkFile: process.env.PUBLIC_URL + '/img/navBar/resumeLink_hover.png'});
        let button = document.getElementById("resumeLink").style.backgroundColor = "black";
        let desc = document.getElementById("resumeDesc").style.display = "block";
      }

      else if (link == "linkedIn"){
        let button = document.getElementById("linkedInLink").style.backgroundColor = "black";
        let desc = document.getElementById("linkedInDesc").style.display = "block";
      }

    //Not hovering
    } else {

      if (link == "git"){
        this.setState({gitLinkFile: process.env.PUBLIC_URL + '/img/navBar/gitTab.png'});
        let button = document.getElementById("gitLink").style.backgroundColor = "rgb(204, 197, 0)";
        let desc = document.getElementById("gitDesc").style.display = "none";
      }

      else if (link == "resume"){
        this.setState({resumeLinkFile: process.env.PUBLIC_URL + '/img/navBar/resumeLink.png'});
        let button = document.getElementById("resumeLink").style.backgroundColor = "rgb(204, 197, 0)";
        let desc = document.getElementById("resumeDesc").style.display = "none";
      }

      else if (link == "linkedIn"){
        let button = document.getElementById("linkedInLink").style.backgroundColor = "rgb(204, 197, 0)";
        let desc = document.getElementById("linkedInDesc").style.display = "none";
      }
    }
  }


  render() {

    return (

      <div className="navWrapper">

        <div className="navLink">
          <a href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noopener noreferrer">
            <button className="button" id="resumeLink" onMouseOver={() => this.HoverNavLink(true, "resume")} onMouseOut={() => this.HoverNavLink(false, "resume")}>
              <img className="linkImage" src={this.state.resumeLinkFile} alt=""/>
            </button>
            <h5 className="tabDesc" id="resumeDesc">Resume</h5>
          </a>
        </div>

        <div className="navLink">
          <a href="https://github.com/asnow4u?tab=repositories" target="_blank" rel="noopener noreferrer">
            <button className="button" id="gitLink"  onMouseOver={() => this.HoverNavLink(true, "git")} onMouseOut={() => this.HoverNavLink(false, "git")}>
              <img className="linkImage" src={this.state.gitLinkFile} alt=""/>
            </button>
            <h5 className="tabDesc" id="gitDesc">Github</h5>
          </a>
        </div>

        <div className="navLink">
          <a href="https://www.linkedin.com/in/asnow4u/" target="_blank" rel="noopener noreferrer">
            <button className="button" id="linkedInLink"  onMouseOver={() => this.HoverNavLink(true, "linkedIn")} onMouseOut={() => this.HoverNavLink(false, "linkedIn")}>
              <img className="linkImage" src={this.state.linkedInFile} alt=""/>
            </button>
            <h5 className="tabDesc" id="linkedInDesc">LinkedIn</h5>
          </a>
        </div>

      </div>
    );
  }
}

export default Navbar;
