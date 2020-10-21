import React from 'react';
import '../style/profilePicture.css';

class ProfilePicture extends React.Component {

  render() {
    return (
      <div className="pictureColumn">
        <div className="backgroundBox"></div>
        <img className="profilePicture" src={process.env.PUBLIC_URL + '/img/image2.jpg'} alt="something"/>
        <div className="line"></div>
      </div>
    );
  }

}

export default ProfilePicture;
