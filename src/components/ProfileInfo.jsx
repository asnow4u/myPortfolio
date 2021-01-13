import React from 'react';
import { Link } from 'react-router-dom';
// import {UpdateNavLinks} from './Navbar.jsx';
import '../style/profileInfo.css';


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
        <div className="profileJob">
          Software Engineer
        </div>

        <div className="continueDiv" id="continueDiv">
          <Link to="/aboutme" onClick={() => this.UpdateLinks()}>
            <button className="continueArrowButton" id="arrowButton" onMouseOver={() => this.ArrowHover(true)} onMouseOut={() => this.ArrowHover(false)}>
              <img src={this.state.continueArrow}/>
            </button>
          </Link>
        </div>
      </div>
    );
  }

}

export default ProfileInfo;


// <svg width="18px" height="17px" viewBox="-1 0 18 17">
//   <g>
//     <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
//     <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
//     <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
//   </g>
// </svg>
