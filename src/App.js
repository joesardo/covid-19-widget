import React, { Component } from 'react';
import Tiles from './Components/Tiles';
import Header from './Components/Header';
import Footer from './Components/Footer';

import icon from './Images/covid.svg';
import './App.css';

class App extends Component {
  state = {
    tiles: [
      {
        id: 1,
        title: 'Restaurants',
        titleVisible: true,
        paragraph: 'Dummy',
        paragraphVisible: false
      },
      {
        id: 2,
        title: 'Bars',
        titleVisible: true,
        paragraph: 'Dummy',
        paragraphVisible: false
      },
      {
        id: 3,
        title: 'Other',
        titleVisible: true,
        paragraph: 'Dummy',
        paragraphVisible: false
      }
    ]
  }

  // Toggle functions for when COVID-19 icon is clicked
  toggleOpen = () => {
    this.setState({ titleVisible: true })
  }

  toggleClosed = () => {
    this.setState({ titleVisible: false })
  }

  // Opens paragraph, extends div height when titles are clicked
  toggleParagraph = (id) => {
    this.setState({tiles: this.state.tiles.map(tile => {
      if(tile.id === id) {
        tile.paragraphVisible = !tile.paragraphVisible
      }
      return tile;
    }) })
  }

  render() {
    let divStyle = 'closed';
    let iconStyle = 'icon';
    const titleVisible = this.state.titleVisible;
    if (titleVisible) {
      divStyle = 'open';
      iconStyle = 'closedIcon';
    } else {
      divStyle = 'closed';
      iconStyle = 'icon';
    }

    return (
      <>
        <div className={divStyle}>
          <Header toggleClosed={this.toggleClosed} />
          <Tiles tiles={this.state.tiles} toggleParagraph={this.toggleParagraph} />
          <Footer />
        </div>
        <img src={icon} onClick={this.toggleOpen} className={iconStyle} />
       </>
    );
  }
}

export default App;