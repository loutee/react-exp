import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function signOut() {
  var auth2 = gapi.aut2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, sign in.
        </p>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>

        <p className="App-intro">
          Sign out here
        </p>
        <a href="#" onclick={signOut()}>Sign out</a>
      </div>
    );
  }
}

export default App;
