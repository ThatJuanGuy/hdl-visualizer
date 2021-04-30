import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FileButton from '../FileButton/FileButton';
import HelpText from '../HelpText/HelpText'

export default class UploadButton extends Component {
  state = {fileName: null,
           fileContents: null
          };
  
  handleInput = event => {
    if(event.target.files[0] !== undefined ) {
      // read name of the file
      this.setState({fileName: event.target.files[0].name});
      // read the file contents
      var fileReader = new FileReader();
      fileReader.onloadend = () => {this.setState({fileContents: fileReader.result});}
      fileReader.readAsText(event.target.files[0]);
      // reset the state of the file reader
      // This is to avoid a bug where it wouldn't register if you 
      // uploaded the same file twice after reomoving it
      event.target.value = "";
    }
  }

  

  handleRemove = () => {
    this.setState({fileName: null,
                   fileContents:null});
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
          <HelpText render={this.state.fileName}/>
          <FileButton fileName={this.state.fileName}
                      handleClick={this.handleRemove}/>
      </div>
    )
  }

}