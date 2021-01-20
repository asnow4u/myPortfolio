import React from 'react';
import '../style/contact.css';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }

  onNameChange(event) {
    this.setState({name: event.target.value});
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});
  }

  onMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    //TODO: get the email working
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="section">
        <div className="sectionTitle">Lets Talk...</div>
        <div className="barDivider"></div>

        <form className="contactForm" id="contactForm" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="formGroup">
            <label htmlFor="name">Name:</label>
            <input type="text" className="formControl" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>

          <div className="formGroup">
            <label htmlFor="exampleEmail">Email address:</label>
            <input type="email" className="formControl" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message:</label>
            <textarea className="formControl" value={this.state.message} onChange={this.onMessageChange.bind(this)}></textarea>
          </div>
          <button type="submit" className="submitButton">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
