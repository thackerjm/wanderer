import React, { Component } from 'react';
import '../App.css';

const formStyle = {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: "25%"
};

const inputStyle = {
    width: '50%',
    borderStyle: 'inset',
    borderWidth: '5px',
    height: '50px',
    fontFamily: 'Playfair Display, serif',
    textAlign: 'center',
    borderRadius: '10px 0px 0px 10px'
};

const buttonStyle = {
    width: '50px',
    height: '50px',
    borderWidth: '5px',
    borderColor: 'gray',
    position: 'top right',
    backgroundColor: 'gray',
    backgroundImage: 'url("./search.svg")',
    borderRadius: '0px 10px 10px 0px'
}

export default class SearchBar extends Component {

    state = {
        destination: null,
        wikiData: "Sorry! No Results Found",
        wikiSegmentOne: null,
        wikiSegmentTwo: null,
        wikiSegmentThree: null,
        wikiSegmentFour: null
    };

    searchResults = (event) => {
        event.preventDefault();
        var urlBase = 'https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='
        var imgUrlBase = 'https://en.wikipedia.org/w/api.php?&origin=*&format=json&action=query&prop=images&redirects=1&titles='
        var urlNew = urlBase + this.state.destination
        var newImgUrl = imgUrlBase + this.state.destination
        fetch(urlNew)
        .then(response => response.json())
        .then(data => data = data.query.pages).then(data => data = data[Object.keys(data)[0]].extract)
        .then(data => this.setState({ wikiData: data }, function() {
            if(this.state.wikiData === undefined){
                this.setState({
                    wikiData: "Sorry! No Results Found"
                }, function() {
                    this.props.searchResults(this.state.wikiData)
                })
            } else{
            var wikiSentences = this.state.wikiData.split(". ")
            var segmentOneLength = wikiSentences.length/4
            var segmentTwoLength = segmentOneLength*2
            var segmentThreeLength = segmentOneLength*3
            var segmentFourLength = segmentOneLength*4
            var wikiSegmentOne = wikiSentences.slice(0,segmentOneLength)
            var wikiSegmentTwo = wikiSentences.slice(segmentOneLength,segmentTwoLength)
            var wikiSegmentThree = wikiSentences.slice(segmentTwoLength, segmentThreeLength)
            var wikiSegmentFour = wikiSentences.slice(segmentThreeLength, segmentFourLength)
            this.setState({
                wikiData: [wikiSegmentOne, wikiSegmentTwo, wikiSegmentThree, wikiSegmentFour]
            }, function() {
                this.props.searchResults(this.state.wikiData)
            })
        }}))
        }

    destinationDataEntered = (event) => {
        this.setState({ destination: event.target.value }, function() {
            this.props.destinationFromChild(this.state.destination);
        });
        
    }


     render() {
        return (
            <form style={formStyle} onSubmit={this.searchResults}>
                <input style={inputStyle}
                    type="text"
                    placeholder="Where will your next journey take you?"
                    value={this.destination}
                    onChange={this.destinationDataEntered}
                />
                <button style={buttonStyle} />
            </form>
        );
    }
}