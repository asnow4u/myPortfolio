import React from 'react';
import '../style//aboutme/contactInfo.css';

class ContactInfo extends React.Component {

  render() {
    return (
      <div>
        <div className="contactInfoDiv">
          <div className="contactTitle">
            Lets Talk:
          </div>
          <div className="contactLinks">
            <div>Email: asnow4u@gmail.com</div>
            <div>Github: github.com/asnow4u</div>
            <div>LinkedIn: linkedin.com/in/asnow4u</div>
            <div>TwitterHandle: @asnow4u</div>
          </div>
        </div>
      </div>
    );
  }

}

export default ContactInfo;
