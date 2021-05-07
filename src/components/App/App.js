import { Component } from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './App.css';

class App extends Component {
  state = {fileName: null,
           fileContent: null,
           fileNames: [],
           fileContents: [],
           clickedDraw: false
  };

  ///// Upload Button Functions ////////
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
      // This is to avoid a bug where it wouldn't recognize an upload if you 
      // uploaded the same file twice after removing it
      event.target.value = "";
    }
  }

  handleRemove = () => {
    this.setState({fileName: null,
                   fileContent:null,
                   clickedDraw: false});
  }

  ///// Upload Multiple Button Functions ////////
  handleInputMultiple = event => {
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
      this.handleFileContentMultiple(event, 0, fileContentArr);
      this.setState({fileContents: fileContentArr});
    }
  }

  handleFileContentMultiple = (event, i, fileContentArr) => {
    // implemented recursively so I could use signals to iterate
    // probably a really hacky solution and might not work but
    // from the minimal testing I've done seems to be fine
    if(i < event.target.files.length) {
      var fileReader = new FileReader();
      fileReader.onloadend = () => {fileContentArr.push(fileReader.result);
                                    this.handleFileContentMultiple(event, i + 1, fileContentArr)}
      fileReader.readAsText(event.target.files[i]);
    }
    else {
      event.target.value = "";
      // reset the state of the file reader
      // This is to avoid a bug where it wouldn't register if you 
      // uploaded the same file twice after reomoving it
    }
  }

  handleRemoveMultiple = index => {
    this.setState({fileNames: this.state.fileNames.filter((item, j) => index !== j),
                   fileContents: this.state.fileContents.filter((item, j) => index !== j)});
  }
  ///// Draw Button Functions //////////////
  handleDraw = () => {
    this.setState({clickedDraw: true});
  }
  ///// Download Button Functions //////////

  render() {
    return (
      <div>
        <div className="Left">
          <Left //UploadButton
                fileName={this.state.fileName}
                fileContent={this.state.fileContent}
                handleInput={this.handleInput}
                handleRemove={() => this.handleRemove()}
                //UploadMultipleButton // useless until multiple files are implemented. front end
                                       // already handles the file upload/removal correctly but it's 
                                       // just not being used because it made the UI worse and the draw 
                                       // algorithm didn't support it. To implement this UI there is 
                                       // no need to change this code. just uncomment the 
                                       // UploadMultipleButton and GenerateButton Components in Left.js
                fileNames={this.state.fileNames}
                fileContents={this.state.fileContents}
                handleInputMultiple={this.handleInputMultiple}
                handleRemoveMultiple={this.handleRemoveMultiple}
                //DrawButton
                handleDraw={this.handleDraw}      
          />
        </div>
        <div className="Right">
          <Right //image and text render
                 contents={this.state.fileContent}
                 clicked={this.state.clickedDraw} // useless until multiple files are implemented.
                                                  // If they are implemented there is no need to change this
                                                  // code. Just uncomment the render condition in Right.js
          />
        </div> 
      </div>
    );
  }
}

export default App;
