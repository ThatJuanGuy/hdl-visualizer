import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FileButton from '../FileButton/FileButton';
import HelpText from '../HelpText/HelpText'

export default class UploadButton extends Component {
  state = {fileName: null,
           fileContent: null
          };
  
  handleInput = event => {
    if(event.target.files[0] !== undefined ) {
      // read name of the file
      this.setState({fileName: event.target.files[0].name});
      // read the file contents
      var fileReader = new FileReader();
      fileReader.onloadend = () => {this.setState({fileContent: fileReader.result});}
      // this might not be reading the entire file. Will have to test. After testing 
      // it seems google dev tools was truncating the string as the entire thing 
      // printed in the console. probably not an issue but something to keep in mind.
      fileReader.readAsText(event.target.files[0]);
      // reset the state of the file reader
      // This is to avoid a bug where it wouldn't register if you 
      // uploaded the same file twice after removing it
      event.target.value = "";
    }
  }

  

  handleRemove = () => {
    this.setState({fileName: null,
                   fileContent:null});
    }

  render() {
    return (
      <div>
          <Button variant="contained" 
                  color="primary" 
                  component="label" 
                  fullWidth
                  endIcon={<AddIcon />}
                  style={{
                    marginBottom: "4px",
                }}
          >
            Upload Main File
            <input accept=".hdl" type="file" hidden onChange={this.handleInput}/>
          </Button>
          <HelpText doNotRender={this.state.fileName} 
                    text="Please upload your main file. The website will draw this chip"/>
          <FileButton fileName={this.state.fileName}
                      handleClick={this.handleRemove}/>
      </div>
    )
  }

}