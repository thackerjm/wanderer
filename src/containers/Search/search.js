import React, { Component } from 'react';
import SearchPanel from '../../components/searchPanel';
import SearchBar from '../../components/searchBar';

const searchStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
};

export default class Search extends Component {

  state = {
    destination: null,
    wikiData: null
  }

  destinationState = (response) => {
      this.setState({ destination: response }, function() {
          this.props.destinationState(this.state.destination);
        });
    }
  
  searchResults = (response) => {
    this.setState({ wikiData: response }, function() {
        this.props.searchResults(this.state.wikiData);
      });
  }

  render() {
    return (
      <div>
        <div>
          {/* Let us light the path to your next adventure */}
        </div>
        <div style={searchStyle}>
          <SearchPanel />
          <SearchBar destinationFromChild={this.destinationState} searchResults={this.searchResults} />
        </div>
      </div>
    );
  }
}