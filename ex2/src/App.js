import React, { Component } from 'react';
import Firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

var ref = new Firebase("https://test-project-bd213.firebaseio.com");
ref.authWithPassword({
  email    : "foo@bar.com",
  password : "foobar"
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
