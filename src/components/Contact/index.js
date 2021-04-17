import React from 'react';
import '../styles.css'


function Contact(){
    return(
        
<div className="container">
    <div className="contact-me">
        <h2>Contact Me</h2>
    </div>
  <form>
  <div className="row">
    <div className="col-25">
      <label for="fname">First Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="lname">Last Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="lname">Email</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your email.."/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="country">Country</label>
    </div>
    <div className="col-75">
      <select id="country" name="country">
        <option value="australia">USA</option>
        <option value="canada">Canada</option>
        <option value="usa">Haiti</option>
      </select>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label for="subject">Subject</label>
    </div>
    <div className="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    </div>
  </div>
  <div className="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>
    )
}

export default Contact;