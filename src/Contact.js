import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="about-container container content">
        <img alt="Colleen Cleary" src="/assets/profile.png" id="aboutimage"/>
        <h1>Get in touch!</h1>
        <p className="col-7"><a href="mailto:cleary.ce@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a> Email: <a href="mailto:cleary.ce@gmail.com" target="_blank">cleary.ce@gmail.com</a> </p>

        <p className="col-7"><a href="https://twitter.com/marsrollherover?lang=en" target="_blank"><i className="fa fa-twitter"></i></a> Twitter: @<a href="https://twitter.com/marsrollherover?lang=en" target="_blank">MarsRollHerOver</a> </p>

        <p className="col-7"><a href="https://www.linkedin.com/in/colleen-cleary/" target="_blank"><i className="fa fa-linkedin-square"></i></a> LinkedIn: <a href="https://www.linkedin.com/in/colleen-cleary/" target="_blank">Colleen Cleary</a> </p>

        <p className="col-7"><a href="https://github.com/colleencleary" target="_blank"><i className="fa fa-github-alt"></i></a> Github: <a href="https://github.com/colleencleary" target="_blank">colleencleary</a> </p>

        <p className="col-7"><a href="https://drive.google.com/file/d/1rW12_z9n3CD7wcd9-AGNARm_f79uW-eg/view" target="_blank"><i className="fa fa-user-secret"></i>Resume</a> </p>

        <img className="about-small-icon" src="/assets/ufo.png" alt="Contact"/>
      </div>
    );
  }
}

export default Contact;
