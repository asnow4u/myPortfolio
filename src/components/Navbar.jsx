import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../style/navbar.css';




class Navbar extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        profileHover: false,
        projectHover: false,
        contactHover: false,
        profileFile: process.env.PUBLIC_URL + '/img/profile.png',
        projectFile: process.env.PUBLIC_URL + '/img/project.png',
        contactFile: process.env.PUBLIC_URL + '/img/contact.png'
      };
  }


  hoverProfileToggle = () => {
    this.setState({profileHover: !this.state.profileHover});

    if (this.state.profileHover){
      this.setState({profileFile: process.env.PUBLIC_URL + '/img/profile.png'});
    } else {
      this.setState({profileFile: process.env.PUBLIC_URL + '/img/profile_hover.png'});
    }
  }

  hoverProjectToggle = () => {
    this.setState({projectHover: !this.state.projectHover});

    if (this.state.projectHover){
      this.setState({projectFile: process.env.PUBLIC_URL + '/img/project.png'});
    } else {
      this.setState({projectFile: process.env.PUBLIC_URL + '/img/project_hover.png'});
    }
  }

  hoverContactToggle = () => {
    this.setState({contactHover: !this.state.contactHover});

    if (this.state.contactHover){
      this.setState({contactFile: process.env.PUBLIC_URL + '/img/contact.png'});
    } else {
      this.setState({contactFile: process.env.PUBLIC_URL + '/img/contact_hover.png'});
    }
  }


  render() {
    return (
      <div className="navDiv">
        <Container>
          <Row>
            <button className="button homeButton" onMouseOver={this.hoverProfileToggle} onMouseOut={this.hoverProfileToggle}>
              <img className="linkImage" id="homeImage" src={this.state.profileFile}/>
            </button>
          </Row>
          <Row>
            <button className="button projectButton" onMouseOver={this.hoverProjectToggle} onMouseOut={this.hoverProjectToggle}>
              <img className="linkImage" id="projectImage" src={this.state.projectFile}/>
            </button>
          </Row>
          <Row>
            <button className="button contactButton" onMouseOver={this.hoverContactToggle} onMouseOut={this.hoverContactToggle}>
              <img className="linkImage" id="contactImage" src={this.state.contactFile}/>
            </button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navbar;
