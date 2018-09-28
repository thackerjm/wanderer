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
        value: ""
    };

     render() {
        return (
            <form style={formStyle}>
                <input style={inputStyle}
                    type="text"
                    placeholder="Where will your next journey take you?"
                />
                <button style={buttonStyle} />
            </form>
        );
    }
}