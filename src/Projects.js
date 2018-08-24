import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="content container projects">
          <h1>Projects</h1>
          <div className="row main-row">
            <div className="col">
              <a href="https://rebelsmanager.herokuapp.com/" target="_blank"><img className="img-thumbnail" alt="Rebels Manager" src="/assets/rebels.png" /></a>
              <div className="row justify-space-between project-row">
                <a className="col" href="https://rebelsmanager.herokuapp.com/" target="_blank"><h2>Rebels Manager</h2></a>
                <p className="col-3 contact-info" ><a href="https://github.com/colleencleary/rebelsmanager" target="_blank"><i className="fa fa-github-alt"></i></a></p>
              </div>
              <p>Rebels Manager is a roller derby league management app built with Django and PostGreSQL.</p>

            </div>
            <div className="col">
              <a href="https://weirdworldtourism.herokuapp.com/" target="_blank"><img className="img-thumbnail" alt="Weird World" src="/assets/weirdworld.png" /></a>

              <div className="row justify-space-between project-row">
              <a className="col" href="https://weirdworldtourism.herokuapp.com/" target="_blank"><h2>Weird World</h2></a>
              <p className="col-3 contact-info" ><a href="https://github.com/colleencleary/weirdworld" target="_blank"><i className="fa fa-github-alt"></i></a></p>
            </div>

              <p>Weird World is a collaborative project built with a PostGreSQL and Ruby on Rails back-end and a React front-end. Think of this as a <i>cooler</i> Trip Advisor.</p>
            </div>

            <div className="col">
            <div className="row justify-space-between project-row">
              <a className="col" href="https://womenofstem.herokuapp.com/" target="_blank"><img className="img-thumbnail" alt="Women of Stem: Astronomy" src="/assets/womenofstem.png" /></a>
              <div className="row justify-space-between project-row">
                <a className="col" href="https://womenofstem.herokuapp.com/" target="_blank"><h2>Women of STEM: Astronomy</h2></a>
                <p className="col-3 contact-info" ><a href="https://github.com/colleencleary/project2" target="_blank"><i className="fa fa-github-alt"></i></a></p>
              </div>
              <p>Women of Stem: Astronomy is a private forum made with Node, Express, Mongoose, EJS, HTML, and CSS.</p>
            </div>
          </div>
          </div>
          <div className="row main-row">
            <div className="col-4">
            <a href="https://tipsytiki.herokuapp.com/" target="_blank"><img className="img-thumbnail" alt="Tipsy Tiki" src="/assets/tipsytiki.png" /></a>
            <div className="row justify-space-between project-row">
              <a className="col" href="https://tipsytiki.herokuapp.com/" target="_blank"><h2>Tipsy Tiki</h2></a>
                <p className="col-3 contact-info" ><a href="https://github.com/colleencleary/tikidrinks" target="_blank"><i className="fa fa-github-alt"></i></a></p>
              </div>
              <p>Tipsy Tiki is a team-built MEAN stack, full CRUD drink directory created with AngularJS and MongoDB.</p>

            </div>

            <div className="col-4">
            <a href="/assets/ghost-neutralizer/index.html" target="_blank"><img className="img-thumbnail" alt="ghost neutralizer" src="/assets/ghostneutralizer.png" /></a>

            <div className="row justify-space-between project-row">
              <a className="col" href="/assets/ghost-neutralizer/index.html" target="_blank"><h2>Ghost Neutralizer</h2></a>
              <p className="col-3 contact-info" ><a href="https://github.com/colleencleary/colleencleary.github.io/tree/gh-pages/assets/ghost-neutralizer" target="_blank"><i className="fa fa-github-alt"></i></a></p>
            </div>
              <p>Ghost Neutralizer is a point-and-shoot game made with HTML, CSS, JavaScript, and JQuery.</p>
              </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Projects;
