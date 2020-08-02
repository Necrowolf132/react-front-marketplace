import React from 'react';
import logo from './logoApp.png';
import './App.css';
import NavBar from './componets/component-esteticos/nav-bar/nav-bar.js'
import Jumbotron from './componets/component-esteticos/jumbotron/jumbotrom.js'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container d-flex justify-content-center">
            <Jumbotron></Jumbotron>
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
  
}

export default App;
