import React from 'react';
import '../style/profileInfo.css';

class ProfileInfo extends React.Component {

  render() {
    return (
      <div>
        <div className="profileInfoDiv">
          <div className='profileHello'>
            Hey There!
          </div>
          <div className='profileName'>
            I'm Andrew
          </div>
          <div className='profileJob'>
            Software Engineer
          </div>
        </div>
      </div>
    );
  }

}

export default ProfileInfo;
