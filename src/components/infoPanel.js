import React, { Component } from 'react';
import { Panel, Tab, Tabs, TabContainer, Row, Col, Nav, NavItem } from 'react-bootstrap';

const ResultsPanelStyles = {
    width: '80%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 10,
    position: 'absolute',
    top: '10%',
    left: '10%',
    backgroundColor: '#e6eee6',
    borderRadius: "15px 15px 15px 15px"
}

const PanelHeader = {
    width: '100%',
    height: '5%'
}

const PanelContent = {
    fontSize: '14px',
    width: '80%',
    paddingLeft: '15%',
    paddingTop: '5%'
}

const PanelContentEscape = {
    fontSize: '14px',
    width: '80%',
    paddingLeft: '15%',
    paddingTop: '5%'
}

class InfoPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            wikiData: null
        }
    }

state = {
    wikiData: null,
    key: '1'
}

handleSelect = (key) => {
    if(key === 4) {
        this.setState({search: "close"}, function() {
            this.props.searchStatus(this.state.search);
        });
    } else{
    this.setState({ key });
  }
}

closeSearch = (event) => {
    this.setState({search: "close"}, function() {
        this.props.searchStatus(this.state.search);
    });
}
    render() {
        return (
                    <div style={ResultsPanelStyles}>
                        <Tabs
                            activeKey={this.state.key}
                            onSelect={this.handleSelect}
                            style={PanelHeader}
                        >
                            <Tab eventKey={1} title={this.props.destination} style={PanelContent}>
                                {this.props.searchResults}
                            </Tab>
                            <Tab eventKey={2} title="Preparing to Go" style={PanelContent}>
                                Coming Soon!
                            </Tab>
                            <Tab eventKey={3} title="Our Recommendations" style={PanelContent}>
                                Coming Soon!
                            </Tab>
                            <Tab eventKey={4} title="Back to Search" style={PanelContentEscape}>
                                Coming Soon!
                            </Tab>
                        </Tabs>
                    </div>
        );
    }
}

  export default InfoPanel;