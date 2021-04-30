import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FileButton from '../FileButton/FileButton';
import HelpText from '../HelpText/HelpText'

export default class UploadMultipleButton extends Component {
  state = {fileNames: [],
           fileContents: []
          };
  
  handleInput = event => {
    if(event.target.files[0] !== undefined ) {
      // read names of the files
      var i;
      var fileNameArr = [];
      for (i = 0; i < event.target.files.length; i++) {
        fileNameArr.push(event.target.files[i].name);
      }
      this.setState({fileNames:fileNameArr});
      // read the file contents
      // recursion keeps the indices synced between both arrays
      var fileContentArr = [];
      this.handleFileContent(event, 0, fileContentArr);
      this.setState({fileContents: fileContentArr});
    }
  }

  handleFileContent = (event, i, fileContentArr) => {
    // implemented recursively so I could use signals to iterate
    // probably a really hacky solution and might not work but
    // from the minimal testing I've done seems to be fine
    if(i < event.target.files.length) {
      var fileReader = new FileReader();
      fileReader.onloadend = () => {fileContentArr.push(fileReader.result);
                                    this.handleFileContent(event, i + 1, fileContentArr)}
      fileReader.readAsText(event.target.files[i]);
    }
    else {
      event.target.value = "";
      // reset the state of the file reader
      // This is to avoid a bug where it wouldn't register if you 
      // uploaded the same file twice after reomoving it
    }
  }

  handleRemove = index => {
    this.setState({fileNames: this.state.fileNames.filter((item, j) => index !== j),
                   fileContents: this.state.fileContents.filter((item, j) => index !== j)});
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
            Upload Other Files
            <input accept=".hdl" type="file" multiple hidden onChange={this.handleInput}/>
          </Button>
          <HelpText doNotRender={this.state.fileNames.length} 
                    text="Here you can upload files for other custom implemented chips that are used
                          by your main file. "/>
          {/*this renders the list of file buttons*/}
          {this.state.fileNames.map((name, index) => {
            return(
            <FileButton fileName={name}
            key = {index}
            handleClick={() => this.handleRemove(index)}/>
            )})}
      </div>
    )
  }

}