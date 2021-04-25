import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

export default class FileButton extends Component {

  render() {
    if (this.props.fileName === "null") {
      return (
        null
      )
    }
    return (
      <div>
        <Button variant="contained" 
                component="label" 
                fullWidth
                style={{color: "#000000", 
                        backgroundColor: "#FFFFFF",
                }}
                endIcon={<DeleteIcon />}
                onClick={this.props.handleClick}
          >
          {this.props.fileName}
        </Button>
      </div>
    )
  }

}