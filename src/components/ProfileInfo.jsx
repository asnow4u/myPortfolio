import React from 'react';
import '../style/profileInfo.css';

class ProfileInfo extends React.Component {

  render() {
    return (
      <div className="profileInfoDiv">
        <div className='hello'>
          Hi There,
        </div>
        <div className='name'>
          I'm Andrew
        </div>
        <div className='job'>
          Software Engineer
        </div>
      </div>
    );
  }

}

export default ProfileInfo;
