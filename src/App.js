import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
