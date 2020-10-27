import React from 'react';
import '../style/profilePicture.css';

class ProfilePicture extends React.Component {

  render() {
    return (
      <div className="pictureColumn">
        <img className="profilePicture" src={process.env.PUBLIC_URL + '/img/image2.jpg'} alt=""/>
        <div className="profileBackgroundBar"></div>
      </div>
    );
  }

}

export default ProfilePicture;
