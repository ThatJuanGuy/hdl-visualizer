import React, { Component } from 'react';
export default class HelpText extends Component {
  
    render() {
        if (this.props.doNotRender) {
          return (
            null
          )
        }
        return (
          <div>
            <p style={{
                backgroundColor: "#E5E4E5",
                margin: "0%",
                padding: "3%",
                borderRadius: "0px 0px 4px 4px"
            }}>
                {this.props.text}
            </p>   
          </div>
        )
      }
  }