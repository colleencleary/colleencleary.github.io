import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-container container content">
        <img alt="Colleen Cleary" src="/assets/profile.png" id="aboutimage"/>
        <h1>Hi!</h1>
        <h1>I'm Colleen.</h1>
        <p className="col-7"> I'm a web developer/software engineer/astrophysicist based in New York City.</p>
        <p className="col-7"> I am a passionate, driven, and curious full-stack developer and lifelong learner with a knack for problem-solving. With my background in Physics and through my collaborative and independent computationally-based astronomy research, I’ve developed a creative, yet practical approach to projects, as well as a keen eye for detail.</p>

        <p className="col-7">When I'm not working on my developer skills, I'm trying to answer questions about the Universe as an undergraduate researcher (and future Helen Fellow) at the American Museum of Natural History in New York City. You can also find me jamming for the Long Island Roller Rebels as Mars RollHerOver.</p>

        <img className="about-small-icon" src="/assets/helmet.png" alt="About"/>
      </div>
    );
  }
}

export default About;
