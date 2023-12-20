import React, { Component } from 'react';
import '../App.css';
import cross from '../Images/cross.svg';



export class Header extends Component {
    headerStyle = () => {
        return {
            background: '#00a6ff',
            color: 'white',
            fontSize: '22px',
            fontFamily: 'sofia-pro',
            fontWeight: '100',
            textAlign: 'center',
            padding: '10px',
            width: '350px',
            height: '60px',
            lineHeight: '40px'
        }
    }

    imageStyle = () => {
        return {
            position: 'absolute',
            right: '5px',
            top: '12px',
        }
    }

    render() {
        

        return (
            <header style={this.headerStyle()}>
                <p>Covid-19 Information</p>
                <img src={cross} style={this.imageStyle()} onClick={this.props.toggleClosed} />
            </header>
        )
    }
}

export default Header;