import React from 'react';

class MyThought extends React.Component {

  render() {
    return (
        <section id="thought">
          <div className = "container">
            <div className = "row">
              <div className = "col-md-12">

                <article>
                  <header className = "text-center">
                    <h2 className = "color-change text-bold">Out with the old...</h2>
                    <h3 className = "color-change">Sleep.Life.Develop.Repeat</h3>
                  </header>
                  <hr/>
                  <p className = "text-left heading-para">Developing a new portfolio is never difficult. Committing your time and following it, is a tricky part.</p>

                  <p className = "text-left first">When you start developing any application (on your own), you will get huge number of iterations. Similarly, I have started working on this protfolio a bit earlier and got stuck in between 100 times.</p>

                  <p className = "text-left second">Question arises, why it had taken so long? I am confused between large number of ideas. I have been looking into many portfolios and trying to merge them all to get a collective idea, but still afraid to commit to a single one. It was like when I try to put any idea into reality, some new concept comes up in mind everytime.</p>

                  <p className = "text-left third">Its bit more about developing when you see a prototype and tries to build the same. What about building a prototype, it requires creativity which I am no-where good at ;P. It took me weeks to find this idea and took only a day to implement it. I found the result good, I tried to keep it as simple as possible, not tried to find any hard example and even not tried to put any hard coding material in it.</p>

                </article>

              </div>
            </div>
          </div>
        </section>
    )
  }

}

export default MyThought;
