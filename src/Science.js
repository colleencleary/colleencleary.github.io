import React, { Component } from 'react';

class Science extends Component {
  render() {
    return (
      <div>
        <div className="content container projects">
          <h1>Astronomy Research</h1>
          <div className="row main-row">
            <div className="col-8">
            <div className="science-img">
              <a href="https://github.com/colleencleary/Black-Hole-Code" target="_blank"><img className="img-thumbnail" alt="Black Hole Simulations" src="/assets/galaxy.jpg" /></a>
              </div>
              <div className="row justify-space-between project-row">
                <h2 className="col">Through the Darkness of Future’s Past: Tracing Simulated Black Holes Through Time Using Cosmological Simulations</h2>
                <p className="col-3 contact-info"><a  href="https://github.com/colleencleary/Black-Hole-Code" target="_blank"><i className="fa fa-github-alt"></i></a></p>
              </div>

              <p>The M-Sigma relation is a significantly tight correlation between the mass of a supermassive black hole and the stellar velocity dispersion of the galactic bulge of its host. The narrow spread of the M-Sigma relation provides a useful and reliable method for estimating the mass of a black hole at the center of a galaxy. However, as the mass of the galaxy decreases, so does the amount of comparable objects in the M-Sigma relation, and the scatter of the relation increases. The lack of data in the lower range is due to the difficulty of detecting supermassive black holes in low mass galaxies. Using several high resolution cosmological simulations, we identified several low mass galaxies which host black holes at z=0. We report on the mass, radial position, and accretion rate of each black hole, along with the mass and star formation history of each host galaxy at various points throughout their lifetimes. We present the results of our search for signatures of visibility that could potentially be detected using current technology. Studying these simulated objects serves as a useful facsimile for understanding and locating low mass galaxies with supermassive black holes in the real, unsimulated universe.</p>
              <p>Currently under review for publication with <a href="https://arxiv.org/pdf/1806.00471.pdf" target="_blank">Monthly Notices of the Royal Astronomical Society</a></p>
            </div>

            <div className="col-8">
            <div className="science-img">
              <a href="https://github.com/colleencleary/SummerPCA" target="_blank"><img className="img-thumbnail" alt="Brown Dwarf Analysis" src="/assets/browndwarf.jpg" /></a>
            </div>
              <div className="row justify-space-between project-row">
                <h2 className="col">Principal Component Analysis of Brown Dwarfs</h2>
                <p className="col-3 contact-info"><a href="https://github.com/colleencleary/SummerPCA" target="_blank"><i className="fa fa-github-alt"></i></a></p>
              </div>
              <p>Principal component analysis is a technique for reducing variables and emphasizing patterns in a data set. In this study, the data set consisted of the attributes of 174 brown dwarfs. The PCA was performed on several photometric measurements in near-infrared wavelengths and colors in order to determine if these variables showed a correlation with the physical parameters. This research resulted in two separate models that predict luminosity and temperature. The application of principal component analysis on the near-infrared photometric measurements and colors of brown dwarfs, along with models, provides alternate methods for predicting the luminosity and temperature of brown dwarfs using only photometric measurements.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Science;
