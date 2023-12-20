import React, { Component } from 'react';
import TileItem from './TileItem';
import PropTypes from 'prop-types';

class Tiles extends Component {
  render() {
    return this.props.tiles.map((tile) => (
        <TileItem 
        key={tile.id} 
        tile={tile} 
        toggleParagraph={this.props.toggleParagraph} />
    ));
  }
}

Tiles.propTypes = {
    tile: PropTypes.array.isRequired
}

export default Tiles;