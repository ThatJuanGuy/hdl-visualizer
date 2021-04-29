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
      this.setState({fileName: event.target.files[0].name});
    }
    else {
      console.log("YEET");
    }
    
  }

  handleRemove = () => {
    this.setState({fileName: null});
    /* Haven't tested because generate doesn't exist yet but
       this could be hiding the file input from the user but 
       leaving it existing. So if the user hits generate after
       think they removed it, it will still generate as if the
       previous file was still displayed

       Adding the same file after removing it will cause an error
       where the file will not appear as added. Switching to onInput 
       did not fix this issue.
    */
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