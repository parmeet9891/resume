import React from 'react';
import {Link} from 'react-router-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import About from './About';
import Hello from './Hello';
import whatIDo from './whatIDo';
import Help from './Help';
import Work from './Work';
import Projects from './Projects';
import Notes from './Notes';
import MyThought from './MyThought';

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <header id = "home-top" className = "navbar navbar-fixed-top">
          <div className = "container">
            <div className = "row">
              <div className = "col-md-4 col-xs-4">
                <img src = "./Images/me.svg" alt = "header-logo" className = "header-logo"/>
              </div>

              <div className = "col-md-8 col-xs-8">
                <nav className = "navbar">
                  <ul className = "nav nav-pills navbar-right nav-list">
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/work">Work</Link>
                    </li>
                    <li>
                      <Link to="/notes">Notes</Link>
                    </li>
                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </header>

          <Route exact path = "/" component = {About} />
          <Route exact path = "/" render={(props) => <Hello
                                                      heading="Hi"
                                                      desc = "I m a software developer based in Delhi, India. I have a passion for developing new products and love creating them for web and mobile."
                                                      avatar = "./Images/me.svg" />} />

          <Route exact path = "/" component = {whatIDo} />
          <Route exact path = "/" component = {Help} />

          <Route exact path="/work" component={Work} />
          <Route exact path = "/work" render={(props) => <Hello
                                                          heading = "What I've been up to."
                                                          desc = "Here's a selection of some of my work. Github Links are provided for more reference."
                                                          avatar = "./Images/pencil1.svg" />} />
          <Route exact path="/work" component={Projects} />
          <Route exact path = "/work" component = {Help} />

          <Route exact path = "/notes" component = {Notes}/>
          <Route exact path = "/notes" component = {MyThought} />
          <Route exact path = "/notes" component = {Help} />

      </Router>
    )
  }
}

export default Navbar;
