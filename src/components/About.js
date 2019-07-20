import React from 'react';

class About extends React.Component {

  render() {
    return (
        <div id = "title">
          <div className = "container">
            <div className = "row">
              <div className = "col-md-12">
                <div className = "intro">
                  <h2 className = "color-change text-center">I am Parmeet</h2>
                  <p className = "color-change intro-desc text-center">a software developer</p>
                </div>
              </div>
            </div>

            <div className = "row">
              <div className = "col-md-12">
                <div id = "earth-holder">
                  <img src = "./Images/land.svg" alt = "Earth Holder"/>
                </div>
              </div>
            </div>

          </div>
        </div>
    )
  }

}

export default About;
