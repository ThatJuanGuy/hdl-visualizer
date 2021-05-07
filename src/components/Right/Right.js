import React, { Component } from 'react';
import './Right.css';

export default class Right extends Component {
  getDrawingRequestURL() {
    if(this.props.contents) {
      return 'draw/' + this.removeComments(this.props.contents) + '.svg';
    }
  }

  removeComments(str) {
    // This function exists because otherwise it wasn't passed correctly
    // to the flask route for some reason
    return str.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'');
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
    return (
      <div className="center">
        <img src={this.getDrawingRequestURL()}
            alt="Something is broken. It could be your HDL or our website.
                 We only support primitive gates (AND, OR, NOT, etc.). Using
                 other types will not work. If you met the previous conditions and 
                 the website still isn't working then our server is down for some reason. 
                 We should probably fix that.">
        </img>
      </div>
    );
  }
}

