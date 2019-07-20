import React from 'react';

class whatIDo extends React.Component {

  render() {
    return (
        <section id = "what-i-do">
          <div className = "container">
            <div className = "row">
              <div className = "col-md-12">

                <article>
                  <header id="what-i-do-header">
                    <h1 className = "color-change text-center text-bold">What I can do.</h1>
                  </header>

                  <div id = "design" className = "row">
                    <div className = "col-md-4 col-md-offset-1">
                      <div className = "home-design-info">

                        <figure>
                          <img src = "./Images/me.svg" alt="ME"/>
                        </figure>

                        <div className = "bubble right">
                          <img src = "./Images/pencil.png" alt="Pencil"/>
                        </div>

                      </div>
                    </div>

                    <div className = "col-md-6">
                      <div className = "details">
                        <h3 className = "color-change text-center">Develop What You Want</h3>
                        <p className = "goal-line">I love to keep things simple. My goals are to satisfy the customer and build products for their ease.</p>
                      </div>
                    </div>

                  </div>

                  <div id = "develop" className = "row">
                    <div className = "col-md-4 col-md-push-7">
                      <div className = "home-dev-info">

                        <figure>
                          <img src = "./Images/me-dev.svg" alt="Me-Developer"/>
                        </figure>

                        <div className = "bubble left">
                          <img src = "./Images/dev.png" alt="Development"/>
                        </div>

                      </div>
                    </div>

                    <div className = "col-md-6 col-md-pull-3">
                      <div className = "details">
                        <h3 className = "color-change text-center">Develop what you need.</h3>
                        <p className = "goal-line">I am a developer, so the basic requirements about your website, I am aware of that.</p>
                      </div>
                    </div>

                  </div>

                </article>

              </div>
            </div>
          </div>
        </section>
    )
  }
}

export default whatIDo;
