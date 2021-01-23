import React from 'react';
import '../style/profile.css';


class ProfileInfo extends React.Component {

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
