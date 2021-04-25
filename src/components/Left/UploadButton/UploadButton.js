import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import FileButton from '../FileButton/FileButton';

export default class UploadButton extends Component {
  state = {fileName: "null"};

  handleInput = event => {
    this.setState({fileName: event.target.files[0].name});
  }

  handleRemove = () => {
    this.setState({fileName: "null"});
    /* Haven't tested because generate doesn't exist yet but
       this could be hiding the file input from the user but 
       leaving it existing. So if the user hits generate after
       think they removed it, it will still generate as if the
       previous file was still displayed
    */
  }

  render() {
    return (
      <div>
          <Button variant="contained" 
                  color="primary" 
                  component="label" 
                  fullWidth
                  endIcon={<PublishIcon />}
          >
            Upload Main File
            <input accept=".hdl" type="file" hidden onChange={this.handleInput}/>
          </Button>
          <FileButton fileName={this.state.fileName}
                      handleClick={this.handleRemove}/>
      </div>
    )
  }

}