import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

const ResultsPanelStyles = {
    width: '80%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 10,
    position: 'absolute',
    top: '10%',
    left: '10%'
}

const ChildPanelStyles = {
    width: '100%',
    height: '100%',
    top: '25px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
}

const PanelHeader = {
    display: 'flex',
    width: '100%'
}

const PanelTitle = {
    fontSize: '20px',
    backgroundColor: '#00cc66',
    flex: '1 100%',
    height: '50px'
}

const PanelContent = {
    fontSize: '14px',
    backgroundColor: '#e6fff5',
    width: '80%'
}

class InfoPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            wikiData: null
        }
    }

state = {
    wikiData: null
}

closeSearch = (event) => {
    this.setState({search: "close"}, function() {
        this.props.searchStatus(this.state.search);
    });
}
    render() {
        return (
                    <Panel style={ResultsPanelStyles}>
                            <Panel style={ChildPanelStyles}>
                            <div style={PanelHeader}><Panel.Heading style={PanelTitle}>So, {this.props.destination}? Here are the Basics:</Panel.Heading> <button onClick={this.closeSearch}>Close</button></div>
                                <Panel.Body style={PanelContent}> 
                                    <div>
                                    {this.props.searchResults}
                                    </div>                                
                                </Panel.Body>
                            </Panel>
                    </Panel>
        );
    }
}

  export default InfoPanel;