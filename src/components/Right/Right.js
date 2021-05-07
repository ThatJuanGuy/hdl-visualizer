import React, { Component } from 'react';
import './Right.css';

export default class Right extends Component {
  getDrawingRequestURL() {
    if(this.props.contents) {
      console.log('draw/' + this.props.contents + '.svg')
      return 'draw/' + this.props.contents + '.svg';
    }
  }

  render() {
    if(!this.props.contents /*|| !this.props.clicked*/) {
    // commented out clicked part as that only matters in mult file support
    // basically it forces them to have to click the draw button before they 
    // generate again. clicked becomes true when clicking draw and false when 
    // removing the main file
      return (
        <div className="center">
          
          {/* // Replace paragraph below with this or similar when implementing the 
              // multiple file UI
          <p>
            Your image will appear here after clicking the "Draw HDL" button
          </p>
          */}

          <p> 
            Your image will appear here after uploading your file.
          </p>
        </div>
      )
    }
    this.getDrawingRequestURL();
    return (
      <div className="center">
        <img src="/draw.svg"
            alt="Something is broken.">
        </img>
      </div>
    );
  }
}

