import React from 'react';
import './Contact.css';
import axios from 'axios';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  content: ''};

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleEmailSend = this.handleEmailSend.bind(this);
  }
  handleContentChange(e) {
    this.setState({content: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }
  handleEmailSend() {
    console.log("Content " + this.state.content);
    console.log("Email " + this.state.email);
    axios.post('http://localhost:55336/api/Charge/Test123?', this.state)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error) 
    })
  };

  render () {
    return (<body>
        <div class="title">
           <h1>Contact Page</h1>
        </div>
        <div class="form">
            <p class="email">Email:</p>
            <input type="text" name="emailAddress" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
            <p>Email Content</p>
            <textarea class="emailCont" type="text" name="emailAddress" placeholder="Email" value={this.state.content} onChange={this.handleContentChange}></textarea>
            <p>Phone Number:</p>
            <p>07582 831 923</p>
            <p>Address:<br/><br/>
            30 Shropshire Drive,<br/>
                Coventry,<br/>
                West Midlands,<br/>
                CV3 1PH
            </p>
            <button type="buttonm" onClick={this.handleEmailSend}>Send</button>
        </div>
    </body>);
  
};
};

export default Contact;