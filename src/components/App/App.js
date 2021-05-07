import { Component } from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import './App.css';

class App extends Component {
  state = {fileName: null,
           fileContent: null,
           fileNames: [],
           fileContents: []
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
      // This is to avoid a bug where it wouldn't register if you 
      // uploaded the same file twice after removing it
      event.target.value = "";
    }
  }

  handleRemove = () => {
    this.setState({fileName: null,
                   fileContent:null});
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
                //UploadMultipleButton
                fileNames={this.state.fileNames}
                fileContents={this.state.fileContents}
                handleInputMultiple={this.handleInputMultiple}
                handleRemoveMultiple={this.handleRemoveMultiple}/>
        </div>
        <div className="Right">
          <Right />
        </div> 
      </div>
    );
  }
}

export default App;
