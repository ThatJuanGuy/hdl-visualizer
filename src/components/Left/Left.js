import './Left.css';
import React, { Component } from 'react';
// import GenerateButton from './GenerateButton/GenerateButton';
import UploadButton from './UploadButton/UploadButton';
// import UploadMultipleButton from './UploadMultipleButton/UploadMultipleButton';
//import DownloadButton from './DownloadButton/DownloadButton';
export default class Left extends Component {
  render() {
    return (
      <div>
        <p className="Title">
          HDL Visualizer
        </p>
        <p> 
          This website generates images of HDL defined chips. 
          To use it, simply upload your file. The image will then 
          automatically generate to the left.
        </p>
        <UploadButton fileName={this.props.fileName}
                      fileContent={this.props.fileContent}
                      handleInput={this.props.handleInput}
                      handleRemove={this.props.handleRemove}/>
        <br />
        {/* // Uncomment to implement UI for multiple file uploads.
            // This UI is already made and working but removed because 
            // drawing algorithm does not support feature. Will require 
            // updating flask routes and drawing algorithm
            // to handle subfiles most likely though.

        <UploadMultipleButton fileNames={this.props.fileNames}
                              fileContents={this.props.fileContents}
                              handleInput={this.props.handleInputMultiple}
                              handleRemove={this.props.handleRemoveMultiple}/>
        <br />
        <GenerateButton handleClick={this.props.handleDraw}/>
        <br />

        */}
        {/* // Uncomment this to show the Download Button. It currently has no programmed
            // functionality and does nothing when you click it. To add functionality, 
            // define the function in App.js and pass it to this as a prop similarly to how 
            // the other buttons were implemented. 

        <DownloadButton />
        */}
      </div>
    );
  }
}
