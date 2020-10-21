import React from 'react';
import '../style/profileInfo.css';

class ProfileInfo extends React.Component {

  render() {
    return (
      <div className="profileInfoDiv">
        <h1 className="firstName">Andrew</h1>
        <h1 className="lastName">Snow</h1>
        <div className="profileBlog">
          <p>
            Sed porta velit tellus, at vehicula ligula venenatis aliquet. Quisque molestie sapien leo, nec sollicitudin neque volutpat at. Curabitur sollicitudin ut metus at gravida. Pellentesque vehicula erat a magna semper, a suscipit ipsum bibendum. Phasellus vitae consectetur sapien.
          </p>
        </div>
      </div>
    );
  }

}

export default ProfileInfo;
