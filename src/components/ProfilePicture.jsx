import React from 'react';
import '../style/profilePicture.css';

class ProfilePicture extends React.Component {

  render() {
    return (
      <div>
        <img className="profilePicture" src={process.env.PUBLIC_URL + '/img/profileImage.jpg'} alt=""/>
      </div>
    );
  }

}

export default ProfilePicture;
