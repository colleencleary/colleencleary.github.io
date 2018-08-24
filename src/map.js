import React, { Component } from 'react';

class HomeMap extends Component {
  render() {
    return (
      <div>

      <div className="line1"></div>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="content container" id="homepage">
      <div id="home-map" className="justify-center">
        <div className="toprow row justify-space-between">
          <div className="icon col tip">
            <img onClick={()=>{
                this.props.toggleProjects()}} id="work-icon" src="/assets/satellite.png" alt="Projects"/>
          </div>
          <div className="icon col tip">
            <img onClick={()=>{
                this.props.toggleContact()}} id="contact-icon" className="pull-right" src="/assets/ufo.png" alt="Contact"/>
          </div>
        </div>
        <div className="middlerow icon tip">
            <img onClick={()=>{
                this.props.toggleAbout()}} className="tip" id="about-icon" src="/assets/astronaut.png" alt="About"/>
        </div>
        <div className="bottomrow row">
          <div className="icon col tip">
            <img onClick={()=>{
                this.props.toggleScience()}} className="tip" id="science-icon" src="/assets/galaxy.png" alt="Science"/>
          </div>
          <div className="icon col tip">
            <a target="_blank" href="https://drive.google.com/file/d/1rW12_z9n3CD7wcd9-AGNARm_f79uW-eg/view"><img id="resume-icon" className="pull-right tip" src="/assets/saturn.png" alt="Resume"/></a>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default HomeMap;
