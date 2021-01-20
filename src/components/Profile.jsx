import React from 'react';
import { Link } from 'react-router-dom';
import '../style/profile.css';


class ProfileInfo extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      continueArrow: process.env.PUBLIC_URL + '/img/continueArrow.png'
    };
  }

  UpdateLinks = () => {

    //Callback function to establish route change
    this.props.appCallBack(true);

    //Reset profileTab
    let button = document.getElementById("profileLink").style.backgroundColor = "rgb(204, 197, 0)";

    //Set profileTab
    button = document.getElementById("skillLink").style.backgroundColor = "black";
  }


  ArrowHover = (hover) => {
    if (hover){
      this.setState({continueArrow: process.env.PUBLIC_URL + '/img/continueArrow_hover.png'});
      let element = document.getElementById("continueDiv").style.backgroundColor = "black";
      element = document.getElementById("arrowButton").style.backgroundColor = "black";
    }

    else {
      this.setState({continueArrow: process.env.PUBLIC_URL + '/img/continueArrow.png'});
      let element = document.getElementById("continueDiv").style.backgroundColor = "rgb(204, 197, 0)";
      element = document.getElementById("arrowButton").style.backgroundColor = "rgb(204, 197, 0)";
    }
  }


  render() {
    return (
      <div className="profileInfo">

        <div className="profileName">
          Andrew Snow
        </div>
        <div className="barDivider"></div>
        <div className="profileJob">
          Software Engineer
        </div>

      </div>
    );
  }

}

export default ProfileInfo;
