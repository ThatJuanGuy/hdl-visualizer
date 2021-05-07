import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FileButton from '../FileButton/FileButton';
import HelpText from '../HelpText/HelpText'

export default class UploadButton extends Component {

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
            <input accept=".hdl" type="file" hidden onChange={this.props.handleInput}/>
          </Button>
          <HelpText doNotRender={this.props.fileName} 
                    text="Please upload your main file. The website will draw this chip"/>
          <FileButton fileName={this.props.fileName}
                      handleClick={this.props.handleRemove}/>
      </div>
    )
  }

}