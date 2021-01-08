import React from 'react';
import '../style/profilePicture.css';

class ProfilePicture extends React.Component {

  render() {
    return (

      <img className="profilePicture" src={process.env.PUBLIC_URL + '/img/image2.jpg'} alt=""/>
      
    );
  }

}

export default ProfilePicture;
