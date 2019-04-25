import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <body>
        <div class="title">
           <h1>Contact Page</h1>
        </div>
        <div class="form">
            <p class="email">Email:</p>
            <input/>
            <p>Email Content</p>
            <textarea class="emailCont"></textarea>
            <p>Phone Number:</p>
            <p>07582 831 923</p>
            <p>Address:<br/><br/>
            30 Shropshire Drive,<br/>
                Coventry,<br/>
                West Midlands,<br/>
                CV3 1PH
            </p>
            
        </div>
    </body>

  );
}

export default Contact;