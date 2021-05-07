import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
  
  export default class GenerateButton extends Component{

    render() {
      return (
        <div>
            <Button variant="contained" 
                    style={{color: "#FFFFFF", 
                            backgroundColor: "#27AE60",
                    }}
                    component="label" 
                    fullWidth
                    endIcon={<CreateIcon />}
                    onClick={this.props.handleClick()}
            >
              Draw HDL
            </Button>
        </div>
      );
    }
  }