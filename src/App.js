import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar.js'
import Search from './containers/Search/search';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Search />
      </div>
    );
  }
}

export default App;
