import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    console.log("Constructor fired");
    this.state = {
      username: "Varun",
      services: 'Testing'
    };
  }
  componentWillMount(){
    console.log("Component will mount");
  }
  changeUsername = () =>{
    // this.state.username = "Nugen"; wrong syntax
    this.setState(
      {
        username: "Nugen",
        services: 'I.T. Services'
      }
    );
  }
  render() {
    console.log("Render function fired");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
            {this.state.username} Providing {this.state.services}
            <button onClick={this.changeUsername}>Change Username</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  componentDidMount(){
    console.log("Component Did Mount fired");
  }
}

export default App;
