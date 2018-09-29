import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar.js'
import Search from './containers/Search/search';
import InfoPanel from './components/infoPanel';

let ResultsOverlay = {
    position: 'absolute',
    zIndex: '100!important',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

let searchBackground = {
  position: 'absolute',
  top: '0px',
  left: '0px'
}

class App extends Component {
  state = {
    destination: null,
    wikiData: null
  }

  destinationState = (response) => {
      this.setState({
        destination: response
      });
    };

  searchResults = (response) => {
    this.setState({ wikiData: response });
  }

  searchStatus = (response) => {
    this.setState({ wikiData: null });
  }

  toggleSearchResults() {
    if(this.state.wikiData === null) {
      return (
        <div>
        <NavBar />
        <Search destinationState={this.destinationState} searchResults={this.searchResults} style={searchBackground}/>
        </div>
      )
    } else {
      return (
        <div>
        <NavBar />
        <Search destinationState={this.destinationState} searchResults={this.searchResults} style={searchBackground}/>
        <InfoPanel destination={this.state.destination} searchResults={this.state.wikiData} style={ResultsOverlay} searchStatus={this.searchStatus}/>
        </div>
      );

    }
  };
  
  render() {
    return (
      <div>
      {this.toggleSearchResults()}
      </div>
    );
  }
}

export default App;
