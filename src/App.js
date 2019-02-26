import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import FormContainer from './components/FormContainer';
import Index from './components/Index';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route name="home" exact path="/" component={Index} />
            <Route name="FormContainer" path="/Container" component={FormContainer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
