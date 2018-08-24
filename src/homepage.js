import React, { Component } from 'react';
import Header from './header-nav.js';
import HomeMap from './map.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import About from './About.js';
import Science from './Science.js';

class HomePage extends Component {
  constructor(props){
  super(props)
  this.state = {
    homepageIsVisible: true,
    navIsVisible: false,
    aboutIsVisible: false,
    contactIsVisible: false,
    projectsIsVisible: false,
    scienceIsVisible: false
  }
  this.toggleHome = this.toggleHome.bind(this)
  this.toggleNav = this.toggleNav.bind(this)
  this.toggleAbout = this.toggleAbout.bind(this)
  this.toggleContact = this.toggleContact.bind(this)
  this.toggleProjects = this.toggleProjects.bind(this)
  this.toggleScience = this.toggleScience.bind(this)
  }

  toggleHome(){
    this.setState({
      ['homepageIsVisible']: true,
      ['navIsVisible']: false,
      ['aboutIsVisible']: false,
      ['projectsIsVisible']: false,
      ['scienceIsVisible']: false,
      ['contactIsVisible']: false,
    })
}
toggleNav(){
  this.setState({
    ['navIsVisible']: !this.state['navIsVisible'],
  })
}
toggleAbout(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: true,
    ['projectsIsVisible']: false,
    ['scienceIsVisible']: false,
    ['contactIsVisible']: false,
  })
}
toggleProjects(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: false,
    ['projectsIsVisible']: true,
    ['scienceIsVisible']: false,
    ['contactIsVisible']: false,
  })
}
toggleScience(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: false,
    ['projectsIsVisible']: false,
    ['scienceIsVisible']: true,
    ['contactIsVisible']: false,
  })
}
toggleContact(){
  this.setState({
    ['homepageIsVisible']: false,
    ['navIsVisible']: false,
    ['aboutIsVisible']: false,
    ['projectsIsVisible']: false,
    ['scienceIsVisible']: false,
    ['contactIsVisible']: true,
  })
}

  render() {
    return (
      <div>
      <i onClick={()=>{
          this.toggleNav()}}className="fa fa-bars nav-btn"></i>
          <img className="star" id="star1" src="/assets/blue_star.png" alt="star" />
          <img className="star" id="star2" src="/assets/blue_star.png" alt="star" />
          <img className="star" id="star3" src="/assets/blue_star.png" alt="star" />
          <img className="star" id="star4" src="/assets/yellow_star.png" alt="star" />
          <img className="star" id="star5" src="/assets/yellow_star.png" alt="star" />
          <img className="star" id="star6" src="/assets/yellow_star.png" alt="star" />
          <img className="star" id="star7" src="/assets/gray_star.png" alt="star" />
          <img className="star" id="star8" src="/assets/gray_star.png" alt="star" />
          <img className="star" id="star9" src="/assets/gray_star.png" alt="star" />
      { this.state.navIsVisible ?
        <Header toggleHome={this.toggleHome}
          toggleAbout={this.toggleAbout}
          toggleNav={this.toggleNav}
          toggleContact={this.toggleContact}
          toggleScience={this.toggleScience}
          toggleProjects={this.toggleProjects}
          /> : ''}

        { this.state.homepageIsVisible ?
          <HomeMap toggleHome={this.toggleHome}
          toggleAbout={this.toggleAbout}
          toggleNav={this.toggleNav}
          toggleContact={this.toggleContact}
          toggleScience={this.toggleScience}
          toggleProjects={this.toggleProjects}
          /> : ''}

        { this.state.aboutIsVisible ?
          <About toggleHome={this.toggleHome}
          toggleAbout={this.toggleAbout}
          toggleNav={this.toggleNav}
          toggleContact={this.toggleContact}
          toggleScience={this.toggleScience}
          toggleProjects={this.toggleProjects}
          /> : ''}

        { this.state.contactIsVisible ?
          <Contact /> : ''}

        { this.state.projectsIsVisible ?
          <Projects /> : ''}

        { this.state.scienceIsVisible ?
          <Science /> : ''}

          <footer>
            <p>&copy; 2018 | Colleen Cleary</p>
            <div className="contact-info">
                <a href="mailto:cleary.ce@gmail.com" target="_blank"><i className="fa fa-envelope"></i></a>
                <a href="https://twitter.com/marsrollherover?lang=en" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/colleen-cleary/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                <a href="https://github.com/colleencleary" target="_blank"><i className="fa fa-github-alt"></i></a>

            </div>
          </footer>
      </div>
    );
  }
}

export default HomePage;
