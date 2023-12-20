import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import plus from '../Images/plus.svg';
import minus from '../Images/minus.svg';


//Adjustable images based on paragraphVisible state
function ToggleMinus() {
    return (
        <img src={ minus } className="imageStyle" />
    )
}

function TogglePlus() {
    return (
        <img src={ plus } className="imageStyle" />
    )
}

export class TileItem extends Component {
    titleStyle = () => {
        return {
            background: 'white',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            lineHeight: '60px',
            width: '350px',
            height: this.props.tile.paragraphVisible ? 
            '160px' : '80px',
            fontSize: '22px',
            fontFamily: 'sofia-pro',
            fontWeight: '100'
        }
    }

    paragraphStyle = () => {
        return {
            background: 'white',
            overflow: 'hidden',
            visibility: this.props.tile.paragraphVisible ?
            'visible' : 'hidden',
            fontSize: '16px',
        }
    }

    render() {
        // Toggles between rendering plus, minus images
        let toggleImage;
        const paragraphVisible = this.props.tile.paragraphVisible;
        if (paragraphVisible) {
            toggleImage = <ToggleMinus />
        } else {
            toggleImage = <TogglePlus />
        }

        const { id, title, paragraph } = this.props.tile;
        return (
                <div 
                style={this.titleStyle()}
                onClick={this.props.toggleParagraph.bind(this, id)}>
                    { toggleImage }
                    { title }
                    <p style={this.paragraphStyle()}>{ paragraph }</p>
                </div>
        )
    }
}

TileItem.propTypes = {
    tile: PropTypes.object.isRequired
}

export default TileItem
