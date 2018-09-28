import React, { Component } from 'react';
import SearchPanel from '../../components/searchPanel';
import SearchBar from '../../components/searchBar';

const searchStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
};

export default class Search extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Let us light the path to your next adventure */}
        </div>
        <div style={searchStyle}>
          <SearchPanel />
          <SearchBar />
        </div>
      </div>
    );
  }
}