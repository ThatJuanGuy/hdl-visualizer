import './Left.css';
import React, { Component } from 'react';
import GenerateButton from './GenerateButton/GenerateButton';
import UploadButton from './UploadButton/UploadButton';
import UploadMultipleButton from './UploadMultipleButton/UploadMultipleButton';
import DownloadButton from './DownloadButton/DownloadButton';
export default class Left extends Component {
  render() {
    return (
      <div>
        <p className="Title">
          HDL Visualizer
        </p>
        <p> 
          This website generates images of HDL defined chips. 
          To use it, simply upload your file and then hit generate.
        </p>
        <UploadButton fileName={this.props.fileName}
                      fileContent={this.props.fileContent}
                      handleInput={this.props.handleInput}
                      handleRemove={this.props.handleRemove}/>
        <br />
        <UploadMultipleButton fileNames={this.props.fileNames}
                              fileContents={this.props.fileContents}
                              handleInput={this.props.handleInputMultiple}
                              handleRemove={this.props.handleRemoveMultiple}/>
        <br />
        <GenerateButton handleClick={() => this.handleGenerate}/>
        <br />
        <DownloadButton />
      </div>
    );
  }
}
