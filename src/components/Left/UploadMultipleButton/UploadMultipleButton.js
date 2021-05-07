import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import FileButton from '../FileButton/FileButton';
import HelpText from '../HelpText/HelpText'

export default class UploadMultipleButton extends Component {
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
            <input accept=".hdl" type="file" multiple hidden onChange={this.props.handleInput}/>
          </Button>
          <HelpText doNotRender={this.props.fileNames.length} 
                    text="Here you can upload files for other custom implemented chips that are used
                          by your main file. "/>
          {/*this renders the list of file buttons*/}
          {this.props.fileNames.map((name, index) => {
            return(
            <FileButton fileName={name}
            key = {index}
            handleClick={() => this.props.handleRemove(index)}/>
            )})}
      </div>
    )
  }

}