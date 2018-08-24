import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="nav flex-column">
          <p onClick={()=>{
              this.props.toggleNav()}}><i className="fa fa-bars nav-btn"></i></p>
          <div onClick={()=>{
              this.props.toggleHome()}}>
            <img alt="Colleen Cleary" src="/assets/profile.png" id="profile"/>
            <h3>Colleen Cleary</h3>
            <h5>Web Developer</h5>
          </div>
          <a className="nav-link active" onClick={()=>{
              this.props.toggleHome()}}>Home</a>
          <a className="nav-link active" onClick={()=>{
              this.props.toggleAbout()}}>About</a>
          <a className="nav-link active" onClick={()=>{
              this.props.toggleProjects()}}>Projects</a>
          <a className="nav-link active" target="_blank" href="https://drive.google.com/file/d/1rW12_z9n3CD7wcd9-AGNARm_f79uW-eg/view">Resume</a>
          <a className="nav-link active" onClick={()=>{
              this.props.toggleScience()}}>Astronomy Research</a>
          <a className="nav-link contact active" onClick={()=>{
              this.props.toggleContact()}}>Contact</a>
        </nav>
      </div>
    );
  }
}

export default Header;
